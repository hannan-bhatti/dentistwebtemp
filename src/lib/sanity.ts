import { createClient } from 'next-sanity';

const projectId = process.env.SANITY_PROJECT_ID || "pe7x5ysh";
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function getSanityData(query: string, fallback: any) {
  try {
    const data = await client.fetch(query);
    // If sanity returns empty array or null, fallback to mock data to prevent site breakage
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return fallback;
    }
    return data;
  } catch (error) {
    console.warn("Sanity fetch failed, using fallback data. Error:", error);
    return fallback;
  }
}
