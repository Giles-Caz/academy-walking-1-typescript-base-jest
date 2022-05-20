import {LeapYear} from "../main/leapYear";

describe('leap year', () => {
    it("should give true for year 1996", () => {
        let leapYear: LeapYear = new LeapYear();
        expect(leapYear.isLeapYear(1996)).toBe(true);
    })

    it("should give false for year 2001", () => {
        let leapYear: LeapYear = new LeapYear();
        expect(leapYear.isLeapYear(2001)).toBe(false);
    })

    it("should give false for year 1900", () => {
        let leapYear: LeapYear = new LeapYear();
        expect(leapYear.isLeapYear(1900)).toBe(false);
    })

    it("should give true for year 2000", () => {
        let leapYear: LeapYear = new LeapYear();
        expect(leapYear.isLeapYear(2000)).toBe(true);
    })

    it("should give true for year 2008", () => {
        let leapYear: LeapYear = new LeapYear();
        expect(leapYear.isLeapYear(2008)).toBe(true);
    })

    it("should give false for year 2007", () => {
        let leapYear: LeapYear = new LeapYear();
        expect(leapYear.isLeapYear(2007)).toBe(false);
    })
})