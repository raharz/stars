function showStars(numbers) {
  for (let i = 1; i <= numbers; i++) {
    console.log("*".repeat(i));
  }
  for (let j = numbers - 1; j >= 1; j--) {
    console.log("*".repeat(j));
  }
}
showStars(3);
