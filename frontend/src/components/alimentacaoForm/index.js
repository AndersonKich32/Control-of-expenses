import React from 'react';

export default function AlimentacaoForm(props){
    return(
            <form className='form-padrao' style={{display:props.ocultar}}> 
                <p>Local da compra</p>
                <input type='text' className='input-form'></input>

                <p>Descrição da compra</p>
                <textarea  className='textArea'></textarea>

                <p>Valor da compra</p>
                <input type='text' className='input-form'></input>

                <p>Data da compra</p>
                <input type='date' className='input-form'></input>

                <button className='button button-radius' type='submit'>Adicionar</button>
                
            </form>
    )
}