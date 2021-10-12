#!/usr/bin/env bash

# args
declare file_data=$1
declare file_input=$2
declare file_output=$3

source $file_data
eval "echo \"$(< $file_input)\"" > $file_output
