DIR="./.next"
if [ -d "$DIR" ]; then
  # Take action if $DIR exists. #
  echo "Installing config files in ${DIR}..."
  rm -rf ./.next
fi

ENV=prod npm run build

ENV=prod pm2 start ecosystem.config.js
