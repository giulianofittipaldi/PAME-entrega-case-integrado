import './styles.css'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from 'react-icons/io5'
import Card from '../../Components/Card'
import { FaGift } from 'react-icons/fa'

export default function Finalizar(){

    const productList=JSON.parse(localStorage.getItem('Produtos'))
    const renderList = productList.map((item, index)=>(
        <li key={index}>
            <Card data={item}/>
        </li>
    ))
    return(
        <>
        <Header/>
        <Link to='/produtos' className='seta-voltar'><IoReturnUpBack /></Link>
        <div className='buy-frame'>
        <div id='buy-title'>
            <h1><FaGift/>Finalizar Compra</h1>
        </div>
        <div id='box-options'>
            <div className='buy-container'>
                <ul className='cart-list'>
                {renderList}
                </ul>
            </div>
            <div id='options'>
                <h1>Opcões de retirada</h1>
                <button className='botao-entrega'>Entrega</button>
                <button className='botao-entrega'>Retirada na loja</button>
            </div>
        </div>
        </div>
    
    
        </>
    )

}