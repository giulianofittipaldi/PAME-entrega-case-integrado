import './styles.css'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from 'react-icons/io5'
import Card from '../../Components/Card'
import { FaGift } from 'react-icons/fa'
import { RiEBike2Fill } from 'react-icons/ri'

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
            <h1><FaGift id='gift'/> Finalizar Compra</h1>
        </div>
        <div id='box-options'>
            <div className='buy-container'>
                <ul className='buy-cart-list'>
                {renderList}
                </ul>
            </div>
            <div id='options'>
                <h1><RiEBike2Fill id='moto'/> Opcões de retirada</h1>
                <button className='botao-entrega'>Entrega</button>
                <button className='botao-entrega'>Retirada na loja</button>
                <button className='finalizar-compra'>Finalizar Compra</button>
            </div>
        </div>
        </div>
    
    
        </>
    )

}