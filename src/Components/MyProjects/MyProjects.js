import './MyProjects.css'
import colmar from '../../img/colmar.JPG'

const MyProjects = () => {
    return(
        <div id='MyProjects' className='MyProjects'>
            <h2 className="project">Project</h2>
            <div className="project-zone">
            <a href="https://pakajji.github.io/Assessment01_edited/" target="_blank" rel="noreferrer"><img alt="colmar" src={colmar}/></a>
            <a href="https://fit-club-rosy.vercel.app/" target="_blank" rel="noreferrer"><img alt="JSD_final" src="https://media.discordapp.net/attachments/1028918895689605166/1033955849829359696/unknown.png?width=1120&height=630"/></a>
            </div>
        </div>
    )
}

export default MyProjects