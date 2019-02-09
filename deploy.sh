#!/usr/bin/env bash

set -e;

# Read the bucket name from the env file below (not committed to git)
BUCKET_NAME="$(< .env.s3-bucket)"
DIST_DIR='./dist/dod/';

if [ ! -n "$BUCKET_NAME" ]; then
    echo "Please provide bucket name as S3 url e.g. s3://foo-bar in text file .env.s3-bucket";
    exit 1;
fi
echo "Preparing to build and deploy app to S3 bucket '$BUCKET_NAME'...";
echo "Building artifact...";
ng build;
echo "Pushing to S3 bucket '$BUCKET_NAME'...";
aws s3 sync "$DIST_DIR" "$BUCKET_NAME";
echo "Done!";
