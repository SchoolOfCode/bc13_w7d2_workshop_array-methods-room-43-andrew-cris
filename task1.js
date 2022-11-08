const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(function(cats) {
    let firstLetter = (Array.from(cats)[0])
    let upperCase = firstLetter.toUpperCase()
    let trimmed = cats.substring(1)
    return upperCase + trimmed
    
})
console.log(capitalisedCats)
//take in cats 
//turn each item into uppercase
//using .map method to run through a function that generates a new array