import React from 'react'

const User = (props) => {

    // const {data} from = props;
    console.log(props);

    return (
        <>
            <h1>User Component : {props.data.name}</h1>
            <h1>User Component : {props.data.age}</h1>
        </>

    )
}

export default User