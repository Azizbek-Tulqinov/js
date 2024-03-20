let text =
  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, laudantium. asd sedfs sef adwqdwsd adawd";
let variable = 0;
let count = 0;

while (count < text.length) {
  if (text[count] == "a" || text[count] == "A") {
    variable++;
  }
  count++;
}
console.log(variable);
