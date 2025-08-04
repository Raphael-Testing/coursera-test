// STEP 1: Wrap the entire contents inside an IIFE
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: Loop over the names array
  for (var i = 0; i < names.length; i++) {

    // STEP 11: Get first letter and convert to lowercase
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Check if it’s 'j' → bye, else → hello
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();
