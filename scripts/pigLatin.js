// scripts/pigLatin.js — yours to write.
//
// The markers below name requirements from README.md, so the brief, your
// Issues, the agent and this file all use the same words. Nothing reads them.

// FR006 — English to Pig Latin translator.
// Read a phrase from process.argv and translate it word by word:
//   - starts with a consonant then a vowel: move the first letter to the end, add "ay"
//   - starts with two consonants: move both to the end, add "ay"
//   - starts with a vowel: add "way" to the end
// Print the translated phrase.
//
// node scripts/pigLatin.js "Pig Latin is hard to speak"
// # Igpay Atinlay isway ardhay otay eakspay

// FR009 — Reject a missing phrase.
// If no phrase is given, print a usage message instead of letting the program
// crash.

// FR012 — Pass non-letter characters through unchanged.
// Punctuation and numbers in the input should appear in the output exactly as
// given, not translated or dropped.
const inputText = process.argv[2];

if (inputText === undefined) {
    console.log('Bitte tippe einen Satz ein!')
    process.exit(1)
}

const wordArray = inputText.toLowerCase().split(' ')
let sentenceInPigLatin = ''

wordArray.forEach(word => {
    const vocals = ['a', 'e', 'i', 'o', 'u']
    
    if (vocals.includes(word[0])) {
        sentenceInPigLatin += word + 'way' + ' '
    } else if (!vocals.includes(word[0]) && vocals.includes(word[1])) {
        sentenceInPigLatin += word.slice(1);
        sentenceInPigLatin += word[0] + 'ay' + ' '

    } else if (!vocals.includes(word[0]) && !vocals.includes(word[1])) {
        sentenceInPigLatin += word.slice(2);
        sentenceInPigLatin += word[0] + word[1] + 'ay' + ' ';
    }
});

console.log(sentenceInPigLatin)