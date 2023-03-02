const units: any = ['b', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const getSizeDocument = (size: number) => {
    let l = 0, n = size || 0;
    while (n >= 1024 && ++l) {
        n = n / 1024;
    }
    return (Math.round(+n.toFixed(n < 10 && l > 0 ? 1 : 0)) + ' ' + units[l]);
}

export const getExtensionFile = (filename: string) => {
    var a = filename.split(".");
    if( a.length === 1 || ( a[0] === "" && a.length === 2 ) ) {
        return null;
    }
    return a.pop();
}