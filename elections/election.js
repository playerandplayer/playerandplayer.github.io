class Election {

    constructor(seats = 200) {

        this.totalSeats = seats;

        this.yearLength = 48; // 4 years

        this.lastElection = 0;

    }

    update(game) {

        if (game.month - this.lastElection >= this.yearLength) {

            this.holdElection(game);

            this.lastElection = game.month;

        }

    }

    holdElection(game) {

        console.log("Election held!");

        const parties = game.nation.parties;

        // Campaign noise
        let totalVotes = 0;

        for (const party of parties) {

            let vote = party.popularity;

            vote += (Math.random() - 0.5) * 3;

            vote = Math.max(0.1, vote);

            party.voteShare = vote;

            totalVotes += vote;

        }

        // Normalise to 100%

        for (const party of parties) {

            party.voteShare =
                party.voteShare / totalVotes * 100;

        }

        this.allocateSeats(parties);
		
		game.nation.government.form(parties);

    }

    allocateSeats(parties) {

        // Reset seats

        for (const p of parties)
            p.seats = 0;

        const quotients = [];

        for (const p of parties) {

            for (let d = 1; d <= this.totalSeats; d++) {

                quotients.push({
                    party: p,
                    value: p.voteShare / d
                });

            }

        }

        quotients.sort((a,b)=>b.value-a.value);

        for(let i=0;i<this.totalSeats;i++){

            quotients[i].party.seats++;

        }

    }

}