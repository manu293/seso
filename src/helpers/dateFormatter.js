class DateFormatter {

    constructor() {
        this.currentDate = new Date();
    }

    getCurrentDay() {
        const currDay = this.currentDate.getDay() - 1;
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

    getCurrentFullDay() {
        const currDay = this.currentDate.getDay();
        const dayList = {
            0: "Monday",
            1: "Tuesday",
            2: "Wednesday",
            3: "Thuesday",
            4: "Friday",
            5: "Saturday",
            6: "Sunday"
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

        const currMonth = this.currentDate.getMonth();

        return monthList[currMonth];
    }

    getFormattedMonth(date) {
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

        const currMonth = date.getMonth();

        return monthList[currMonth];
    }

    getFormattedDate(date) {
        return date.getDate();
    }

}

export default DateFormatter;