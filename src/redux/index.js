import {configureStore,combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import users from './reducers/users'
import banners from './reducers/banners'
import gallery from './reducers/gallery'
import user from "./reducers/user";
import vacancies from "./reducers/vacancies";
import oneBanner from "./reducers/oneBanner";
import oneVacancies from "./reducers/oneVacancies";
import video from "./reducers/video";

const rootReducer  = combineReducers({
    user,
    users,
    banners,
    oneBanner,
    vacancies,
    gallery,
    oneVacancies,
    video
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export default store
