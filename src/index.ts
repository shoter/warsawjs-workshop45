export function bind(thisArg : any, method: Function, ...bindArgs: any[]) {
    return (...args : any[]) => {
        return method.call(thisArg, ...bindArgs, ...args);
    };
}