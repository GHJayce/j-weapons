declare namespace JW {
  interface ObjectAny {
    [key: string]: any
    [key: number]: any
  }
  type ObjArrStr = Array<any> | String | ObjectAny
  type ObjArr = Array<any> | ObjectAny
  interface ObjectStrStr {
    [key: string]: string
  }
  interface ObjectStrAny {
    [key: string]: any
  }
}
export = JW
export as namespace JW
