import React from 'react';
import { HeroSection } from '../../HeroSection';
import { homeObjOne } from './Data';

export const Home = () => {
    return (
        <>
          <HeroSection {...homeObjOne}/>  
        </>
    )
}
