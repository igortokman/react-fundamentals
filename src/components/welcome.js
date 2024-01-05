import Intro from "./intro";


function Welcome({name, loggin}) {

    return (
        <div>
            {loggin && <p>Hello, {name}</p>}
            {!loggin && <p>Sign in, we don't known you - {name}</p>}
            <Intro name={name}/>
            <button onClick={handle}>BTN</button>
        </div>
    );
}

function handle() {
    console.log("clicked")
}



export default Welcome;
