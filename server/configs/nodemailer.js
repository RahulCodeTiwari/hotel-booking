import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "",
  port: 587,
  auth: {
    user: "",
    pass: "",
  },
});

export default transporter;