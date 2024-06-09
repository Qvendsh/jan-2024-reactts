import React from 'react';
import { NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <h1>I LOVE REACT HEADER</h1>
           <NavLink to="/">home page</NavLink>
            <br/>
           <NavLink to="users">users page</NavLink>
            <br/>
           <NavLink to="posts">posts page</NavLink>
            <br/>
           <NavLink to="comments">comments page</NavLink>
            <hr/>
        </div>
    );
};

export default HeaderComponent;