import { createSlice } from '@reduxjs/toolkit'
import { getScoreLocal } from '../../../helpers/localStorage'


export const scoreSlice = createSlice({


    name: 'score',
    initialState: {
        scoreObject: getScoreLocal()
        // scoreObject: {
        //     question1: 0,
        //     question2: 0,
        //     question3: 0,
        //     question4: 0,
        //     question5: 0,
        // },
    },
    reducers: {
        setScore: (state, action) => {

            state.scoreObject = action.payload
        }
    }

})

export const { setScore } = scoreSlice.actions