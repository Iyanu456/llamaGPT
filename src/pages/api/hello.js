// pages/api/hello.js

import Cors from 'micro-cors';

const cors = Cors({
  origin: 'http://localhost:3001/api', // For testing purposes, allow requests from any origin
  allowedMethods: ['POST'],
});

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    try {
      // Handle the POST request here
      const data = req.body; // Assuming you expect JSON data

      // Add the Access-Control-Allow-Origin header to allow cross-origin requests
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/api'); // Update with the actual origin you want to allow

      // Process the data and send a response
      res.status(200).json({ message: 'POST request received', data });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
