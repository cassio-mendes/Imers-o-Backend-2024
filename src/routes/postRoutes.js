import express from 'express';
import { listarPostsDB, printHello } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json()); //Indica que a aplicação utiliza a conversão de dados em JSON

    app.get('/hello', printHello); //Rota para a página 'Hello World!'
    
    app.get("/posts/", listarPostsDB); //Rota para a página de posts
}

export default routes; //Exporta as rotas, para serem usadas em 'server.js'
