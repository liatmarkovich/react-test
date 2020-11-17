import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [
            {"name": "shay", "age": "28"},
            {"name": "ssss", "age": "43"},
            {"name":"cccc", "age":"53"}
        ]
    };

    render (){
        return (
            <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
            </div>
        )
    }

}

export default App;