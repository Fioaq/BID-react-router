import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Word from "../components/Word";
import WordColor from "../components/WordColor";

export const router= createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/:str',
        element: <Word />
    },
    {
        path: '/:str/:color/:bg',
        element: <WordColor />
    }
])