rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:DDB324/duoduo-ui-vue3-website.git
git push -f -u origin master &&
git remote add gitee git@gitee.com:ddb324/duoduo-ui-vue3-website.git
git push -f -u gitee master &&
cd - &&
echo https://jiangdaoran.xyz/duoduo-ui-vue3-website/
