import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "992pzse7eu",
  apiKey: process.env.API_KEY,
});
