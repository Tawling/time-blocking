export const defaultDayViewState = {
    zoom: 1,
}

export default (state = defaultDayViewState, action) => {
    switch (action.type) {
        case 'SET_ZOOM':
            return { ...state, zoom: action.zoom }
        default:
            return state
    }
}
