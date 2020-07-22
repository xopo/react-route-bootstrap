import React from 'react';

const DogDetails = ({ name, age, src, facts, back }) => {console.log({name, age, src, facts}); return (
    <div className='Dog text-center card' key={`${name}-${age}`}>
        <img className='card-img-top' src={`/images/${src}.jpg`} alt={name} />
        <div className='card-body'>
            <h3 className='card-title'>
                {name}
            </h3>
            <h5 className='card-subtitle text-muted'>
                {age} years old
            </h5>
        </div>
        { facts ? (
            <ul className='list-group list-group-flush'>
                {facts.map((issue, i) => <li key={i} className='list-group-item'>{issue}</li>)}
            </ul>
        ) : null }
        { back ? back : null}
    </div>
)};

export default DogDetails;