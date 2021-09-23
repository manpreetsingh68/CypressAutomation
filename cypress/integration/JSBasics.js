var marks = [12,24,36,48,60,72]
subMarks = marks.slice(1,4)
console.log(subMarks)
console.log(marks.length)
console.log(marks[2])
marks.push(100)
console.log(marks)
marks.unshift(6)
console.log(marks)
marks.pop()
console.log(marks)
marks[1] = 200
console.log(marks)

var sum = 0
for(var i=0; i < marks.length; i++){
    sum = sum + marks[i]
}
console.log(sum)

let total = marks.reduce((sum, totalMarks) => sum + totalMarks, 0)
console.log(total)

var evenScores = []
var scores = [1,2,3,4,5,6,7,8]
for(var i=0; i<scores.length; i++){
    if(scores[i]%2 == 0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

let newScores = scores.filter(score => score%2 == 0)
console.log(newScores)

let mappedScore = newScores.map(score => score * 3)
console.log(mappedScore)

var numbers = [2,3,4,5,6,7,8]
var sumTotal = numbers.filter(num => num%2==0).map(num => num*2)
            .reduce((sum, num) => sum + num, 0)
console.log(sumTotal)


