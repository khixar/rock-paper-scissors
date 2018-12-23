let user_score = 0;
let comp_score = 0;
var user_score_span = document.getElementById('user_s');
var comp_score_span = document.getElementById('comp_s');
var rock_images_div = document.querySelector('.rock');
var paper_images_div = document.querySelector('.paper');
var scissor_images_div = document.querySelector('.scissor');
var win_text_div = document.querySelector('.win-text');

rock_images_div.addEventListener('click', function () {
  game('rock')
})

paper_images_div.addEventListener('click', function () {
  game('paper')
})

scissor_images_div.addEventListener('click', function () {
  game('scissor')
})

function game(user_choice) {
  comp_choice = generate_computer_choice();
  switch (user_choice + ' ' + comp_choice) {
    case 'rock rock':
      draw(user_choice, comp_choice);
      break;
    case 'rock paper':
      lost(user_choice, comp_choice);
      break;
    case 'rock scissor':
      win(user_choice, comp_choice);
      break;
    case 'paper rock':
      win(user_choice, comp_choice);
      break;
    case 'paper paper':
      draw(user_choice, comp_choice);
      break;
    case 'paper scissor':
      lost(user_choice, comp_choice);
      break;
    case 'scissor rock':
      lost(user_choice, comp_choice);
      break;
    case 'scissor paper':
      win(user_choice, comp_choice);
      break;
    case 'scissor scissor':
      draw(user_choice, comp_choice);
      break;      
  }
}

function generate_computer_choice() {
  game_arr = ['rock', 'paper', 'scissor']
  const choice = Math.floor(Math.random() * 3);
  return game_arr[choice]
}

function win(user_choice, comp_choice) {
  user_score++;
  user_score_span.innerHTML = user_score
  win_text_div.innerHTML = user_choice + ' covers ' + comp_choice + '. You Win!' 
  document.querySelector('.'+user_choice).classList.add('green');
  setTimeout(function() { document.querySelector('.'+user_choice).classList.remove('green'); }, 1000)
}

function draw(user_choice, comp_choice) {
  win_text_div.innerHTML = user_choice + ' cannot covers ' + comp_choice + '. Its Draw!' 
  document.querySelector('.'+user_choice).classList.add('draw');
  setTimeout(function() { document.querySelector('.'+user_choice).classList.remove('draw'); }, 1000)
}

function lost(user_choice, comp_choice) {
  comp_score++;
  comp_score_span.innerHTML = comp_score
  win_text_div.innerHTML = comp_choice + ' covers ' + user_choice + '. You Lost!' 
  document.querySelector('.'+user_choice).classList.add('red');
  setTimeout(function() { document.querySelector('.'+user_choice).classList.remove('red'); }, 1000)
}
