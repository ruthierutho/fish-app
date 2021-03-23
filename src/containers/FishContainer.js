import React from 'react';
import BottomFish from '../components/BottomFish';
import MiddleFish from '../components/MiddleFish';
import TopFish from '../components/TopFish';
import '../FishContainer.css';

const FishContainer = () => {

    return (
        <>
        <TopFish></TopFish>
        <MiddleFish></MiddleFish>
        <BottomFish></BottomFish>
        </>
    )
}

export default FishContainer;