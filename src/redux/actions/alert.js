import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from "../types";

export const setAlert = (alertType, message) => dispatch => {
    const id = uuidv4()
    dispatch(
        {
            type: SET_ALERT,
            payload: {
                alertType,
                message,
                id
            }
        }
    )

    setTimeout(() => dispatch(
        {
            type: REMOVE_ALERT,
            id
        }
    ),
        2000
    )
}