import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function clientsRoutes(app: FastifyInstance) {
    //BUSCANDO TODOS OS USERS

    app.get('/clients', async () => {
        const clients = await prisma.client.findMany(
        )
        return clients
    })
}
