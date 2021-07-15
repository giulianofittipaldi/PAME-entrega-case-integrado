import './styles.css'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';


export default function Login(){
    

    return(
        <>
        <Header/>
        <div className='container-login'>
            <div className='login-box'>
            <form className="formulario">
                <p>Nome de usuário</p>
                <input type="text"></input>
                <p>Senha</p>
                <input type="password"></input>
                <button id='botao-entrar'>Entrar</button>
                <Link to='/cadastro'>
                    <button className='botao-cadastro'>Não possui cadastro?</button>
                </Link>
            </form>  
            </div>
        </div>
        </>
    )

}