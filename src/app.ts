import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import get_films from "./routes/get_films.route.js"
import post_films from "./routes/post_films.route.js"
import post_genre from "./routes/post_genre.route.js"
import post_platform from "./routes/post_platform.route.js"
import update_films from "./routes/update_films.route.js"
import delete_films from "./routes/delete_films.route.js"
import get_films_genre from "./routes/get_films_genre.route.js"


//config
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

//routes
app.use(post_genre)
app.use(post_platform)
app.use(get_films)
app.use(get_films_genre)
app.use(post_films)
app.use(update_films)
app.use(delete_films)



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));