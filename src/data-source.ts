import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";

const host = process.env.NODE_ENV === "dockerdev" ? "postgres" : "localhost";

export const appDataSource = new DataSource({
  type: "postgres",
  host,
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  entities: ["./entities/**.entities.ts"],
  migrations: ["./migrations/*.ts"],

  synchronize: false,
  logging: true,
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Database connection established ");
  })
  .catch((err) => {
    console.error(err.message, err);
  });
