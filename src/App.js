import React, { Component } from 'react';
// import { TaskInputBlock } from './components/taskinputblock';
// import { DataInputBlock } from './components/datainputblock';
// import { FormOptions } from './components/formoptions';
// import { FormActions } from './components/formactions';
import TextInput from './components/form/input.jsx';


class App extends Component {
  constructor(props, context) {
    super(props, context); // для использования this.props, переданного через родителя
    this.state = {
      data: {},
    }
};

  handleChange = (e) => { // обработчик события - нажатие клавиши
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log('>>handleChange', name, value);
    this.setState({
      data: { ...this.state.data, [name]: value },
    });
    /*
    const stateCopy = Object.assign({}, this.state);
    stateCopy.data[name] = value;
    this.setState(stateCopy);
    - неэффективный метод, т.к. перезатирает весь объект
    */
};  

  render() {
    const classForApp = 'ddd';
    const inputName = 'taskName';

    return (
			<React.Fragment>
      <div className={ classForApp + 'App' }>
	      <br />
        <div className="container">
	<div className="row">
		<div className="col-md-12">
			<h3>React TODO LIST</h3>
		</div>
	</div>
	<div className="row">
		<div className="col-md-6">
    <form id='form1' action=''>

<div className='form-group'>
  <label htmlFor='taskData'>Название напоминания</label>
  <TextInput
      name={ inputName}
      aria-describedby='reminderDataHelp'
      placeholder='Напомнить'
      value={ this.state.data[inputName] ||  ''}
      onChange= { this.handleChange }
    />
  <small id='taskDataHelp' className='form-text text-muted'>Введите название занятия на завтра.</small>
</div>

<div className='form-group'>
  <label htmlFor='reminderData'>Когда напомнить</label>
  <div className='input-group'>
    <div onClick={ null } className='input-group-prepend'>
      <span
        style={ {cursor: 'pointer !important' } }
        className='input-group-text'
        id='calendarOpener'
      >

        <i className='fa fa-calendar'></i>
      </span>
    </div>
    <input
			type='text'
			className='form-control'
			id='reminderData'
			aria-describedby='reminderDataHelp'
			placeholder='Напомнить'
		/>
  </div>
  <small id='reminderDataHelp' className='form-text text-muted'>Введите дату и время напоминания.
  </small>
</div>

<div className='form-group form-check'>
  <input
    type='checkbox'
    className='form-check-input'
    id='Check1'
    value='some data' />
  <label className='form-check-label' htmlFor='exampleCheck1'>Важно</label>
</div>

<button type='button' className='btn btn-primary' onClick={ null }>Add task</button>
<button type='button' className='btn btn-light' onClick={ null }>Clear Form</button>

</form>
		</div>
		<div className="col-md-6">
      <div className="card" style={ {width: '100%'} }>
        <div className="card-body">
          <h4 className="card-title">Список дел на ближайшее время:</h4>
          <span id="tomDate"></span>
            <ul className="list-group" id="task_list">
            </ul>
          <br />
          <button href="#" onClick={ null } className="btn btn-primary">Clear List</button>
        </div>
      </div>
		</div>
	</div>
</div>
      </div>
			</React.Fragment>
    );
  }
}

export default App;
