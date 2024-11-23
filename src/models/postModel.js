import conectarBanco from '../config/dbConfig.js';
const conexao = await conectarBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() { //Retorna todos os postos cadastrados no banco
    const db = conexao.db("imersao-instabytes"); //Representa o banco
    const colecao = db.collection("posts"); //Representa a coleção/tabela
    return colecao.find().toArray(); //Armazena todos os posts num array e o retorna
}
