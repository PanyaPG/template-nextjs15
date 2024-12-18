DIR="./.next"
if [ -d "$DIR" ]; then
  # Take action if $DIR exists. #
  echo "Installing config files in ${DIR}..."
  rm -rf ./.next
fi

ENV=nonprod npm run build

ENV=nonprod pm2 start ecosystem.config.js
