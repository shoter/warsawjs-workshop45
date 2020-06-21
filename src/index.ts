export function bind(thisArg : any, method: Function) {
    return (...args : any[]) => {
        method.call(thisArg, args);
    };
}