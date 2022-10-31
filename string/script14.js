const text = "I love JavaScript"
console.log(text[0])
console.log(text.charAt(5))
console.log(text.charCodeAt(0))
console.log(text + " & React")
console.log(text.concat(" & React"))

const finalText = text.concat(" & React")
console.log(finalText)
console.log(text.trim())
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.search("Java"))
console.log(text.indexOf("love"))
console.log(text.includes("love"))
// ================
// .slice
// .substr
// .substring
console.log(text.slice(7, 17))
console.log(text.substr(7, 10))
console.log(text.substring(7, 17))


// ===================MATH method===============//
console.log(Math.PI)
console.log(2 ** 3)
console.log(Math.pow(2, 3))
console.log(Math.sqrt(81))
console.log(Math.abs(-6))
console.log(Math.min(12, 5, 6, 51))
console.log(Math.max(12, 5, 6, 51))
console.log(Math.floor(12.546))
console.log(Math.trunc(12.951))
console.log(Math.round(12.951))
console.log(Math.ceil(12.1))
console.log(Math.random() * 10)


// ========CaptchaCode========//
const firstRandomNum = Math.random() * 100000
const finalCaptchaCode = Math.floor(firstRandomNum)

console.log("your CaptchaCode is :"+ finalCaptchaCode)