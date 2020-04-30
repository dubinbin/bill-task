import React, { Dispatch, createContext, useReducer } from 'react'
import produce, { Draft } from 'immer'
import { IActionTypes } from './constants'

interface IdefaultState {
    bill: any[]
}

interface IActionType {
    type: IActionTypes,
    data: any
}


const defaultState: IdefaultState = {
    bill: []
}

export const BillContext = createContext({
    ...defaultState,
    dispatch: ((v: IActionType) => void(0)) as Dispatch<IActionType>
});

export const reducer = produce((draft: Draft<IdefaultState>, action: IActionType) => {
    switch(action.type) {
        case IActionTypes['SET_BILL_LOGS']:
            draft.bill.push(action.data)
            return draft
        default:
            return draft
    }
})

export const BillContextWrap = (props: React.PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    return (
        <BillContext.Provider value={{...state, dispatch}}>
            {props.children}
        </BillContext.Provider>
    )
}