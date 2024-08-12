import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Pagamento from "./pages/pagamento/Pagamento";
import Fale from "./pages/faleComaGente/Fale";
import Duvidas from "./pages/duvidas/Duvidas";

import Photoshop from "./pages/Photoshop/Photoshop";
import Illustrator from "./pages/Illustrator/Illustrator";
import Premiere from "./pages/Premiere/Premiere";
import Canva from "./pages/Canva/Canva";
import CorelDrawn from "./pages/CorelDrawn/CorelDrawn";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/pagamento",
        element:<Pagamento/>,
    },
    {
        path:"/faleconosco",
        element:<Fale/>,
    },
    {
        path:"/duvidas",
        element:<Duvidas/>,
    },
    {
        path:"/photoshop",
        element:<Photoshop/>,
    },
    {
        path:"/illustrator",
        element:<Illustrator/>,
    },
    {
        path:"/premiere",
        element:<Premiere/>,
    },
    {
        path:"/canva",
        element:<Canva/>,
    },
    {
        path:"/coreldrawn",
        element:<CorelDrawn/>,
    },
])
