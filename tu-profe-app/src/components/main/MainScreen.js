import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { Inicio } from './Inicio';
import { Section } from './Section';
import { useScroll } from '../../hooks/useScroll';
import { Footer } from './Footer';

export const MainScreen = () => {
    const scroll = useScroll();

    return (
        <div>
            <Navbar scroll={scroll}/>
            <Inicio scroll={scroll}/>
            <Section />
            <Footer />
        </div>
    )
}
