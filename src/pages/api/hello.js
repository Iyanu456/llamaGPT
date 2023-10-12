import { NextResponse } from "next/server";

// CORS Configuration
const corsOptions = {
  allowedMethods: ["GET", "POST", "OPTIONS"], // Add allowed HTTP methods
  allowedOrigins: ["http://localhost:3000"], // Add allowed origins (use "*" for any origin)
  allowedHeaders: ["Content-Type"], // Add allowed headers
  exposedHeaders: [], // Add exposed headers if needed
  maxAge: undefined, // Max age in seconds, set to undefined for no max age
  credentials: true, // Set to true if you want to allow credentials (e.g., cookies)
};

// CORS Middleware
export async function middleware(request) {
  const response = NextResponse.next();

  // Allowed origins check
  const origin = request.headers.get('origin') || '*';
  if (corsOptions.allowedOrigins.includes('*') || corsOptions.allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  // Set default CORS headers
  response.headers.set("Access-Control-Allow-Credentials", corsOptions.credentials.toString());
  response.headers.set("Access-Control-Allow-Methods", corsOptions.allowedMethods.join(","));
  response.headers.set("Access-Control-Allow-Headers", corsOptions.allowedHeaders.join(","));
  response.headers.set("Access-Control-Expose-Headers", corsOptions.exposedHeaders.join(","));
  response.headers.set("Access-Control-Max-Age", corsOptions.maxAge?.toString() || "");

  return response;
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, as it's not needed for CORS
  },
};

export default async function handler(req, res) {
  // Apply the CORS middleware
  const corsResponse = await middleware(req);

  // Check if the response is provided by the CORS middleware
  if (NextResponse.hasNext(corsResponse)) {
    return NextResponse.serve(req, corsResponse);
  }

  // Your existing endpoint logic
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
