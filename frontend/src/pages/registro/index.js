import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiMail, FiHome } from 'react-icons/fi'

export default function Registro(){
    return(
        <div className='registro-container'>
            <section className='form-registro'>
                <h1>Cadastro de usuario</h1>
                <form>
                    <p>Nome</p>
                    <div className='input-container input-registro'>
                        <FiUser size={22} color='#e9e9e9'/>
                        <input type='text' placeholder='Nome'/>
                    </div>
                    
                    <p>Email</p>
                    <div className='input-container input-registro'>
                        <FiMail size={22} color='#e9e9e9'/>
                        <input type='email' placeholder='Email'/>
                    </div>

                    <p>Senha</p>
                    <div className='input-container input-registro'>
                        <FiLock size={22} color='#e9e9e9'/>
                        <input type='password' placeholder='Senha'/>
                    </div>

                    <button className='button' type='submit'>Cadastrar</button>

                    <Link to='/' className='back-link'>
                        <FiHome size={16} color='#E02041'/>
                        Home
                    </Link>
                </form>
            </section>
        </div>
    )
}