import React, {useState} from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import LuzForm from '../../components/luzForm'
import AguaForm from '../../components/aguaForm'
import GasForm from '../../components/gasForm'
import CombustivelForm from '../../components/combustivelForm'
import AlimentacaoForm from '../../components/alimentacaoForm'

export default function Selecao(){
    const [luz, setLuz] = useState('none');
    const [agua, setAgua] = useState('none');
    const [gas, setGas] = useState('none');
    const [combustivel, setCombustivel] = useState('none');
    const [alimentacao, setAlimentacao] = useState('none');

    function mudar(nome){
        setLuz('none');
        setAgua('none');
        setGas('none')
        setCombustivel('none')
        setAlimentacao('none')
        

       switch(nome) {
        case 'luz':
          setLuz('block')
          break;
        case 'agua':
          setAgua('block')
          break;
        case 'gas':
          setGas('block')
          break;   
          case 'combustivel':
            setCombustivel('block')
          break;
          case 'alimentacao':
            setAlimentacao('block')
          break;  
                 
        default:
       }

       

    }

    return(
        <div className='selecao-container'>
            <section className='section-buttons'>
                <h1>Adicionar contas</h1>
                <button onClick={ () => mudar('luz')} className='buttons'>Luz</button>
                <button onClick={() => mudar('agua')} className='buttons'>Agua</button>
                <button onClick={() => mudar('gas')} className='buttons'>Gás</button>
                <button onClick={() => mudar('combustivel')} className='buttons'>Combustivel</button>
                <button onClick={() => mudar('alimentacao')} className='buttons'>Alimentação</button>
                <button onClick={() => mudar('cartao')} className='buttons'>Cartão</button>
                <button onClick={() => mudar('outros')} className='buttons'>Outros</button>
            </section>
            <section className='section-lateral' >
               
                    <LuzForm ocultar={luz}/>
          
                
                    <AguaForm ocultar={agua}/>
              

              
                    <GasForm ocultar={gas}/>
             

               
                    <CombustivelForm ocultar={combustivel}/>
            

                
                    <AlimentacaoForm ocultar={alimentacao}/>
            

                
                    
           

                
                    
             
            </section>
        </div>
    )
}