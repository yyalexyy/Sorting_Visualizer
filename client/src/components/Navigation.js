import React from 'react';
import { Link } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <Link to="/"/>
          <Link to="/Sorting"/>
          <Link to="/Result"/>
       </div>
    );
}
 
export default Navigation;