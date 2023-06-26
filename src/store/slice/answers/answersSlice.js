import { createSlice } from '@reduxjs/toolkit'
import { getLocal, setLocal } from "../../../helpers/localStorage";


export const answersSlice = createSlice({


    name: 'answers',
    initialState: {

        answersObject: getLocal() || {},
    },
    reducers: {
        setAnswers: (state, action) => {

            state.answersObject = action.payload
        }
    }

})

export const { setAnswers } = answersSlice.actions