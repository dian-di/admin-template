import { enumMapToList } from "./util"

export enum Completed {
  Completed = 'Completed',
  Uncompleted = 'Uncompleted',
}

export const CompletedMap: Record<Completed, string> = {
  Completed: 'Completed',
  Uncompleted: 'Uncompleted',
}

export const CompletedList = enumMapToList(Completed, CompletedMap)
