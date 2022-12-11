import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {MainActionsType, appReducer} from "./app-reducer";
import {AuthActionsType, authReducer} from "../features/auth/auth-reducer";
import {RegistrationActionsType, registrationReducer} from "../features/auth/registration/registration-reducer";
import {PasswordActionsType, passwordReducer} from "../features/auth/password/password-reducer";
import {ProfileActionsType, profileReducer} from "../features/auth/profile/profile-reducer";

const rootReducer = combineReducers({
    main: appReducer,
    auth: authReducer,
    registration: registrationReducer,
    profile: profileReducer,
    password: passwordReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionsType = MainActionsType | AuthActionsType | RegistrationActionsType | ProfileActionsType | PasswordActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store;