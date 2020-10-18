import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8,
    }
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }

    handleButtonClick = () => {
        console.log('click')
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(()=>{
            let randNum = Math.ceil(Math.random()*8)
            this.setState({
                chamber: randNum,
                spinningTheChamber: false,
            })
            console.log(this.state.chamber)
            console.log(this.props.bulletInChamber)
        }, 2000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    displayResults(){
        if(this.state.spinningTheChamber){
            return(
                'spinning the chamber and pulling the trigger! ...'
            )
        }
        else if(this.state.chamber === this.props.bulletInChamber){
            return('BANG!!!')
        }
        else{
            return("you're safe")
        }
    }

    render(){
        return(
            <div>
                <p>{this.displayResults()}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun