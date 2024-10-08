export default function KillCounter(props) {
    let title = "Kill Counter";

    //Conditional rendeing with if statement
    if (props.counter == 1) {
        return <h3>First Blood!</h3>;
    }

    if (props.counter == 2) {
        title = "Doudle Kill!";
    }

    if (props.counter > 9) {
        title = "GotLike!";
    } else if (props.counter > 5) {
        title = "Unstoppable!";
    } else if (props.counter > 3) {
        title = "Multi Kill!";
    }

    return (
        <>{props.counter == 3 ? <h3>Tripple Kill!</h3> : <h3>{title}</h3>}</>
    );
}
