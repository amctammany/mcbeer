import { deepSet, get } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
export type RevisionActionTypes = "SET" | "ADD" | "REMOVE";
export interface AddRevisionAction<T extends FieldValues>
  extends RevisionAction<T> {
  type: "ADD";
  payload: {
    name: keyof T;
    value: T[keyof T];
    prev?: T[keyof T];
  };
}
export interface RemoveRevisionAction<T extends FieldValues>
  extends RevisionAction<T> {
  type: "REMOVE";
  payload: {
    name: keyof T;
    value: T[keyof T];
    prev?: T[keyof T];
  };
}
export interface SetRevisionAction<T extends FieldValues>
  extends RevisionAction<T> {
  type: "SET";
  payload: {
    name: keyof T;
    value: T[keyof T];
    prev: T[keyof T];
  };
}
type RevisionAction<T extends FieldValues> = {
  type: RevisionActionTypes;
  payload: {
    name: keyof T;
    value: T[keyof T];
    prev?: T[keyof T] | undefined | null;
  };
};
export type RevisionActionType<T extends FieldValues> =
  | AddRevisionAction<T>
  | RemoveRevisionAction<T>
  | SetRevisionAction<T>;
function revisionReducer<T extends FieldValues>(
  state: T,
  action: RevisionActionType<T>
) {
  switch (action.type) {
    case "SET": {
      return deepSet(
        state,
        action.payload.name as any,
        action.payload.value as any
      );
      /**
       * 
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
       */
    }

    case "ADD": {
      const current = state[action.payload.name];
      if (Array.isArray(current)) {
        return {
          ...state,
          [action.payload.name]: [...current, action.payload.value],
        };
      }
      return { ...state, [action.payload.name]: [action.payload.value] };
    }
    case "REMOVE": {
      const current = state[action.payload.name];
      if (Array.isArray(current)) {
        return {
          ...state,
          [action.payload.name]: current.filter(
            (v: any) => v !== action.payload.value
          ),
        };
      }
      return { ...state, [action.payload.name]: undefined };
    }
    default:
      throw new Error("invalid action type: " + (action as any).type);

      return state;
  }
}

function reverse<T extends FieldValues>(
  action: RevisionActionType<T>
): RevisionActionType<T> {
  switch (action.type) {
    case "SET":
      return {
        type: "SET",
        payload: {
          name: action.payload.name,
          prev: action.payload.value,
          value: action.payload.prev,
        },
      };

    case "ADD":
      return {
        type: "REMOVE",
        payload: { name: action.payload.name, value: action.payload.value },
      };
    case "REMOVE":
      return {
        type: "ADD",
        payload: { name: action.payload.name, value: action.payload.value },
      };
  }
}
function useRevisionHistory<T extends FieldValues>(
  initialState: T,
  updateFn: (name: keyof T, value: T[keyof T]) => void,
  //  updateFn: (state: T) => void,
  initialHistory: RevisionActionType<T>[] = []
) {
  const history = useRef(initialHistory);

  const [state, setState] = useState<T>(initialState);
  const [historyPointer, setHistoryPointer] = useState(history.current.length);

  const update = useCallback(
    (action: RevisionActionType<T>) => {
      const newHistory = history.current.slice(0, historyPointer + 1);
      newHistory.push(action);
      history.current = newHistory;
      setHistoryPointer(newHistory.length - 0);
      const newState = revisionReducer(state, action);
      setState(newState);
      updateFn(action.payload.name, action.payload.value);
      console.log("update", newState, { action, history: history.current });
    },
    [history, historyPointer]
  );
  const undo = useCallback(() => {
    console.log("History => undo", history.current, historyPointer);
    if (history.current.length === 0) return;
    if (historyPointer <= 0) return;
    const previousAction = history.current[historyPointer - 1];
    const newState = revisionReducer(state, reverse(previousAction));
    console.log("undo", newState, { previousAction, state });
    updateFn(previousAction.payload.name, previousAction.payload.prev!);
    setState(newState);
    setHistoryPointer(historyPointer - 1);
  }, [history, historyPointer]);
  const redo = useCallback(() => {
    console.log("current state", state, history.current, historyPointer);
    console.log("History => redo", history.current, historyPointer);
    if (history.current.length === 0) return;
    if (historyPointer > history.current.length) return;
    const nextAction = history.current[historyPointer];
    console.log("nextACTION", nextAction);
    const newState = revisionReducer(state, nextAction);
    updateFn(nextAction.payload.name, nextAction.payload.value);
    console.log("redo", newState, { nextAction, state });
    setState(newState);
    //   updateFn(newState);
    setHistoryPointer(historyPointer + 1);
  }, [history, historyPointer]);
  const canUndo = historyPointer > 0;
  const canRedo = historyPointer <= history.current.length - 1;
  /**
   * 
  useEffect(() => {
    console.log("state changed", state);
    updateFn(state);
  }, [state, updateFn]);
   */
  const updateHistory = useMemo(
    () =>
      (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.FocusEvent<HTMLInputElement>
      ) => {
        const oldValue = get(state as any, e.target.name);
        const newValue =
          e.target.type === "number"
            ? parseFloat(e.target.value)
            : (e.target.value as any);

        if (oldValue !== newValue && !(oldValue === null && newValue === ""))
          update({
            type: "SET",
            payload: {
              name: e.target.name,
              prev: oldValue,
              value: e.target.value as any,
            },
          });
      },
    [update, state]
  ) as
    | React.FocusEventHandler<HTMLElement>
    | React.ChangeEventHandler<HTMLElement>;
  const handleUndo = useMemo(
    () => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      undo();
    },
    [undo]
  );
  const handleRedo = useMemo(
    () => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      redo();
    },
    [redo]
  );
  return useMemo(
    () => ({
      state,
      update,
      handleRedo,
      handleUndo,
      updateHistory,
      undo,
      redo,
      canUndo,
      canRedo,
    }),
    [
      state,
      update,
      undo,
      redo,
      canUndo,
      canRedo,
      updateHistory,
      handleRedo,
      handleUndo,
    ]
  );
}

export default useRevisionHistory;
