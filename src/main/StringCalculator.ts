export class StringCalculator {
    
    add(numbers: string) {
        if(numbers !== "") {

            let delimiter = ",";
            let t = numbers;
            if (numbers.startsWith("//")) {
                delimiter = numbers.charAt(2);
                t = numbers.substring(4);
            }

            let t1 = t.replace(/\n/g,',');
            const regex = "/["+ delimiter + "]{1,}";

            if (t1.match(regex)) {
                throw new Error("Error");
            }

            let errorNumbers = "";
            const numberArray = t1.split(delimiter);
            let sum = 0;
            numberArray.forEach(number => {
                if (+number < 0) {
                    errorNumbers += number;
                }
                sum += +number;
            });

            if (errorNumbers !== "") {
                throw new Error("negatives not allowed -1");
            }

            return sum;
        }
        return 0;
        
    }
}