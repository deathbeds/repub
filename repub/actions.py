"""actions for repub"""
import zipfile
import fnmatch


def extract_from_archive(archive: str, *patterns: str):
    with zipfile.ZipFile(archive) as zf:
        for name in sorted(zf.namelist()):
            print("...", name, "...", end="")
            if not any(fnmatch.fnmatch(name, pattern) for pattern in patterns):
                print("skipped!")
                continue
            zf.extract(name)
            print("copied!")
