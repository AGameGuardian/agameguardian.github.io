# IO Functions

io库函数

## io.open()

打开文件，使用`io.open()`来返回文件从而调用方法。

此函数用字符串`model`指定的模式打开一个文件，当出错时，返回nil以及错误信息

###### 函数定义

```lua
file = io.open (filename [, mode])
--  参数：
--  filename, 你的文件名
--  mode, 选择模式，模式选择如下表所示

--  返回值：
--  file: 文件句柄，如果成功打开文件则返回文件句柄，否则返回nil。
--  err: 错误信息，如果打开文件失败则返回错误信息。

```


| 模式 | 描述                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| "r"  | 只读模式，这也是对已存在的文件的默认打开模式。                                         |
| "w"  | 可写模式，允许修改已经存在的文件和创建新文件。                                         |
| "a"  | 追加模式，对于已存的文件允许追加新内容，但不允许修改原有内容，同时也可以创建新文件。   |
| "r+" | 读写模式打开已存的在文件。                                                             |
| "w+" | 如果文件已存在则删除文件中数据；若文件不存在则新建文件。读写模式打开。                 |
| "a+" | 追加模式打开已存的文件，允许修改文件内容，若文件不存在则新建文件。同时允许创建新文件。 |

###### 以下为AGG开发组给定的部分代码示例：

::: code-group

```lua

```

```lua

```

:::

## io.tmpfile()

创建并打开一个缓存文件

返回一个临时文件的句柄，此时的文件以更新模式打开，在程序结束时自动删除，且其创建的临时文件以读写模式（"w+"）打开，意味着你可以同时进行读取和写入操作。

###### 函数定义：

```lua
file = io.tmpfile()
--  返回值file：一个文件句柄，可以用于后续的文件操作，如读写等
```

###### 以下为AGG开发组给定的部分代码示例：

```lua
-- 创建一个临时文件
local tempFile = io.tmpfile()

-- 向临时文件中写入数据
tempFile:write("Hello, World!")

-- 将文件指针移回文件开头
tempFile:seek("set", 0)

-- 从临时文件中读取数据
local content = tempFile:read("*a")
print(content)  -- 输出: Hello, World!

-- 关闭文件句柄（虽然程序结束时会自动删除，但显式关闭是个好习惯，希望各位AGG开发者尽量养成习惯）
tempFile:close()

```

## io.write()

字符输入流，等价于`io.output():write(...)`

`io.write`函数用于向标准输出写入数据。这个函数可以接受一个或多个参数，并将它们转换为字符串后依次输出

`io.write`函数将传入的参数依次转换为字符串，并将它们输出到标准输出。与`print`函数不同，`io.write`不会在每个参数之间添加空格，也不会在末尾添加换行符。

###### 函数定义

```lua
io.write(value1, value2, ..., valueN)
--  参数：value1, value2, ..., valueN: 一个或多个要输出的值。这些值会被转换为字符串并依次输出。
--  返回值：返回true表示成功，如果发生错误则返回nil加上错误信息。
```

###### 以下为AGG开发组给定的部分代码示例：

```lua
-- 输出单个字符串
io.write("Hello, World!")  -- 输出: Hello, World!

-- 输出多个值
io.write("Number: ", 42, " and String: ", "Lua")  -- 输出: Number: 42 and String: Lua

-- 输出后不换行
io.write("Part1")
io.write("Part2")  -- 输出: Part1Part2

-- 结合换行符使用
io.write("Line1\n")
io.write("Line2\n")  -- 输出: Line1
                    --       Line2
```

## io.read()

字符输入流，等价于`io.input():read(...)`

`io.read`函数用于从标准输入读取数据。这个函数可以接受一个参数，指定读取的方式，并返回读取到的数据。

`io.read`函数根据指定的格式从标准输入读取数据，并返回读取到的数据。如果没有指定格式，默认读取一行输入。

###### 函数定义：

```lua
data = io.read(format)

--  参数：
--  format: 读取格式（字符串），具体模式如下表所示

--  返回值：
--  data: 读取到的数据，如果读取失败或遇到文件结束则返回nil。

```


| 模式 | 描述 |
| ---- | ---- |
| "*l" |  读取一行输入（默认），包括换行符。    |
| "*L" |  读取一行输入，但不包括换行符。    |
| "*n" |  读取一个数字并返回它。    |
| "*a" |  读取所有输入，直到文件结束。 (一般使用这个)   |
|number|返回一个指定字符个数的字符串，或在 EOF 时返回 nil。例：file.read(5)|

###### 以下为AGG开发组给定的部分代码示例：

```lua
-- 读取一行输入
local line = io.read("*l")
print(line)  -- 输出: Hello, World!


-- 读取数字
local num = io.read("*n")
print(num)  -- 输出: 42

-- 读取所有输入
local all = io.read("*a")
print(all)  -- 输出: Hello, World!

-- 读取一行输入，不包括换行符
local line = io.read("*L")
print(line)  -- 输出: Hello, World

-- 读取指定字符个数的字符串
local str = io.read(5)
print(str)  -- 输出: Hello
```