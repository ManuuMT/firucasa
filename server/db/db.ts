import { DataSource } from "typeorm";
import { Dog, Shelter } from "../entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "1234",
  port: 5432,
  database: "firucasaDB",
  entities: [Shelter, Dog],
  // logging: true,
  synchronize: true,
});
