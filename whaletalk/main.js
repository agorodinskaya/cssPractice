let input = 'Hi, Human, a whale of a deal!';

const whaleVowels = ['a', 'o' , 'e', 'i' , 'u'];

let resultArray = [];

for(let i = 0; i < input.length; i++) {
  for(let j = 0; j < whaleVowels.length; j++) {
    if (input[i] === whaleVowels[j]){
        if(input[i] === 'e'){
            resultArray.push('ee')
        } else if (input[i] === 'u'){
            resultArray.push('uu')
        }else {
            resultArray.push(input[i])
        }
    }
}
}
console.log(resultArray.join('').toUpperCase())


