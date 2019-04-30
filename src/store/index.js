import { combineReducers } from 'redux'
import dayViewReducer from 'store/dayView/dayView.reducer'

export default combineReducers({
    dayView: dayViewReducer,
})
