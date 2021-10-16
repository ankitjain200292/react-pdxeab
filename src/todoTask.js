import React from 'react';
import SubjectTimer from './subjectTimer';

class TodoTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSub: '',
      subjects: [
        {
          name: 'test',
          time: 0,
          state: true,
        },
      ],
    };

    this.inputRef = React.createRef();
    this.addTodo = this.addTodo.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
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

    this.setState({ currentSub: this.inputRef.current.value });
  }

  stopTimer(name) {
    console.log(name);
    this.setState({
      subjects: this.state.subjects.map((subject) => {
        if (subject.name == name) {
          subject.state = false;
        }
        return subject;
      }),
    });
  }

  resumeTimer(name) {
    this.setState({
      subjects: this.state.subjects.map((subject) => {
        if (subject.name == name) {
          subject.state = true;
        } else {
          subject.state = false;
        }
        return subject;
      }),
    });
  }

  render() {
    return (
      <div>
        {this.state.currentSub}
        {this.state.subjects.map((subject) => {
          return (
            <div>
              {subject.name}
              <SubjectTimer timerState={subject.state} stopTimer = {}/>
              {subject.state ? (
                <button onClick={() => this.stopTimer(subject.name)}>
                  Stop
                </button>
              ) : (
                <button onClick={() => this.resumeTimer(subject.name)}>
                  Resume
                </button>
              )}
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
