import mysql from "promise-mysql";

const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "devdba",
  password: "qhdks12#",
  database: "dev",
};

export default mysql.createPool(dbConfig);