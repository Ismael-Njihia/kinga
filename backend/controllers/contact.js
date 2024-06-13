import { asyncHandler } from "../middleware/asynchHandler.js";
import { sendContact as sendContactEmail } from "../utils/sendContact.js";

const sendContact = asyncHandler(async (req, res) => {
    const { fullName, email, topic, phone, message } = req.body;
     console.log(fullName, "Full Name");
    console.log(email, "Email");
    if (!fullName) {
        return res.status(400).json({ Message: "Please provide a full name" });
    }
    if (!email) {
        return res.status(400).json({ Message: "Please provide an email" });
    }
    if (!topic) {
        return res.status(400).json({ Message: "Please provide a topic" });
    }
    if (!message) {
        return res.status(400).json({ Message: "Please provide a message" });
    }

    try {
        const info = await sendContactEmail({ fullName, email, topic, phone, message });
        res.status(200).json({ Message: "Email sent successfully", info });
    } catch (error) {
        res.status(500).json({ Message: "Failed to send email", error: error.message });
    }
});

export {
    sendContact
};
