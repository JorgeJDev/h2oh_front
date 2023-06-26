
import { configureStore } from '@reduxjs/toolkit'
import { answersSlice } from './slice/answers/answersSlice'
import { visitedSlice } from './slice/visited/visitedSlice'
import { scoreSlice } from './slice/score/scoreSlice'
import { userSlice } from './slice/user/userSlice'

export const store = configureStore({
    reducer: {
        answers: answersSlice.reducer,
        visited: visitedSlice.reducer,
        score: scoreSlice.reducer,
        user: userSlice.reducer
    },
})