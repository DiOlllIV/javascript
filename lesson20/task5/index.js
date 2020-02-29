class User {
    constructor(id, name, sessionId) {
        this.#id = id;
        this.#name = name;
        this.#sessionId = sessionId;
    };

    get id(){
        return this.#id;
    };
    get name(){
        return this.#name;
    };
    get sessionId(){
        return this.#sessionId;
    }

};


class UserRepository extends User {
    constructor(arr) {
        this.#users = Object.freeze(arr)
    };
    get users(){
        return this.#users;
    }

    getUserNames() {
        return this.users.filter(key => key.this.#name);
    };

    getUserIds() {
        return this.users.filter(key => key.this.#id);
    };

    getUserNameById(id) {
        
        for(let user of this.#users){
            if (id === this.#id)
                return this.#name;
        }
    };

}



export { User, UserRepository }