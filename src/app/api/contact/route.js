import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ─── Admin email ──────────────────────────────
function getAdminEmailHtml({ name, email, company, project, submittedAt }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Inquiry</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
          background: #f7f3ee;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          padding: 24px 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .container {
          max-width: 680px;
          width: 100%;
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(255,255,255,0.3);
          text-align: center;
          margin: 0 auto;
        }
        .brand {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
          text-align: left;
        }
        .brand span { color: #b8956a; }
        h1 {
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
          text-align: left;
        }
        .sub {
          font-size: 17px;
          color: #6b6b6b;
          margin-bottom: 16px;
          text-align: left;
        }
        .timestamp {
          font-size: 14px;
          color: #8a8a8a;
          text-align: center;
          margin-bottom: 24px;
          padding: 10px 0;
          border-top: 1px solid #f0ebe5;
          border-bottom: 1px solid #f0ebe5;
        }
        .detail {
          padding: 10px 0;
          border-bottom: 1px solid #f0ebe5;
          text-align: center;
        }
        .detail:last-of-type { border-bottom: none; }
        .label {
          font-weight: 600;
          color: #6b6b6b;
          margin-right: 6px;
        }
        .value {
          color: #1a1a1a;
          font-size: 15px;
          word-break: break-word;
        }
        .project-box {
          background: #faf7f3;
          padding: 18px 20px;
          border-radius: 12px;
          margin: 20px 0 24px;
          border: 1px solid #f0ebe5;
          text-align: center;
        }
        .project-box strong { color: #1a1a1a; display: block; margin-bottom: 6px; }
        .project-box p { font-size: 15px; line-height: 1.6; color: #333; margin: 0; text-align: center; }
        .footer {
          margin-top: 28px;
          padding-top: 18px;
          border-top: 1px solid #f0ebe5;
          text-align: center;
          font-size: 14px;
          color: #8a8a8a;
        }
        .footer strong { color: #1a1a1a; font-weight: 600; }
        @media (max-width: 480px) {
          .container { padding: 28px 20px; }
          .brand { font-size: 20px; }
          h1 { font-size: 22px; }
          .sub { font-size: 15px; }
          .timestamp { font-size: 13px; padding: 8px 0; }
          .detail { padding: 8px 0; }
          .value { font-size: 14px; }
          .project-box { padding: 14px 16px; }
          .project-box p { font-size: 14px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="brand">Scalentiq <span>AutoWebs</span></div>
        <h1>📩 New Inquiry</h1>
        <p class="sub">Someone reached out via your website.</p>

        <!-- 📅 Timestamp after title section -->
        <div class="timestamp">📅 ${submittedAt}</div>

        <div class="detail">
          <span class="label">Name:</span>
          <span class="value">${name}</span>
        </div>
        <div class="detail">
          <span class="label">Email:</span>
          <span class="value">${email}</span>
        </div>
        <div class="detail">
          <span class="label">Company:</span>
          <span class="value">${company || 'Not provided'}</span>
        </div>

        <div class="project-box">
          <strong>📝 Project Details</strong>
          <p>${project}</p>
        </div>

        <div class="footer">
          <strong>© 2026 Scalentiq AutoWebs</strong> · All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
}

// ─── User thank‑you email ─────────────────────
function getUserThankYouHtml({ name, submittedAt }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
          background: #f7f3ee;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          padding: 24px 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .container {
          max-width: 680px;
          width: 100%;
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(255,255,255,0.3);
          text-align: center;
          margin: 0 auto;
        }
        .brand {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
          text-align: left;
        }
        .brand span { color: #b8956a; }
        h1 {
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
          text-align: left;
        }
        .sub {
          font-size: 17px;
          color: #6b6b6b;
          margin-bottom: 16px;
          text-align: left;
        }
        .timestamp {
          font-size: 14px;
          color: #8a8a8a;
          text-align: center;
          margin-bottom: 24px;
          padding: 10px 0;
          border-top: 1px solid #f0ebe5;
          border-bottom: 1px solid #f0ebe5;
        }
        .thanks-box {
          background: #faf7f3;
          padding: 24px 20px;
          border-radius: 12px;
          border: 1px solid #f0ebe5;
          text-align: center;
          margin: 12px 0 24px;
        }
        .thanks-box .icon { font-size: 40px; display: block; margin-bottom: 8px; }
        .thanks-box h3 { font-size: 20px; color: #1a1a1a; margin-bottom: 6px; text-align: center; }
        .thanks-box p { font-size: 16px; color: #555; margin: 0; text-align: center; }
        .footer {
          margin-top: 28px;
          padding-top: 18px;
          border-top: 1px solid #f0ebe5;
          text-align: center;
          font-size: 14px;
          color: #8a8a8a;
        }
        .footer strong { color: #1a1a1a; font-weight: 600; }
        @media (max-width: 480px) {
          .container { padding: 28px 20px; }
          .brand { font-size: 20px; }
          h1 { font-size: 22px; }
          .sub { font-size: 15px; }
          .timestamp { font-size: 13px; padding: 8px 0; }
          .thanks-box { padding: 18px 16px; }
          .thanks-box h3 { font-size: 18px; }
          .thanks-box p { font-size: 14px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="brand">Scalentiq <span>AutoWebs</span></div>
        <h1>🙏 Thank You, ${name}</h1>
        <p class="sub">We've received your inquiry and will respond within one business day.</p>

        <!-- 📅 Timestamp after title section -->
        <div class="timestamp">📅 ${submittedAt}</div>

        <div class="thanks-box">
          <span class="icon">✅</span>
          <h3>We're on it!</h3>
          <p>One of our team members will reach out soon.</p>
        </div>

        <div class="footer">
          <strong>© 2026 Scalentiq AutoWebs</strong> · All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
}

// ─── API handler ──────────────────────────────
export async function POST(request) {
  try {
    const { name, email, company, project } = await request.json();

    if (!name || !email || !project) {
      return NextResponse.json(
        { error: 'Name, email, and project are required.' },
        { status: 400 }
      );
    }

    const now = new Date();
    const submittedAt = now.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Inquiry from ${name}`,
      html: getAdminEmailHtml({ name, email, company, project, submittedAt }),
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Scalentiq AutoWebs',
      html: getUserThankYouHtml({ name, submittedAt }),
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ message: 'Emails sent!' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}