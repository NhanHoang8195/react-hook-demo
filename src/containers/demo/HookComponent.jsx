import React, { useState, useEffect } from 'react';
import Button from '../../components/button';
import { onChangeName } from '../hoc/hooks';
import {HookComponent1} from './HookComponent1';

export function HookComponent() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('Nhan');
    const [surname, setSurname] = useState('Hoang');
    function handleClick() {
        setCount(4);
    }
    const handleClickOutsite = onChangeName();
    useEffect(() => {
        setSurname(handleClickOutsite.count + 1);
        // document.title = surname + ' ' + name;
    });
    function handleChangeName (e) {
        setName(e.target.value);
    }
    function handleChangeSurname (e) {
        setSurname(e.target.value);
    }
    console.log('hook');
    return (
        <div>
            <form>
                <div>
                    <p>Here is hook component
                        <b>{handleClickOutsite.count}</b>
                    </p>
                    <Button onClick={handleClickOutsite.handleChange} />
                </div>
                <label>Name:</label>
                <input value={name} onChange={handleChangeName} />
                <label>Surname:</label>
                <input value={surname} onChange={handleChangeSurname} />
            </form>
            <HookComponent1 />
        </div>
    );
}