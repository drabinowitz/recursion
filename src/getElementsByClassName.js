// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];

  function getElementClassRecursive(element){

    var returnElement = false;

    if (typeof element === 'undefined'){

      element = document.body;

    }

    if(element.hasOwnProperty('classList')){

      var classList = element.classList;

      for (var i = 0; i < classList.length; i++){

        if (classList[i] === className){

          returnElement = true;

        }

      }

      if (returnElement){ result.push(element) }

      for (var j = 0; j < element.childNodes.length; j++){

        getElementClassRecursive(element.childNodes[j]);

      }

    }

  }

  getElementClassRecursive();

  return result;

};
