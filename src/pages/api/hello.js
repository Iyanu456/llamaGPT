import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors"


export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["POST", "GET", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  })  ;
  // Check the request method
  if (req.method === 'POST') {
    try {
      // Assuming you want to parse the JSON data from the request body
      const data = req.body;

      // Process the data (you can perform any necessary operations here)
      // For example, you can save the data to a database

      // Respond with a success message
      res.status(200).json({ message: 'POST request successful', data });
    } catch (error) {
      // Handle errors, if any
      res.status(500).json({ error: 'An error occurred while processing the request' });
    }
  } else {
    // Handle requests other than POST (e.g., GET)
    res.status(405).json({ error: 'Method not allowed' });
  }
}
