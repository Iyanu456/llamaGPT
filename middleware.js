const { NextResponse, NextRequest } = require("next/server");
const { jwtVerify, createRemoteJWKSet } = require("jose");

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

async function middleware(req) {
  const hanko = req.cookies.get("hanko")?.value;

  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  );

  try {
    const verifiedJWT = await jwtVerify(hanko || "", JWKS);
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

module.exports = {
  middleware,
  config: {
    matcher: ["/dashboard"],
  },
};

