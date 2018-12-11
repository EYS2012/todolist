import React, { Component } from 'react';
import { TaskInputBlock } from './components/taskInputBlock';
import { DataInputBlock } from './components/dataInputBlock';
import { FormOptions } from './components/formOptions';
import { FormActions } from './components/formActions';

class App extends Component {
  render() {
  	const classForApp = 'ddd';

    return (
			<React.Fragment>
      <div className={ classForApp + 'App' }>
	      <br />
        <div className="container">
	<div className="row">
		<div className="col-md-12">
			<h3>Test Project</h3>
		</div>
	</div>
	<div className="row">
		<div className="col-md-6">
      <form id="form1" action="">

      <TaskInputBlock />

      <DataInputBlock />

      <FormOptions />

      <FormActions />
    
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
