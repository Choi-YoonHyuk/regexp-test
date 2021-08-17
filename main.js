let str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=pulp fiction
The fox jumps up
abbcccdddd
`


const regexp = /the/gi // 리터럴
console.log(
  str.match(/(?<=@)\w{1,}/g)
  )
