"""documentation for ``doitoml``."""
import datetime
import os
import re
from pathlib import Path
from typing import Any, Dict

import tomli

os.environ.update(IN_SPHINX="1")


CONF_PY = Path(__file__)
HERE = CONF_PY.parent
ROOT = HERE.parent
PYPROJ = ROOT / "pyproject.toml"
PROJ_DATA = tomli.loads(PYPROJ.read_text(encoding="utf-8"))
RE_GH = (
    r"https://github.com"
    r"/(?P<github_user>.*?)"
    r"/(?P<github_repo>.*?)"
    r"/tree/(?P<github_version>.*)"
)
REPO_INFO = re.search(RE_GH, PROJ_DATA["project"]["urls"]["Source"])
NOW = datetime.datetime.now(tz=datetime.timezone.utc).date()

# metadata
author = PROJ_DATA["project"]["authors"][0]["name"]
project = PROJ_DATA["project"]["name"]
copyright = f"{NOW.year}, {author}"


# The full version, including alpha/beta/rc tags
release = PROJ_DATA["project"]["version"]

# The short X.Y version
version = ".".join(release.rsplit(".", 1))

# sphinx config
extensions = [
    "sphinx.ext.autodoc",
    "sphinx_autodoc_typehints",
    "sphinx.ext.intersphinx",
    "sphinx.ext.viewcode",
    "myst_nb",
    "sphinx.ext.autosectionlabel",
    "sphinx_copybutton",
    "sphinx_design",
]

# content
autoclass_content = "both"
always_document_param_types = True
typehints_defaults = "comma"
typehints_use_signature_return = True
autodoc_default_options = {
    "members": True,
    "show-inheritance": True,
    "undoc-members": True,
}
autosectionlabel_prefix_document = True
myst_heading_anchors = 3

intersphinx_mapping = {
    "python": ("https://docs.python.org/3", None),
}


# warnings
suppress_warnings = ["autosectionlabel.*"]

# theme
html_static_path = [
    "_static",
]
html_theme = "pydata_sphinx_theme"
html_logo = "_static/img/wordart.svg"
html_favicon = "_static/img/logo.svg"
html_css_files = ["css/theme.css"]

html_theme_options = {
    "github_url": PROJ_DATA["project"]["urls"]["Source"],
    "use_edit_page_button": REPO_INFO is not None,
    "logo": {"text": PROJ_DATA["project"]["name"]},
    "icon_links": [
        {
            "name": "PyPI",
            "url": PROJ_DATA["project"]["urls"]["PyPI"],
            "icon": "fa-brands fa-python",
        }
    ],
}

html_sidebars: Dict[str, Any] = {"demo": []}

suppress_warnings = ["epub.unknown_project_files"]

epub_basename = f"""{project}-{release}"""

if REPO_INFO is not None:
    html_context = {**REPO_INFO.groupdict(), "doc_path": "docs"}
