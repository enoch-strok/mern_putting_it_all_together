import React, { Component } from 'react';

class PeopleInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {                    
            age: this.props.age
        };
    }
    changeAge = () => {
        let newAge = this.state.age +1;   
        this.setState({age: newAge});      
        
    }

    render(){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <fieldset>
                <section>
                <h1>My name is {lastName}, { firstName}  </h1>
                <p>Age:  {this.state.age}</p>      

                <p>Hair Color: { hairColor }</p>
                </section>
                <button onClick={this.changeAge}>Birthday Button for {firstName} {lastName} </button>
            </fieldset>
        );
    }
}
export default PeopleInfo;