import React, {useEffect, useRef, useState} from 'react';
import s from './AnimatedBg/style.module.scss';
import cn from 'classnames';
import { animated } from 'react-spring';

const Stars = () => {
     const stars = useRef(null)

    function getRandomInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [position, setPosition] = useState({
        cx: 0,
        cy: 0
    })
    console.log(position)

    // useEffect(() => {
    //     if (stars.current) {
    //         const chileNodes = stars.current.children
    //
    //         const myInterval = setInterval(() => {
    {/*            // const rndCircle = chileNodes[getRandomInRange(0, chileNodes.length)]*/}
    {/*            //*/}
    {/*            // if (rndCircle.nodeName === 'circle') {*/}
    {/*            //     setPosition(() => {*/}
    //             //         return {
    //             //             cx: +rndCircle.attributes.cx.value,
    //             //             cy: +rndCircle.attributes.cy.value
    //             //         }
    //             //     })
    {/*            // }*/}
    //
    {/*            setPosition(() => {*/}
    //                 return {
    //                     cx: getRandomInRange(0, 300),
    //                     cy: getRandomInRange(0, 400)
    //                 }
    //             })
    //
    //         }, 5000);
    //
    //         return () => clearInterval(myInterval)
    //     }
    // }, [])

    return (
        <div className={cn(s.bg, s.starsBg)}>
            <svg
                className={s.stars}
                viewBox='0 0 300 382'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                ref={stars}
            >
                {/*<animated.path*/}
                {/*    d="M8.5 0L8.975 8.67728L16.7272 4.75L9.45 9.5L16.7272 14.25L8.975 10.3227L8.5 19L8.025 10.3227L0.272758 14.25L7.55 9.5L0.272758 4.75L8.025 8.67728L8.5 0Z"*/}
                {/*    fill="#D9D9D9"*/}
                {/*    transform={`translate(${position.cx}, ${position.cy}), scale(2)`}*/}
                {/*/>*/}

                {/* Constellation */}
                <path
                    d='M36.5 15.5L64 54L96.5 61.5M96.5 61.5L115 46.5M96.5 61.5L85.5 85.5L95 108'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='64' cy='54' r='1' fill='#D9D9D9'/>
                <circle cx='36.5' cy='15.5' r='1.5' fill='#D9D9D9'/>
                <path
                    d='M86 85.5C86 85.2239 85.7761 85 85.5 85C85.2239 85 85 85.2239 85 85.5C85 85.7761 85.2239 86 85.5 86C85.7761 86 86 85.7761 86 85.5Z'
                    fill='#D9D9D9'
                />
                <circle cx='96.5' cy='61.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='115' cy='47' r='1' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M150.5 120.5L167.5 162.5L143 181L111 151.5L95 149L53.5 198.5'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='95' cy='149' r='1' fill='#D9D9D9'/>
                <path
                    d='M111.5 151.5C111.5 151.776 111.276 152 111 152C110.724 152 110.5 151.776 110.5 151.5C110.5 151.224 110.724 151 111 151C111.276 151 111.5 151.224 111.5 151.5Z'
                    fill='#D9D9D9'
                />
                <circle cx='150.5' cy='120.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='143' cy='181' r='1' fill='#D9D9D9'/>
                <circle cx='167.5' cy='162.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='53.5' cy='198.5' r='0.5' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M195.5 92.5L217 76H242.5M242.5 76L250 98M242.5 76L250.5 78.5L285 64L298.5 70.5M250 98L266.5 111.5M250 98L237 124M298.5 70.5L292.5 85.5L295 113M298.5 70.5L327 83.5'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='217' cy='76' r='1' fill='#D9D9D9'/>
                <circle cx='242' cy='76' r='1' fill='#D9D9D9'/>
                <circle cx='250.5' cy='78.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='285' cy='64' r='1' fill='#D9D9D9'/>
                <circle cx='298.5' cy='70.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='292.5' cy='85.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='295' cy='113' r='1' fill='#D9D9D9'/>
                <circle cx='266.5' cy='111.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='250' cy='98' r='1' fill='#D9D9D9'/>
                <circle cx='237' cy='124' r='1' fill='#D9D9D9'/>
                <circle cx='195.5' cy='92.5' r='1.5' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M347 37H314.5L295.5 19.5C295.5 19.5 274.668 33.2132 261 42L246.5 23.5C246.5 23.5 224.864 25.0237 211 26M211 26C197.722 18.7753 176 7 176 7M211 26C194.207 27.9526 168 31 168 31M211 26L204.5 1.5'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='211' cy='26' r='1' fill='#D9D9D9'/>
                <path
                    d='M206 1.5C206 2.32843 205.328 3 204.5 3C203.672 3 203 2.32843 203 1.5C203 0.671573 203.672 0 204.5 0C205.328 0 206 0.671573 206 1.5Z'
                    fill='#D9D9D9'
                />
                <circle cx='246.5' cy='23.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='261' cy='42' r='1' fill='#D9D9D9'/>
                <circle cx='295.5' cy='19.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='176' cy='7' r='1' fill='#D9D9D9'/>
                <circle cx='168' cy='31' r='1' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M37 162L28 114M37 162L49.5 108.5M37 162L9.5 122.5M28 114L49.5 108.5M28 114L9.5 122.5M28 114L22.5 94.5M49.5 108.5L22.5 94.5M9.5 122.5L22.5 94.5'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <path
                    d='M24 94.5C24 95.3284 23.3284 96 22.5 96C21.6716 96 21 95.3284 21 94.5C21 93.6716 21.6716 93 22.5 93C23.3284 93 24 93.6716 24 94.5Z'
                    fill='#D9D9D9'
                />
                <circle cx='49.5' cy='108.5' r='1.5' fill='#D9D9D9'/>
                <path
                    d='M38 162C38 162.552 37.5523 163 37 163C36.4477 163 36 162.552 36 162C36 161.448 36.4477 161 37 161C37.5523 161 38 161.448 38 162Z'
                    fill='#D9D9D9'
                />
                <circle cx='28' cy='114' r='1' fill='#D9D9D9'/>
                <circle cx='9.5' cy='122.5' r='0.5' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M113 224L103.5 284.5L86.5 307.5M86.5 307.5L103 338M86.5 307.5L64.5 291.5L50 254M103 338L131.5 347.5L141.5 355.5M103 338L100 362L107.5 372.5'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='113' cy='224' r='1' fill='#D9D9D9'/>
                <circle cx='103.5' cy='284.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='50' cy='254' r='1' fill='#D9D9D9'/>
                <circle cx='64.5' cy='291.5' r='0.5' fill='#D9D9D9'/>
                <path
                    d='M88 307.5C88 308.328 87.3284 309 86.5 309C85.6716 309 85 308.328 85 307.5C85 306.672 85.6716 306 86.5 306C87.3284 306 88 306.672 88 307.5Z'
                    fill='#D9D9D9'
                />
                <circle cx='103' cy='338' r='1' fill='#D9D9D9'/>
                <circle cx='100' cy='362' r='1' fill='#D9D9D9'/>
                <circle cx='107.5' cy='372.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='141.5' cy='355.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='131.5' cy='347.5' r='1.5' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M18 249L27.5 262.5L12 302M12 302L22.5 322.5M12 302L-28.5 323M22.5 322.5L56.5 353.5L69 353M22.5 322.5L-9 342.5M-9 342.5L-28.5 323M-9 342.5L-25 365.5L-28.5 380.5M-28.5 323L-48 307V275.5'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='69' cy='353' r='1' fill='#D9D9D9'/>
                {/*<circle r='0.5' transform='matrix(1 0 0 -1 56.5 353.5)' fill='#D9D9D9'/>*/}
                <circle cx='22.5' cy='322.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='12' cy='302' r='1' fill='#D9D9D9'/>
                <circle cx='27.5' cy='262.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='18' cy='249' r='1' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M167.5 210.5L195.5 206L212 231L200.5 242.5L217 275L242.5 274.5L250 289L240.5 326.5L250 349L216.5 369.5L205.5 342.5'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='250' cy='289' r='1' fill='#D9D9D9'/>
                <circle cx='240.5' cy='326.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='250' cy='349' r='1' fill='#D9D9D9'/>
                <circle cx='216.5' cy='369.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='205.5' cy='342.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='217' cy='275' r='1' fill='#D9D9D9'/>
                {/*<circle r='0.5' transform='matrix(1 0 0 -1 200.5 242.5)' fill='#D9D9D9'/>*/}
                <circle cx='212' cy='231' r='1' fill='#D9D9D9'/>
                <circle cx='196' cy='206' r='1' fill='#D9D9D9'/>
                <circle cx='167.5' cy='210.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='242.5' cy='274.5' r='1.5' fill='#D9D9D9'/>
                {/* Constellation */}

                {/* Constellation */}
                <path
                    d='M268.5 269.5L275.5 257.5L268.5 208.5L286 183L298.5 200.5L294 255'
                    stroke='white'
                    strokeOpacity='0.05'
                />
                <circle cx='286' cy='183' r='1' fill='#D9D9D9'/>
                <circle cx='298.5' cy='200.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='294' cy='255' r='1' fill='#D9D9D9'/>
                <circle cx='275.5' cy='257.5' r='1.5' fill='#D9D9D9'/>
                <circle cx='268.5' cy='269.5' r='0.5' fill='#D9D9D9'/>
                <circle cx='268.5' cy='208.5' r='0.5' fill='#D9D9D9'/>
                {/* Constellation */}
            </svg>
        </div>
    );
};

export default Stars;
