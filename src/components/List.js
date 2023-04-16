import React from 'react';
import ListStyles from '../styles/List.module.css';

function List({children}){
    
    return (
        <>
        <section className={ListStyles.list}>
            {children}
        </section>
        </>
    )
}

export function ListItem({image,header,text}){
    return (
        <>
            <div className={ListStyles.item}>
                <div className={ListStyles.image}>
                        <img src={image}></img>
                </div>
                <div className={ListStyles.text}>
                    <h4>{header} :</h4>
                    <p >{text}</p>
                </div>
            </div>
        </>
    )
}
export default  List;