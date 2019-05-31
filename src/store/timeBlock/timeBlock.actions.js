import { timeBlockActions } from 'store/common/actionTypes'

export const setStartTime = (id, start) => ({
    type: timeBlockActions.SET_START_TIME,
    id,
    start,
})
