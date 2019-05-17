import React from 'react';

export function HookComponent(props) {
    return (
        <div>
            <form>
                <p>Here is Hook component</p>
                <label>Name:</label>
                <input value={props.name} readOnly />
            </form>
        </div>
    );
}