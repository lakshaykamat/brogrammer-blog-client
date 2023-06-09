export function removePercentEncoding(str:string) {
    return str.replace(/%20/g, ' ').trim()
  }