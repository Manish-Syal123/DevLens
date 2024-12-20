import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Retry utility function
export const retry = async <T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000,
  backoffFactor: number = 2, // Factor by which to increase delay after each failure
): Promise<T> => {
  let attempts = 0;

  while (attempts < retries) {
    try {
      return await fn();
    } catch (error: any) {
      attempts++;
      if (attempts >= retries) throw error;

      // Check if it's a 429 error to apply backoff strategy
      if (error.response?.status === 429) {
        console.warn(`Rate limit hit. Retrying after ${delay}ms...`);
      } else {
        console.warn(`Retrying... Attempt ${attempts} of ${retries}`);
      }

      // Apply backoff by multiplying the delay
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= backoffFactor; // Increase delay after each retry
    }
  }
  throw new Error("Failed after maximum retry attempts");
};
