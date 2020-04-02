const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        const {codigo_cliente, valor_consumo, mes_referencia, data_vencimento, valor_fatura} = request.body;
        const usuario_id = request.headers.authorization;
    
        const [id] = await connection('contaLuz').insert({
            codigo_cliente,
            valor_consumo,
            mes_referencia,
            data_vencimento,
            valor_fatura,
            usuario_id
        })
    
        return response.json({ id });
    },

    async index(request, response){
        const {page = 1} = request.query;

        const [contagem] = await connection('contaLuz').count()

        const contas = await connection('contaLuz')
        .join('usuario', 'usuario.id', '=', 'contaLuz.usuario_id')
        .limit(5)
        .offset((page -1) * 5)
        .select(['contaLuz.*', 'usuario.nome', 'usuario.email']);

        response.header('X-toal-contagem', contagem['count(*)']);
        return response.json(contas);
    },

    async delete(request, response){
        const { id } = request.params;
        const usuario_id = request.headers.authorization;

        const conta = await connection('contaLuz')
        .where('id', id)
        .select('usuario_id')
        .first();

        if(conta.usuario_id !== usuario_id){
            return response.status(401).json({error: 'Operação não permitida'})
        }

        await connection('contaLuz').where('id', id).delete();

        return response.status(204).send();
    }



}