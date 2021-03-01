import React from 'react'; 
import { loadUser } from '../../../utility/LocalStorage'; 
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'; 
import { formatDate } from '../../../utility/Formatter';

const UserProfile = () => { 
    const user = loadUser(); 
    return ( 
        <div>
            <p>{user.name}</p>
             <p>{user.email}</p>
          <p>Account created on {formatDate(user.created_at)}</p> </div>
        ); 
    };


export default UserProfile; 