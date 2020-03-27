const connection = require('../database/connection');

module.exports = {


    async index(request, response){

        //Fazer paginação ..
        //const {page = 1} significa que quero pegar o page, e caso não tenha
        //o valor será 1
        const {page = 1} = request.query;

        //Usa conchetes para pegar um valor, não o array
        const [countIncidents] = await connection('incidents')
        .count();
        
        //Passar numero de incients pela header
        //se usa o ['count(*)] para pegar apenas o valor. Caso contrario viria 
        //count(*): 10, por exemplo
        response.header('Contador-Incidents', countIncidents['count(*)']);


        //const ong_id = request.headers.authorization;
        //const incidents = await connection('incidents').select('*').where('ong_id',ong_id);
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//Trazer dados da tabela ONG também
        .limit(5)//Pegar só cinco valores
        .offset((page - 1) * 5)//pular 5, dependendo da página
        .select(['incidents.*', //todos os dados da tabela incidente
            'ongs.name', //escolha de dados da tabela ONG (para não pegar e misturar o ID)
            'ongs.email', 
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']);
        return response.json(incidents);

        //Para pesquisar pagina 1 => http://localhost:3333/incidents
        //Para escolher a página => http://localhost:3333/incidents?page=2

    },


    async create(request, response){
        const {title, description, value} = request.body;
        
        //authorization é uma informação passada pela header na requisição
        const ong_id = request.headers.authorization;
        
        //const [id] recebe o primeiro valor desse array, que será o id criado
        const [id] = await connection('incidents'). insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({id});

    },

    async delete(request, response){
        //pega a id que veio na requisição
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()//pega o primeiro/unico

        if(incident.ong_id != ong_id ){
            //401 é o codifo de resposta para NÃO AUTORIZADO. http status code
            return response.status(401).json({error: 'Operação não autorizada'});
        }
        await connection('incidents').where('id',id).delete();
        //204 No Content
        return response.status(204).send();
    }



}