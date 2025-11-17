import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from 'react-router-dom'

import '../css/sidebar.css'

const SideBar: React.FC = () => {
    return (
        <Menu>
            <Link to='/'><span className="menu-text">Home</span></Link>
            {/*<Link to='/about'><span className="menu-text">About</span></Link>*/}
            {/*<Link to="/open-source"><span className="menu-text">Open Source</span></Link>*/}
            {/*<Link to="/volunteer"><span className="menu-text">Volunteer Work</span></Link>*/}
            {/*<a className="menu-item" href="#contact"><span className="menu-text">Contact</span></a>*/}
        </Menu>
    );
};

export default SideBar;