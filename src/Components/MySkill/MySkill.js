import './MySkill.css'
import myPic from '../../img/myPic.jpg'
import JS from '../../img/JS.png'

const MySkill = () => {
    return(
        <div id='MySkill' className='MySkill'>
            <img className="myPic" alt="myPic" src={myPic}/>
            <div className="profile-column">
                <h2>Kanyanat Toonrud</h2>
                <p>Good day, my name is "Pakkad". I'm switching careers that interested in technology.Both the front end and the back end of software are interesting to me. Even now, I enjoy drawing. Contact me if you're interested.</p>
                <div className="skill">
                    <img alt="JavaScript" src={JS}/>
                    <img alt="React" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"/>
                    <img alt="Node" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"/>
                    <img alt="Express" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"/>
                    <img alt="MongoDB" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"/>
                </div>
            </div>
        </div>
    )
}

export default MySkill