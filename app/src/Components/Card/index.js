import React from 'react';
import './styles.css'


export default function Card({data, onClick}){
    return(
        <button onClick={onClick}  className='card-container'>
            <div id='content'>
            <h3 className='card-product'>
                <strong></strong>{data.nome}
            </h3>
            <h3>
                <strong className='card-title'>Marca</strong>:{data.marca}
            </h3>
            <h3>
                <strong className='card-title'>Validade</strong>:{data.validade}
            </h3>
            <h3>
                <strong className='card-title'>Peso</strong>:{data.peso}
            </h3>
            <h3>
                <strong className='card-title'>Preço</strong>:{data.preco}
            </h3>
            <h3>
                <strong className='card-title'>Unidades</strong>:{data.unidade}
            </h3>
            </div>
            <img id='imagem'src={data.image}/>

        </button>
    )
}