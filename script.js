function firstChar(text) {
  // your code here
	 let i = 0;

    while (i < text.length && text[i] === ' ') {
        i++;
    }

    if (i === text.length) {
        return '';
    }

    return text[i];
}

// Do not change the code below


//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
