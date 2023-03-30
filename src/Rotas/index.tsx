import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Contato from "../Pages/Contato/contato";
import Home from "../Pages/Home/home";
import Sobre from "../Pages/Sobre/sobre";

function Routes (){
    return (

        <RoutesWrapper>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
        </RoutesWrapper>
    )
}

export default Routes;