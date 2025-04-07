import cartreducer from './cartreducer'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
/* const stripe = require('stripe')('sk_test_51R5Wcm2Nj28QjI8Jl4SJnwXNXc2UoPHFnGNeLB9X52PJSD33kYGJ3cWZaKCAG5iliwbmuI4zAvNQkWEbHsJ2a3Dw00A4iF3vEt');
 */
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartreducer)

export const store = configureStore({
  reducer: {
    cart: persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)