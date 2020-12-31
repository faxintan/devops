# Lint & Format

[ref1](https://blog.theodo.com/2019/08/why-you-should-use-eslint-prettier-and-editorconfig-together/)

[ref2](https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/)

[quick config](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

### ESLint

code quality linter, 
The rest (code quality) should be handled by ESLint


### Prettier

code formatting tool, 
Everything related to code formatting should be handled by Prettier


### EditorConfig

provide everyone with the right editor configuration, 
All configuration related to the editor (end of line, indent style, indent size...) 
should be handled by EditorConfig

These configuration options will override the following Prettier options (if they are not defined in the .prettierrc):

- end_of_line: override "endOfLine"
- indent_style: override "useTabs"
- indent_size/tab_width: override "tabWidth"
- max_line_length: override "printWidth"


### Conflict

In order to be able to use ESLint alongside Prettier, the idea is to deactivate all ESLint rules that might conflict with Prettier (code formatting rules). Fortunately for us, the eslint-config-prettier package already does that

- Whenever you want to add a rule, try and categorize the rule within the code quality or code formatting sets. To make this easier, you just have to check whether the rule is supported and enforcable by prettier
- Do not add custom formatting rules to your .eslintrc.json file. These will almost certainly conflict with Prettier

