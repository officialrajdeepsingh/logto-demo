import { LogtoNextConfig } from "@logto/next";

// export const logtoConfig: LogtoNextConfig = {
//   appId: '<your-application-id>',
//   appSecret: '<your-app-secret-copied-from-console>',
//   endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001
//   baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000
//   cookieSecret: 'complex_password_at_least_32_characters_long',
//   cookieSecure: process.env.NODE_ENV === 'production',
// };
export const logtoConfig: LogtoNextConfig = {
  endpoint: "https://23zae0.logto.app/",
  appId: "2tr4qj87crznp5da3wgsj",
  appSecret: "uCgqvWb3LvrUS9CpB7OS4P3aK4i3EiCO",
  baseUrl: "http://localhost:3000", // Change to your own base URL
  cookieSecret: "DAfWKsEuVt96pLhe9Pezahtwfnuoaqfy", // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === "production",
};
