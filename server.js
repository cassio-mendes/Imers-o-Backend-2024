import express from 'express'; //Importando o express dos pacotes na pasta 'node_modules'

const posts = [
    { descricao: "UM GATO", imagem: "https://placecats.com/millie/300/150" },
    { descricao: "UM CACHORRO FELIZ", imagem: "https://placeholders.net/300/200/animals" },
    { descricao: "UMA PAISAGEM MARAVILHOSA", imagem: "https://source.unsplash.com/random/300x200" }
  ];

const app = express(); //Atribuindo o express, ou seja, as funções do servidor, a uma variável chamada 'app', que é constante

app.use(express.json()); //Indica que a aplicação utiliza a conversão de dados em JSON

app.listen(3000, () => { //3000 é a porta do servidor, para que ele aguarde por requests de computadores conectados nessa mesma porta. Ideal para servidores locais, como este. Ao 'escutar' uma chamada, o servidor irá exibir uma mensagem no console, para mostrar que está executando

    console.log('Servidor escutando...'); //O servidor está 'rodando'
});

app.get('/api', (req, res) => { //A função 'get' define o que o servidor deve fazer ao receber um request 'req' pelo caminho '/api'

    res.status(200).send('Hello World!'); //Neste caso, estamos imprimindo na tela uma mensagem 'Hello World!' se o status HTTP do servidor for igual a 200, ou seja, caso ele esteja rodando corretamente. Isso é feito pelo parâmetro 'res', o response, que é justamente a resposta do nosso servidor à requisição 'req'
});

app.get("/posts", (req, res) => { //Rota para retorno de 'posts'
    res.status(200).json(posts); //Se o servidor responder com sucesso, ele retornará o conteúdo do array 'posts' em formato JSON
});

app.get("/posts/:id", (req, res) => { //Rota para retornar um post específico do array
    const index = (req.params.id) - 1; //'index' representa o índice do array 'posts' que contém o post desejado. req.params representa todos os parâmetros da requisição do cliente, em que temos ':id'. Por isso escrevemos 'req.params.id', porque o índice do array será passado na URL, pelo cliente

    res.status(200).json(posts[index]); //Retorna o post específico
});

function buscarPostDescricao(desc) { //Função para retornar o índice de um post específico tendo em mãos a sua descrição
    return posts.findIndex((post) => { //findIndex passa por todos os elementos de 'posts' e confere se qualquer um deles tem o atributo 'descricao' igual ao parâmetro 'desc'

        return desc === post.descricao;
    });
}

app.get("/posts/descricao/:desc", (req, res) => { //Rota para passar uma descrição como parâmetro e retonar o post correspondente
    const index = buscarPostDescricao(req.params.desc); //Retorna o índice do post correspondente
    
    if(index >= 0) { //Se esse índice for maior ou igual a 0, significa que existe um elemento atribuído a ele 
        res.status(200).json(posts[index]); //Retorna esse elemento
    } else {
        res.sendStatus(404); //Senão, retorna o famoso status 404
    }
});
