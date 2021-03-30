import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const sqs = new AWS.SQS();

export async function closeAuction(auction) {
  const params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    Key: { id: auction.id },
    UpdateExpression: "set #status = :status",
    ExpressionAttributeValues: {
      ":status": "CLOSED",
    },
    ExpressionAttributeNames: {
      "#status": "status",
    },
  };

  await dynamoDB.update(params).promise();

  const { title, seller, highestBid } = auction;
  const { amount, bidder } = highestBid;

  console.log(process.env.MAILQUEUE_URL);

  const notifySeller = sqs
    .sendMessage({
      QueueUrl: process.env.MAILQUEUE_URL,
      MessageBody: JSON.stringify({
        subject: "Your item has been sold!",
        recipient: seller,
        body: `Your item ${title} has been sold for ${amount}`,
      }),
    })
    .promise();
  const notifyBidder = sqs
    .sendMessage({
      QueueUrl: process.env.MAILQUEUE_URL,
      MessageBody: JSON.stringify({
        subject: "You are the highest bidder!",
        recipient: bidder,
        body: `You won the auction for ${title} for ${amount}`,
      }),
    })
    .promise();

  await Promise.all([notifyBidder, notifySeller]);
}
