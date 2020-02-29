class User {
    #id;
    #name;
    #sessionId;

    constructor(id, name, sessionId) {
        this.#id = id.toString();
        this.#name = name.toString();
        this.#sessionId = sessionId.toString();
    }
};


class UserRepository extends User {
    users = [].push({ User });

    getUserName() {
        this.users.filter(key => key.this.#name);
    };

    getUserIds() {
        this.users.filter(key => key.this.#id);
    };

    getUserNameById(id) {
        if (id === this.#id)
            return this.#name;
    };

}



export {User, UserRepository}