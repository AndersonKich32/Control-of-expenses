const connection = require('../database/connection');

module.exports = {

async create(request, response) {
    const {codigo_cliente, valor_fatura, mes_referencia, data_vencimento} = request.body
    const usuario_id = request.headers.authorization;

    const [ id ] = await connection('contaAgua').insert({
        codigo_cliente,
        valor_fatura,
        mes_referencia,
        data_vencimento,
        usuario_id
    })
    return response.json({id})
},

async index(request, response){
    const {page = 1} = request.query;

    const [contagem] = await connection('contaAgua').count()

    const contas = await connection('contaAgua')
    .join('usuario', 'usuario.id', '=', 'contaAgua.usuario_id')
    .limit(5)
    .offset((page -1) * 5)
    .select(['contaAgua.*', 'usuario.nome', 'usuario.email']);

    response.header('X-toal-contagem', contagem['count(*)']);
    return response.json(contas)
},

async delete(request, response){
    const { id } = request.params;
    const usuario_id = request.headers.authorization;

    const conta = await connection('contaAgua')
    .where('id', id )
    .select('usuario_id')
    .first();

    if(conta.usuario_id !== usuario_id){
        return response.status(401).json({error: 'Operação não permitida'})
    }

    await connection('contaAgua').where('id', id).delete();

    return response.status(204).send();
}


}