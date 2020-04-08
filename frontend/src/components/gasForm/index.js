import React from 'react';

export default function GasForm(props){
    return(
            <form className='form-padrao' style={{display:props.ocultar}}> 
                <p>Data da compra</p>
                <input type='date' className='input-form'></input>

                <p>Preço</p>
                <input type='text' className='input-form'></input>

                <p>Tipo</p>
                <input type='text' className='input-form'></input>

                <button className='button button-radius' type='submit' >Adicionar</button>
                
            </form>
    )
}