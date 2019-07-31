type State = {
    count: number
    unit: string
}

// type IncrementAction = {
//     type: "LONG_PREFIX_INCREMENT"
// }

type IncrementAction = ReturnType<typeof increment>
type DecrementAction = ReturnType<typeof decrement>
type SetCountAction = ReturnType<typeof setCount>

type Actions = IncrementAction | DecrementAction | SetCountAction

// action types
// const Assertion(as constシグネチャ)で付与すると期待した型が指定される
export const COUNT = {
    INCREMENT:  "LONG_PREFIX_INCREMENT",
    DECREMENT: "LONG_PREFIX_DECREMENT",
    SET_COUNT: "LONG_PREFIX_SET_COUNT"
} as const

// action creators
export const increment = () => {
    return {type: COUNT.INCREMENT}
}

export const decrement = () =>  {
    return {type: COUNT.DECREMENT}
}

export const setCount = (amount: number) => {
    return {type: COUNT.SET_COUNT, payload: {amount}}
}

export const initialState: State = {
    count: 0,
    unit: "pt"
};

// reducer
export const reducer = (state: State, action: Actions) => {
    switch(action.type) {
        case COUNT.INCREMENT:
        return {...state, count: state.count+1}

        case COUNT.DECREMENT:
        return {...state, count: state.count-1}

        case COUNT.SET_COUNT:
        return {...state, count: action.payload.amount}
    }
}
