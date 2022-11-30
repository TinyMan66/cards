import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {MainActionsType, mainReducer} from "./reducers/main-reducer";
import {AuthActionsType, authReducer} from "./reducers/auth-reducer";
import {RegistrationActionsType, registrationReducer} from "./reducers/registration-reducer";
import {PasswordActionsType, passwordReducer} from "./reducers/password-reducer";
import {ProfileActionsType, profileReducer} from "./reducers/profile-reducer";

const rootReducer = combineReducers({
    main: mainReducer,
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