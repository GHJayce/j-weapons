export declare namespace JWeapons {
  export interface ObjectAny {
    [key: string]: any
    [key: number]: any
  }
  export type ObjArrStr = Array<any> | String | JWeapons.ObjectAny
  export type ObjArr = Array<any> | JWeapons.ObjectAny
  export interface ObjectStrStr {
    [key: string]: string
  }
  export interface ObjectStrAny {
    [key: string]: any
  }
}
