import React, { useState, useEffect } from 'react';
import Button from '../../components/button';

function onChangeName() {
    const [count, setCount] = useState(1);
    function handleChange () {
        setCount(count + 1);
    }
    return {count, handleChange};
}

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
    const handleClickOutsite = onChangeName();
    return (
        <div>
            <form>
                <div>
                    <p>Here is hook component. Count is <b>{handleClickOutsite.count}</b></p>
                    <Button onClick={handleClickOutsite.handleChange} />
                </div>
                <label>Name:</label>
                <input value={name} onChange={handleChangeName} />
                <label>Surname:</label>
                <input value={surname} onChange={handleChangeSurname} />
            </form>
        </div>
    );
}