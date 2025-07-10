#\!/bin/bash
git add .
# 変更が無ければ終了
git diff --cached --quiet && exit 0
git commit -m "auto: $(date '+%F %T')"
git push
