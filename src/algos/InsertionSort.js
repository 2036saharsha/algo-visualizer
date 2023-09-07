export const InsertionSort = async function (arr, setElements, setCurrPicked, setCurrColor) {
    const sortedArray = [...arr];
  
    for (let i = 1; i < sortedArray.length; i++) {
        setCurrPicked(sortedArray[i][0]);
        setCurrColor(sortedArray[i][1])
      let currentElement = sortedArray[i][0];
      let currentColor = sortedArray[i][1];     
      let j = i - 1;
      
      while (j >= 0 && sortedArray[j][0] > currentElement) {
        sortedArray[j + 1] = sortedArray[j];
        j--;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setElements([...sortedArray]);
      }
  
      sortedArray[j + 1] = [currentElement, currentColor];
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      setElements([...sortedArray]);
    }
  };
