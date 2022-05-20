import {StringCalculator} from "../main/StringCalculator";

describe('string calculator', () => {
    it("should return 0 if empty string", () => {
        let stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.add("")).toBe(0);
    })        

    describe('should return the given number if we have only one number', () => {
        it.each`
        input        | expected
        ${"1"}       | ${1}
        ${"2"}       | ${2}
        ${"3"}       | ${3}
        `('should print $expected if the input is "$input"', ({ input, expected }) => {
            let stringCalculator: StringCalculator = new StringCalculator();
            expect(stringCalculator.add(input)).toBe(expected);

        });
    })

    describe('should return the sum if we have two numbers', () => {
        it.each`
        input        | expected
        ${"1,1"}     | ${2}
        ${"2,2"}     | ${4}
        ${"4,2"}     | ${6}
        `('should print $expected if the input is "$input"', ({ input, expected }) => {
            let stringCalculator: StringCalculator = new StringCalculator();
            expect(stringCalculator.add(input)).toBe(expected);

        });
    })

    describe('should return the sum if an unknown amount of numbers', () => {
        it.each`
        input        | expected
        ${"1,1"}     | ${2}
        ${"1,1,1"}   | ${3}
        ${"1,1,1,1,1"}   | ${5}
        `('should print $expected if the input is "$input"', ({ input, expected }) => {
            let stringCalculator: StringCalculator = new StringCalculator();
            expect(stringCalculator.add(input)).toBe(expected);

        });
    })

    describe('should return the sum even with new lines between numbers', () => {
        it.each`
        input        | expected
        ${"1\n1"}    | ${2}
        ${"2\n2\n2"} | ${6}
        ${"2\n2,2"}  | ${6}
        `('should print $expected if the input is "$input"', ({ input, expected }) => {
            let stringCalculator: StringCalculator = new StringCalculator();
            expect(stringCalculator.add(input)).toBe(expected);
        });

        it("should return an error if string ends in \\n", () => {
            let stringCalculator: StringCalculator = new StringCalculator();
            try {
                stringCalculator.add("1,\n");
            } catch (error) {
                expect(error).toHaveBeenCalled;
            }
        }) 

        it("should return an error if string ends in multiple \\n", () => {
            let stringCalculator: StringCalculator = new StringCalculator();
            try {
                stringCalculator.add("1,\n\n");
            } catch (error) {
                expect(error).toHaveBeenCalled;
            }
        }) 
    })


    describe('should return the sum using different delimiters', () => {
        it.each`
        input           | expected
        ${"//,\n1,1"}   | ${2}
        ${"//;\n1;1"}   | ${2}
        `('should print $expected if the input is "$input"', ({ input, expected }) => {
            let stringCalculator: StringCalculator = new StringCalculator();
            expect(stringCalculator.add(input)).toBe(expected);
        });
    })
})