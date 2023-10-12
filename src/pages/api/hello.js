import { NextApiRequest, NextApiResponse } from "next";

// CORS Configuration
const corsOptions = {
  allowedMethods: ["GET", "POST", "OPTIONS"], // Add allowed HTTP methods
  allowedOrigins: ["http://localhost:3000"], // Add allowed origins (use "*" for any origin)
  allowedHeaders: ["Content-Type"], // Add allowed headers
  exposedHeaders: [], // Add exposed headers if needed
  maxAge: undefined, // Max age in seconds, set to undefined for no max age
  credentials: true, // Set to true if you want to allow credentials (e.g., cookies)
};

export default async function handler(req, res) {
  // Allowed origins check
  const origin = req.headers.origin || '*';

  if (corsOptions.allowedOrigins.includes('*') || corsOptions.allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Set default CORS headers
  res.setHeader("Access-Control-Allow-Credentials", corsOptions.credentials.toString());
  res.setHeader("Access-Control-Allow-Methods", corsOptions.allowedMethods.join(","));
  res.setHeader("Access-Control-Allow-Headers", corsOptions.allowedHeaders.join(","));
  res.setHeader("Access-Control-Expose-Headers", corsOptions.exposedHeaders.join(","));
  res.setHeader("Access-Control-Max-Age", corsOptions.maxAge?.toString() || "");

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
