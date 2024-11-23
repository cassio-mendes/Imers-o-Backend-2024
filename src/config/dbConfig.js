import { MongoClient } from "mongodb"; //Importa as funcionalidades de conexão com o banco

export default async function conectarBanco(stringConexao) { //Essa função será executada de forma assíncrona
    let mongoClient; //Instancia um cliente para acesso

    try {
        mongoClient = new MongoClient(stringConexao); //Define o cliente baseado na string de conexão
        console.log("Conectando ao cluster do banco de dados");

        await mongoClient.connect(); //Abre uma conexão com o banco
        console.log("Conectado ao MongoDB Atlas com sucesso!");

        return mongoClient; //Retorna o cliente conectado
    } catch (erro) {
        console.error("Falha na conexão com o banco!", erro); //Mensagem de erro
        process.exit(); //Encerramento do processo de conexão
    }
}