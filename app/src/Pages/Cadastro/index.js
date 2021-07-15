import './styles.css'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from 'react-icons/io5'


export default function Cadastro(){
    

    return(
        <>
        <Header/>
        <Link to='/login' className='seta-voltar'><IoReturnUpBack /></Link>
        <div id='fit-container'>
        <div className='container-login'>
            <div className='login-box'>
            
            <form className="formulario">
                <p>Nome de usuário</p>
                <input type="text"></input>
                <p>Email</p>
                <input type="text"></input>
                <p>Senha</p>
                <input type="password"></input>
                <p>Confirme sua senha</p>
                <input type="password"></input>
                <p>Telefone de contato</p>
                <input type="text"></input>
                <Link to='/login'>
                    <button id='botao-cadastrar'>Cadastrar</button>   
                </Link>
            </form>  
            </div>
        </div>
        </div>
        </>
    )

}