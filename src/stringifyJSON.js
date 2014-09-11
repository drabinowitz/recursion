// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result = "";

  function stringifyJsonRecursively (key) {

    var hasChildren = false;

    if (typeof key === 'undefined'){

      key = obj;

    }

    if (typeof key === 'object' && key !== null){

      if (Array.isArray(key)){

        result += '[';

        for (var i = 0;i < key.length; i++){

          if (typeof key[i] !== 'function' && typeof key[i] !== 'undefined'){

            stringifyJsonRecursively(key[i]);

            result += ',';

            hasChildren = true;

          }

        }

        result = hasChildren ? result.substring(0, result.length - 1) : result;

        result += ']';

      } else {

        result += '{';

        for (var item in key){

          if (key.hasOwnProperty(item) && typeof key[item] !== 'function' && typeof key[item] !== 'undefined'){

            result += '"' + item + '":';

            stringifyJsonRecursively(key[item]);

            result += ',';

            hasChildren = true;

          }

        }

        result = hasChildren ? result.substring(0, result.length - 1) : result;

        result += '}';

      }

    } else if (typeof key !== 'undefined' && typeof key !== 'function'){

      if (typeof key === 'string'){

        key = '"' + key + '"';

      }

      result += key;

    }

  }

  stringifyJsonRecursively();

  return result === ""? undefined : result;

};
