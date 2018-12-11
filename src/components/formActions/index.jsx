import React, { Component } from 'react';

export class FormActions extends Component {
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-primary" onClick={ null } >Add task</button>
                <button type="button" className="btn btn-light" onClick={ null }>Clear Form</button>
            </React.Fragment>
        )
    }
}