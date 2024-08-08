export function isPalindrome(word) {
    if (/^[A-Za-z]+$/.test(word)) {
        if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('') && word !== '') {
            return true
        } else return false;
    } else return false;
}
