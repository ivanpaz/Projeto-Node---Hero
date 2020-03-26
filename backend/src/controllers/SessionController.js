const connection = require ('../database/connection');


module.exports = {

    async create(request, response){
        const {id} = request.body;
  
        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            // 400 = bad request
            return response.status(400).json({error: 'No ONG here, jonny'});
        }

        return response.json(ong);

        
    }
}