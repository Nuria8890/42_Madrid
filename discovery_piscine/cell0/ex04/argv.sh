#!/bin/bash
argumentos=("$@")

echo $#

for numero in {0..$#}; do
  echo "${argumentos[$numero]}"
done
