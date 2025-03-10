import app from './index.js'
import sequelize from './config/database.js'
import winston from 'winston'


//Configurando projeto
dotenv.config()

//Configurando SERVIDO Local

const PORT = process.env.PORT || 3000

console.log(PORT)

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: 'logs/error.log', level: 'error'}),
        new winston.transports.Console({format: winston.format.simple()})
    ]
});

sequelize.authenticate()
.then(() => {
    logger.info('Conectado ao banco de dados com sucesso!');
    sequelize.sync();
})
.catch(err => logger.error('Erro ao conectar ao banco', err));

app.listen(PORT, () => {
    logger.info(`Servidor rodando na porta ${PORT}`)
})