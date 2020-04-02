const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        try{
            const {nome, email, senha} = request.body;
            const id = crypto.randomBytes(4).toString('HEX');
        
           await connection('usuario').insert({
            id,   
            nome,
            email,
            senha,
            })
        
            return response.json({ id });
           }
           catch(error){
                response.status(400).send({error: 'Registration failed'})
           }
            
    },


    async index(request, response) {
        try{
            const usuarios = await connection('usuario').select('*')
            return response.json(usuarios)
        }
        catch(error){
            response.status(400).send({error: 'Error na listagem'})
        }
    }


}