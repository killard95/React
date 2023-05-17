import React from 'react';

export default function Parent(){
    const data = "Data from Parent Function"
    return(
        <div>
            <Child dataFromParent={data} />
        </div>
    )
}

function Child({dataFromParent}) {
    return(
            <div>
                <h1>{dataFromParent}</h1>
            </div>
        )
}

