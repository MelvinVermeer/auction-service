import createError from "http-errors";
import AWS from "aws-sdk";
import commonMiddleware from "../lib/commonMiddleware";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function getAuction(event) {
  let auction;
  const { id } = event.pathParameters;

  try {
    const result = await dynamoDB
      .get({ Key: { id }, TableName: process.env.AUCTIONS_TABLE_NAME })
      .promise();

    auction = result.Item;
  } catch (error) {
    throw new createError.InternalServerError(error);
  }

  if (!auction) {
    throw new createError.NotFound(`Auction with id not found (${id})`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  };
}

export const handler = commonMiddleware(getAuction);
