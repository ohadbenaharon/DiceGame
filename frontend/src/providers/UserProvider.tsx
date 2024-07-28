import React, { Context, useContext } from "react";
import { Player } from "../types/userType";

export interface UserContextValue {
  playerOne: Player;
  setPlayerOne?: (arg: Player) => void;
  playerTwo: Player;
  setPlayerTwo?: (arg: Player) => void;
  resetGame: () => void;
  setHold: () => void;
  setDoubleSix: () => void;
  setCurrentScore: (score: number) => void;
  maxRoll: number;
  setMaxRoll: (score: number) => void;
}

export const useUserContext = () => useContext(UserContext);

export const UserContext: Context<UserContextValue> =
  React.createContext<UserContextValue>({
    playerOne: { current: 0, score: 0, turn: true, win: false, winRate: 0 },
    playerTwo: { current: 0, score: 0, turn: false, win: false, winRate: 0 },
    resetGame: () => {},
    setHold: () => {},
    setDoubleSix: () => {},
    setCurrentScore: () => {},
    maxRoll: 100,
    setMaxRoll: () => {},
  });

export function UserProvider(props: { children: React.ReactNode }) {
  const [playerOne, setPlayerOne] = React.useState<Player>({
    current: 0,
    score: 0,
    turn: true,
    win: false,
    winRate: 0,
  });
  const [playerTwo, setPlayerTwo] = React.useState<Player>({
    current: 0,
    score: 0,
    turn: false,
    win: false,
    winRate: 0,
  });

  const [maxRoll, setMaxRoll] = React.useState<number>(100);

  const resetGame = () => {
    setPlayerOne((prev) => {
      return {
        current: 0,
        score: 0,
        turn: true,
        win: false,
        winRate: prev.winRate,
      };
    });
    setPlayerTwo((prev) => {
      return {
        current: 0,
        score: 0,
        turn: false,
        win: false,
        winRate: prev.winRate,
      };
    });
  };

  const setHold = () => {
    setPlayerOne((prev) => {
      return {
        ...prev,
        turn: !prev.turn,
        score: prev.score + prev.current,
        current: 0,
      };
    });
    setPlayerTwo((prev) => {
      return {
        ...prev,
        turn: !prev.turn,
        score: prev.score + prev.current,
        current: 0,
      };
    });
  };

  const setCurrentScore = (score: number) => {
    if (playerOne.turn)
      setPlayerOne((prev) => {
        const win = prev.current + score + prev.score >= maxRoll;

        return {
          ...prev,
          current: prev.current + score,
          win: win,
          winRate: win ? prev.winRate++ : prev.winRate,
        };
      });
    else
      setPlayerTwo((prev) => {
        const win = prev.current + score + prev.score >= maxRoll;

        return {
          ...prev,
          current: prev.current + score,
          win: win,
          winRate: win ? prev.winRate++ : prev.winRate,
        };
      });
  };

  const setDoubleSix = () => {
    setPlayerOne((prev) => {
      return {
        ...prev,
        turn: !prev.turn,
        current: 0,
      };
    });
    setPlayerTwo((prev) => {
      return {
        ...prev,
        turn: !prev.turn,
        current: 0,
      };
    });
  };

  return (
    <UserContext.Provider
      value={{
        playerOne,
        setPlayerOne,
        playerTwo,
        setPlayerTwo,
        resetGame,
        setHold,
        setDoubleSix,
        setCurrentScore,
        maxRoll,
        setMaxRoll,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
