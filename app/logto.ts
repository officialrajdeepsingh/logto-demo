import type { LogtoNextConfig } from "@logto/next";
import { UserScope } from "@logto/next";

export const logtoConfig: LogtoNextConfig = {
  endpoint: "https://23zae0.logto.app/",
  appId: "2tr4qj87crznp5da3wgsj",
  appSecret: "uCgqvWb3LvrUS9CpB7OS4P3aK4i3EiCO",
  baseUrl: "http://localhost:3000", // Change to your own base URL
  cookieSecret: "DAfWKsEuVt96pLhe9Pezahtwfnuoaqfy", // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === "production",
  scopes: [UserScope.Email, UserScope.Phone], // Add more scopes if needed
};
