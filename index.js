var letters = [];
var word = "abcba";
var rWord = "";

for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

for(var j = 0; j < word.length; j++){
    rWord += letters.pop();
}

if(word == rWord){
    console.log("this is a palindrome");
}