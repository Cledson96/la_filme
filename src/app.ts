import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import films from "./routes/films.route.js"

//config
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

//routes
app.use(films)




app.listen(4000,()=>{
    console.log()
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));