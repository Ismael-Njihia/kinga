import express from "express"
import dotenv from "dotenv"
import bookingRoute from "./Routes/bookingRoute.js"
import contactRoute from "./Routes/contactRoute.js"
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/booking", bookingRoute)
app.use("/api/contact", contactRoute)
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` )
})