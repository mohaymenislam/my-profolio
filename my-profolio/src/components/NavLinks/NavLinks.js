import React from 'react';

const NavLinks = ({href , label , onClick ,  active}) => {
    return (
        <li>
           <a href={href} className={active ? "active" : ""} 
             onClick={onClick}
           >{label}</a> 
        </li>
    );
};

export default NavLinks;