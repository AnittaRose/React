import {Link, Routes, Route} from 'react-router-dom'
// import profile from './profile'
// import settings from './Settings'

function Dashboard(){

    return(
        <>
        <nav>
            <ul>
                <li><Link to={'./dashboard/profile'}>profile</Link></li>
                <li><Link to={'./dashboard/settings'}>Settings</Link></li>
            </ul>
        </nav>

        <section>
            <Routes>
                <Route path={'/profile'} exact element={<profile />}/>
                <Route path={'/settings'} exact element={<settings />}/>
            </Routes>
        </section>
        </>
    )
}

export default Dashboard;