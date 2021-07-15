import './styles.css'
import Header from '../../Components/Header';
import baconArtesanal from '../../Assets/Images/baconArtesanal.jpeg'

export default function Home(){
    return(
        <>
        <Header/>
        <div className='line'>
        </div>
        <div className='homepage'>
        <img src={baconArtesanal}/>
        <div className='sidebar'>
            <div className='description-box'>
            <h1>Açougue Artesanal</h1>
            <div className='description'>
            <h5>Tradição em preparação de carnes</h5>
            <h5>com qualidade premium</h5>
            </div>
            <h1>Desde 1999</h1>
            </div>
            <h4 id='contato'>Contato 2223-2221 / elporco@gmail.com</h4>
        </div>
        </div>
        </>
    )

}