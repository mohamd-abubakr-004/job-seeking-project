import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    isAuth: false,
    userData: null
}

const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            login: (state, action) => {
                state.isAuth = true;
                state.userData = action.payload;
            },
            logout: (state) => {
                state.isAuth = false;
                state.userData = null;
            }
        }
    }
)

export const {login,logout} = userSlice.actions

export default userSlice.reducer