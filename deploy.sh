# 进入生成的文件夹
cd .public

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:PGthirteen/learn-typescript.git main:gh-pages
