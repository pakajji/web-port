import './Navbar.css'
import PortContext from '../Context/PortContext';
import { useContext } from 'react';
import projectIcon from '../../img/projectIcon.png'

const Navbar = () => {

    const {btn} = useContext(PortContext);

    return(
        <div className='Navbar'>
            <div className='column'>
            <a className={`nav ${btn}`} href='#Work'><img alt="home" src='https://cdn-icons-png.flaticon.com/512/25/25694.png'/></a>
            <a className={`nav ${btn}`} href='#MySkill'><img alt="about-me" src='https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png'/></a>
            <a className={`nav ${btn}`} href='#MyProjects'><img alt="project" src={projectIcon}/></a>
            <a className={`nav ${btn}`} href='#Contact'><img alt="contact" src='https://cdn-icons-png.flaticon.com/512/561/561188.png'/></a>
            </div>
        </div>
    )
}

export default Navbar