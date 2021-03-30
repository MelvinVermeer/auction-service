import commonMiddleware from "../lib/commonMiddleware";

async function sendMail(event) {
  console.log(event);
  return event;
}

export const handler = commonMiddleware(sendMail);
