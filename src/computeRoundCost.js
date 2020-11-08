export function computeRoundCost(length, dates, rounds, numPeople){

  // Initialize cost for golfing portion of event
  let cost = 0;

  // Loop through days of event and accumulate cost
  for(var i=0; i< length; i++){

    // Get day, month, and number of people
    let day = dates[i].getDay();
    let month = dates[i].getMonth();
    let people = numPeople;

    // If number of people is 0-24
    if(people >=0 && people <= 24){

      // If month is April - June (Prime Season)
      if(month >= 3 && month <= 5 ){

        // If day is Sunday, Friday or Saturday
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*90 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*90;
          }

        // If weekday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*75 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*75;
          }
        }

      // If off season
      }else{

        // If Sunday, Friday, or Saturday
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*75 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*75;
          }

        // If weedday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*55 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*55;
          }
        }
      }
    }

    // If number of people is 25-60
    if(people >=25 && people <= 60){

      // If prime season
      if(month >= 3 && month <= 5 ){

        // If weekend
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*85 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*85;
          }

        // If weekday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*70 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*70;
          }
        }

      // If off season
      }else{

        // If weekend
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*70 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*70;
          }

        // If weekday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*50 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*50;
          }
        }
      }
    }

    // If number of people is 61-72
    if(people >=61 && people <= 72){

      // If prime season
      if(month >= 3 && month <= 5 ){

        // If weekend
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*80 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*80;
          }

        // If weekday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*65 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*65;
          }
        }

      // If off season
      }else{

        // If weekend
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*65 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*65;
          }

        // If weekday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*45 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*45;
          }
        }
      }
    }

    // If number of people is >= 72
    if(people >=72){

      // If prime season
      if(month >= 3 && month <= 5 ){

        // If weekend
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*75 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*75;
          }

        // If weekday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*60 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*60;
          }
        }

      // If off season
      }else{

        // If weekend
        if (day === 0 || day === 5 || day === 6){

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*60 + numPeople*35;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*60;
          }

        // If weekday
        }else{

          // If replay round
          if(rounds[i] === 2){
            cost += numPeople*40 + numPeople*25;

          // If single round
          }else if(rounds[i] === 1){
            cost += numPeople*40;
          }
        }
      }
    }
  }
  return cost;
}
