export class LocalStorage {

    data: string;

    SetStorage(obj) {
        localStorage.setItem('user', JSON.stringify(obj));
    }

    getStorage() {
        return localStorage.getItem('user');
    }
}