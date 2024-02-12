export default function checkOption<T extends string = string>(id: string, empty: T) {
    try {
        var _ret: T;
        const value = localStorage.getItem(id) as T;
        switch (value) {
            case null:
                localStorage.setItem(id, empty);
                _ret = empty;
                break;
            default:
                _ret = value;
                break;
        }
    } catch (error) {
        return undefined;
    }
    return _ret;
};