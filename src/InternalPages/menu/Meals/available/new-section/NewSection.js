import React from 'react';
import Test from './Test';

export default function NewSection() {
    return (
        <>
            <h1 id={'newSection'}>قسم جديد </h1>
            <div className="meal">
                <Test />
            </div>
        </>
    );
}