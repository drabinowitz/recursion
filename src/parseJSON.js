// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  var result;

  function parseJsonRecursively(jsonStr,){

    var item;

    if (typeof jsonStr === 'undefined'){

      jsonStr = json;

    }

    switch(json.charAt(0)){

      case  '[' :

        item = [];

        break;

      case '{' :

        item = {};

        break;

      case '"' :

        item = jsonStr.substring(1,jsonStr.length - 1);

      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 't':
      case 'n':

        item = jsonStr;

      case 'f':

        if (jsonStr.charAt(1) === "a"){

          item = jsonStr;

        } else {

          throw new Error('invalid json characters');

        }

      default :

        throw new Error('invalid json characters');

    }

  }

  result = parseJsonRecursively();

  return result;

};
