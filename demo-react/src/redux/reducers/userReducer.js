import { v4 as uuidv4 } from 'uuid';
import { LOGIN, LOGOUT, REGISTER } from '../const';

const initialUsers = {
    userList: [
        {
            id: uuidv4(),
            name: "phuongtran191",
            password: "12345678",
            role: "user",
        },
        {
            id: uuidv4(),
            name: "admin",
            password: "admin123",
            role: "admin",
        },
    ],
    userInfo: {},
}

function userReducer(state = initialUsers, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                userInfo: action.payload,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                userInfo: {},
            };
        }
        case REGISTER: {
            return {
                ...state,
                userList: [
                    ...state.userList,
                    action.payload,
                ]
            };
        }
        default:
            return state;
    }
}

export default userReducer;
