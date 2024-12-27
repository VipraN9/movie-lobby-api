import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.model";

const user = {
    id: "12345",
    username: "adminUser",
    role: "admin", 
  };

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.user = user;

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};


export const adminMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    try {
      // Check if the user exists and is an admin
      if (!req.user || req.user.role !== "admin") {
        res.status(403).json({ message: "Forbidden: Admins only" });
        return;
      }
  
      // If the user is an admin, proceed to the next middleware/handler
      next();
    } catch (error) {
      console.error("Authorization error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
