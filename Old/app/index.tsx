import { config } from 'react-spring';
import { useControls } from 'leva';
import s from './style.module.scss';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import { WeatherWrapper } from '@/shared/ui/WeatherWrapper';

// export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
// export const APP_CONFIG = config;

const App = () => (
    // const {tBezier} = useControls('Sun', {
    //     tBezier: {
    //         value: 0,
    //         min: 0,
    //         max: 1,
    //         step: 0.005,
    //     },
    // });

    <div className={s.wrapper}>
        <WeatherWrapper>Asd</WeatherWrapper>

        {/* <MainWrapper/> */}

        {/* <> */}
        {/*    <Statistic/> */}

        {/*    <TestContainer> */}
        {/*        <Stars/> */}
        {/*    </TestContainer> */}

        {/*    <TestContainer className={s.visible}> */}
        {/*        <DevWalk/> */}
        {/*    </TestContainer> */}

        {/*    <TestContainer className={s.dayBg}> */}
        {/*        <SunriseBg time={tBezier}/> */}
        {/*        <Walk time={tBezier}/> */}
        {/*    </TestContainer> */}
        {/* </> */}
    </div>
);
export default App;
