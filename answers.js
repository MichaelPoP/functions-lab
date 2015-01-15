function maxOfTwoNumbers (x, y) {
   if (x < y) {
      console.log("y is greater");
    } else {
      console.log ("x is greater");
    }
}
   maxOfTwoNumbers(23234.3423, 636792.535);










function maxOfThreeNumbers (x, y, z) {
   if (x > y && x > z) {
      console.log("x is greater");
    } else if (y > x && y > z) {
      console.log ("y is greater");
    } else {
      console.log("z is greater");
    }
}
   maxOfThreeNumbers(1, 2, 3);











 function findTheVowel(char){

   	var vowels=["a", "e", "i", "o", "u"];


   	if  (vowels.indexOf(char) === -1) {
   		return console.log(false);
   	}
   	return console.log(true);

 }

 findTheVowel("a");








 function sumArray(i) {
    var numArr=[1,2,3,4];
    for (i=0; i < numArr.length; i++) {
        
     return console.log(i + i);
    }

}
sumArray();






//bonus attempts


function findLongestWord(wordArr) {
  
    var wordArr["pops","jenga","totalitarian","antidisestablishmentarianism"]

    var longassWord= ???

    for (var x=0; x < wordArr.length; x++) {
       if(wordArr[x].length > wordArr[x + 1].length) {
       longassWord = wordArr[x];
       } else {
            longassWord = wordArr[x + 1]
         }
    }

}
 return console.log(longassWord);










