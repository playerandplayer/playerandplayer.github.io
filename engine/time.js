const Time = {

    months:[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],

    currentMonth:0,

    currentYear:2025,

    advance(game){

        this.currentMonth++;

        if(this.currentMonth>11){

            this.currentMonth=0;

            this.currentYear++;

        }

    },

    monthName(){

        return this.months[this.currentMonth];

    },

    year(){

        return this.currentYear;

    }

};