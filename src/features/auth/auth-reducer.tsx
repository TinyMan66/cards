const initialState: InitialStateType = {}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
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
export type AuthActionsType = ReturnType<typeof fakeAC>