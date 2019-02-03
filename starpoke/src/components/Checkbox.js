import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
    render() {
        return (
            <div className="container">
                <div className="onoffswitch">
                    <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="myonoffswitch"
                        onChange={() => this.props.action()}
                        defaultChecked={this.props.isChecked}
                    />
                    <label
                        className="onoffswitch-label"
                        htmlFor="myonoffswitch"
                    >
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                    </label>
                </div>
            </div>
        );
    }
}

export default Checkbox;
