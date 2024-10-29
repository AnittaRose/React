import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';


function BasicRouting1(){

    return(
        <>
        <Router>
        <Routes>
        <Route path={'/'} exact element={<Nav />}/>
        <Route path={'/home'} exact element={<Home />} />
        <Route path={'/about/:username'} exact element= {<About />}/>
        </Routes>
        </Router>
        </>
    )
}

export default BasicRouting1;