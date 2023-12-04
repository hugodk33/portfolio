import React, { useEffect, useState } from 'react';
import logo1 from './LOGO-ANIMA/logo-animada-01.svg';
import logo2 from './LOGO-ANIMA/logo-animada-02.svg';
import logo3 from './LOGO-ANIMA/logo-animada-03.svg';
import logo4 from './LOGO-ANIMA/logo-animada-04.svg';
import logo5 from './LOGO-ANIMA/logo-animada-05.svg';
import logo6 from './LOGO-ANIMA/logo-animada-06.svg';
import logo7 from './LOGO-ANIMA/logo-animada-07.svg';
import logo8 from './LOGO-ANIMA/logo-animada-08.svg';
import logo9 from './LOGO-ANIMA/logo-animada-09.svg';
import logo10 from './LOGO-ANIMA/logo-animada-10.svg';
import logo11 from './LOGO-ANIMA/logo-animada-11.svg';
import logo12 from './LOGO-ANIMA/logo-animada-12.svg';
import logo13 from './LOGO-ANIMA/logo-animada-13.svg';
import logo14 from './LOGO-ANIMA/logo-animada-14.svg';
import logo15 from './LOGO-ANIMA/logo-animada-15.svg';
import logo16 from './LOGO-ANIMA/logo-animada-16.svg';
import logo17 from './LOGO-ANIMA/logo-animada-17.svg';
import logo18 from './LOGO-ANIMA/logo-animada-18.svg';
import logo19 from './LOGO-ANIMA/logo-animada-19.svg';
import logo20 from './LOGO-ANIMA/logo-animada-20.svg';
import logo21 from './LOGO-ANIMA/logo-animada-21.svg';


function Logo() {
    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11,
        logo12,
        logo13,
        logo14,
        logo15,
        logo16,
        logo17,
        logo18,
        logo19,
        logo20,
        logo21
    ];

    const [currentLogo, setCurrentLogo] = useState(0);

    useEffect(() => {
        if(currentLogo === logos.length - 1) {
            setTimeout(() => {
                setCurrentLogo(0); 
            }, 6000);
        } else {
            setTimeout(() => {
                setCurrentLogo(currentLogo + 1); 
            }, 65);
        }
    }, [currentLogo]);

    return (
        <img
            src={logos[currentLogo]}
            alt={`Logo ${currentLogo + 1}`}
            id="knight"
        />
    );
}

export default Logo;