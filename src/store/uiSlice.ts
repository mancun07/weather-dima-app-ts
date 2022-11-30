import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Notification {
    message: string;
}

interface uiState {
    notification: Notification | null;
    loading: boolean;
}

const initialState: uiState = {
    notification: null,
    loading: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showNotification(state, action: PayloadAction<{ message: string }>) {
            state.notification! = action.payload

        },
        clearNotification(state) {
            state.notification = null
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;