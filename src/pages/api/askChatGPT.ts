// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

type ResponseData = {
    text: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
    body: {
        prompt: string;
    }
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
    req: GenerateNextApiRequest,
    res: NextApiResponse<ResponseData>,
    ) {

    const prompt = req.body.prompt
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "How are you doing" }],
        model: "gpt-3.5-turbo",
    });

    const response = chatCompletion.choices[0].message.content?.trim() || 'Sorry, I had trouble answering your question'
    console.log(response)
    res.status(200).json({text: response})
}

