import { enumMapToList } from "./util"

export enum Status {
  Uninitialized = 'Uninitialized',
  InProgress = 'InProgress',
  Completed = 'Completed',
}

export const StatusMap: Record<Status, string> = {
  Uninitialized: 'Uninitialized',
  InProgress: 'InProgress',
  Completed: 'Completed',
}

export const StatusList = enumMapToList(Status, StatusMap)
