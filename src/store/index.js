import { combineReducers } from 'redux'
import dayViewReducer from 'store/dayView/dayView.reducer'

/*
Example potential state structure?

{
    entities: {
        templates: {
            1: {
                length: 20,
                title: 'Template',
                content: null,
                color: '#ad63f3',
            }
        }
        blocks: {
            1: {
                start: 11,
                length: 20,
                title: 'Butts',
                content: 'Block content',
                taskId: null,
                color: '#FF0000',
            },
            2: {...},
            3: {...},
            4: {...},
        },
        dayPlans: {
            1: {
                blocks: [1, 2, 3, 4], // Sorted based on start time
                date: 'date', // Date for the day plan
            },
        },
    },
    dayPlan: {
        zoom: 0,
        selectedBlocks: [],
    },
}

*/

export default combineReducers({
    dayView: dayViewReducer,
})
