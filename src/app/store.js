import { configureStore } from '@reduxjs/toolkit';
import carsReducer from '../features/cars/carsSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
