import requests
import os
import shutil
import json
from PIL import Image

dirpath = "images"
if os.path.exists(dirpath) and os.path.isdir(dirpath):
    shutil.rmtree(dirpath)
os.mkdir(dirpath)
userName = "jackragless"
headers = {
    "Authorization": "Bearer "
    + "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"
}

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
            repo["imgs"].append(f"/images/{repo['name']}/{img['name']}")
            img_data = requests.get(img["download_url"]).content
            with open(f"images/{repo['name']}/{img['name']}", "wb") as handler:
                handler.write(img_data)

        repo["thumbnail"] = f"{dirpath}/{repo['name']}/thumbnail.jpg"
        image = Image.open(f"images/{repo['name']}/{imgs[0]['name']}").convert("RGB")
        image.thumbnail((480, 480), Image.ANTIALIAS)
        image.save(f"images/{repo['name']}/thumbnail.jpg", "JPEG")


open("projects_json.txt", "w").write(json.dumps(repos))
