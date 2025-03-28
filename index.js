import ReactDOM from "./projetperso/node_modules/react-dom/client"
import { BrowserRouter, Routes, Route} from "./projetperso/node_modules/react-router-dom"
import Layout from "./projetperso/src/pages/Layout"
import Home from "./projetperso/src/pages/Home"
import Contact from "./projetperso/src/pages/Contact"
import NoPage from "./projetperso/src/pages/NoPage"

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

export default App