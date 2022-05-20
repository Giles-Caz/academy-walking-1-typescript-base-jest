import {StringCalculator} from "../main/StringCalculator";

describe('string calculator', () => {
    it("should give true for year 1996", () => {
        let stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.add("")).toBe(0);
    })
})