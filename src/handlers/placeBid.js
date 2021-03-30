import createError from "http-errors";
import AWS from "aws-sdk";
import commonMiddleware from "../lib/commonMiddleware";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function placeBid(event) {
  const { id } = event.pathParameters;
  const { amount } = event.body;

  const params = {
    Key: { id },
    TableName: process.env.AUCTIONS_TABLE_NAME,
    UpdateExpression: "set highestBid.amount = :amount",
    ExpressionAttributeValues: {
      ":amount": amount,
    },
    ReturnValues: "ALL_NEW",
  };

  console.log({ event, params });

  let updatedAuction;

  try {
    const result = await dynamoDB.update(params).promise();
    updatedAuction = result.Attributes;
  } catch (error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  };
}

export const handler = commonMiddleware(placeBid);
