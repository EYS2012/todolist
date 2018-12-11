import React, { Component } from 'react';

export class FormOptions extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="Check1" value="some data" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Важно</label>
                </div>
            </React.Fragment>
        )
    }
}