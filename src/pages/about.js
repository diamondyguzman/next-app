import React from 'react';
import List, {ListItem} from '../components/List';
import {people} from '../data/peopleData';

export default function AboutPage(){

    const peopleList= people.map(people=>{
        return (
            <ListItem 
            key={people.id}
            header ={people.name}
            image={`/images/${people.image}`} 
            text={people.description} href={`/products/${people.id}
            `}/>
        )
    })

    return(
        <>
            <List>
                {peopleList}
                {/* <ListItem 
                image='/images/owner.jpg' header='The Owner' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, '
                />

                <ListItem 
                image='/images/co-owner.png' header='The Co-Owner' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, '
                />*/} 

            </List>
        </>
    );
}