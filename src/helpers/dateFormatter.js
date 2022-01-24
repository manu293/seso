class DateFormatter {

    constructor() {
        this.currentDate = new Date();
    }

    getCurrentDay() {
        const currDay = this.currentDate.getDay();
        const dayList = {
            0: "Mon",
            1: "Tue",
            2: "Wed",
            3: "Thu",
            4: "Fri",
            5: "Sat",
            6: "Sun"
        };

        return dayList[currDay];
    }

    getCurrentDate() {
        return this.currentDate.getDate();
    }

    getCurrentYear() {
        return this.currentDate.getFullYear();
    }

    getCurrentMonth() {
        const monthList = {
            0: "Jan",
            1: "Feb",
            2: "Mar",
            3: "Apr",
            4: "May",
            5: "Jun",
            6: "Jul",
            7: "Aug",
            8: "Sep",
            9: "Oct",
            10: "Nov",
            11: "Dec",
        };

        const currMonth = this.currentDate.getMonth() + 1;

        return monthList[currMonth];
    }

}

export default DateFormatter;