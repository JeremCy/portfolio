import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ThemeSwitcher(){
    return (
        <label className="swap swap-rotate"> 
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="dark" />      
        {/* sun icon */}   
        <FontAwesomeIcon icon={faSun} className="swap-on"/>

        {/* moon icon */}
         <FontAwesomeIcon icon={faMoon}  className="swap-off" fill=""/>
      </label>
    );
}

