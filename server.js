import express from 'express'; //Importando o express dos pacotes na pasta 'node_modules'
import routes from './src/routes/postRoutes.js';

const app = express(); //Atribuindo o express, ou seja, as funções do servidor, a uma variável chamada 'app', que é constante

routes(app);

app.listen(3000, () => { //3000 é a porta do servidor, para que ele aguarde por requests de computadores conectados nessa mesma porta. Ideal para servidores locais, como este. Ao 'escutar' uma chamada, o servidor irá exibir uma mensagem no console, para mostrar que está executando

    console.log('Servidor escutando...'); //O servidor está 'rodando'
});
