import { ACTIONS } from "../../ActionType";

const initialState = {
    datas: [],
};

export default function reducer(state = initialState, action) {
    const {
        POST_DATA_SUCCESS,
        POST_DATA_FAILURE,
    } = ACTIONS;

    switch (action.type) {
        case POST_DATA_SUCCESS:
            return { datas: action.data };
        case POST_DATA_FAILURE:
        default:
            return state;
    }
}