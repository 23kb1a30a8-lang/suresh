<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Event Listeners Example</title>
  <style>
    #hover-box {
      width: 200px;
      height: 100px;
      background-color: lightblue;
      text-align: center;
      line-height: 100px;
      margin: 20px 0;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button id="click-btn">Click Me</button>
  
  <div id="hover-box">Hover Over Me</div>

  <input type="text" id="input-field" placeholder="Type something..." />

  <p id="output"></p>

  <script>
    // Select elements
    const button = document.getElementById('click-btn');
    const hoverBox = document.getElementById('hover-box');
    const inputField = document.getElementById('input-field');
    const output = document.getElementById('output');

    // Click event listener
    button.addEventListener('click', () => {
      alert('Button was clicked!');
    });

    // Mouseover event listener
    hoverBox.addEventListener('mouseover', () => {
      hoverBox.style.backgroundColor = 'lightgreen';
      hoverBox.textContent = 'Thanks for hovering!';
    });

    // Mouseout event listener to reset the hover box
    hoverBox.addEventListener('mouseout', () => {
      hoverBox.style.backgroundColor = 'lightblue';
      hoverBox.textContent = 'Hover Over Me';
    });

    // Input event listener
    inputField.addEventListener('input', (event) => {
      output.textContent = `You typed: ${event.target.value}`;
    });
  </script>
</body>
</html>
