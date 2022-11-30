const initialState: InitialStateType = {}

export const registrationReducer = (state: InitialStateType = initialState, action: RegistrationActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return {...state}
    }
}

// constants
const Fake = 'Fake'

// actions
const fakeAC = () => ({type: Fake} as const)

// types
export type InitialStateType = {}
export type RegistrationActionsType = ReturnType<typeof fakeAC>