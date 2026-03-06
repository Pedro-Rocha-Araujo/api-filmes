import React, {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import Detalhes from "./Detalhes/Detalhes"
import NotFound from "./NotFound"

function RoutesApp() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/detalhes/:id" element={ <Detalhes /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp