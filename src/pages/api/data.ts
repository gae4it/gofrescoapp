import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

type JsonResponse = Record<string, unknown>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const filePath = path.join(process.cwd(), "data.json");
  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContents) as JsonResponse;
    res.status(200).json(data);
  } catch {
  res.status(500).json({ error: "Impossibile leggere il file JSON" });
  }
}
