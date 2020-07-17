import React from 'react'
import './business.css'
import Business from '../Business/Business';
import business from '../Business/Business';

class BusinessList extends React.Component{
    render(){
        return(
            <div class="BusinessList">
                <business />
                <business />
                <business />
                <business />
                <business />
                <business />
            </div>
        )
    }
}

export default BusinessList