class Party {

    constructor(name,color,ideology){

        this.name=name;

        this.color=color;

        this.ideology=ideology;

        this.popularity=10;

        this.voteShare=0;

        this.seats=0;

        this.inGovernment=false;

        this.coalition=null;

    }

    update(nation){

        const eco=nation.economy;

        // Economy

        if(eco.gdpGrowth>3)
            this.popularity+=0.15;

        if(eco.unemployment>8)
            this.popularity-=0.25;

        // Inflation hurts everyone

        if(eco.inflation>6)
            this.popularity-=0.15;

        this.popularity+=(Math.random()-0.5)*0.3;

        this.popularity=Math.max(
            0.5,
            Math.min(70,this.popularity)
        );

    }

}