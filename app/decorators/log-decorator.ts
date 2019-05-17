export function LogClass(): ClassDecorator {
    return function (constructor: object): void {
        if (process.env.APP_ENV !== 'production') {
            console.log(constructor);
        }
    }
}
