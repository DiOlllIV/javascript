class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    };

    get id() {
        return this._id;
    };
    get name() {
        return this._name;
    };
    get sessionId() {
        return this._sessionId;
    }

};


class UserRepository extends User {
    constructor(arr) {
        this._users = Object.freeze(arr)
    };
    get users() {
        return this._users;
    }

    getUserNames() {
        return this.users.filter(key => key.this._name);
    };

    getUserIds() {
        return this.users.filter(key => key.this._id);
    };

    getUserNameById(id) {

        for (let user of this._users) {
            if (id === this._id)
                return this._name;
        }
    };

}



export { User, UserRepository }