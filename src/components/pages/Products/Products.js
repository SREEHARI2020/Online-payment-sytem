import React from 'react';
import { HeroSection } from '../../HeroSection';
import { Pricing } from '../../Pricing';
import { homeObjThree, homeObjTwo } from './Data';

export const Products = () => {
    return (
        <>
          
          <HeroSection {...homeObjThree}/>   
          <HeroSection {...homeObjTwo}/> 
           <Pricing/>
         
        </>
    )
}
