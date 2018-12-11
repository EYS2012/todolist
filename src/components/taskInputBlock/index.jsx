import React, { Component } from 'react';
import { InputField } from '../inputfield';

export class TaskInputBlock extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-group">
    		        <label htmlFor="taskData">Название напоминания</label>
                        <InputField />
    		            <small id="taskDataHelp" className="form-text text-muted">Введите название занятия на завтра.</small>
  		        </div>
            </React.Fragment>
        )
    }
}