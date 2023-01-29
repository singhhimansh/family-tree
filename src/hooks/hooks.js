import React, { useState } from "react";

// export const first

export const useFamilyPreviewDetails = (obj) => {
  const [familyPreviewDetails, setFamilyPreviewDetails] = useState({});

  return [familyPreviewDetails, setFamilyPreviewDetails];
};

export const useSetFamilyData=(obj)=>{
  const [family, setFamily] = useState([]);
  
  return[family,setFamily]

}
