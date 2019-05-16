import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext, LayoutContext } from '../../context';

export function HookComponent(props) {
    const theme = useContext(LayoutContext);
    const language = useContext(LanguageContext);
    const name = useFormInput('Nhan');
    const surname = useFormInput('Hoang');
    const windowWidth = useWindowWidth();
    // useTitle(surname.value + ' ' + name.value);
    document.title = surname.value + ' ' + name.value;
    return (
        <div className={theme}>
            <form>
                <p>Here is function component</p>
                <label>Name:</label>
                <input {...name} />
                <label>Surname:</label>
                <input {...surname} />
                <label>Language:</label>
                <input value={language} readOnly />
                <label>Width:</label>
                <input value={windowWidth} readOnly />
            </form>
        </div>
    );
}
function useTitle(title) {
    document.title = title;
}
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleChangeWindowSize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleChangeWindowSize);
        return () => {
            window.removeEventListener('resize', handleChangeWindowSize);
        }
    });
    return width;
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChangeName(e) {
        setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChangeName,
    };
}