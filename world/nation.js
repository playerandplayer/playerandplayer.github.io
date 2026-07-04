class Nation {

    constructor(name){

        this.name=name;

        this.population=12000000;

        this.approval=50;

        this.economy=new Economy();

        this.parties=[];
		
		this.government = new Government();

    }

    addParty(party){

        this.parties.push(party);

    }

    update(){

        this.economy.update();

        this.approval+=
            (Math.random()-0.5);

        this.approval=Math.max(
            0,
            Math.min(100,this.approval)
        );

        for(const p of this.parties){

            p.update(this);

        }

    }

}