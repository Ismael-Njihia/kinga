import express from "express"
import dotenv from "dotenv"
import bookingRoute from "./Routes/bookingRoute.js"
import cors from "cors"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

app.use("/api/booking", bookingRoute)

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` )
})