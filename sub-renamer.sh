#!/usr/bin/env bash
# Goal => Rename
# 1.Hello => 01.Hello
# 12.Hello => 12.Hello
# Tweak if you have to go to 3 digits

separator="."
# Renames folders in current directory
 for f in [[:digit:]]$separator*; do mv "$f" "0$f"; done

# Renames each file in each sub-directory
# Not nested, only one directory down

for D in *; do
  # the root folder
  if [ -d "${D}" ]; then
    echo $D # your processing here
    cd "$D"
    # destination sub-dir
    sleep 0.4
    for f in [[:digit:]]$separator*; do
      # the files
      echo "$f" "=>" "0$f"
      mv "$f" "0$f"
      sleep 0.4
    done && cd ..
  fi
  echo ""
  echo "===="
  echo ""
done

## TODO: A step deeper/nested!
# How about doing this with NodeJS instead?

