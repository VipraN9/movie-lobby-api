// src/models/user.model.ts

export interface User {
    id: string;
    role: string;  // Can be 'admin', 'user', etc.
    username: string;
  }
  