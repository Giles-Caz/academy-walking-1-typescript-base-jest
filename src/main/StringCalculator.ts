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
            const regex = "/[,]{1,}";

            if (t1.match(regex)) {
                throw new Error("Error");
            }

            const numberArray = t1.split(delimiter);
            if(numberArray.length === 1) {
                return +numbers;
            }
            let sum = 0;
            numberArray.forEach(number => {
                sum += +number;
            });
            return sum;
        }
        return 0;
        
    }
}