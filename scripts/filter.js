angular.module("App").filter('numberfilter', function() {



  
  return function(number) {

  
    if(isNaN(number) || number < 0) {

     
      return number;

    } else {

      var lastDigit = number % 10;

      if(lastDigit === 1) {
        return number + 'st'
      } else if(lastDigit === 2) {
        return number + 'nd'
      } else if (lastDigit === 3) {
        return number + 'rd'
      } else if (lastDigit > 3) {
        return number + 'th'
      }

    }
  }
});



