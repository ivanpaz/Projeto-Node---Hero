//Importar a conecção do connection.js
const connection = require('../database/connection');

//pacote Crypto que serve para  a criptografar ou gerar strings aleatorias
const crypto = require('crypto'); 

module.exports = {

    //funcao index para listar ongs
    async index(request, response) {
        
        //Select * from ONGS
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },


    //função create para criar uma nova ong
    async create(request, response){

            //tem que usar async poisé  necessário esperar a conclusão da ainserção dos dados
    //poderia ser "rotas.post('/ongs', (request, response)=>{ "
    
    const {name, email, whatsapp, city, uf} = request.body; 

    //Cria uma variavel ID com 4 bytes de caracters aleatorios e converte para HEX
    const id = crypto.randomBytes(4).toString('HEX');

    //inserir novo cadastro na tabela ongs
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });


    //retorna somente o ID, pois é o cadastro de login    
    return response.json({id});
    },



    //funcao Delete para deletar ongs EM PROCESSO
    async delete(request, response) {
        const id = request.body;

        await connection('ongs').where('id',id).del();
        return response.json();

    }

}