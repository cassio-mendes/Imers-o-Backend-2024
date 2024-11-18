import express from 'express'; //Importando o express dos pacotes na pasta 'node_modules'

const app = express(); //Atribuindo o express, ou seja, as funções do servidor, a uma variável chamada 'app', que é constante

app.listen(3000, () => { //3000 é a porta do servidor, para que ele aguarde por requests de computadores conectados nessa mesma porta. Ideal para servidores locais, como este. Ao 'escutar' uma chamada, o servidor irá exibir uma mensagem no console, para mostrar que está executando

    console.log('Servidor escutando...'); //O servidor está 'rodando'
});

app.get('/api', (req, res) => { //A função 'get' define o que o servidor deve fazer ao receber um request 'req' pelo caminho '/api'

    res.status(200).send('Hello World!'); //Neste caso, estamos imprimindo na tela uma mensagem 'Hello World!' se o status HTTP do servidor for igual a 200, ou seja, caso ele esteja rodando corretamente. Isso é feito pelo parâmetro 'res', o response, que é justamente a resposta do nosso servidor à requisição 'req'
});
