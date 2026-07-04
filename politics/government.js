class Government{

    constructor(){

        this.primeMinister=null;

        this.coalition=[];

        this.majority=false;

    }

    form(parties){

        this.coalition=[];

        let ordered=[...parties];

        ordered.sort((a,b)=>b.seats-a.seats);

        let total=0;

        for(const p of ordered){

            this.coalition.push(p);

            p.inGovernment=true;

            total+=p.seats;

            if(total>=101){

                this.primeMinister=ordered[0];

                this.majority=true;

                return;

            }

        }

    }

}