import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

    }

    addReminder(){
        console.log('this', this);    
        if (this.state.text !== '')
          this.props.addReminder(this.state.text);
        this.setState({text:''});
        
    }

    renderReminders() {
        const { reminders } = this.props;
        return (            
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return (
                            <li className="list-group-item" key={reminder.id}>
                                <div className="grouping">
                                    {reminder.text}
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                                
                            </li>
                        )
                    })
                }
            </ul>
            
        )
    }

    render(){
        return (
            <div className="App">
                <div className="title">
                    Reminder PRO
                </div>
                <div className="form-inline ">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={e => this.setState({text: e.target.value})}
                            value={this.state.text}
                        />                        
                    </div>
                    <button type="button" className="btn btn-success add" onClick={() => this.addReminder()}>Add Reminder!</button>                    
                </div>
                <div className="data">
                    { this.renderReminders() }
                </div>
            </div>
        )
    }
};

//Mapping State to Props
function mapStateToProps(state){    
    return {
        reminders: state
    }
}

//match functions with props
function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);