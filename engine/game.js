class Game {

    constructor() {

        this.running = false;

        this.speed = 1;

        this.month = 0;

        this.nation = null;
		
		this.election = new Election(200);

    }

    start() {

        this.running = true;

        this.loop();

    }

    stop() {

        this.running = false;

    }

    loop() {

        if (!this.running) return;

        this.tick();

        setTimeout(() => this.loop(), 1000 / this.speed);

    }

    tick() {

        this.month++;

        Time.advance(this);

        this.nation.update();

        console.clear();
		
		this.election.update(this);

        console.log(
            `${Time.monthName()} ${Time.year()}`
        );

        console.table({
            GDP: this.nation.economy.gdp.toFixed(1),
            Inflation: this.nation.economy.inflation.toFixed(2),
            Unemployment: this.nation.economy.unemployment.toFixed(2),
            Approval: this.nation.approval.toFixed(1)
        });

    }

}