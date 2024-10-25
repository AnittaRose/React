import {React, Component} from 'react';

class Greeting extends Component{


    render() {
        return(
            <>
                <h1>Iam a class Component</h1>
                <p>Hi {this.props.name}, Your age is{this.props.age}</p>
            </>
        );
    }
}

export default Greeting;