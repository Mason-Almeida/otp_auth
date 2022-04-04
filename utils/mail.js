const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });
})

const sendEmail = async(email , subject , text) => {
	try{
		await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });
	}catch(err){
		console.log('Error is send : ' + err.message);
	}
}

module.exports = sendEmail;