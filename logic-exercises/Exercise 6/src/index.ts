function checkAnagram(s: string, t: string) {
	return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(checkAnagram("anagrama", "nagarama"))
console.log(checkAnagram("gato", "toga"))
console.log(checkAnagram("gato", "rato"))