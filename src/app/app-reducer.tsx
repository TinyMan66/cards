const initialState: InitialStateType = {}

export const appReducer = (state: InitialStateType = initialState, action: MainActionsType): InitialStateType => {
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
export type MainActionsType = ReturnType<typeof fakeAC>