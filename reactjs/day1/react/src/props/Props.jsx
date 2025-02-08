import React from "react";

class Props extends React.Component {
    render() {
        return (
            <>
            {
                React.createElement("h1", "null", "hello-world")
            }
            {
                React.createElement("div", {id : "demo"} , React.createElement("span", "null", "hello-world"))
            }
            <h1>hello-world</h1>
            <h1>{5+5}</h1>
            </>
        )
    }        

}

export default Props