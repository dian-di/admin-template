import { enumMapToList } from "./util"

export enum Type {
  Text = 'Text',
  Image = 'Image',
  Video = 'Video',
}

export const TypeMap: Record<Type, string> = {
  Text: 'Text',
  Image: 'Image',
  Video: 'Video',
}

export const TypeList = enumMapToList(Type, TypeMap)
