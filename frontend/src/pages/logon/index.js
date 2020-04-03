import './styles.css';
import React from 'react';
import logo from '../../assets/logo.svg'
import imagem from '../../assets/imagem.jpg'
import { FiLogIn } from 'react-icons/fi'

export default function Logon(){
    return(
        <div className='container'>
            <section className='form'>
                <img src={logo} alt='logo da aplicação'/>
                <form>
                    <h1>Faça seu login</h1>

                    <input type='text' placeholder='Usuario'></input>
                    <input type='text' placeholder='Senha'></input>

                    <button className='button' type='submit'>Logar</button>

                    <a href='/registro'>
                    <FiLogIn size={16} color='#E02041'/>
                    Faça seu cadastro</a>
                </form>
            </section>
            
                <img src={imagem} alt='imagem'/>
           
        </div>
    )
}