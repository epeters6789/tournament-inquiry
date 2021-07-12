export default function convertLunch(meal){

  // Convert lunch to monetary values
  if (meal === 'None'){
    return 0;
  }else if(meal === 'Turkey Wrap (Boxed)'){
      return 15;
  }else if(meal === 'Ham and Swiss Wrap (Boxed)'){
      return 15;
  }else if(meal === 'Phily Cheessteak Sandwhich (Boxed)'){
      return 20;
  }else if(meal === 'Fried Chicken Sandwich (Boxed)'){
      return 20;
  }else if(meal === 'BBQ Pulled Pork (Plated)'){
      return 22;
  }else if(meal === 'Chicken Breast (Plated)'){
      return 22;
  }else if(meal === 'Smoked Hot Sausage (Plated)'){
      return 22;
  }else if(meal === 'Seared Salmon (Plated)'){
      return 24;
  }else if(meal === 'Grilled Chicken Breast (Plated)'){
      return 24;
  }else{
    return 0;
  }

}
