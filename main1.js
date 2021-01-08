const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温は摂氏-1度で外は寒かった。:insertx:は出かけた。:inserty:に着いたら,:insertz:。体重50kgのBobは驚いたが、:insertx:は驚かなかった。:inserty:ではよくあることだった';
let insertX = ['ねこ','いぬ','くま'];
let insertY = ['東京','名古屋','大阪'];
let insertZ = ['混雑していた','とても寒かった','雪が降っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(50*2.2046) + 'ポンド';
    const temperature = '華氏' + Math.round(((-1)*9/5)+32);
    newStory = newStory.replace('摂氏-1',temperature);
    newStory = newStory.replace('体重50kg',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
