import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
           <Link to="/">home page</Link>
           <Link to="users">users page</Link>
           <Link to="posts">posts page</Link>
           <Link to="comments">comments page</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;