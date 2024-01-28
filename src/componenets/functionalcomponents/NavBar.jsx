import "../../css/NavBar.css"
import { Link } from "react-router-dom";
const NavBar =()=> {
    return(
        <ol>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Experience">Experience</Link></li>
        <li><Link to="/Block">Counter</Link></li>
        <li><Link to="/Reference">USEREF</Link></li>
        <li><Link to="/Memo">useMemo</Link></li>
        <li><Link to="/CallBack">ADDING</Link></li>

        </ol>

    )
}
export default NavBar;