import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
//tool to manipulate dates 
import moment from 'moment';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }

    }

    addReminder(){
        console.log('this', this);    
        if (this.state.text !== '')
          this.props.addReminder(this.state.text, this.state.dueDate);
        this.setState({text:'', dueDate: ''});
        
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    clearReminders(){
        this.props.clearReminders();
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
                                    <div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
                                    <button className="btn btn-danger" onClick={() => this.deleteReminder(reminder.id)}>Delete</button>
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
                        <input className="form-control" 
                               type="datetime-local"
                               onChange={e => this.setState({dueDate: e.target.value})}
                               value={this.state.dueDate}
                        />                  
                    </div>
                    <button type="button" className="btn btn-success add" onClick={() => this.addReminder()}>Add Reminder!</button>                    
                </div>
                <div className="data">
                    { this.renderReminders() }
                    <div className="btn btn-danger"
                        onClick={() => this.clearReminders()}
                    >
                        Clear Reminders
                    </div>
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
    return bindActionCreators({ addReminder, deleteReminder, clearReminders}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);