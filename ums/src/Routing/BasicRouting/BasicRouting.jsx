import { BrowserRouter as Router,Routes,Link, Route} from "react-router-dom"
import './BasicRouting.css'
import Home from "./Home"
import About from "./About"

function BasicRouting(){
    return(
        <>
        <Router>
            <nav>
                <ul>
                    <li><Link to={'/home'} style={{color:"white", textDecoration:"none"}}>Home</Link></li>
                    <li><Link to={'/about'} style={{color:"white", textDecoration:"none"}}>About</Link></li>
                </ul>
            </nav>

            <section>
                <Routes>
                    <Route path={'/home'} exact element={<Home/>} />
                    <Route path={'/about'} exact element={<About/>} />


                </Routes>
            </section>
        </Router>
        </>
    )
}
export default BasicRouting;