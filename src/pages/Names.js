import React from 'react';
import CardNames from '../components/CardNames';
import data from '../data';

function Names() {
    return (
        <main>
            <CardNames data={data}/>
        </main>
    );
}

export default Names;