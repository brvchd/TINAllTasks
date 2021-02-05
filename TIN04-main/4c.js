function palindrome(str){
    var lowerStr = str.toLowerCase().replace(' ', '');
    var reverseStr = lowerStr.split('').reverse().join('');
    return reverseStr === lowerStr;
}
console.log(`Is race car a palindrom? ${palindrome("race car")}`);