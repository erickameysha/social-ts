import React from "react";
import store, {StoreType} from "./redux/redux-store";
import App from "./App";

const StoreContext = React.createContext({}as  StoreType)

export type ProviderType ={
    store: StoreType,
    children: React.ReactNode
}
export const Provider = (props: ProviderType) => {
  return(
      <StoreContext.Provider value={store}>

          <App

          /></StoreContext.Provider>
  )
}

export default StoreContext