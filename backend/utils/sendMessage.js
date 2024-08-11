import nodemailer from 'nodemailer';
export const sendMessage = async({fullName, phoneNumber, day, time, Message}) => {
    console.log(fullName, "Full Name");
    console.log(phoneNumber, "Phone Number");
    console.log(day, "Day");
    console.log(time, "Time");


    try {
        const EMAIL = process.env.EMAIL;
        const PASSWORD = process.env.PASSWORD;

        const to = "kavunyefransisca@gmail.com";
        console.log(to, "To");

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
    to: to,

    // to: 'kavunyefransisca@gmail.com',
    subject: 'New Booking from Your Website',
    html: `
        <div style="background-color: #FF6347; padding: 20px 0;">
            <div style="background-color: #182366; color: white; text-align: center; padding: 10px 0;">
                <h1>Kinga Ceragem! Good News</h1>
            </div>
            <div style="background-color: white; padding: 20px; margin: 20px;">
                <p>Hi Kinga Ceragem!,</p>
                <p>You have a new booking from your website</p>
                <h3>Booking Details</h3>
                <ul>
                    <li>Full Name: ${fullName}</li>
                    <li>Phone Number: ${phoneNumber}</li>
                    <li>Day: ${day}</li>
                    <li>Time: ${time}</li>
                    <li>Message: ${Message}</li>
                </ul>
                <p>Thank you</p>
                <pThis email has been sent to: ${EMAIL}</p>
            </div>
        </div>
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
