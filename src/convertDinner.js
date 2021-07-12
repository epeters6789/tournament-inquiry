export default function convertDinner(meal){

  // Convert dinners to monetary values
  if (meal === 'None'){
    return 0;
  }else if(meal === 'Napa Duet Dinner'){
      return 40;
  }else if(meal === 'Provence (Stuffed Chicken Breast)'){
      return 50;
  }else if(meal === 'Provence (Beef Bourguignon)'){
      return 50;
  }else if(meal === 'Provence (Seared Pacific Salmon)'){
      return 50;
  }else if(meal === 'Champagne (Filet)'){
      return 63;
  }else if(meal === 'Champagne (Seared Sea Scallops)'){
      return 63;
  }else if(meal === 'Vegetarian'){
      return 24;
  }else if(meal === 'Chicken Strips (Kids)'){
      return 10;
  }else if(meal === 'Cheese Slider (Kids)'){
      return 10;
  }else if(meal === 'Macaroni and Cheese (Kids)'){
      return 10;
  }else{
    return 0;
  }

}
