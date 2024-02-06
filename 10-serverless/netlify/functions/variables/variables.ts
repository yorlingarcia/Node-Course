import type { Context } from "@netlify/functions";

export const handler = async (req: Request, context: Context) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  if (!myImportantVariable) {
    throw new Error("Missing MY_IMPORTANT_VARIABLE");
    // console.error("Missing MY_IMPORTANT_VARIABLE");
  }

  console.log("Hola mundo desde variables");

  return {
    statusCode: 200,
    body: JSON.stringify({
      myImportantVariable,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
