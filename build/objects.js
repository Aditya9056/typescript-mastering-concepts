function printCar(car) {
    let str = `${car.make} ${car.model} (${car.year})`;
    car.chargeVoltage;
    //    ^?
    if (typeof car.chargeVoltage !== "undefined")
        str += `// ${car.chargeVoltage}v`;
    //                 ^?
    console.log(str);
}
