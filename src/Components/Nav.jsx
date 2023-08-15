import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav(){

    function handleTheme(){
        
    }

    return(
        <nav className="nav">
            <div className="nav-left">
                <Link to='/main'>
                    <h2 className="heading">Home</h2>
                </Link>
            </div>
            <div className="nav-right">
                <span onClick={handleTheme} class="material-symbols-outlined light">light_mode</span>
                <span onClick={handleTheme} class="material-symbols-outlined dark">dark_mode</span>
            </div>
        </nav>
    )
}