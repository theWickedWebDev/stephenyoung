source ~/.zshrc
deploy
aws s3 sync ./dist/public/ s3://cdn.thewickedweb.dev/site --cache-control max-age=31536000,public
aws cloudfront create-invalidation --distribution-id "E2Y5RQXAVT1S9J" --paths "/site/*" | > /dev/null
