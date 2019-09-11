#!/usr/bin/env bash

if [ "$CIRCLE_BRANCH" == 'master' ]
  then
    export S3_DEST="$S3_DEST_MASTER";
    export NG_BUILD_ARGS=$NG_BUILD_ARGS_MASTER;
elif [ "$CIRCLE_BRANCH" == 'qa' ]
  then
  export S3_DEST="$S3_DEST_QA";
  export NG_BUILD_ARGS=$NG_BUILD_ARGS_QA;
elif [ "$CIRCLE_BRANCH" == 'develop' ]
  then
  export S3_DEST="$S3_DEST_DEV";
  export NG_BUILD_ARGS=$NG_BUILD_ARGS_DEV;
fi

