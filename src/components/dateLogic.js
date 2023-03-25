const dayLogic = (year, month) => {
    if (year % 4 === 0 && month === 2){
        dayMonthOptions (1, 29)
    } else if (month === 2) {
        dayMonthOptions (1,28)
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        dayMonthOptions (1, 30)
    } else {
        dayMonthOptions (1, 31)
    }

}


const errorLogic = (year, month, day) => {
    if (year % 4 === 0 && month === "02" && day >= 30 
        || year % 4 > 0 && month === "02" && day >= 29
        || month == "04"  && day === 31|| month === "06"  && day === 31|| month === "09"  && day === 31|| month === "11" && day === 31){
        console.log("error")
    } else {
        console.log("ok")
    }
}

const errorrLogic = (year, month, day) => {
    if (year % 4 === 0 && month == 02 && day >= 30 
        || year % 4 > 0 && month == 02 && day >= 29
        || month == 04  && day === 31|| month == 06  && day === 31|| month == 09  && day === 31|| month == 11 && day === 31){
        console.log("error")
    } else {
        console.log("ok")
    }
}

const errorrrLogic = (year, month, day) => {
    if (year % 4 == 0 && month == "02" && day >= 30 
    || year % 4 > 0 && month == "02" && day >= 29
    || month == "04"  && day == 31|| month == "06"  && day == 31|| month == "09"  && day == 31|| month == "11" && day == 31){
        console.log("error")
    } else {
        console.log("ok")
    }
}