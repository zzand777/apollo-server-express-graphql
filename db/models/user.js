import statusUtil from "../../utils/statusUtil.js";
import pool from "../pool.js";

const tableName = "tbm_sm_user";

const user = {
  selectAll: async () => {
    const query = `select user_id, user_nm from ${tableName}`;
    const result = await pool.query(query);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  select: async (user_id) => {
    const query = `select user_id, user_nm from ${tableName} where user_id = ?`;
    const result = await pool.query(query, [user_id]);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  insert: async (user_id, user_nm) => {
    const query = `insert into ${tableName} (user_id, user_nm) values (?, ?)`;
    const result = await pool.query(query, [user_id, user_nm]);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
};

export default user;