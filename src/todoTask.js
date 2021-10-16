import React from 'react';
import SubjectTimer from './subjectTimer';

class TodoTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tmpSub: '',
      subjects: [
      ],
    };
    this.inputRef = React.createRef();
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const oldState = this.state.subjects.map((subject) => {
      subject.state = false;
      return subject;
    });
    this.setState({
      subjects: this.state.subjects.concat({
        name: this.inputRef.current.value,
        time: 0,
        state: true,
      }),
    });
  }

  stopTimer(name) {
    
    const subjects = this.state.subjects;
    // function to change the state of current subject to false
  }

  ResumeTimer(name) {
    // function to change the state of other subject to false and current top true
  }

  updateTiming(name) {
    // function for chaning the value of timer 
  }

  render() {
    return (
      <div>
        {this.state.subjects.map((subject) => {
          return (
            <div>
              {subject.name}
              <SubjectTimer timerState={subject.state} stopTimer = {}/>
              {subject.state ? <button onClick={this.stopTimer(subject.name)} > Stop </button> : <button onClick={this.stopTimer(subject.name)}> Resume </button> }
            </div>
          );
        })}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.addTodo}> Submit </button>
      </div>
    );
  }
}

export default TodoTask;


//
