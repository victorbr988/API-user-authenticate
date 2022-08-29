const cors = require('cors');
import express from 'express';
import { routerUsers } from './routes/routes';
const app = express();

app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 3333;

app.use('/users', routerUsers)
app.use('/user', routerUsers)

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));