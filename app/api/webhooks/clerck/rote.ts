import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from 'next/headers'
import { Webhook } from "svix";
import { NextResponse } from "next/server";
import { createUser } from "@/libs/actions/user.action";
const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || ``;


export async function POST(req:Request){
    
}