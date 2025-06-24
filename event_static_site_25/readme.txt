# 体験会準備
1. ターミナルでevent_static_site_25に移動
2. 生徒用のブランチ作成(ブランチ名は2025mmddPC名生徒イニシャル)
    (例) git checkout -b 20250209t01kk

# 体験会終了後
1. GitHubへのプッシュ
    git add .
    git commit -m '1stcmt'
    git push origin ブランチ名(20250209t01kk)
2. Renderの確認が終わればメインブランチに切り替え
    git checkout main
以降の作業(黒田担当)
3. RenderでWebページをデプロイ→公開
4. 顧客へのサンクスメールで公開URLを送る