
export function myBind(thisArg : any, method: Function) {
    return () => {
        method.call(thisArg, arguments);
    };
}