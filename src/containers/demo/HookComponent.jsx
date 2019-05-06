import React, { useState } from 'react';
import Button from '../../components/button';

export function HookComponent() {
    const [count, setCount] = useState(1);
    function handleClick() {
        setCount(count + 1);
    };
    return (
        <div>
            Here is hook component
            <p>Count is {count}</p>
            <Button onClick={handleClick}/>
        </div>
    );
}