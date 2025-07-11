#!/bin/bash
echo "🛠  Nuxt を静的ビルド中…"
pnpm build --silent || { echo "❌ build 失敗"; exit 1; }

echo "🚀 公開ページ(https://yoshihiko-sekiya.github.io/flexgo-site) をブラウザで開きます"
open "https://yoshihiko-sekiya.github.io/flexgo-site"
