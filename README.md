# touch
I'm a developer who regularly switches with multiple operating systems but in Windows, I seem to be missing a command. There are `touch` commands to create an empty file.

Use this NodeJs based CLI tool and use the touch command in your windows pc.

```sh
touch index.js # Created an empty file with name index.js
```

The primary task of the touch command is to modify the timestamp of a file or directory. But it is also used to create an empty file if the file already does not exist.

## The basic syntax of the touch command
The fundamental syntax of the touch command is
```sh
touch <options> <file or directory name>
```
The touch utility is used to modify the timestamp of a file or directory.

### The `touch` command options
| Option | Description |
| --- | --- |
| -a | Modify the access time. |
| --no-create, -c | Avoid to create new file. |
| --date=<string>, -d=<string> | Modifies the timestamp using a date string. |
| -f | Change BSD options forcefully. |
| --no-deference, -h | 	Changes a symbolic link's timestamp. |
| -m | Modify the modification, timestamp of the file. |
| --reference=<file>, -r=<file> | Change a timestamp to the refernced file's timestamp. |
| -t <stamp> | Modifies the timestamp, where the stamp is the date/time format. |
| --help | Open the help menu. |
| --version, -v | Displays the version information. |

### Create a new file
The touch command can be used to create a new file.

Prototype
```sh
touch <filename>
```

Example
```sh
touch index.js
```

### Create multiple files
The touch command can be used to create multiple files.

Prototype
```sh
touch <filename> <filename> <filename>
```

Example
```sh
touch index.js index.html index.css
```

Also provide range to create multiple files.

Prototype
```sh
touch <filename{<start>..<end>}>
```

Example
```sh
touch test{1..5}
```
Create 5 files with name test1, test2, test3, test4, test5.

Another way to create multiple files is to use the alphabatical range.

Example
```sh
touch test_{a..d}
```
Create 4 files with name test_a, test_b, test_c, test_d.

