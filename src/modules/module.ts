type State = {
    count: number
    unit: string
}

type IncrementAction = {
    type: "LONG_PREFIX_INCREMENT"
}

type DecrementAction = {
    type: "LONG_PREFIX_DECREMENT"
}

type SetCountAction = {
    type: "LONG_PREFIX_SET_COUNT",
    payload: {amount: number}
}

type Actions = IncrementAction | DecrementAction | SetCountAction

// action types
// const Assertion(as constシグネチャ)で付与すると期待した型が指定される
export const COUNT = {
    INCREMENT:  "LONG_PREFIX_INCREMENT",
    DECREMENT: "LONG_PREFIX_DECREMENT",
    SET_COUNT: "LONG_PREFIX_SET_COUNT"
} as const

// action creaators
export const increment = (): IncrementAction => {
    return {type: COUNT.INCREMENT}
}

export const decrement = (): DecrementAction =>  {
    return {type: COUNT.DECREMENT}
}

export const setCount = (amount: number): SetCountAction => {
    return {type: COUNT.SET_COUNT, payload: {amount}}
}

export const initialState: State = {
    count: 0,
    unit: "pt"
};

// reducer
export const reducer = (state: State, action: Actions) => {
    switch(action.type) {
        case 'LONG_PREFIX_INCREMENT':
        return {...state, count: state.count+1}

        case 'LONG_PREFIX_DECREMENT':
        return {...state, count: state.count-1}

        case 'LONG_PREFIX_SET_COUNT':
        return {...state, count: action.payload.amount}
    }
}
