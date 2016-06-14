#!/bin/sh

shopt -s nullglob

for f in *.jpg *.png; do
	echo "Convert $f"
	convert -resize 112x112 $f $f
done
