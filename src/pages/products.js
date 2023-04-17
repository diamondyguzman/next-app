import React from 'react';
import List, { ListItem } from '../components/List';
import {products} from '../data/productData';

export default function ProductsPage(){

    const soapList= products.map(products=>{
        return (
            <ListItem 
            key={products.id}
            header ={products.name}
            image={`/images/${products.image}`} 
            text={products.description} href={`/products/${products.id}
            `}/>
        )
    })

    return(
        <>
            <List>
                {soapList}
{/* 
                <ListItem 
                image='/images/butter-almond-soap.jpg' header='Butter Almond Soap' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. '
                />

                <ListItem 
                image='/images/rose-gold-soap.jpg' header='Rose-Gold Soap' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. '
                />

                <ListItem 
                image='/images/luxury-soap.jpg' header='Luxury Soap:' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.'
                /> */}

            </List>
        </>
    );
}