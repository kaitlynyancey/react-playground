import React from 'react';

class Accordian extends React.Component {
    //default Props
    static defaultProps = {
        sections: []
    };
    //States
    state = {
        currentIndex: null,
    }
    renderButtons(){
        return this.props.sections.map((section,index)=>(
                <li key={index}>
                    <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button>
                    {this.isSelected(index)}
                </li>
            )
        )
    }
    handleButtonClick = (index) => {
        console.log('button clicked!', { index })
        this.setState({ currentIndex: index })
    }

    isSelected(index){
        if(this.state.currentIndex === index)
            return(
                <p>
                    {this.props.sections[index].content}
                </p>
            )

    }

    render(){
        return(
            <div>
                <ul>
                    {this.renderButtons()}
                </ul>
            </div>
        )
    }
}

export default Accordian