# メモ

## pythonの仮想環境をアクティブにする

ディレクトリを移動

```bash
cd Venv/Scripts
```

## アクティブ可能にする
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

仮想環境をアクティブにする

```bash
.\activate
```

仮想環境を非アクティブにする

```bash
.\deactivate
```

## pythonのバージョンを確認する

```bash
python --version
```

## pipのバージョンを確認する

```bash
pip --version
```

## pipのアップデート

```bash
python -m pip install --upgrade pip
```

## pipのインストール済みパッケージを確認する

```bash
pip list
```

## pipのインストール済みパッケージをファイルに出力する

```bash
pip freeze > requirements.txt
```

## pipのインストール済みパッケージをファイルからインストールする

```bash
pip install -r requirements.txt
```
## サーバー起動
python manage.py runserver