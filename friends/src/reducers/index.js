import {
	LOGIN_START,
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
	friends: [],
	deletingFriends: false,
	fetchingFriends: false,
	loggingIn: false,
	savingFriends: false,
	updatingFrend: false,
	error: null
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START: {
			return {
				...state,
				loggingIn: true
			};
		}
		case FETCH_DATA_START: {
			return {
				...state,
				error: '',
				fetchingFriends: true
			};
		}
		case FETCH_DATA_SUCCESS: {
			return {
				...state,
				error: '',
				fetchingFriends: false,
				friends: action.payload
			};
		}
		case FETCH_DATA_FAILURE: {
			return {
				...state,
				error: action.payload.status
			};
		}
		default:
			return state;
	}
};

export default rootReducer;
