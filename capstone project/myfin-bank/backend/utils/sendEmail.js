const nodemailer = require("nodemailer");

const sendZeroBalanceEmail = async (user, balance) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: " Bank Alert - Zero Balance",
      text: `
Customer Name: ${user.name}
Customer Email: ${user.email}
Current Balance: ₹${balance}

The account balance has reached ZERO.
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Zero balance email sent to admin");
  } catch (error) {
    console.log("Email Error:", error);
  }
};

module.exports = sendZeroBalanceEmail;
