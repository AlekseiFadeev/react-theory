import React from "react";

// function car() {
//     return (
//         <div>This is car component</div>
//     )
// }

// const car = () => {
//     return (
//         <div>This is car component</div>
//     )
// }

// const car = () => (
//     <div>
//         This is car component
//         <strong> Test</strong>
//     </div>
// )
//
// export default car;
//
// export default () => (
//     <div>
//         <p>This is car component</p>
//         <p>Number: <strong>{Math.round(Math.random()*100)}</strong></p>
//     </div>
// )

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)