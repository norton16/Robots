import React from 'react';

const Card = ({ name, email, id }) => {
    return ( 
        // can only return one element
        <div class="card" className='tc bg-white dib br2 pa3 ma3 ha 32'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'></img>
            <div>
               <h2>{name}</h2> 
               <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;