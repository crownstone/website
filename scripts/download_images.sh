#!/bin/bash

mkdir -p tmp/images
cd tmp
cat file3.md| grep -o '\!\[\][^)]*)' | tr -d '![]()' > images.urls

cd images

IFS=$'\n' 
for image_url in $(cat ../images.urls); do
    echo "xdg-open $image_url"
    xdg-open "$image_url"
    echo -n "Type image name to store: "
    read image_name
    if [ -n "${image_name}" ]; then
	wget -q $image_url -O $image_name
	echo sed -i 's,'"${image_url}"',{{site.url}}/attachments/blog/'"${image_name}"',g' ../file3.md
	sed -i 's,'"${image_url}"',{{site.url}}/attachments/blog/'"${image_name}"',g' ../file3.md
	cp $image_name ../../../attachments/blog
    else
	echo "Skip this one"
    fi
done 

unset IFS
