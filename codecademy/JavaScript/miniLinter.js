let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';


let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords = story.split(' ');


// Filters out unnecessaryWords from storyWords
const betterWords = storyWords.filter(
    word => !unnecessaryWords.includes(word)
);


// Counts occurance of overusedWords in betterWords
const countOverused = overusedWords.map(oWord => {
    const wordCount = betterWords.reduce((count, bWord) => {
        if (bWord === oWord) count ++;
        return count;
    }, 0);
    let result = {};
    result[oWord] = wordCount;
    return result;
}); const overusedCount = Object.assign({}, ...countOverused);


// Counts the number of sentences in betterWords
const countSentences = betterWords.reduce((count, word) => {
    if (word.includes(".") || word.includes("!")) count++;
    return count;
}, 0);


// Remove every other occurance of each overused world
const removeEveryOther = () => {
    for (let i=0; i < overusedWords.length; i++) 
    {
        let count = 0;
        for (let j=0; j < betterWords.length; j++)
        {
            if (overusedWords[i] === betterWords[j]) {
                count++;
                if (count % 2 === 0) {
                    betterWords.splice(j, 1);
                }
            }
        }
    }
}; removeEveryOther();


// Count occurences of a word in array
const countOccurences = (word) => {
    const wordCount = betterWords.reduce((count, bWord) => {
        if (bWord === word) count++;
        return count;
    }, 0);
    let result = {};
    result[word] = wordCount;
    return result;
}
// Get occurences of every word
let allOccurences = betterWords.map(word => countOccurences(word));
allOccurences = Object.assign({}, ...allOccurences);

const highestOccurence = Object.entries(allOccurences).reduce((prev, current) => {
    return (prev[1] > current[1]) ? prev : current
})


// Find and replace a word of choice
const findAndReplace = (find, replace) => {
    betterWords.map(word => {
        let i = betterWords.indexOf(find);
        if (word === find) {
            betterWords.splice(i, 1, replace);
        }
    });
}


// findAndReplace("beautiful", "terrifying");
console.log(overusedCount);
console.log(betterWords.join(" "), "\n");
console.log(`${storyWords.length} words`);
console.log(`${countSentences} sentences`)
console.log(`The word "${highestOccurence[0]}" has appeared ${highestOccurence[1]} times`)
