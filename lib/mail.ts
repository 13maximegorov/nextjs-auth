import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const confirmLink = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/new-verification?token=${token}`;

  return await transporter.sendMail({
    from: `NextJS Auth <${process.env.SMTP_FROM_EMAIL}>`,
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
