export const dynamic = "force-dynamic";
import {MailJet} from "@libs/email";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return Response.json(
      { error: "Only POST requests allowed" },
      { status: 405 },
    );
  }
  const data = await request.json();
  const { firstName, lastName, email, subject, message } = data;
  // Validate the 'from' email address
  if (!email || !String(email).includes("@")) {
    return Response.json(
      { error: "Please provide a valid email address" },
      { status: 422 },
    );
  }
  // Validate the other fields
  if (!firstName || !lastName || !subject || !message) {
    return Response.json({ error: "All fields are required" }, { status: 422 });
  }
  try {
    const result = await MailJet.post("send", { version: "v3.1" }).request({
      Messages:  [
        {
          From: {
            Email: process.env.BOT_MAIL || "jeremie.cyrille@icloud.com",
            Name: `${firstName} ${lastName}`,
          },
          To: [
            {
              Email: process.env.CONTACT_MAIL || "jeremie.cyrille@icloud.com",
              Name: "Contact Form",
            },
          ],
          Subject: subject,
          TextPart: message 
        },
      ], 
    });
    return Response.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
