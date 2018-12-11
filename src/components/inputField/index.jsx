import React, { Component } from 'react';

export class InputField extends Component {
    render() {
        return (
            <React.Fragment>
                <input type="text" className="form-control" id="taskData" aria-describedby="taskDataHelp" placeholder="Занятие" />
            </React.Fragment>
        )
    }
}