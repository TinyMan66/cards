const initialState: InitialStateType = {}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
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
export type ProfileActionsType = ReturnType<typeof fakeAC>