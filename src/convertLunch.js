export default function convertLunch(meal){

  // Convert lunch to monetary values
  if (meal === 'None'){
    return 0;
  }else if(meal === 'Turkey Wrap (Boxed)'){
      return 18.75;
  }else if(meal === 'Ham and Swiss Wrap (Boxed)'){
      return 18.75;
  }else if(meal === 'Roast Beef Sandwhich (Boxed)'){
      return 22;
  }else if(meal === 'BBQ Pulled Pork Sandwhich (Boxed)'){
      return 25;
  }else if(meal === 'Phily Cheessteak Sandwhich (Boxed)'){
      return 25;
  }else if(meal === 'Fried Chicken Sandwich (Boxed)'){
      return 25;
  }else if(meal === 'BBQ Pulled Pork (Plate)'){
      return 27;
  }else if(meal === 'Brisket (Plate)'){
      return 27;
  }else if(meal === 'Smoked Sausage (Plate)'){
      return 27;
  }else if(meal === 'Chicken Breast (Plate)'){
      return 27;
  }else if(meal === 'Ground Beef Tacos (Plate)'){
      return 29;
  }else if(meal === 'Chicken Tacos (Plate)'){
      return 29;
  }else{
    return 0;
  }

}
