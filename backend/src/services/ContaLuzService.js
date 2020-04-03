const connection = require('../database/connection');

module.exports = {
    async soma(request, response){
        const usuario_id = request.headers.authorization;
        const valor_fatura = await connection('contaLuz')
        .where('usuario_id', usuario_id)
        .sum('valor_fatura')
        

        return response.json(valor_fatura);
    }


}