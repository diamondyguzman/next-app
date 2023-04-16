import React from 'react';
import List, {ListItem} from '../components/List';

export default function AboutPage(){
    return(
        <>
            <List>
                <ListItem 
                image='/images/owner.jpg' header='The Owner' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, '
                />

                <ListItem 
                image='/images/co-owner.png' header='The Co-Owner' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, '
                />

            </List>
        </>
    );
}