export default function setSetting(id: string, name: string, value: string) {
    localStorage.setItem(id, value);
    return value;
}