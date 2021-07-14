import React from "react"
import "./styles.css"
import { GiPig } from 'react-icons/gi'


export default function Header(){
    return (
        <header>
            <div className='title-box'>
                <h1 id='nomeSite'><GiPig/> El Porco</h1>
            </div>
            <div className='menu'>
                <div className='option-box'>
                <h3>Produtos</h3>
                </div>
                <div className='option-box'>
                <h3>Login</h3>
                </div>
            </div>
        </header>
        
    )
}