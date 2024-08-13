import nodemailer from 'nodemailer';

export const sendContact = async ({ fullName, email, topic, phone, message }) => {
  
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
            subject: topic,
            html: `
                <div style="background-color: #FF6347; padding: 20px 0;">
                    <div style="background-color: #182366; color: white; text-align: center; padding: 10px 0;">
                        <h1>Kinga Ceragem! Good News</h1>
                    </div>
                    <div style="background-color: white; padding: 20px; margin: 20px;">
                        <p>Hi Kinga Ceragem!,</p>
                        <p>You have a new contact from your website</p>
                        <h3>Contact Details</h3>
                        <ul>
                            <li>Full Name: ${fullName}</li>
                            <li>Email: ${email}</li>
                            <li>Phone: ${phone}</li>
                            <li>Message: ${message}</li>
                        </ul>
                        <p>Thank you</p>
                        <p>This email has been sent to: ${EMAIL}</p>
                    </div>
                </div>
            `
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error in sending email:', error);
        throw error;
    }
};
