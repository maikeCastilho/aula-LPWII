import fastify from 'fastify';
import { usersRoutes } from './routes/users';
import { clientsRoutes } from './routes/clients';

const app = fastify();
app.register(usersRoutes );//
app.register(clientsRoutes);//


app.listen({
    port: 3333,
}).then(()=> {
    console.log('HTTP server rodando na http://localhost:3333')
})
