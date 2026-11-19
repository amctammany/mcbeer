import scrapeHops, { getHopLinks } from "./scrapeHops";

export async function GET() {
  "use server";
  const hops = await scrapeHops();
  return new Response(JSON.stringify({ hops }));
}
