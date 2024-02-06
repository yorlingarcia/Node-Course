import type { Context } from "@netlify/functions";

export const handler = async (req: Request, context: Context) => {
  console.log("Hola mundo desde hello handler");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hola mundo!",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
