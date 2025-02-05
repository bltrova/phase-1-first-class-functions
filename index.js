function receivesAFunction(callBack) {
  callBack();
}

function returnsANamedFunction() {
  function namedFunction() {
    // console.log("Hello from the named function")
  }   
      return namedFunction;
  } 



function returnsAnAnonymousFunction() {
    return function() {
  }
 }
 
