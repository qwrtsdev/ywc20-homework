export function getBaseUrl() {
    if (process.env.NODE_ENV === "production" && process.env.VERCEL_URL) {
      return `${process.env.VERCEL_URL}`;
    }

    return "http://localhost:3000";
  }
  