# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:PGthirteen/blog.git main:gh-pages
