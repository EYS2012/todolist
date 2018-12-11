import React, { Component } from 'react';
import { DataInputField } from '../datainputfield';

export class DataInputBlock extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="reminderData">Когда напомнить</label>
                    <DataInputField />
                    <small id="reminderDataHelp" className="form-text text-muted">Введите дату и время напоминания.</small>
		        </div>
            </React.Fragment>
        )
    }
}