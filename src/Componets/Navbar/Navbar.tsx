import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'
function Navbar (){
    const navigate = useNavigate();
    const items: MenuItem[] = [
        { 
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: (event) => {
                navigate("/");
              },
        },
        {
            label: 'Sobre',
            icon: 'pi pi-fw pi-id-card',
            command: (event) => {
                navigate("/sobre");
              },
        },
        {
            label: 'Contato',
            icon: 'pi pi-fw pi-users',
            command: (event) => {
                navigate("/contato");
              },
        }
    ] 
    const end = <Link to='https://drive.google.com/file/d/1473F3xUJmdHIhsU-L-jlqM04pjkzqou-/view'>
                    <Button label='Curriculo' icon={'pi pi-fw pi-sign-out'}/>
                </Link>
           return(
        <>
            <Menubar model={items}  end={end}  />
        </>
    )

}
export default Navbar;