class User {
    constructor(id, name, sessionId) {
        this._id = id.toString();
        this._name = name.toString();
        this._sessionId = sessionId.toString();
    };
};


class UserRepository extends User {
    constructor(arr) {
        this._users = Object.freeze(arr)
    };

    getUserNames() {
        this.users.filter(key => key.this._name);
    };

    getUserIds() {
        this.users.filter(key => key.this._id);
    };

    getUserNameById(id) {
        if (id === this._id)
            return this._name;
    };

}



export { User, UserRepository }