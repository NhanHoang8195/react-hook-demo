import React, { useState, useEffect, useContext } from 'react';
import { LayoutContext, LanguageContext } from '../../context';

export function HookComponent() {
    const name = useFormInput('Nhan');
    const surname = useFormInput('Hoang');
    const width = useWindowWidth();
    const theme = useContext(LayoutContext);
    const language = useContext(LanguageContext);
    useTitle(surname.value + ' ' + name.value);
    return (<div className={theme}>
        <form>
            <p>Here is function component</p>
            <label>Name:</label>
            <input {...name} />
            <label>Surname:</label>
            <input {...surname} />
            <label>Language:</label>
            <input value={language} readOnly />
            <label>Window width:</label>
            <input value={width} readOnly />
        </form>
    </div>);
}
function useTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange,
    };
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function onChangeWindowWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', onChangeWindowWidth);
        return () => {
            window.removeEventListener('resize', onChangeWindowWidth);
        }
    });
    return width;
}