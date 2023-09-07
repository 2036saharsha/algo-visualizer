const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    const r = letters[Math.floor(Math.random() * 10)]; 
    const g = letters[Math.floor(Math.random() * 16)]; 
    const b = letters[Math.floor(Math.random() * 16)]; 

    const channels = [r, g, b];
    for (let i = channels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [channels[i], channels[j]] = [channels[j], channels[i]];
    }

    color += channels.join('');

    return color;
}

export const generateRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = getRandomNumber(min, max);
        const randomColor = getRandomHexColor(); 
        randomArray.push([randomNumber, randomColor]);
    }
    return randomArray;
};
