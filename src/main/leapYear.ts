export class LeapYear {
    
    isLeapYear(year: number) {
        if((year % 4 !== 0) || ((year % 100 === 0 && year % 400 !== 0))) {
            return false;
        } else {
            return true;
        }
    }
}