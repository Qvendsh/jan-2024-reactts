import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout:FC = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
                    <Outlet></Outlet>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default MainLayout;