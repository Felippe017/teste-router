import React from 'react';
import { useParams } from 'react-router-dom'

function NameId() {
    const { id } = useParams()
    return (
        <h1>NAME {id}</h1>
    );
}

export default NameId;