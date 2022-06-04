import React from "react";
import ReactDOM from "react-dom";

const TestApp = () => {
    return <h1>TestApp</h1>
};

if (document.getElementById('test-app')) {
    ReactDOM.render(<TestApp />, document.getElementById('test-app'));
}