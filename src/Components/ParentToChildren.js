import React from 'react'
class ParentToChildrenObj extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data: "data from parent"
        }
    }

    render(){
        const {data}=this.state
        return(
            <div>
                <Child dataParentToChildren={data} />
            </div>
        )
    }
}

class Child extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.props.dataParentToChildren
         }
    }

    render(){
        const {data}=this.state
        return(
            <div>
                {data}
            </div>
        ) 
    }
}

export default ParentToChildrenObj;