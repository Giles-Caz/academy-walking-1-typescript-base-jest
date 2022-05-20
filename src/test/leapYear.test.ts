import {LeapYear} from "../main/leapYear";

describe('leap year', () => {
    it("should give true for year 1996", () => {
        let leapYear: LeapYear = new LeapYear();
        expect(leapYear.calc(1996)).toBe(true);
    })
})