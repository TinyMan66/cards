const initialState: InitialStateType = {}

export const passwordReducer = (state: InitialStateType = initialState, action: PasswordActionsType): InitialStateType => {
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
export type PasswordActionsType = ReturnType<typeof fakeAC>