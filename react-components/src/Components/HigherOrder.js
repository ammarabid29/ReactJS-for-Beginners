import React from "react";

const UpdatedComponent = OriginalComponent => {
    class NewComp extends React.Component {
        render() {
            return <OriginalComponent name="The user" />
        }
    }
    return NewComp;
}

export default UpdatedComponent;