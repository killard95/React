export function Football(props) {
    const shoot = (a, evenement) => {
        // alert(evenement.type);
        // console.log(evenement);
        if(a == true){
            return <MadeGoal />
        }
        return <MissedGoal />
    }
    return (
        <button onClick={(evenement)=>{
            shoot(props.but, evenement);
        }}>
            Tir
        </button>
    )
}



export function MissedGoal() {
    return <h1>Raté</h1>
}

export function MadeGoal() {
    return <h1>But</h1>
}