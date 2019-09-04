let egg = require('./12_language')

egg.specialForms.set = (args, scope) => {
  // Your code here.
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of set");
  }
  let value = egg.evaluate(args[1], scope);
  let outerScope = Object.getPrototypeOf(scope)
  let var_name = args[0].name

  if(Object.prototype.hasOwnProperty.call(scope, var_name)) {
      scope[var_name] = value;
  }
  else if(Object.prototype.hasOwnProperty.call(outerScope, var_name)) {
      outerScope[var_name] = value;
  }
  else {
      throw new ReferenceError(`${var_name} not previously declared`)
  }
};

egg.run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
egg.run(`set(quux, true)`);
// → Some kind of ReferenceError
