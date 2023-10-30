
function reverseWords(str) {
    /*
    Complete the function that accepts a string parameter, and reverses each word in the string. 
    All spaces in the string should be retained.
    EXAMPLES:
        "This is an example!" ==> "sihT si na !elpmaxe"
        "double  spaces"      ==> "elbuod  secaps"
    */
    return str.split(" ").map(v => v.split('').reverse().join('')).join(" ")
}

module.exports = {
    reverseWords
};
