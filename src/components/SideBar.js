import './SideBar.css';

import Logo from '../images/translogo.png';


function SideBar(){
    return(
        <div>
        <div className="List">
            <img src = {Logo} alt = '' className='Logo'/>
            <div>
                Home
            </div>
            <div>
                Camera
            </div>
            <div>
                Notifications
            </div>
            <div>
                Profile
            </div>

        </div>
        </div>
    )
}

export default SideBar;