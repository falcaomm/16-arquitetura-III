import z from "zod"

export interface CreateProductInputDTO {
    id: string,
    name: string,
    price: number
}

export interface CreateProdutOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export const createProductSchema = z.object({
    id: z.string(),
    name: z.string().min(2),
    price: z.number().positive().min(0)
}).transform(data => data as CreateProductInputDTO)

