import { isPalindrome } from "../utils";

describe("pointsForWord", () => {
    it("Should return true for words that are a combination of uppercase and lowercase letters (all lowercase)", () => {
        const word = "racecar";

        const result = isPalindrome(word);

        expect(result).toBe(true);
    });
    it("Should return true for words that are a combination of uppercase and lowercase letters", () => {
        const word = "RAceCar";

        const result = isPalindrome(word);

        expect(result).toBe(true);
    });
    it("Should return false for an empty string", () => {
        const word = "";

        const result = isPalindrome(word);

        expect(result).toBe(false);
    });
    it("Should return false for non string inputs", () => {
        const word = 1;

        const result = isPalindrome(word);

        expect(result).toBe(false);
    });
    it("Should return false for invalid chars", () => {
        const word = "!";

        const result = isPalindrome(word);

        expect(result).toBe(false);
    });
});