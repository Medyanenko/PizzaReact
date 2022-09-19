import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice';
export const store = configureStore({
  reducer: {
    counter: filterSlice,
  },
})
console.log(store);

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch