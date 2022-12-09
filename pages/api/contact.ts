import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type Result = {
  isSuccess: boolean;
  error: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const { isSuccess, error } = await handlePost(body);

    if (isSuccess) {
      res.status(200).json({ isSuccess: true, error: null });
    } else {
      res.status(500).json({ isSuccess: false, error });
    }
  } else if (req.method === "GET" || req.method === "HEAD") {
    res.status(404).json({ isSuccess: false, error: "Not Found" });
  } else {
    res.status(405).json({ isSuccess: false, error: "Method Not Allowed" });
  }
}

type FormFieldsWithToken = {
  name: string;
  email: string;
  message: string;
  token: string;
};

async function handlePost(body: FormFieldsWithToken): Promise<Result> {
  try {
    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${
          process.env.RECAPTCHA_SECRET_KEY || ""
        }&response=${body.token}`,
      }
    );
    const verificationResult = await verify.json();
    console.log(verificationResult);

    if (!verificationResult.success) {
      return {
        isSuccess: false,
        error: "Failed to verify with reCaptcha.",
      };
    }

    const sendMails = [
      sgMail.send({
        to: {
          email: body.email,
          name: body.name,
        },
        from: {
          email: process.env.CONTACT_MAIL_FROM || "",
          name: "Studio.Suiro（スタジオ・スイロ）",
        },
        replyTo: {
          email: process.env.CONTACT_NOTIFY_TO || "",
          name: "Studio.Suiro（スタジオ・スイロ）",
        },
        templateId: "d-9ffc1a025ce64182bc58837489e7bdca",
        dynamicTemplateData: {
          name: body.name,
          email: body.email,
          message: body.message,
        },
      }),
      sgMail.send({
        to: {
          email: process.env.CONTACT_NOTIFY_TO || "",
        },
        from: {
          email: process.env.CONTACT_MAIL_FROM || "",
          name: "Studio.Suiro（スタジオ・スイロ）",
        },
        replyTo: {
          email: body.email,
          name: body.name,
        },
        templateId: "d-8ef913cb78264892bb523568e600b1d9",
        dynamicTemplateData: {
          name: body.name,
          email: body.email,
          message: body.message,
        },
      }),
    ];

    await Promise.all(sendMails);

    return {
      isSuccess: true,
      error: null,
    };
  } catch (e: any) {
    console.error(e?.response?.body?.errors);
    return {
      isSuccess: false,
      error: "Failed to send mail.",
    };
  }
}
