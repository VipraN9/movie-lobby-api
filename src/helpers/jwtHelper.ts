import jwt from "jsonwebtoken";

// Secret key for JWT (keep it secure and private)
const JWT_SECRET_KEY = "your-secret-key";

// Function to generate JWT token (to be used during login)
export const generateToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, JWT_SECRET_KEY, {
    expiresIn: "1h", // Set the token to expire in 1 hour
  });
};

// Function to verify JWT token (to be used for protected routes)
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    return null;
  }
};
