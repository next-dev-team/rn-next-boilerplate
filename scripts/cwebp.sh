for f in assets/webp/*.png; do
  echo "Converting $f"
  ff=${f%????}  
  echo "no ext ${ff}"
  cwebp -q 75 -m 6 "$(pwd)/${f}" -o "${ff}.webp"
  rm "${ff}.png"
done

