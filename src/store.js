import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/adminReducer';

export const store = configureStore ({
    reducer:{
        admin:adminReducer
    }
})

