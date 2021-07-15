import './styles.css'
import Header from '../../Components/Header';
import React, { useState } from 'react'
import Card from '../../Components/Header/Card'
import { RiShoppingCartFill } from 'react-icons/ri'
import { RiKnifeLine } from 'react-icons/ri'
import { CgSmileSad } from 'react-icons/cg'
import linguiçaToscana from '../../Assets/Images/linguiça-toscana.jpeg'
import linguiçaDefumada from '../../Assets/Images/linguica-defumada.jpeg'
import linguiçaCalabresa from '../../Assets/Images/LINGUICA-CALABRESA-DEFUMADA.jpeg'
import { Link } from 'react-router-dom';


export default function Products(){
    
    const list=[
        {   
            id:0,
            nome: ' Linguiça Toscana',
            marca: ' Kramer',
            validade: ' 12/07',
            peso: ' 2 Kg',
            preco: ' R$ 10',
            unidade: ' Barra',
            image: linguiçaToscana
       },
       {
            id:1,
            nome: ' Linguiça Calabresa',
            marca: ' Sadia',
            validade: ' 14/07',
            peso: ' 1 Kg',
            preco: ' R$ 20',
            unidade: ' Fundão',
            image: linguiçaCalabresa
       },
       {
            id:2,
            nome: ' Linguiça Defumada',
            marca: ' El Porco',
            validade: ' 22/07',
            peso: ' 5 Kg',
            preco: ' R$ 15',
            unidade: ' Niterói',
            image: linguiçaDefumada
       }
    ]

    const [cartList,setCartList]=useState([]);

    const addProduct=(data)=>{
        let newItem={nome:data.nome, marca:data.marca, preco:data.preco, id:data.id, validade:data.validade, peso:data.peso, unidade:data.unidade, image:data.image}
        let newList=cartList.concat(newItem)
        setCartList(newList)
        console.log(cartList)
    }

    const cleanCart=()=>{
        setCartList([])
    }
   
    const renderList = list.map((item, index)=>(
        <li key={index}>
            <Card data={item} onClick={()=>addProduct(item)}/>
        </li>
    ));
    
    let buyList=[]

    const renderCartList = cartList.map((item, index)=>{
        buyList=[...buyList, item] ;
        return(
        <li key={index}>
            <Card data={item}/>
        </li>

    )});
    
    function Click(){
        localStorage.setItem('Produtos', JSON.stringify(buyList))
    }

    return(
       <> 
        <Header/>
        <div className='line'>
        </div>
        <div className="main">
        <div className='container'>
            <div className='title-container'>
            <h1 className='title-product'> <RiKnifeLine />  Produtos</h1>
            <div>
                <div className='products-frame'>
                    <ul className='products-list'>
                        {renderList}
                    </ul>
                </div>
            </div>
            </div>
            <div className='cart-container'>
                <h1 className='title-cart'> <RiShoppingCartFill />  Carrinho</h1>
                <div className='cart-products'>
                    {
                        cartList.length===0?<div id='empty-cart'><CgSmileSad />Carrinho vazio</div>:
                        <ul className='cart-list'>
                            {renderCartList}
                        </ul>
                    }
                    
                </div>
                <div className='buttons-container'>
                    <button  onClick={cleanCart}className='finalizar'> Limpar carrinho </button>
                    <Link to='/finalizarCompra' id='botao-finalizar'><button className='finalizar' onClick={Click}>
                        Finalizar compra </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}