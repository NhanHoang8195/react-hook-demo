import React, { useState, useEffect } from 'react';
import Button from '../../components/button';

export function HookComponent() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('Nhan');
    const [surname, setSurname] = useState('Hoang');
    function handleClick() {
        setCount(count + 1);
    }
    useEffect(() => {
       document.title = surname + ' ' + name;
    });
    function handleChangeName (e) {
        setName(e.target.value);
    }
    function handleChangeSurname (e) {
        setSurname(e.target.value);
    }
    return (
        <div>
            Here is hook component
            <p>Count is {count}</p>
            <Button onClick={handleClick} />
            <form>
                <label>Name:</label><input value={name} onChange={handleChangeName} />
                <label>Surname:</label><input value={surname} onChange={handleChangeSurname} />
            </form>
        </div>
    );
}