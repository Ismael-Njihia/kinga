import { SendBooking } from "../controllers/booking.js";
import express from "express"

const router = express.Router();

router.route("/").post(SendBooking);

export default router;