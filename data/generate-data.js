const fs = require('fs');

/**
 * Random number between interval
 * @param {*} min
 * @param {*} max
 * @returns
 */
const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Due to lack of time,
 * solution found from from https://stackoverflow.com/a/50398144
 * Credits to the author: enesn
 *
 * @param {*} start
 * @param {*} end
 * @returns
 */
const getDaysArray = function(start, end) {
    for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
};

/**
 * Generate fake data
 */
const generateData = () => {
    const dataObject = {};

    // generate between 20 to 40 symbols
    const numSymbols = randomInteger(20, 40);
    const tempArray = new Array(numSymbols).fill(0);

    // generate dates [+/- 1 month]
    const today = new Date();
    const lastMonth = new Date(today.setMonth(today.getMonth()-1));
    const nextMonth = new Date(today.setMonth(today.getMonth()+1));
    const daysArray = getDaysArray(lastMonth, nextMonth);

    tempArray.forEach(() => {
        const symbol = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 4).toUpperCase();
        const dayData = {};

        daysArray.forEach((day) => {
            // Generate buy | hold | sell ratio
            const ratios = {
                buy: Math.random(),
                sell: Math.random(),
            }
            const calcRatio = ratios.buy + ratios.sell;
            if (calcRatio > 1) {
                // Control it
                ratios.buy = ratios.buy / 2;
                ratios.sell = ratios.sell / 2;
                ratios.hold = 1 - ratios.buy + ratios.sell;
            } else {
                ratios.hold = 1 - calcRatio;
            }

            // Set ISO date
            const ISOday = day.toISOString().slice(0,10);

            // Add data
            dayData[ISOday] = {
                price: randomInteger(100, 100000) / 100,
                social: randomInteger(1, 1000),
                buy: ratios.buy,
                hold: ratios.hold,
                sell: ratios.sell,
            };
        });

        dataObject[symbol] = dayData;
    });

    let jsonData = JSON.stringify(dataObject, null, 4);
    fs.writeFileSync('./data/generated-data.json', jsonData);
}

// Execute
generateData();
