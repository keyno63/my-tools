from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import os, sys

# APIキーを設定
api_key = os.getenv('API_KEY', None)
if not api_key:
    sys.exit("APIキーが設定されていません。環境変数 'API_KEY' を設定してください。")

youtube = build('youtube', 'v3', developerKey=api_key)

# 公開動画の動画IDを設定
video_id = os.getenv('VIDEO_ID', None)
if not video_id:
    video_id = "32D4qIBBucA"

try:
    # 字幕トラック一覧を取得
    captions = youtube.captions().list(
        part="snippet",
        videoId=video_id
    ).execute()

    # 利用可能な字幕を表示
    for caption in captions["items"]:
        lang = caption["snippet"]["language"]
        name = caption["snippet"]["name"]
        print(f"言語: {lang}, 名前: {name}")

except HttpError as e:
    print(f"エラー: {e}")