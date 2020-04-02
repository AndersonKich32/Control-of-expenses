const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const usuario_id = request.headers.authorization;

        const contaAgua = await connection('contaAgua')
        .where('usuario_id', usuario_id)
        .select('*');

        const contaLuz = await connection('contaLuz')
        .where('usuario_id', usuario_id)
        .select('*');

        const contas = [...contaAgua, ...contaLuz]

        return response.json(contas);
    }




}