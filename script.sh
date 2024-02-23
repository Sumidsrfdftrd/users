#!/bin/bash

# File path
    index=()
    index[1]="/var/www/html/testuser/index.html"
    index[2]="/var/www/html/testuser/gallery/index.html"
    index[3]="/var/www/html/testuser/highlights/index.html"
    index[4]="/var/www/html/testuser/nudes/index.html"
    index[5]="/var/www/html/testuser/posts/index.html"
    index[6]="/var/www/html/testuser/personalPhotos/index.html"
    index[7]="/var/www/html/testuser/videocalls/index.html"
    index[9]="/var/www/html/testuser/live/index.html"
    index[10]="/var/www/html/testuser/history/index.html"
    index[11]="/var/www/html/testuser/chats/chats/friend"
    index[12]="/var/www/html/testuser/chats/index.html"
# Add the new lines
for ((i=51;i<55;i++))
do
#file="${index[i]}"
    file="${index[11]}${i}.html"
sed -i "/document.getElementById('error-message').style.color = 'red';/a window.location.href = 'https:\/\/testwebsumit.wuaze.com\/';" "$file"
done
