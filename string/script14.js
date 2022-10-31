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