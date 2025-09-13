import "server-only";

/**
 * Simplified tRPC server setup since we're using REST APIs instead
 * Keep this file for future tRPC usage if needed
 */

// Since we have an empty router, we create a simple hydration helper without the full setup
export const api = {
  // Add your tRPC procedures here when needed
} as const;

export const HydrateClient = ({ children }: { children: React.ReactNode }) => children;
