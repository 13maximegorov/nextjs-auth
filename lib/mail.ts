import nodemailer from 'nodemailer';

const options = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport(options);

  const resetLink = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/new-password?token=${token}`;

  return await transporter.sendMail({
    from: `NextJS Auth <${process.env.SMTP_FROM_EMAIL}>`,
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport(options);

  const confirmLink = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/new-verification?token=${token}`;

  return await transporter.sendMail({
    from: `NextJS Auth <${process.env.SMTP_FROM_EMAIL}>`,
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
