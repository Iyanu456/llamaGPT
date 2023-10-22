import { NextResponse, NextRequest } from "next/server";
import { jwtVerify, createRemoteJWKSet } from "jose";

const hankoApiUrl = 'https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io'

export async function middleware(req) {
  const hanko = req.cookies.get("hanko")?.value;
  console.log(hanko);

  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  );

  try {
    const verifiedJWT = await jwtVerify(hanko || "", JWKS);
    console.log(verifiedJWT)
    console.log("success")
  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/"],
};
