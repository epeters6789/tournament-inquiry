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
        cost += option1[i] * 322.56;
        cost += option2[i] * 322.56;
        cost += option3[i] * 322.56;
        cost += option4[i] * 215.04;
        cost += option5[i] * 215.04;

      // if weekday night
      }else{
        cost += option1[i] * 259.84;
        cost += option2[i] * 259.84;
        cost += option3[i] * 259.84;
        cost += option4[i] * 174.72;
        cost += option5[i] * 174.72;
      }

    // If off season
    }else{

      // If weekend
      if(day === 5 || day === 6){
        cost += option1[i] * 259.84;
        cost += option2[i] * 259.84;
        cost += option3[i] * 259.84;
        cost += option4[i] * 190.21;
        cost += option5[i] * 190.21;

      // If weekday
      }else{
        cost += option1[i] * 222.88;
        cost += option2[i] * 222.88;
        cost += option3[i] * 222.88;
        cost += option4[i] * 153.44;
        cost += option5[i] * 153.44;
      }
    }
  }

  return cost;
}
