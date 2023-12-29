import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { API_URL, API_KEY } = process.env;
  if (!API_KEY) {
    return res.status(500).json({ name: "API_KEY is not defined" });
  }
  try {
    const response = await fetch(`${API_URL}get_all_cats`, {
      headers: {
        "Content-Type": "application/json",
        "private-key": API_KEY,
      },
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ name: "Error fetching data" });
  }
}
