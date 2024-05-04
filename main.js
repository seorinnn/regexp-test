let str = `
010-1234-5678
theseorin@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
d`;

console.log(str.match(/\b/g));
