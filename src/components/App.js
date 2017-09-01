import React, { Component } from 'react'
import './App.css';

export default class App extends Component{
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
                        />
                    </div>
                    <button type="button" className="btn btn-success">Add Reminder</button>
                </div>
            </div>
        )
    }
};