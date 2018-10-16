import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super();

        this.state={
            input: ''
        }
        this.handleAdd = this.handleAdd.bind(this);
    }
    getUserInput(e) {
        this.setState({ input: e })
      }
//When do I preface .props with this? and when not?
//this.props.add is bringing in addToList function from app.js...why doesn't it live in NewTask instead?
      handleAdd () {
        this.props.add(this.state.input);
          this.setState({
              input: ''
          })
          //Why is input an empty string? Is that just to reset the string blank? I though addTaskToList had to do with list, not input

      }
//when to add parenthesis to function like in HandleAdd, also no arrow func needed? when to not? When What is value={}? 
    render() {
        return (
            <div>
                <input value={this.state.input} placeholder="Enter New Task" onChange={(e) => this.getUserInput(e.target.value)} />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;