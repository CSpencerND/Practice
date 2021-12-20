const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 7;
        case 'thursday':
            return 9;
        case 'friday':
            return 7;
        case 'saturday':
            return 11;
        case 'sunday':
            return 8;
    };
}

const getActualSleepHours = () =>
    getSleepHours('monday') + 
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')


const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = (idealHours) => {
    const idealSleepHours = getIdealSleepHours(idealHours);
    const actualSleepHours = getActualSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("Ideal Hours:  " + idealSleepHours)
        console.log("Actual Hours: " + actualSleepHours)
        console.log("You got the perfect amount of sleep.");
    }
    else if (actualSleepHours < idealSleepHours) {
        console.log("Ideal Hours:  " + idealSleepHours)
        console.log("Actual Hours: " + actualSleepHours)
        console.log("You need more rest.")
    }
    else {
        console.log("Ideal Hours:  " + idealSleepHours)
        console.log("Actual Hours: " + actualSleepHours)
        console.log("You slept more than you wanted to.")
    }
}

calculateSleepDebt(9)
