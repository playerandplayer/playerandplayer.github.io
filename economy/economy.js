class Economy{

    constructor(){

        this.gdp=100;

        this.gdpGrowth=2;

        this.inflation=2;

        this.unemployment=5;

        this.debt=45;

    }

    update(){

        this.gdpGrowth+=
            (Math.random()-0.5)*0.4;

        this.gdp+=
            this.gdp*(this.gdpGrowth/1200);

        this.inflation+=
            (Math.random()-0.5)*0.15;

        this.unemployment+=
            (Math.random()-0.5)*0.15;

        this.debt+=
            (Math.random()-0.5)*0.25;

    }

}