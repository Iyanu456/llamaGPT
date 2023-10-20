// pages/api/hello.js

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    try {
      // Handle the POST request here
      const data = req.body; // Assuming you expect JSON data
      // Process the data and send a response
      res.status(200).json({ message: 'POST request received', data });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
