import { PORT } from "./config";
import app from "./app";
import { AppDataSource } from "./db/db";

async function main() {
    try {
        await AppDataSource.initialize();
        app.listen(PORT);
        console.log("---------- Server running on port", PORT);
    } catch (error) {
        console.error(error);
    }
}

main();
