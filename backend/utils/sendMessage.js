import nodemailer from 'nodemailer';
export const sendMessage = async({fullName, phoneNumber, day, time, Message}) => {
    console.log(fullName, "Full Name");
    try {
        const EMAIL = process.env.EMAIL;
        const PASSWORD = process.env.PASSWORD;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });

        // Email options
        const mailOptions = {
            from: EMAIL,
            to: 'kavunyefransisca@gmail.com',
            subject: 'New Booking from Your Website',
            html: `
                <p>Hi Ishmael,</p>
                <p>You have a new booking from your website</p>
                <h3>Booking Details</h3>
                <ul>
                    <li>Full Name: ${fullName}</li>
                    <li>Phone Number: ${phoneNumber}</li>
                    <li>Day: ${day}</li>
                    <li>Time: ${time}</li>
                    <li>Message: ${Message}</li>
                </ul>
            `
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return info;

    } catch (error) {
        console.error('Error in sendingEmails:', error);
        throw error;
    }
};
