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
        this.props.addReminder(this.state.text);
    }

    render(){
        return (
            <div className="App">
                <div className="title">
                    Reminder PRO
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={e => this.setState({text: e.target.value})}
                        />
                    </div>
                    <button type="button" className="btn btn-success" onClick={() => this.addReminder()}>Add Reminder!</button>
                </div>
            </div>
        )
    }
};

//match functions with props
function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);