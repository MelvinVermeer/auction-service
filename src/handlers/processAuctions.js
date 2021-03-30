async function processAuctions(event, context) {
  console.log("processing auctions");
  console.log({ event, context });
}

export const handler = processAuctions;
