/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    firstTime: true,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        onFirstRun: (state) => {
            state.firstTime = false;
        },
        getFirstTime: (state, actions) => {
            state.firstTime = actions.payload
        }
    }
});

export const { onFirstRun, getFirstTime } = settingsSlice.actions;

export default settingsSlice.reducer;