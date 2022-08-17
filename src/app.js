import  express  from "express";
import cors from "cors";
import dotenv  from "dotenv";
import chalk from "chalk";
// import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(chalk.bold.green(`Server listening on port ${PORT}`));
})