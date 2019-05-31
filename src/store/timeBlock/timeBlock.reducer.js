import { timeBlockActions } from 'store/common/actionTypes'

export const defaultTimeBlockState = {
    start: 0,
    length: 0,
    title: 'Block',
}

export default (state = defaultTimeBlockState, action) => {
    switch (action.type) {
        case timeBlockActions.SET_START_TIME:
            return { ...state, start: action.start }
    }
    return state
}
