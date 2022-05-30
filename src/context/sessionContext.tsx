import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from "react";

let SessionContext = createContext({} as any);

//actions
const CHANGECART = "CHANGECART";

//reducer
const reducer = (state:any,{type,payload}:any) => {
    let _state = {} as any;
    switch(type){
        case CHANGECART:
            const { cartData } = payload;
            _state = Object.assign(_state, state);
            _state.cartData = cartData;
            sessionStorage.setItem("cartData", JSON.stringify(cartData));
            return _state;
        default:
            throw Error("dispatch type is error!");
    }
}
// 初始化state
const initialState = {
    cartData : JSON.parse(sessionStorage.getItem("cartData") as string)?JSON.parse(sessionStorage.getItem("cartData") as string):[]
};
//导出SessionContext
export const useSessionContext = () => {
    return useContext(SessionContext);
}

//导出SessionProvider
const SessionProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const setCartData = useCallback(
        (cartData:any) => {
            dispatch(
                {
                    type: CHANGECART,
                    payload:{
                        cartData,
                    }
                }
            )
        },
        [],
    )
    return <SessionContext.Provider value={useMemo(() => [state,{setCartData}], [state,setCartData])} >
        {children}
    </SessionContext.Provider>
}

export default SessionProvider;
