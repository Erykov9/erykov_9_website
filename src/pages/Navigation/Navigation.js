import "./Navigation.scss";
import { navItems } from "./navigationConfig";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-module">
      <div className="wrapper">
        <ul>
          {navItems.map(item => <li key={item.id}><NavLink to={item.href}>{item.icon}</NavLink><br/></li>)}
        </ul>
      </div>
    </div>
  )
};

export default Navigation;