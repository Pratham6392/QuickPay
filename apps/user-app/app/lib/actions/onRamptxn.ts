
"use server"


import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";


export const onRampTransaction = async (amount: number, provider: string) => {
    
   const session = await getServerSession(authOptions);
    const userId = session?.user?.id; 
    if (!userId) {
        throw new Error("User not found");
    }
    const token = Math.random().toString(36).substring(7);

     await prisma.onRampTransaction.create({
        data: {
            amount,
            provider,
            userId:Number(userId),
            status: "Processing",
            startTime: new Date(),
            token:token
        }
    });


    return {
        message: "Transaction initiated",
        amount: amount,
        userId: Number(userId), // Ensure userId is a number
        token: token
    }
}




