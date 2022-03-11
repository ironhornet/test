import { IState, ActionType } from "./fullProductCardPage.interface";

export const reducer = (state: IState, action: ActionType): IState => ({
    ...state,
    [action.field]: action.value,
});