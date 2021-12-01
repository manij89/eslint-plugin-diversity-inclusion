# eslint-plugin-diversity-inclusion

eslint plugin to encourage the use of inclusive code

## Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Supported Rules](#supported-rules)
- [Contributions Welcome](#contributions-welcome)

## Getting started

You'll first need to install [ESLint](http://eslint.org):

    $ npm i eslint --save-dev

Next, install `eslint-plugin-diversity-inclusion`:

    $ npm install eslint-plugin-diversity-inclusion --save-dev

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install
`eslint-plugin-diversity-inclusion` globally.

## Usage

Add `diversity-inclusion` to the plugins section of your `.eslintrc` configuration file. You can
omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["diversity-inclusion"]
}
```

Then configure the rules you want to use under the rules section. You can choose from all supported
rules, but it is encouraged to use all rules. Value `0` will turn the rules off, `1` will return a
warning, `2` an error.

```json
{
  "rules": {
    "diversity-inclusion/all": 1
  }
}
```

## Supported Rules

- all
- racism
- disabilities

## Contributions Welcome

While this plugin attemts to call attention to as many offensive terms as possible, the work of
inclusivity is never complete. Please help to expand the categories and offensive words list so that
we can all benefit from our collective lived experiences.
