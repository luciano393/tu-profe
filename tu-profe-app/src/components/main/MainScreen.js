import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { Inicio } from './Inicio';
import { Section } from './Section';


export const MainScreen = () => {
    const [offset, setOffset] = useState(0);

    window.onscroll = () => {
        setOffset(window.pageYOffset)
    }


    return (
        <div>
            <Navbar scroll={offset}/>
            <Inicio scroll={offset}/>
            <Section />
        </div>
    )
}
