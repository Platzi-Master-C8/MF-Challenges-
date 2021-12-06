import React from 'react'

const getData = async (API) => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
};

export default getData;
  
