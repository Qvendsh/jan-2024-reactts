import React, {FC} from 'react';
import styles from'./Character.module.css'


interface IProps{
    name:string;
    img:string;
    // children: React.ReactNode
}

type ITypeProps= IProps & { children?: React.ReactNode };
const Character:FC<ITypeProps> = ({name,img,children}) => {
    return (
        <div className={styles.CharacterBox}>
            <h2>{name}</h2>
            <p>{children}</p>
            <img
                src={img} alt=""/>
        </div>
    );
};

export default Character;