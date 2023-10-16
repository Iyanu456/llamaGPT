const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const { promisify } = require('util');

const jwksUri = 'https://bd2d97b7-584f-4d05-8207-8442e86f8911.hanko.io/.well-known/jwks.json';
const client = jwksClient({ jwksUri });

const getSigningKey = (header, callback) => {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

const jwtVerifyAsync = promisify(jwt.verify);

export default async function jwtMiddleware(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Invalid token format' });
    return;
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const decoded = await jwtVerifyAsync(token, getSigningKey, {
      algorithms: ['RS256'],
    });

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Invalid token' });
  }
}
