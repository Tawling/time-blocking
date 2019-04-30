import { dayViewActions } from 'store/common/actionTypes'

export const setZoom = (zoom) => ({
    type: dayViewActions.SET_ZOOM,
    zoom,
})
