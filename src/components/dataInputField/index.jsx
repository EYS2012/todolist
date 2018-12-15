import React, { Component } from 'react';

export class DataInputField extends Component {
    render() {
        return (
            <>
                <div className="input-group">
                    <div onClick={ null } className="input-group-prepend">
                        <span className="input-group-text" id="calendarOpener"><i className="fa fa-calendar"></i></span>
                    </div>
					<input readOnly type="text" className="form-control" id="reminderData" aria-describedby="reminderDataHelp" placeholder="Напомнить" />
                </div>
            </>
        )
    }
}