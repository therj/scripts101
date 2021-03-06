# Goal => Rename
# 1.Hello => 01.Hello
# 12.Hello => 12.Hello
# Tweak if you have to go to 3 digits

# Renames folders in current directory
for f in ?.*; do mv "$f" "0$f"; done

# Renames each file in each sub-directory
# Not nested, only one directory down 
for D in *; do
  if [ -d "${D}" ]; then
    # echo $D   # your processing here
    cd "$D" && for f in ?.*; do mv "$f" "0$f"; done && cd ..
  fi
done

## TODO: A step deeper/nested!
# How about doing this with NodeJS instead?
