import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faNewspaper,
    faHandHoldingHeart,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import '../css/sidebar.css'

const SideBar: React.FC = () => {
    return (
        <Menu>
            <Link to='/'><FontAwesomeIcon icon={faHome} /> <span className="menu-text">Home</span></Link>
            <Link to='/about'><FontAwesomeIcon icon={faNewspaper} /><span className="menu-text">About</span></Link>
            <Link to="/open-source"><FontAwesomeIcon icon={faGithub} /><span className="menu-text">Open Source</span></Link>
            <Link to="/volunteer"><FontAwesomeIcon icon={faHandHoldingHeart} /><span className="menu-text">Volunteer Work</span></Link>
            <a className="menu-item" href="#contact"><FontAwesomeIcon icon={faEnvelope} /><span className="menu-text">Contact</span></a>
        </Menu>
    );
};

export default SideBar;