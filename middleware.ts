// clerk-middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Existing routes
    "/", // Existing routes
    "/(api|trpc)(.*)", // Existing routes
    "/", 
  ],
};
