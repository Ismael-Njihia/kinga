import nodemailer from 'nodemailer';

export const sendContact = async ({ fullName, email, topic, phone, message }) => {
  
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
            subject: topic,
            html: `
                <p>Hi Fransisca,</p>
                <p>You have a new contact from your website</p>
                <h3>Contact Details</h3>
                <ul>
                    <li>Full Name: ${fullName}</li>
                    <li>Email: ${email}</li>
                    <li>Phone: ${phone}</li>
                    <li>Message: ${message}</li>
                </ul>
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
