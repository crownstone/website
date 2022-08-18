#!/bin/sh

usage="$0 url"

url=${1:? "Usage $usage"}

mkdir -p tmp
cd tmp
wget $url -q -O file.html
html2md -i file.html -o file1.md
cat file1.md | tail -n +65 | head -n -20 > file2.md
cat file2.md | sed 's/M-BM-//g' > file3.md

./download_images.sh

echo '---' >> template.md
echo 'layout: post' >> template.md
echo 'title: ""' >> template.md
echo 'description: ""' >> template.md
echo 'category: ' >> template.md
echo 'tags: []' >> template.md
echo 'author: annevanrossum' >> template.md
echo '---' >> template.md
echo '{% include JB/setup %}' >> template.md
echo '' >> template.md
cat template.md file3.md > ../../_posts/new.md
echo "Write to file ../_posts/new.md"
