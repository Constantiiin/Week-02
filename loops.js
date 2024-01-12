
// Activity 1 //


let favoriteSongs = [
    "Hello - Adele",
    "Shape of You - Ed Sheeran",
    "Bad Habits - Ed Sheran",
  ];
  console.log(favoriteSongs);
  favoriteSongs.push("As It Was - Harry Styles", "Love Yourself - Justin Bieber");
  favoriteSongs.pop();
  console.log(favoriteSongs);
  

  // Activity 2 //

  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map((number) => number * 2);
  
  console.log("Original numbers:", numbers);
  console.log("Doubled numbers:", doubledNumbers);

  // Activity 3 //

  
  let favoriteFilms = [
    "The Nun",
    "The Dark",
    "Mr Bean",
    "The Haunted House",
    "Star Civin War",
  ];
  favoriteFilms.push("Home Alone", "Matrix");
  for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(favoriteFilms[i]);
  }
  
 
  // Activity 4 //
  
  
  let randomNumbers = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    randomNumbers.push(randomNumber);
  }
  
  for (let i = 0; i < randomNumbers.length; i++) {
    console.log(randomNumbers[i]);
  }
  
 
  // Activity 5 //

  
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  }