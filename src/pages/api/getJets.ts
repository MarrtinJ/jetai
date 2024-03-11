// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../db";
import { Jet } from '@prisma/client';

type Data = {
    // jets: { id: number; name: string; wingspan: number; engines: number; year: number; }[]
    jets: Jet[]
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const jets = await prisma.jet.findMany({
            orderBy: [
              {
                wingspan: 'desc'
              }
            ]
          })
        res.status(200).json(jets);
    } else {
      // Handle any other HTTP method
        // res.status(200).json({ name: "Didn't process" });
    }
}