import { getTodosPosts } from "../models/postModel.js";

export async function listarPostsDB(req, res) { //Rota para retorno dos posts armazenados no banco de dados
    const result = await getTodosPosts(); //Representa um array com todos os posts do banco
    res.status(200).json(result); 
}

export function printHello(req, res) { //A função 'get' define o que o servidor deve fazer ao receber um request 'req' pelo caminho '/api'

    res.status(200).send('Hello World!'); //Neste caso, estamos imprimindo na tela uma mensagem 'Hello World!' se o status HTTP do servidor for igual a 200, ou seja, caso ele esteja rodando corretamente. Isso é feito pelo parâmetro 'res', o response, que é justamente a resposta do nosso servidor à requisição 'req'
}
