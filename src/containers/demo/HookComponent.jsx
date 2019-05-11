import React, { useState, useEffect } from 'react';
import
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
                    <p>Here is hook component.L5DFGJ6askhdfg;4'
                        5ẠLS6KH4adfg;sjl'
                        5akhdfgsadfj;sgha6jsdf'4a5hkl;
                        g6sadjf'4hkl;
                        5gASDJF';4áhklg
                        dÀGdáAfhj;'56DASKL4ghj;
                        f6'5asdklG4FHJ;
                        56'ÁDKLgfhj;4
                        k'5asdgl6FJCount is <b>{handleClickOutsite.count}</b></p>
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