import Navbar from '../../Componets/Navbar/Navbar';
import './home.css';
import imgBro from '../../img/bro.png'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
    

function Home  (){
           return(
        <>
            <Navbar/>
            <div className='ConteinerHome'>
                <div className='part1'>
                    <h2 className='texto'>Ajudando empresas a se manterem <span className='red'>competitivas</span> com soluções de software inovadoras</h2>
                   <Link to='https://github.com/rodrigoribeiro027'>
                    <Button label='GitHub' className='botaoCurriculo'  icon={'pi pi-fw pi-github'}/>
                    </Link>
                </div>
                <div className='part1'>
                    <img className='imgBro' src={imgBro} alt="" />
                </div>  
            </div>
            <div className='contaierFooter'>
                    <h2><Link to="https://www.linkedin.com/in/-rodrigo-ribeiro">Rodrigo Ribeiro</Link> - Todos os direitos reservados.</h2>
            </div>
        </>
    )

}
export default Home;