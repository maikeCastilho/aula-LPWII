import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function usersRoutes(app: FastifyInstance) {
    //BUSCANDO TODOS OS USERS
    app.get('/users', async () => {
        const user = await prisma.user.findMany({
        });
        return user
    })

    app.get('/users/:id', async (request) => {

        const paramsSchema = z.object({
            id: z.string()
        })
        const { id } = paramsSchema.parse(request.params);
        const user = await prisma.user.findFirst({
            where: {
                id: id,
            }
        })
        return user;

    })



}
