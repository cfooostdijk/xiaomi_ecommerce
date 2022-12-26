import React, {useContext} from 'react';
import Content from './ThemeContent';
import Lightswitch from '../../components/Lightswitch/Lightswitch';
import { DarkModeContext } from '../../context/DarkModeContext';

function Container() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content/>
            <Lightswitch />
        </div>
    )
}

export default Container