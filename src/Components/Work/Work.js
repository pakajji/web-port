import './Work.css'
import PortContext from '../Context/PortContext';
import { useContext } from 'react';

const Work = () => {

    const {changeBackground,changeBtn} = useContext(PortContext);
    return(
        <div id='Work' className='Work'>
            <h1 onClick={()=>{changeBackground(); changeBtn();}} className="pakajji">Pakajji</h1>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/pakajji' className='work-block'>
                <h1>Coding</h1>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://pakajji.carrd.co/' className='work-block'>
                <h1>Painting</h1>
            </a>
        </div>
    )
}

export default Work