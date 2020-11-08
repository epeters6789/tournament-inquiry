export default function convertDinner(meal){

  // Convert dinners to monetary values
  if (meal === 'None'){
    return 0;
  }else if(meal === 'Napa Duet Dinner'){
      return 45;
  }else if(meal === 'Provence'){
      return 50;
  }else if(meal === 'Burgundy'){
      return 60;
  }else if(meal === 'Champagne'){
      return 68;
  }else if(meal === 'Jalisco'){
      return 54;
  }else if(meal === 'Little Italy'){
      return 58;
  }else{
    return 0;
  }

}
