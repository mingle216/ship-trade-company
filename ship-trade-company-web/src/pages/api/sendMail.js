// pages/api/sendMail.js
import nodemailer from 'nodemailer';

const sendMailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, details } = req.body;

    // 创建 Nodemailer 传输器
    let transporter = nodemailer.createTransport({
      host: 'smtp.qq.com', // QQ 邮箱的 SMTP 服务器地址
      port: 465, // SMTP 端口，QQ 邮箱使用 465
      secure: true, // 使用 SSL
      auth: {
        user: process.env.EMAIL_USER, // 在环境变量中配置您的 QQ 邮箱
        pass: process.env.EMAIL_PASS, // 在环境变量中配置您的 QQ 邮箱授权码
      },
    });

    // 定义邮件选项
    let mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // 发件人地址
      to: process.env.EMAIL_RECEIVER, // 接收邮件的 QQ 邮箱地址
      subject: subject || '新消息', // 邮件标题
      text: `来自：${name}\n邮箱：${email}\n内容：\n${details}`, // 邮件正文
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: '邮件发送成功' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '邮件发送失败' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};





export default sendMailHandler;