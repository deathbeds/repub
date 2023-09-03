# Files

## Structure

At any given commit, the files in a `repub` archive should contain:

| spec |                            parent | name            | format | content note                 |
| ---- | --------------------------------: | --------------- | ------ | ---------------------------- |
| epub |                              `./` | `mimetype`      | text   |                              |
| epub |                     `./META-INF/` | `container.xml` | XML    | container meta               |
| epub |                        `./OEBPS/` | `content.opf`   | XML    | content meta                 |
| whl  | `./{:name}-{:version}.dist-info/` | `METADATA`      | email  | wheel meta                   |
| whl  | `./{:name}-{:version}.dist-info/` | `WHEEL`         | email  | wheel generator meta         |
| whl  | `./{:name}-{:version}.dist-info/` | `RECORD`        | CSV    | list of other files          |
| whl  |                       `./{:name}` | `__init__.py`   | python | minimum python source folder |
| http |                              `./` | `index.html`    | HTML   | entrypoint for HTML viewer   |

## Parameters

### `{:name}`

A python-safe package name, usually `[a-z]([a-z\d_\-]+)`

### `{:version}`

A python-safe version number, usually `[\d](\.[\d])((a|b|rc|dev)\d+)`

## Outputs

### `.epub`

Generally requires no renaming.

### `.whl`

Sometimes requires renaming to the valid form:

`{:name}-{:version}-py3-none-any.whl`
