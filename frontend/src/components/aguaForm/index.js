import React from 'react';

export default function AguaForm(props){
    return(
            <form className='form-padrao' style={{display:props.ocultar}}> 
                <p>Codigo do cliente</p>
                <input type='number' className='input-form'></input>

                <p>Mês de referencia</p>
                <input type='text' className='input-form'></input>

                <p>Vencimento da fatura</p>
                <input type='date' className='input-form'></input>

                <p>Valor da fatura</p>
                <input type='text' className='input-form'></input>

                <button className='button button-radius' type='submit'>Adicionar</button>
                
            </form>
    )
}