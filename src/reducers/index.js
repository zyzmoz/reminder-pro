import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
// import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
    //get data from action object and matching with those names
    let { text, dueDate } = action;
    return {        
        id: Math.random(),
        text,
        dueDate
    }
}

//state should be de initial VALUE or STATE of function
// Eg. if I didn't had saved some data my object will be state = [];
const initialState = JSON.parse(localStorage.getItem('reminders'));

const removeById = (state = initialState,id) => {
    const reminders = state.filter(reminder =>  reminder.id !== id);    
    return reminders;    
}

const reminders = (state = initialState, action)  => {
    let reminders = null;
    // state = read_cookie('reminders');
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            localStorage.setItem('reminders', JSON.stringify(reminders));
            // bake_cookie('reminders', reminders);
            console.log('reminders state',reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            // bake_cookie('reminders', reminders);
            localStorage.setItem('reminders', JSON.stringify(reminders));
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            // bake_cookie('reminders', reminders);
            localStorage.setItem('reminders', JSON.stringify(reminders));
            return reminders;
        default:
            return state;
    }
}

export default reminders;