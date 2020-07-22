import React from 'react';
import './DogList.css';
import DogDetails from './DogDetails';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => (
    <div>
        <h1 className='dispaly-1 text-center'>Dog List!</h1>
        <div className='row'>
            {dogs && dogs.map(((dog, id) => {
                const { age, name, src } = dog;
                const nameLink = <Link to={`/dogs/${name}`}>{name}</Link>;
                return (
                    <div key={id} className="col-sm-6 col-md-4">
                        <DogDetails {...{age, name: nameLink, src}} /> 
                    </div>
                )
            }))}
        </div>
    </div>
);

export default DogList;