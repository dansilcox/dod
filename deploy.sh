#!/usr/bin/env bash

set -e;

BUCKET_NAME="$1";
DIST_DIR='./dist/dod/';

if [ ! -n "$BUCKET_NAME" ]; then
    echo "Please provide bucket name as S3 url e.g. s3://foo-bar";
    exit 1;
fi

echo "Building artifact...";
ng build;
echo "Pushing to S3...";
aws s3 sync "$DIST_DIR" "$BUCKET_NAME";
echo "Done!";
