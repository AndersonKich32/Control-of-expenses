import React from 'react';

export default function CombustivelForm(props){
    return(
            <form className='form-padrao' style={{display:props.ocultar}}> 
                <p>Data do abastecimento</p>
                <input type='date' className='input-form'></input>

                <p>Preço do combustivel</p>
                <input type='text' className='input-form'></input>

                <p>Valor do abastecimento</p>
                <input type='text' className='input-form'></input>

                <button className='button button-radius' type='submit'>Adicionar</button>
                
            </form>
    )
}