import { z } from 'zod';



export const ItemSchema = z.object({
    serialNo: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    name: z.string(),
    hsnCode: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    qty: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    mrp: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    scheme: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    igst: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    cgst: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    sgst: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
    rate: z.string().transform(Number).refine((val) => !isNaN(val), {
        message: "lNo must be a valid number",
    }),
})
