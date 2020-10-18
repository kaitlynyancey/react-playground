import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            message: 'tick'
        }
        
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
            if(this.state.count % 2 === 0 && this.state.count < 8){
                this.setState({
                    message: 'tick',
                })
            }
            else if(this.state.count % 2 !== 0 && this.state.count < 8){
                this.setState({
                    message: 'tock',
                })
            }
            else if(this.state.count >= 8){
                this.setState({
                    message: 'BOOM!!!!'
                })
                clearInterval(this.interval)
            }
            console.log(this.state.count)   
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Bomb