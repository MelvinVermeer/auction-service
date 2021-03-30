import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "eu-west-1" });

async function sendMail() {
  const params = {
    Source: "melvin.vermeer@gmail.com",
    Destination: { ToAddresses: ["melvin.vermeer@gmail.com"] },
    Message: {
      Body: {
        Text: {
          Data: "Hi, from auction service",
        },
      },
      Subject: {
        Data: "Hi",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const handler = sendMail;
