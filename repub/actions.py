"""actions for repub."""
import fnmatch
import shutil
import zipfile
from pathlib import Path


def extract_from_archive(archive: str, *patterns: str) -> None:
    """Extract ``fnmatch`` patterns from an archive."""
    with zipfile.ZipFile(archive) as zf:
        for name in sorted(zf.namelist()):
            print("...", name, "...", end="")
            if not any(fnmatch.fnmatch(name, pattern) for pattern in patterns):
                print("skipped!")
                continue
            zf.extract(name)
            print("copied!")


def copy_some(src: str, dest: str, includes=None, excludes=None) -> None:
    """Copy some files."""
    dest_path = Path(dest)
    src_path = Path(src)
    includes = includes or ["**/*"]
    excludes = excludes or []
    included = sorted(set(sum([sorted(src_path.glob(p)) for p in includes], [])))
    included = [
        i
        for i in included
        if not i.is_dir()
        and not any(fnmatch.fnmatch(str(i.relative_to(src_path)), e) for e in excludes)
    ]
    for path_src in included:
        rel = path_src.relative_to(src_path).as_posix()
        path_dest = dest_path / rel
        if not path_dest.parent.exists():
            path_dest.parent.mkdir(parents=True)
        shutil.copy2(path_src, path_dest)
