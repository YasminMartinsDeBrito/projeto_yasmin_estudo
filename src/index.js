import fastify from 'fastify';
import userRoutes from './routes/users.js';

const app = fastify({logger: true})
const PORT = 3000


app.register(userRoutes) // ✅ Registrar rotas de usuários

// ✅ Rota principal
app.get('/', async( request, reply) => {
    return {message: 'Servidor fastify rodando com fastify'}
})

const start = async () => {
    try{
        await app.listen({port: PORT, host: '0.0.0.0'});
        console.log(`Servidor rodando em http://localhost:${PORT}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
start()