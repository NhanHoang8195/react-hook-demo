import React, { useState, useEffect, useContext } from 'react';
import { LayoutContext, LanguageContext } from '../../context';

export function HookComponent(props) {
    const theme = useContext(LayoutContext);
    const language = useContext(LanguageContext);
    const name = useFormInput('Nhan');
    const surname = useFormInput('Hoang');
    const width = useWindowWidth();
    useTitle(surname.value + ' ' + name.value);
    return (
        <div className={theme}>
            <form>
                <p>Here is Hook component</p>
                <label>Name:</label>
                <input {...name} />
                <label>Surame:</label>
                <input {...surname} />
                <label>Language:</label>
                <input value={language} readOnly />
                <label>Width:</label>
                <input value={width} readOnly />
            </form>
        </div>
    );
}
function useTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChangeValue(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChangeValue
    }
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleChangeWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleChangeWidth);
        return () => {
            window.removeEventListener('resize', handleChangeWidth);
        }
    });
    return width;
}