
const getDonatedData=()=>{
    const donationData= localStorage.getItem('donation-data');
    if(donationData){
        return JSON.parse(donationData)
    }
    return [];

}

// const saveDonatedData=id=>{
//     const donationData= getDonatedData();

//     const isexist= donationData.find(data=> data.id ===id);

//     if(!isexist){
//         donationData.push(id);
//         localStorage.setItem('donation-data', JSON.stringify(donationData))
        
//     }
    
// }


const saveDonatedData = (id) => {
    const donationData = getDonatedData();
  
    if (!donationData.includes(id)) {
      donationData.push(id);
      localStorage.setItem('donation-data', JSON.stringify(donationData));
      return true;
    }
    return false;
  
  };


export {getDonatedData, saveDonatedData};