// //1.Multiple of 3 and 5
for(let i=1;i<100;i++){
  if(i%3==0&&i%4==0){
    console.log("FizzBuzz");
  }
  else if(i%3==0){
    console.log("Fizz");
  }
  else if(i%5==0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }

}

// 2.Pallindrome or not
 function isPalindrome(s) {
    let j = s.length - 1;
    for (let i = 0;i<s.length/2;i++) {
        if(s[i]!=s[j]){
            return "Not a Palindrome";
        }
        j--;
    }
    return "Palindrome";
}
console.log(isPalindrome("aaa"));

//3.return largest number
function largest(n){
    let a = 0;
    for(let i=0;i<n.length;i++){
        if(a<n[i]){
            a=n[i];
        }
    }
    return a;
}
console.log(largest([1,2,4,3]));

// 4.string convert into character with occurence
let result={}
function occurence(s){
for(let i=0;i<s.length;i++){
  let ch=s.charAt(i)
  if(!result[ch]){
    result[ch] =1;
  }
  else{
    result[ch]+=1
  }
}
}
console.log(occurence("raja"));
console.log(result);


// //5.string to check the largest word
function longest(s){
    let word = s.split(' ');
    let large=0;
    let a = "";
    for(let i=0;i<word.length;i++){
        if(large<word[i].length){
            large = word[i].length;
            a=word[i];
        }
    }
    return a;
}
console.log(longest("Write a javaScript program"));

//6.tekes the number as input return its factorial
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(4));

// // 7.convert celcius to fahrenheit
function  celciusToFahrenheit(celsius){
return fahrenheit = celsius * 1.8 + 32;
}
console.log(celciusToFahrenheit(55));

// 8.array containing n distict number
function distintNumber(n){
    for(let i=0;i<n.length;i++){
        if(i!=n[i]){
            return i;
        }
    }
    return -1;
}
console.log(distintNumber([0,1,2,3,4,5,7,8]));