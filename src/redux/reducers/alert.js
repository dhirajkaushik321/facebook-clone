const { SET_ALERT,REMOVE_ALERT } = require("../types")

const initialState = {
    alerts: []
}

const alertReducer =(state=initialState, action)=>{

    const {type,payload} = action
    switch(type){
        case SET_ALERT:
            return {
                alerts:[payload,...state.alerts]
            }
        case REMOVE_ALERT:
            return {
                alerts:state.alerts.filter(alert=>alert.id!=payload.id)
            }
        default:
            return state
    }

}

export default alertReducer