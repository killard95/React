import React from 'react';

class ChildToParentObj extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    handleCallback = (childData) => {
        this.setState({data: childData})
    }
    render(){
        const {data} = this.state;
        return (
            <div>
                <Child parentCallback={this.handleCallback} />
                {data}
            </div>
        )
    }
}

class Child extends React.Component{

   onTrigger = (event) => {
    event.preventDefault()
    this.props.parentCallback("data from child")
   }

    render(){
        return(
            <form onSubmit={this.onTrigger}>
                <input
                    type="submit"
                    value="sendToParent"
                />
            </form>
        )
    }
}
export default ChildToParentObj;