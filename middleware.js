const { NextResponse, NextRequest } = require("next/server");
const { jwtVerify, createRemoteJWKSet } = require("jose");

const hankoApiUrl = 'https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io';

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

