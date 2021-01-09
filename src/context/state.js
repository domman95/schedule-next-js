import { createContext, useContext } from "react";
import moment from "moment";
import getCurrentWeek from "../utils/getCurrentWeek";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    dateValue: moment(),
    currentWeek: getCurrentWeek(),
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
