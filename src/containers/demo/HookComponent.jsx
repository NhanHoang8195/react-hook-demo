import React, { useState, useEffect, useContext } from 'react';
import { LayoutContext, LanguageContext} from '../../context';
export function HookComponent() {
    const name = useFormInput('Nhan');
    const surname = useFormInput('Hoang');
    const layout = useContext(LayoutContext);
    const language = useContext(LanguageContext);
    const width = useWidthWindowSize();
    useTitleDocument(surname.value + ' ' + name.value);

    return (<div className={layout}>
        <form>
            <p>Here is function component</p>
            <label>Name:</label>
            <input {...name} />
            <label>Surname:</label>
            <input {...surname} />
            <label>Width:</label>
            <input value={width} readOnly />
            <label>Language</label>
            <input value={language} readOnly />
        </form>
    </div>);
}
function useTitleDocument(title) {
    useEffect(() => {
        document.title = title;
    });
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
        setValue(e.target.value);
    }
    return {value, onChange: handleChange};
}
function useWidthWindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleChangeSize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleChangeSize);
        return () => {
            window.removeEventListener('resize', handleChangeSize);
        };
    });
    return width;
}