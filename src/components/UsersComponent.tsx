import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";

const UsersComponent:FC= () => {

    const[users, setUsers]=useState<IUserModel[]>([]);
          useEffect(()=>{

          },[])
    return (
        <div>
            
        </div>
    );
};

export default UsersComponent;