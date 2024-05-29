import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};

// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     '/((?!.*\\.\\w+$|_next).*)', // Don't run middleware on static files
//     '/',
//     '/(api|trpc)(.*)', // Run middleware on API routes
//   ],
// };
