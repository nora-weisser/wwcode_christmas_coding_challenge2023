let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.substr(3, 4));
console.log(challenge.slice(3))
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.split(' '));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

let modified_string = ' 30 Days Of JavaScript ';
console.log(modified_string.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('pt'));

console.log(challenge.match('a'));

let first_part = '30 Days of ';
let second_part = 'JavaScript';
console.log(first_part.concat(second_part));
console.log(challenge.repeat(2));
