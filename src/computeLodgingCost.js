export function computeLodgingCost(length, dates, option1, option2, option3,
                                   option4, option5){

  // Initialize cost for lodging during event
  let cost = 0;

  // Loop through days of event
  for(var i=0; i< length; i++){

    // Compute day and month of day
    let day = dates[i].getDay();
    let month = dates[i].getMonth();

    // If during prime season or september and october
    if((month >= 3 && month <= 5) || month === 8 || month === 9){

      // If weekend night
      if(day === 5 || day === 6){
        cost += option1[i] * 347.20;
        cost += option2[i] * 347.20;
        cost += option3[i] * 347.20;
        cost += option4[i] * 240.80;
        cost += option5[i] * 240.80;

      // If weekday night
      }else{
        cost += option1[i] * 280.00;
        cost += option2[i] * 280.00;
        cost += option3[i] * 280.00;
        cost += option4[i] * 196.00;
        cost += option5[i] * 196.00;
      }

    // If off season
    }else{

      // If weekend
      if(day === 5 || day === 6){
        cost += option1[i] * 293.44;
        cost += option2[i] * 293.44;
        cost += option3[i] * 293.44;
        cost += option4[i] * 224.00;
        cost += option5[i] * 224.00;

      // If weekday
      }else{
        cost += option1[i] * 240.80;
        cost += option2[i] * 240.80;
        cost += option3[i] * 240.80;
        cost += option4[i] * 173.60;
        cost += option5[i] * 173.60;
      }
    }
  }

  return cost;
}
