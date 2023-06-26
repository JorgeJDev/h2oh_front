import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({


    name: 'user',
    initialState: {
        userObject: localStorage.getItem("id")
        // userObject: {
        //     question1: 0,
        //     question2: 0,
        //     question3: 0,
        //     question4: 0,
        //     question5: 0,
        // },
    },
    reducers: {
        setUser: (state, action) => {

            state.userObject = action.payload
        }
    }

})

export const { setUser } = userSlice.actions