import axios from "axios";
import 'dotenv/config';
import { getUsers } from "./databaseFiller";
const apiKey = process.env.APIKEY;
async function main() {
    console.log("--------------------------Servidor_ON------------------------------");
    await getUsers(apiKey as string)
}
main();


