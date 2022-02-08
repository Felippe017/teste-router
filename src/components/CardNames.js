import React from 'react';
import { Link }  from 'react-router-dom'

function CardNames(props) {
    return (
        <ul>
            {
                props.data.map(({nome, id}) => {
                    return <Link to={`/names/${id}`}><li key={id}>{nome}</li></Link>
                })
            }
        </ul>
    );
}

export default CardNames;