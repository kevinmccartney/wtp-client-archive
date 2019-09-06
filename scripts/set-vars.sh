#!/usr/bin/env bash

if[$CIRCLE_BRANCH == 'master']; then
  S3_DEST = $S3_DEST_MASTER;
  NG_BUILD_ARGS = $NG_BUILD_ARGS_MASTER;
else if[$CIRCLE_BRANCH == 'qa']; then
  S3_DEST = $S3_DEST_QA;
  NG_BUILD_ARGS = $NG_BUILD_ARGS_QA;
else if[$CIRCLE_BRANCH == 'develop']; then
  S3_DEST = $S3_DEST_DEV;
  NG_BUILD_ARGS = $NG_BUILD_ARGS_DEV;
fi
