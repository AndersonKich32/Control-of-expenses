import './styles.css';
import React from 'react';
import logo from '../../assets/logo.svg'
import imagem from '../../assets/imagem.jpg'
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Logon(){
    return(
        <div className='container-logon'>
            <section className='form'>
                    <form className='form-padrao form-box'>
                        <h1>Login</h1>

                        <p>Email</p>
                        <div className='input-container input-logon'>
                        <FiMail size={22} color='#e9e9e9'/>
                            <input type='text'/>
                        </div>

                        <p>Senha</p>
                        <div className='input-container input-logon'>
                        <FiLock size={22} color='#e9e9e9'/>
                            <input type='password'/>
                        </div>

                        <button className='button' type='submit'>Logar</button>

                        <Link to='/registro' className='back-link'>
                            <FiLogIn size={16} color='#E02041'/>
                            Faça seu cadastro
                        </Link>
                    </form>
            </section>
            <div className='imagem-lateral'>
                <img src={imagem} alt='imagem'/>
            </div>
        </div>
    )
}