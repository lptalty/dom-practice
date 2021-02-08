const container = document.querySelector('#container')

const p = document.createElement('p');
p.textContent = `Hey I\'\m red`;
p.style.color = 'red';

container.append(p);

const h3 = document.createElement('h3')
h3.textContent = 'I\'\m a blue h3!'
h3.style.color = 'blue'

container.append(h3)

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.borderColor = 'black'

const h1Div = document.createElement('h1')
h1Div.textContent = 'I\'\m in a div'

const pDiv = document.createElement('p')
pDiv.textContent = 'ME TOO!'

div.append(h1Div)
div.append(pDiv)
container.append(div)
