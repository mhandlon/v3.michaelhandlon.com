import { Routes, Route } from 'react-router-dom';

import SideBar from './components/sidebar';
import Home from './components/index/home';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
    return (
            <div className="App">
                <SideBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    {/*<Route path="/con?act" element={<Contact />} />*/}
                </Routes>
            </div>
    )
}

export default App;
