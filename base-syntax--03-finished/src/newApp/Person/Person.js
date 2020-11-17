import React, { Component } from 'react';

import './Person.css'

class Person extends Component {

    render () {
        return (
            <div className="Person">
                my name is {this.props.name} and my age is {this.props.age}
            </div>
        )
    }

}

export default Person;