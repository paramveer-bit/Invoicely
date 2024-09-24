import { z } from 'zod';


export const PartySchema = z.object({
    date: z.date(),
    name: z.string(),
    gstNo: z.string().length(15),
    stateCode: z.number(),
    address: z.string(),
    phoneNo: z.string().length(10),
    invoiceNo: z.string()
})
