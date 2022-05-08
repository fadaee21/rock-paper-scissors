import React, { useCallback, useContext, useEffect, useState } from "react";

const AppContext = React.createContext(undefined);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [computer, setComputer] = useState("");
  const [point, setPoint] = useState(0);
  const [level, setLevel] = useState(1);
  const [win, setWin] = useState(0);
  const toolArr = ["paper", "scissors", "rock"];

  const calculation = useCallback(() => {
    if (user === "paper") {
      switch (computer) {
        case "scissors":
          setPoint((point) => point - 1);
          setWin(-1);
          break;
        case "rock":
          setPoint((point) => point + 1);
          setWin(1);
          break;
        default:
          setWin(0);
          break;
      }
    }
    if (user === "scissors") {
      switch (computer) {
        case "paper":
          setPoint((point) => point + 1);
          setWin(1);
          break;
        case "rock":
          setPoint((point) => point - 1);
          setWin(-1);
          break;
        default:
          setWin(0);
          break;
      }
    }
    if (user === "rock") {
      switch (computer) {
        case "scissors":
          setPoint((point) => point + 1);
          setWin(1);
          break;
        case "paper":
          setPoint((point) => point - 1);
          setWin(-1);
          break;
        default:
          setWin(0);
          break;
      }
    }
  }, [user, computer]);

  const challengeHandle = (x) => {
    const computerChoice = toolArr[Math.floor(Math.random() * toolArr.length)];
    setComputer(computerChoice);
    setUser(x);
    // sometimes user and computer state don't change so we need another
    // state to tell useEffect dependency calculation() change
    setLevel(level + 1);
  };

  useEffect(() => {
    calculation();
  }, [user, computer, calculation, level]);

  return (
    <AppContext.Provider
      value={{
        challengeHandle,
        user,
        computer,
        point,
        win,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
