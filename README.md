# svg-to-elm

A command line tool (and Node module if you so desire) to turn a `.svg` file into an Elm module.

```
Usage: svg-to-elm <command> [options]

Commands:
  svg-to-elm parse  Parse an SVG to Elm

Options:
  --version          Show version number                               [boolean]
  -f, --file         The SVG to parse                                 [required]
  -o, --output       The destination to write to                      [required]
  -m, --module-name  The name of the Elm module                       [required]
  -b, --banner       A code comment to put in each file.
  -d, --dir-mode     If specified, translates all files in dir f to dir o, uses
                     m as module prefix
  --elm-version      The version of Elm to use [0.18 or 0.19]. This is passed to
                     elm-format if you use it.
  --elm-format-path  The path to Elm format, if you would like the code run
                     through it
  -h                 Show help                                         [boolean]

Examples:
  svg-to-elm parse --file foo.svg        Parse foo.svg into an Elm module
  --output Foo.elm --module-name Foo

Missing required arguments: f, o, module-name
```

Huge thanks goes to the creator of https://levelteams.com/svg-to-elm for the initial idea and approach - I've just wrapped it up in a command line module!
