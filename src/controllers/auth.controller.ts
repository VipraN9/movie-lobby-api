import jwt from "jsonwebtoken";

// Fake users database for demonstration purposes
const users = [
  { username: "adminUser", password: "adminPassword", role: "admin" },
  { username: "normalUser", password: "userPassword", role: "user" }
];

// auth.controller.ts

export const login = async (username: string, password: string): Promise<string> => {
    // Hardcoded admin credentials for testing
    const user = {
      username: "adminUser",
      password: "adminPassword",
      role: "admin",
    };
  
    if (username === user.username && password === user.password) {
      // In a real app, generate a JWT here
      return "fake-jwt-token"; // Return a placeholder JWT for testing
    }
  
    throw new Error("Invalid credentials");
  };
  
