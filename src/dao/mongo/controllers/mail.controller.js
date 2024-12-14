import transporter from "../../../config/nodemailer.config.js";

class MailController {
    async sendMail(req, res) {
        const { to, subject, html } = req.body;
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            html
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).send("Error sending email");
            } else {
                console.log("Email sent:", info.response);
                res.status(200).send("Email sent");
            }
        });
    }

    async sendMailWithAttachment(req, res) {
        const { to, subject, html, attachments } = req.body;
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            html,
            attachments
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).send("Error sending email");
            } else {
                console.log("Email sent:", info.response);
                res.status(200).send("Email sent");
            }
        });
    }
}

export default MailController;