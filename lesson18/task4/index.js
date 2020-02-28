function spy(func) {

    spyFunc.calls = [];

    function spyFunc() {
        spyFunc.calls.push([...arguments]);
        return func.apply(this, arguments);
    }

    return spyFunc;
};



export { spy };