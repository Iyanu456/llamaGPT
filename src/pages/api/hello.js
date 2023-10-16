import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors"
import jwtMiddleware from '../middleware/auth-middleware';

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["POST", "GET", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  try {
    await jwtMiddleware(req, res);

    if (req.method === 'POST') {
      // Assuming you want to parse the JSON data from the request body
      const data = req.body;

      // Authentication was successful, and req.user contains user data
      res.status(200).json({ message: 'Authenticated', data });
      console.log("Authenticated");
    } else {
      // Handle requests other than POST (e.g., GET)
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    // Handle errors, if any
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
}
