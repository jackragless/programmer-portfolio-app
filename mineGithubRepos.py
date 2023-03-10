import requests
import os
import shutil
import json
from PIL import Image

# from dotenv import load_dotenv

# load_dotenv()

# github_auth = load_dotenv(os.getenv("GITHUB_AUTH"))
github_auth = "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"

dirpath = "frontend/public/images/"
if os.path.exists(dirpath) and os.path.isdir(dirpath):
    shutil.rmtree(dirpath)
os.mkdir(dirpath)
userName = "jackragless"
headers = {"Authorization": f"Bearer {github_auth}"}
repos = requests.get(
    f"https://api.github.com/users/{userName}/repos", headers=headers
).json()

for repo in repos:
    langs, imgs = (
        list(requests.get(repo["languages_url"], headers=headers).json().keys()),
        requests.get(
            f"https://api.github.com/repos/jackragless/{repo['name']}/contents/media",
            headers=headers,
        ).json(),
    )
    repo["langs"] = langs
    repo["imgs"] = []

    if isinstance(imgs, list):
        os.mkdir(f"{dirpath}/{repo['name']}")

        for img in imgs:
            repo["imgs"].append(f"/{dirpath}{repo['name']}/{img['name']}")
            img_data = requests.get(img["download_url"]).content
            with open(f"{dirpath}{repo['name']}/{img['name']}", "wb") as handler:
                handler.write(img_data)

        repo["thumbnail"] = f"{dirpath}/{repo['name']}/thumbnail.jpg"
        image = Image.open(f"{dirpath}{repo['name']}/{imgs[0]['name']}").convert("RGB")
        image.thumbnail((480, 480), Image.ANTIALIAS)
        image.save(f"{dirpath}{repo['name']}/thumbnail.jpg", "JPEG", quality=20)


open("projects_json.txt", "w").write(json.dumps(repos))
