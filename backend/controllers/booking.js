import { asyncHandler } from "../middleware/asynchHandler.js";
import { sendMessage } from "../utils/sendMessage.js";

const SendBooking = asyncHandler(async (req, res) => {
    const { fullName, phoneNumber, day, time, Message } = req.body;

    // Validate required fields
    if (!fullName) {
        return res.status(400).json({ Message: "Please provide a full name" });
    }
    if (!phoneNumber) {
        return res.status(400).json({ Message: "Please provide a phone number" });
    }
    if (!day) {
        return res.status(400).json({ Message: "Please provide a day" });
    }

    if (!Message) {
        return res.status(400).json({ Message: "Please provide a message" });
    }

    // Send message
    const response = await sendMessage({ fullName, phoneNumber, day, time, Message });

    res.json({
        Message: "Booking email sent successfully",
        Response: response
    });
});

export {
    SendBooking
};
