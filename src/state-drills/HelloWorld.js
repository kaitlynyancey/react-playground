import React from 'react';

class HelloWorld extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            who: 'world',
        }
        
    }

    handleButtonClick = e => {
        const newWho = e.target.value;
        this.setState({
            who: newWho
        })
    }

    render(){
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleButtonClick} value="world!">World</button>
                <button onClick={this.handleButtonClick} value="friend!">Friend</button>
                <button onClick={this.handleButtonClick} value="React!">React</button>
            </div>
        )
    }
}

export default HelloWorld