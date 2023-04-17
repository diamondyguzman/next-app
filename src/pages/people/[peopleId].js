import React from 'react';
import {people} from '../../data/peopleData';
import {useRouter} from 'next/router';
import DetailStyles from '../../styles/Details.module.css';
export default function PeopleViewPage(){
    const router = useRouter();
    const {peopleId} = router.query;
    const currentPeople = people.find(people => people.id === peopleId);


    if(!currentPeople){
        return (
            <>
                <h1>Sorry, we couldnt find that person</h1>
            </>
        );
    }

    return(
        <>
            <div className={DetailStyles.detailInfo}>
                <img  src={`/images/${currentPeople.image}`}/>
           
                <div className={DetailStyles.desc}>
                    <h1>{currentPeople.name}</h1>

                    <p>{currentPeople.description}</p>
                </div>
            </div>
        </>
    )
}