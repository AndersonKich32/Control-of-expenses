
exports.up = function(knex) {
    return knex.schema.createTable('contaAgua', function(table){
        table.increments(),

        table.string('nome').defaultTo('Conta de agua'),
        table.string('codigo_cliente').notNullable(),
        table.decimal('valor_fatura').notNullable(),
        table.date('mes_referencia').notNullable(),
        table.date('data_vencimento').notNullable(),
        table.timestamp('data').defaultTo(knex.fn.now()),

        table.string('usuario_id').notNullable(),

        table.foreign('usuario_id').references('id').inTable('usuario')
    })
};

exports.down = function(knex) {
    return knex.schema.drop('contaAgua');
};
