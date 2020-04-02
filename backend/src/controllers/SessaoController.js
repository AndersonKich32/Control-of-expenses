const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const {id} = request.body;

        const usuario = await connection('usuario')
        .where('id', id)
        .select('nome')
        .first();

        if(!usuario){
            return response.status(400).json({error: 'Id de usuario nâo existente'})
        };

        return response.json(usuario);
    }


}