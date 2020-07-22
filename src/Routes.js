import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

const backButton = (
    <div className='card-body'>
        <Link className="btn btn-info" to='/dogs'>Go Back</Link>
    </div>
  );

const getDog = (dogs, name) => {
    const dog = dogs.find(dog => dog.src.toLowerCase() === name.toLowerCase());
    return dog ? (
        <div className="row justify-content-center">
            <div className="col-11 colg-lg-5">
            <DogDetails {...dog} back={backButton} />
            </div>
        </div>
    ) : null;
  }

const MyRoutes = ({dogs}) => (
    <Switch>
        <Route exact path='/dogs' render={() => <DogList { ...{ dogs } }/> } />
        <Route exact path='/dogs/:name' render={({match: {params: {name}}}) => getDog(dogs, name)} />
        <Redirect to='/dogs' />
    </Switch>
);

export default MyRoutes;