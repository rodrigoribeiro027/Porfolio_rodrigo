import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Link, useNavigate } from "react-router-dom";
import './footer.css';
function Footer (){  
           return(
        <>
            <div className='contaierFooter'>
                    <h2><Link to="https://www.linkedin.com/in/-rodrigo-ribeiro">Rodrigo Ribeiro</Link> - Todos os direitos reservados.</h2>
            </div>
        </>
    )

}
export default Footer;