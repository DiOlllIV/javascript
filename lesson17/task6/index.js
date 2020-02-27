/******   return a new function   ******/

function bind(func, context) {
    //cut func and context
    let bindArgs = [].slice.call(arguments, 2);

    return function() {
        //collect all arguments
        let funcArgs = [].slice.call(arguments)
            //assemble in 'func'
        return func.apply(context, bindArgs.concat(funcArgs));
    };
};