export default function convertBreakfast(meal){

  // Convert breakfast meals to monetary values
  if (meal === 'None'){
    return 0;
  }else if(meal === 'Copper Continental'){
      return 13;
  }else if(meal === 'Copper Continental Plus'){
      return 19.5;
  }else if(meal === 'Breakfast Burrito'){
      return 19.5;
  }else if(meal === 'Vine18 Breakfast'){
      return 19.5;
  }else if(meal === 'Pancake Breakfast'){
      return 25.5;
  }else if(meal === 'NY Steak and Eggs'){
      return 32;
  }else{
    return 0;
  }

}
