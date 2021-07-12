export default function convertBreakfast(meal){

  // Convert breakfast meals to monetary values
  if (meal === 'None'){
    return 0;
  }else if(meal === 'Copper Continental Plus'){
      return 13;
  }else if(meal === 'Breakfast Burrito'){
      return 12;
  }else if(meal === 'Vine18 Breakfast Buffet'){
      return 20;
  }else if(meal === 'Vine18 Breakfast Plated'){
      return 24;
  }else{
    return 0;
  }

}
