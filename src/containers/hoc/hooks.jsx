import React, { useState } from 'react';


export function onChangeName() {
    const [count, setCount] = useState(1);
    function handleChange () {
        setCount(count + 1);
    }
    return {count, handleChange};
}