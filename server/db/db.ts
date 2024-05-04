import { DataSource } from "typeorm";
import { Dog, Shelter, User } from "../entities";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "1234",
    port: 5432,
    database: "firucasaDB",
    entities: [Shelter, Dog, User],
    // logging: true,
    synchronize: true
});
