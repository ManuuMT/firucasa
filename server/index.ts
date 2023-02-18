import { PORT } from "./config";
import app from "./app";

app.listen(PORT);
console.log("Server is running port", PORT);
