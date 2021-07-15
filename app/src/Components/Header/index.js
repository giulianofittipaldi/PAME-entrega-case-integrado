import React from "react"
import "./styles.css"
import { GiPig } from 'react-icons/gi'
import { Link, NavLink} from 'react-router-dom'


export default function Header(){

    //const onPageStyle={
      //  color: 'blue'
   //}


    return (
        <header>
                <div className='title-box'>
                    <Link to='/' style={{textDecoration: 'none'}}><h1 id='nomeSite'><GiPig/> El Porco</h1>
                    </Link>
                </div>
            <div className='menu'>
                <div className='option-box'>
                <Link to='/produtos' style={{textDecoration: 'none', color: 'rgb(252, 252, 252)'}}><h3>Produtos</h3>
                </Link>
                </div>
                <div className='option-box'>
                <Link to='/login' style={{textDecoration: 'none', color: 'rgb(252, 252, 252)'}}><h3>Login</h3>
                </Link>
                
                </div>
            </div>
        </header>
        
    )
}