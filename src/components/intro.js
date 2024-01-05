import Inner from "./inner";

export default function Intro({name}) {
    return (
        <div>
            <Inner content="content goes here"/>
            <h4>Introduction goes here, {name}</h4>
        </div>
    );
}