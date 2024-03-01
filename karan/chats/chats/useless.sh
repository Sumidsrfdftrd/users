#!/bin/bash
#for ((i=51;i<55;i++))
#do
#     sed -i "s/id=\"password\" class=\"password-input\"/id=\"password\"/"  "friend${i}.html"
#     sed -i "s/name=\"username\"/name=\"username\" class=\"password-input\"/"  "friend${i}.html"
#     sed -i "s/enteredPassword === correctPassword/enteredPassword !== correctPassword/"  "friend${i}.html"
#     sed -i "s/window.location.href = 'path\/to\/next\/page.html';/document.getElementById('error-message').innerText = 'Incorrect username or password!'; document.getElementById('error-message').style.color = 'red';/"  "friend${i}.html"
#done
sed -i "s/your\$##^@&*\$^_password/@username/" took.html
