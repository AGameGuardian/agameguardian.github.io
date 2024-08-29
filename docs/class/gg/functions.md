# gg functions

gg 函数

## gg.addListItems

将项目添加到已保存的列表。

**参数**
| 参数 | 说明 |
|:----:|:--:|
| items | A table with a list of items to add. Each element is a table with the following fields:
address (long, required), value (string with a value, optional), flags (one of the constants TYPE_*,
required), name (string, optional), freeze (boolean, optional, default false), freezeType (one of
the constants FREEZE_*, optional, default FREEZE_NORMAL), freezeFrom (string, optional), freezeTo (
string, optional). Values must be in English locale |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| True | 成功 |
| string with error | 错误字符串 |

::: code-group

```lua [默认]
mixed addListItems(table items)
```

```lua [例子]
-- retrieving a table from another call
gg.searchNumber('10', gg.TYPE_DWORD)
t = gg.getResults(5) -- load items
t[1].value = '15'
t[1].freeze = true
print('addListItems: ', gg.addListItems(t))

-- creating a table as a list of items
t = {}
t[1] = {}
t[1].address = 0x18004030 -- some desired address
t[1].flags = gg.TYPE_DWORD
t[1].value = 12345
t[2] = {}
t[2].address = 0x18004040 -- another desired address
t[2].flags = gg.TYPE_BYTE
t[2].value = '7Fh'
t[2].freeze = true
t[3] = {}
t[3].address = 0x18005040 -- another desired address
t[3].flags = gg.TYPE_DWORD
t[3].value = '777'
t[3].freeze = true
t[3].freezeType = gg.FREEZE_MAY_INCREASE
t[4] = {}
t[4].address = 0x18007040 -- another desired address
t[4].flags = gg.TYPE_DWORD
t[4].value = '7777'
t[4].freeze = true
t[4].freezeType = gg.FREEZE_IN_RANGE
t[4].freezeFrom = '6666'
t[4].freezeTo = '8888'
print('addListItems: ', gg.addListItems(t))

-- The first 7 results are frozen with a value of 8.
gg.searchNumber('10', gg.TYPE_DWORD)
local t = gg.getResults(7)
for i, v in ipairs(t) do
 t[i].value = '8'
 t[i].freeze = true
end
gg.addListItems(t)
```

:::

## gg.alert

显示一个带有多个按钮的对话框。
返回结果取决于按下了哪个按钮。可以使用 “Back” 按钮（返回代码 0）取消对话框。

**参数**
| 参数 | 说明 |
|:----:|:--:|
| text | Text message. |
| positive | Text for positive button. This button return code 1. |
| negative | Text for negative button. This button return code 2. |
| neutral | Text for neutral button. This button return code 3. |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| 0 | dialog canceled |
| 1 | positive button |
| 2 | negative button |
| 3 | neutral button |

::: code-group

```lua [默认]
gg.alert(string text,
         string positive = 'ok',
         string negative = nil,
         string neutral = nil
        )
```

```lua [例子]
gg.alert('Script ended')
-- Show alert with single 'ok' button

gg.alert('Script ended', 'Yes')
-- Show alert with single 'Yes' button

gg.alert('A or B?', 'A', 'B')
-- Show alert with two buttons

gg.alert('A or C?', 'A', nil, 'C')
-- Show alert with two buttons

gg.alert('A or B or C?', 'A', 'B', 'C')
-- Show alert with three buttons
```

:::

## gg.allocatePage

在目标进程中分配的内存页 （4 KB）。

**参数**
| 参数 | 说明 |
|:----:|:--:|
| mode | Bit mask of flags PROT_*. |
| address | If is not 0, then the kernel takes it as a hint about where to place the page; on
Android, the page will be allocated at a nearby address page boundary. |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| Address of the page | 页面地址 |
| string with error | 错误字符串 |

::: code-group

```lua [默认]
mixed allocatePage(int mode = gg.PROT_READ | gg.PROT_EXEC,
                   long address = 0
                  )
```

```lua [例子]
print('allocatePage 1: ', string.format('0x%08x', gg.allocatePage()))
print('allocatePage 2: ', string.format('0x%08x', gg.allocatePage(gg.PROT_READ | gg.PROT_EXEC)))
print('allocatePage 3: ', string.format('0x%08x', gg.allocatePage(gg.PROT_READ | gg.PROT_WRITE)))
print('allocatePage 4: ', string.format('0x%08x', gg.allocatePage(gg.PROT_READ)))
print('allocatePage 5: ', string.format('0x%08x', gg.allocatePage(gg.PROT_READ | gg.PROT_WRITE, 0x12345)))
```

:::

## gg.bytes

获取指定编码的文本字节。

**参数**
| 参数 | 说明 |
|:----:|:--:|
| text | |
| encoding | Possible values: 'ISO-8859-1', 'US-ASCII', 'UTF-16', 'UTF-16BE', 'UTF-16LE', 'UTF-8' |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| A table with a set of bytes in the specified encoding | 具有一组采用指定编码的字节的表 |

::: code-group

```lua [默认]
string bytes(string text,
             string encoding = 'UTF-8'
            )
```

```lua [例子]
print('UTF-8', gg.bytes('example'))
print('UTF-8', gg.bytes('example', 'UTF-8'))
print('UTF-16', gg.bytes('example', 'UTF-16LE'))
```

:::

## gg.choice

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| items | Table with items for choice. |
| selected | Is not specified or is specified as , then the list will be without the default choice.
nil |
| message | Specifies the optional title of the dialog box. |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| nil | dialog has been canceled |
| the index of the selected item | 选择项目索引 |

::: code-group

```lua [默认]
mixed choice(table items,
             string selected = nil,
             string message = nil
            )
```

```lua [例子]
print('1: ', gg.choice({'A', 'B', 'C', 'D'}))
-- show list of 4 items
print('2: ', gg.choice({'A', 'B', 'C', 'D'}, 2))
-- show list of 4 items with selected 2 item
print('3: ', gg.choice({'A', 'B', 'C', 'D'}, 3, 'Select letter:'))
-- show list of 4 items with selected 3 item and message
print('4: ', gg.choice({'A', 'B', 'C', 'D'}, nil, 'Select letter:'))
-- show list of 4 items without selection and message
```

:::

## gg.clearList

清除已保存的列表。

**返回**
| 返回 | 说明 |
|:----:|:--:|
| true | 成功 |
| string with error | 错误字符串 |

::: code-group

```lua [默认]
mixed clearList()
```

```lua [例子]
print('clearList:', gg.clearList())
```

:::

## gg.clearResults

清除搜索结果列表。

**返回**
| 返回 | 说明 |
|:----:|:--:|
| true | 成功 |
| string with error | 错误字符串 |

::: code-group

```lua [默认]
nil clearResults()
```

```lua [例子]

```

:::

## gg.copyMemory

复制内存。

**参数**
| 参数 | 说明 |
|:----:|:--:|
| from | Address for source of copy. |
| to | Address for destination of copy. |
| bytes | Amount bytes to copy. |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| true | 成功 |
| string with error | 错误字符串 |

::: code-group

```lua [默认]

mixed copyMemory(long from,
                 long to,
                 int bytes
                )
```

```lua [例子]
print('copyMemory:', gg.copyMemory(0x9000, 0x9010, 3))
-- copies 3 bytes 0x9000-0x9002 to 0x9010-0x9012
```

:::

## gg.copyText

将文本复制到剪贴板。
如果第二个参数为 true 或未指定，则文本将转换为从英语区域设置到所选区域设置的数字。

**参数**
| 参数 | 说明 |
|:----:|:--:|
| text | The text for copy |
| fixLocale | Flag to disable fix locale-specific separators |

::: code-group

```lua [默认]
nil copyText(string text,
             bool fixLocale = true
            )
```

```lua [例子]
-- selected 'ru' locale, where decimal separator is ',' and thousand separator is ' '.
-- in English locale(en_US) decimal separator is '.' and thousand separator is ','.
gg.copyText('1,234,567.890') -- Will copy '1 234 567,890'
gg.copyText('1,234,567.890', true) -- Will copy '1 234 567,890'
gg.copyText('1,234,567.890', false) -- Will copy '1,234,567.890'
```

:::

## gg.disasm

拆解指定的值。

**参数**
| 参数 | 说明 |
|:----:|:--:|
| type | Type. One of the constants ASM_*. Throws an error if a non-existent type is passed |
| address | The address of the value. May be needed for some opcodes |
| opcode | Disassembly instruction. To disassemble Thumb32, the first 16-bit instruction should be in the lower half-word of the opcode, and the second in the upper half-word |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| string Disassembled opcode string | 反汇编操作码 |

::: code-group

```lua [默认]
string disasm(int type,
              long address,
              int opcode
             )
```

```lua [例子]
print('ARM', gg.disasm(gg.ASM_ARM, 0x12345678, 0xE1A01002))

print('Thumb16', gg.disasm(gg.ASM_THUMB, 0x12345678, 0x0011))

print('Thumb32', gg.disasm(gg.ASM_THUMB, 0x12345678, 0xF800 |(0x0001 << 16)))

print('ARM64', gg.disasm(gg.ASM_ARM64, 0x12345678, 0x2A0103E2))
```

:::

## gg.dumpMemory

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed dumpMemory(long from,
                 long to,
                 string dir,
                 int flags = nil
                )
```

```lua [例子]
print('dumpMemory:', gg.dumpMemory(0x9000, 0x9010, '/sdcard/dump'))
-- dump at least one memory page into the dir '/sdcard/dump'

print('dumpMemory:', gg.dumpMemory(0, -1, '/sdcard/dump'))
print('dumpMemory:', gg.dumpMemory(0, -1, '/sdcard/dump', nil))
print('dumpMemory:', gg.dumpMemory(0, -1, '/sdcard/dump', 0))
-- dump all memory into the dir '/sdcard/dump'(all same)

print('dumpMemory:', gg.dumpMemory(0, -1, '/sdcard/dump', gg.DUMP_SKIP_SYSTEM_LIBS))
-- dump all memory except system libraries into the dir '/sdcard/dump'
```

:::

## gg.editAll

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]

mixed editAll(string value,
              int type
             )
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD)
gg.getResults(5)
gg.editAll('15', gg.TYPE_DWORD)

-- with float:
gg.searchNumber('10.1', gg.TYPE_FLOAT)
gg.getResults(5)
gg.editAll('15.2', gg.TYPE_FLOAT)

-- with XOR mode
gg.searchNumber('10X4', gg.TYPE_DWORD)
gg.getResults(5)
gg.editAll('15X4', gg.TYPE_DWORD)

-- edit few values at once
gg.searchNumber('10', gg.TYPE_DWORD)
gg.getResults(5)
gg.editAll('7;13;43;24;11', gg.TYPE_DWORD)

-- edit HEX
gg.searchNumber('h 5C E3 0B')
gg.getResults(30)
gg.editAll('h 4B 90 9B', gg.TYPE_BYTE)

-- edit text UTF-8
gg.searchNumber(':şuşpançik')
gg.getResults(100000)
gg.editAll(':şUşPaNçIk', gg.TYPE_BYTE)

-- edit text UTF-16LE
gg.searchNumber(';şuşandra')
gg.getResults(100000)
gg.editAll(';şUşAnDrA', gg.TYPE_WORD) -- UTF-16LE use WORD not BYTE!

-- edit HEX + UTF-8
gg.searchNumber("Q 5C E3 0B 'şuşpançik' 9B 11 7B")
gg.getResults(100000)
gg.editAll("Q 43 12 34 'şUşPaNçIk' 9F 1A 70", gg.TYPE_BYTE)

-- edit HEX + UTF-16LE
gg.searchNumber('Q 5C E3 0B "şuşandra" 9B 11 7B')
gg.getResults(100000)
gg.editAll('Q 41 F7 87 "şUşAnDrA" 9B 18 7B', gg.TYPE_BYTE)

-- edit HEX + UTF-8 + UTF-16LE
gg.searchNumber('Q 5C E3 0B \'şuşpançik\' 9B "şuşandra" 11 7B')
gg.getResults(100000)
gg.editAll('Q 41 F7 87 \'şUşPaNçIk\' 04 "şUşAnDrA" 71 3B', gg.TYPE_BYTE)

-- edit ARM opcodes
gg.searchNumber('~A MOV R1, R2', gg.TYPE_DWORD)
gg.getResults(100000)
gg.editAll('~A MOV R2, R3', gg.TYPE_DWORD)
```

:::

## gg.getActiveTab

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
int getActiveTab()
```

```lua [例子]

```

:::

## gg.getFile

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
string getFile()
```

```lua [例子]

```

:::

## gg.getLine

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
int getLine()
```

```lua [例子]

```

:::

## gg.getListItems

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getListItems()
```

```lua [例子]
local r = gg.getListItems()
print('Items: ', r)
print('First item: ', r[1])
print('First item address: ', r[1].address)
print('First item value: ', r[1].value)
print('First item type: ', r[1].flags)
print('First item name: ', r[1].name)
print('First item freeze: ', r[1].freeze)
print('First item freeze type: ', r[1].freezeType)
print('First item freeze from: ', r[1].freezeFrom)
print('First item freeze to: ', r[1].freezeTo)
```

:::

## gg.getLocale

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
string getLocale()
```

```lua [例子]

```

:::

## gg.getRanges

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
int getRanges()
```

```lua [例子]

```

:::

## gg.getRangesList

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
table getRangesList(string filter = '')
```

```lua [例子]
print(gg.getRangesList())

local t = gg.getRangesList();
print(t[1].start)
print(t[1]['end']) -- cannot use dot-notation here because 'end' is a keyword in Lua, so you need to use square-bracket notation.

print(gg.getRangesList('libc.so'))

print(gg.getRangesList('lib*.so'))

print(gg.getRangesList('^/data/'))

print(gg.getRangesList('.so$'))
```

:::

## gg.getResults

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getResults(int maxCount,
                 int skip = 0,
                 long addressMin = nil,
                 long addressMax = nil,
                 string valueMin = nil,
                 string valueMax = nil,
                 int type = nil,
                 string fractional = nil,
                 int pointer = nil
                )
```

```lua [例子]
gg.clearResults()
gg.startFuzzy(gg.TYPE_AUTO)
local r = gg.getResults(5)
print('First 5 results: ', r)
print('First result: ', r[1])
print('First result address: ', r[1].address)
print('First result value: ', r[1].value)
print('First result type: ', r[1].flags)

r = gg.getResults(3, 2)
print('Skip 2 items and get next 3: ', r)

r = gg.getResults(3, nil, 0x80000000, 0xF0000000)
print('Address between 0x80000000 and 0xF0000000: ', r)

r = gg.getResults(3, nil, nil, nil, 23, 45)
print('Value between 23 and 45: ', r)

r = gg.getResults(3, nil, nil, nil, nil, nil, gg.TYPE_DWORD | gg.TYPE_FLOAT)
print('Dword or Float: ', r)

r = gg.getResults(3, nil, nil, nil, nil, nil, nil, '0.5')
print('Only with fractional part equal 0.5: ', r)

r = gg.getResults(3, nil, nil, nil, nil, nil, nil, '!0.0')
print('Only with fractional part not equal 0.0: ', r)

r = gg.getResults(3, nil, nil, nil, nil, nil, nil, nil, gg.POINTER_READ_ONLY)
print('Only pointers to read-only memory: ', r)
```

:::

## gg.getResultsCount

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
long getResultsCount()
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD)
print('Found: ', gg.getResultsCount())
```

:::

## gg.getSelectedElements

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getSelectedElements()
```

```lua [例子]
print('Selected: ', gg.getSelectedElements())
```

:::

## gg.getSelectedListItems

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getSelectedListItems()
```

```lua [例子]
print('Selected: ', gg.getSelectedListItems())
```

:::

## gg.getSelectedResults

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getSelectedResults()
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD)
gg.getResults(5)
print('Selected: ', gg.getSelectedResults())
```

:::

## gg.getSpeed

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
double getSpeed()
```

```lua [例子]

```

:::

## gg.getTargetInfo

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getTargetInfo()
```

```lua [例子]
-- check for game version
local v = gg.getTargetInfo()
if v.versionCode ~= 291 then
 print('This script only works with game version 291. You have game version ', v.versionCode, ' Please install version 291 and try again.')
 os.exit()
end
```

:::

## gg.getTargetPackage

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getTargetPackage()
```

```lua [例子]

```

:::

## gg.getValues

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getValues(table values)
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD)
local r = gg.getResults(5) -- load items
r = gg.getValues(r) -- refresh items values
print('First 5 results: ', r)
print('First result: ', r[1])
print('First result address: ', r[1].address)
print('First result value: ', r[1].value)
print('First result type: ', r[1].flags)

local t = {}
t[1] = {}
t[1].address = 0x18004030 -- some desired address
t[1].flags = gg.TYPE_DWORD
t[2] = {}
t[2].address = 0x18004040 -- another desired address
t[2].flags = gg.TYPE_BYTE
t = gg.getValues(t)
print(t)
```

:::

## gg.getValuesRange

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed getValuesRange(table values)
```

```lua [例子]
print('1: ', gg.getValuesRange({0x9000, 0x9010, 0x9020, 0x9030}))
-- table as a list of addresses

gg.searchNumber('10', gg.TYPE_DWORD)
local r = gg.getResults(5)
print('2: ', r, gg.getValuesRange(r))
-- table as a list of tables with the address field
```

:::

## gg.gotoAddress

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil gotoAddress(long address)
```

```lua [例子]

```

:::

## gg.hideUiButton

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil hideUiButton()
```

```lua [例子]

```

:::

## gg.isClickedUiButton

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed isClickedUiButton()
```

```lua [例子]
gg.showUiButton()
while true do
 if gg.isClickedUiButton() then
 -- do some action for click, menu for example
 local ret = gg.choice({'Item 1', 'Item 2', 'Item 3'}) or os.exit()
 gg.alert('You selected:', ret)
 end
 gg.sleep(100)
end
```

:::

## gg.isPackageInstalled

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
bool isPackageInstalled(string pkg)
```

```lua [例子]
print('Game installed:', gg.isPackageInstalled('com.blayzegames.iosfps'))
```

:::

## gg.isProcessPaused

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
bool isProcessPaused()
```

```lua [例子]

```

:::

## gg.isVisible

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
bool isVisible()
```

```lua [例子]

```

:::

## gg.loadList

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed loadList(string file,
               int flags = 0
              )
```

```lua [例子]
print('loadList:', gg.loadList('/sdcard/Notes/gg.victim.txt'))
print('loadList:', gg.loadList('/sdcard/Notes/gg.victim.txt', 0))
print('loadList:', gg.loadList('/sdcard/Notes/gg.victim.txt', gg.LOAD_APPEND))
print('loadList:', gg.loadList('/sdcard/Notes/gg.victim.txt', gg.LOAD_VALUES_FREEZE))
print('loadList:', gg.loadList('/sdcard/Notes/gg.victim.txt', gg.LOAD_APPEND | gg.LOAD_VALUES))
```

:::

## gg.loadResults

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed loadResults(table results)
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD)
local r = gg.getResults(5)
print('load first 5 results: ', gg.loadResults(r))

local t = {}
t[1] = {}
t[1].address = 0x18004030 -- some desired address
t[1].flags = gg.TYPE_DWORD
t[2] = {}
t[2].address = 0x18004040 -- another desired address
t[2].flags = gg.TYPE_BYTE
print('load from table: ', gg.loadResults(t))
```

:::

## gg.makeRequest

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed makeRequest(string url,
                  table headers = {},
                  string data = nil
                 )
```

```lua [例子]
print('GET 1: ', gg.makeRequest('http://httpbin.org/headers').content) -- simple GET request

print('GET 2: ', gg.makeRequest('http://httpbin.org/headers', {['User-Agent']='My BOT'}).content) -- GET request with headers

print('GET 3: ', gg.makeRequest('http://httpbin.org/headers', {['User-Agent']={'My BOT', 'Tester'}}).content) -- GET request with headers

print('GET 4: ', gg.makeRequest('https://httpbin.org/get?param1=value2&param3=value4', {['User-Agent']='My BOT'}).content) -- HTTPS GET request with headers

print('POST 1: ', gg.makeRequest('http://httpbin.org/post', nil, 'post1=val2&post3=val4').content) -- simple POST request

print('POST 2: ', gg.makeRequest('http://httpbin.org/post', {['User-Agent']='My BOT'}, 'post1=val2&post3=val4').content) -- POST request with headers

print('POST 3: ', gg.makeRequest('http://httpbin.org/post', {['User-Agent']={'My BOT', 'Tester'}}, 'post1=val2&post3=val4').content) -- POST request with headers

print('POST 4: ', gg.makeRequest('https://httpbin.org/post?param1=value2&param3=value4', {['User-Agent']='My BOT'}, 'post1=val2&post3=val4').content) -- HTTPS POST request with headers

print('FULL: ', gg.makeRequest('https://httpbin.org/headers')) -- print full info about the request
```

:::

## gg.multiChoice

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed multiChoice(table items,
                  table selection = {},
                  string message = nil
                 )
```

```lua [例子]
print('1: ', gg.multiChoice({'A', 'B', 'C', 'D'}))
-- show list of 4 items without checked items

print('2: ', gg.multiChoice({'A', 'B', 'C', 'D'}, {[2]=true, [4]=true}))
-- show list of 4 items with checked 2 and 4 items

print('3: ', gg.multiChoice({'A', 'B', 'C', 'D'}, {[3]=true}, 'Select letter:'))
-- show list of 4 items with checked 3 item and message

print('4: ', gg.multiChoice({'A', 'B', 'C', 'D'}, {}, 'Select letter:'))
-- show list of 4 items without checked items and message

-- Performing multiple actions
local t = gg.multiChoice({'A', 'B', 'C', 'D'})
if t == nil then
 gg.alert('Canceled')
else
 if t[1] then
 gg.alert('do A')
 end
 if t[2] then
 gg.alert('do B')
 end
 if t[3] then
 gg.alert('do C')
 end
 if t[4] then
 gg.alert('do D')
 end
end
```

:::

## gg.numberFromLocale

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
string numberFromLocale(string num)
```

```lua [例子]
print(gg.numberFromLocale('1.234,567')) -- print '1234.567' for German locale
```

:::

## gg.numberToLocale

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
string numberToLocale(string num)
```

```lua [例子]
print(gg.numberToLocale('1,234.567')) -- print '1234,567' for German locale
```

:::

## gg.processKill

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
bool processKill()
```

```lua [例子]

```

:::

## gg.processPause

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
bool processPause()
```

```lua [例子]

```

:::

## gg.processResume

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
bool processResume()
```

```lua [例子]

```

:::

## gg.processToggle

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
bool processToggle()
```

```lua [例子]

```

:::

## gg.prompt

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed prompt(table prompts,
             table defaults = {},
             table types = {}
            )
```

```lua [例子]
print('prompt 1: ', gg.prompt(
 {'ask any', 'ask num', 'ask text', 'ask path', 'ask file', 'ask set', 'ask speed', 'checked', 'not checked'},
 {[1]='any val', [7]=123, [6]=-0.34, [8]=true},
 {[2]='number', [3]='text', [4]='path', [5]='file', [6]='setting', [7]='speed', [8]='checkbox', [9]='checkbox'}
))
print('prompt 2: ', gg.prompt(
 {'ask any', 'ask num', 'ask text', 'ask path', 'ask file', 'ask set', 'ask speed', 'check'},
 {[1]='any val', [7]=123, [6]=-0.34}
))
print('prompt 3: ', gg.prompt(
 {'ask any', 'ask num', 'ask text', 'ask path', 'ask file', 'ask set', 'ask speed', 'check'}
))
print('prompt 4: ', gg.prompt(
 {'seek bar 1 [32; 64]', 'seek bar 2 [-80; -60]'}, nil,
 {'number', 'number'}
))
print('prompt 5: ', gg.prompt(
 {'seek bar 1 [32; 64]', 'seek bar 2 [-80; -60]'},
 {42, -76},
 {'number', 'number'}
))

-- Performing multiple actions
local t = gg.prompt({'A', 'B', 'C', 'D'}, nil, {'checkbox', 'checkbox', 'checkbox', 'checkbox'})
if t == nil then
 gg.alert('Canceled')
else
 if t[1] then
 gg.alert('do A')
 end
 if t[2] then
 gg.alert('do B')
 end
 if t[3] then
 gg.alert('do C')
 end
 if t[4] then
 gg.alert('do D')
 end
end
```

:::

## gg.refineAddress

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed refineAddress(string text,
                    long mask = -1,
                    int type = gg.TYPE_AUTO,
                    int sign = gg.SIGN_EQUAL,
                    long memoryFrom = 0,
                    long memoryTo = -1,
                    long limit = 0
                   )
```

```lua [例子]
gg.refineAddress('A20', 0xFFFFFFFF)

gg.refineAddress('B20', 0xFF0, gg.TYPE_DWORD, gg.SIGN_NOT_EQUAL)

gg.refineAddress('0B?0', 0xFFF, gg.TYPE_FLOAT)

gg.refineAddress('??F??', 0xBA0, gg.TYPE_BYTE, gg.SIGN_NOT_EQUAL, 0x9000, 0xA09000)

-- do nothing
gg.clearResults()
gg.refineAddress('A20', 0xFFFFFFFF)

-- refine search
gg.refineAddress('A20', 0xFFFFFFFF)
```

:::

## gg.refineNumber

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed refineNumber(string text,
                   int type = gg.TYPE_AUTO,
                   bool encrypted = false,
                   int sign = gg.SIGN_EQUAL,
                   long memoryFrom = 0,
                   long memoryTo = -1,
                   long limit = 0
                  )
```

```lua [例子]
-- number refine
gg.refineNumber('10', gg.TYPE_DWORD)

-- encrypted refine
gg.refineNumber('-10', gg.TYPE_DWORD, true)

-- range refine
gg.refineNumber('10~20', gg.TYPE_DWORD, false, gg.SIGN_NOT_EQUAL)

-- group refine with ranges
gg.refineNumber('6~7;7;1~2;0;0;0;0;6~8::29', gg.TYPE_DWORD)

-- refine for HEX '5C E3 0B 4B 90 9B 11 7B'
gg.refineNumber('5Ch;E3h;0Bh;4Bh;90h;9Bh;11h;7Bh::8', gg.TYPE_BYTE)

-- refine for HEX '5C ?? 0B 4B ?? 9B 11 7B' where '??' can be any byte
gg.refineNumber('5Ch;0~~0;0Bh;4Bh;0~~0;9Bh;11h;7Bh::8', gg.TYPE_BYTE)

-- do nothing
gg.clearResults()
gg.refineNumber('10', gg.TYPE_DWORD)

-- refine search
gg.refineNumber('10', gg.TYPE_DWORD)

-- see searchNumber for other search examples
```

:::

## gg.removeListItems

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed removeListItems(table items)
```

```lua [例子]
-- retrieving a table from another call
t = gg.getListItems()
print('removeListItems: ', gg.removeListItems(t))

-- creating a table as a list of items
t = {}
t[1] = {}
t[1].address = 0x18004030 -- some desired address
t[2] = {}
t[2].address = 0x18004040 -- another desired address
print('removeListItems: ', gg.removeListItems(t))

-- creating a table as a list of adresses
t = {}
t[1] = 0x18004030 -- some desired address
t[2] = 0x18004040 -- another desired address
print('removeListItems: ', gg.removeListItems(t))
```

:::

## gg.removeResults

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed removeResults(table results)
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD)
local r = gg.getResults(5)
print('Remove first 5 results: ', gg.removeResults(r))
```

:::

## gg.require

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil require(string version = nil,
            int build = 0
           )
```

```lua [例子]
gg.require('8.31.1')
gg.require('8.31.1', 5645)
gg.require(nil, 5645)
```

:::

## gg.saveList

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed saveList(string file,
               int flags = 0
              )
```

```lua [例子]
print('saveList:', gg.saveList('/sdcard/Notes/gg.victim.txt'))
print('saveList:', gg.saveList('/sdcard/Notes/gg.victim.txt', 0))
print('saveList:', gg.saveList('/sdcard/Notes/gg.victim.txt', gg.SAVE_AS_TEXT))
```

:::

## gg.saveVariable

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed saveVariable(mixed variable,
                   string filename
                  )
```

```lua [例子]
local t = {}
t['test1'] = {1, 2, 3, 4}
t['test2'] = 42
t['test3'] = 86.3
t['test4'] = 'weapon'
t[4] = t['test1']

gg.saveVariable(t, '/sdcard/test.lua') -- saved

local var = assert(loadfile('/sdcard/test.lua'))() -- loaded

-- Saving input between script restarts
local configFile = gg.getFile()..'.cfg'
local data = loadfile(configFile)
if data ~= nil then data = data() end
local input = gg.prompt({'Please input something'}, data)
if input == nil then os.exit() end
gg.saveVariable(input, configFile)
```

:::

## gg.searchAddress

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed searchAddress(string text,
                    long mask = -1,
                    int type = gg.TYPE_AUTO,
                    int sign = gg.SIGN_EQUAL,
                    long memoryFrom = 0,
                    long memoryTo = -1,
                    long limit = 0 
                   )
```

```lua [例子]
gg.searchAddress('A20', 0xFFFFFFFF)

gg.searchAddress('B20', 0xFF0, gg.TYPE_DWORD, gg.SIGN_NOT_EQUAL)

gg.searchAddress('0B?0', 0xFFF, gg.TYPE_FLOAT)

gg.searchAddress('??F??', 0xBA0, gg.TYPE_BYTE, gg.SIGN_NOT_EQUAL, 0x9000, 0xA09000)

-- start new search
gg.clearResults()
gg.searchAddress('A20', 0xFFFFFFFF)

-- refine search
gg.searchAddress('A20', 0xFFFFFFFF)
```

:::

## gg.searchFuzzy

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed searchFuzzy(string difference = '0',
                  int sign = gg.SIGN_FUZZY_EQUAL,
                  int type = gg.TYPE_AUTO,
                  long memoryFrom = 0,
                  long memoryTo = -1,
                  long limit = 0
                 )
```

```lua [例子]
gg.searchFuzzy()
-- value not changed

gg.searchFuzzy('0', gg.SIGN_FUZZY_NOT_EQUAL)
-- value changed

gg.searchFuzzy('0', gg.SIGN_FUZZY_GREATER)
-- value increased

gg.searchFuzzy('0', gg.SIGN_FUZZY_LESS)
-- value decreased

gg.searchFuzzy('15')
-- value increased by 15

gg.searchFuzzy('-115')
-- value decreased by 115
```

:::

## gg.searchNumber

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed searchNumber(string text,
                   int type = gg.TYPE_AUTO,
                   bool encrypted = false,
                   int sign = gg.SIGN_EQUAL,
                   long memoryFrom = 0,
                   long memoryTo = -1,
                   long limit = 0
                  )
```

```lua [例子]
-- number search
gg.searchNumber('10', gg.TYPE_DWORD)

-- encrypted search
gg.searchNumber('-10', gg.TYPE_DWORD, true)

-- range search
gg.searchNumber('10~20', gg.TYPE_DWORD, false, gg.SIGN_NOT_EQUAL)

-- group search with ranges
gg.searchNumber('6~7;7;1~2;0;0;0;0;6~8::29', gg.TYPE_DWORD)

-- search for HEX '5C E3 0B 4B 90 9B 11 7B'
gg.searchNumber('5Ch;E3h;0Bh;4Bh;90h;9Bh;11h;7Bh::8', gg.TYPE_BYTE)

-- search for HEX '5C E3 0B 4B 90 9B 11 7B'
gg.searchNumber('h 5C E3 0B 4B 90 9B 11 7B')

-- search for HEX '5C ?? 0B 4B ?? 9B 11 7B' where '??' can be any byte
gg.searchNumber('5Ch;0~~0;0Bh;4Bh;0~~0;9Bh;11h;7Bh::8', gg.TYPE_BYTE)

-- search for text UTF-8 'şuşpançik' - type forced to gg.TYPE_BYTE
gg.searchNumber(':şuşpançik')

-- search for text UTF-16LE 'şuşandra' - type forced to gg.TYPE_WORD
gg.searchNumber(';şuşandra')

-- search for HEX '5C E3 0B' + UTF-8 'şuşpançik' + HEX '9B 11 7B' - type forced to gg.TYPE_BYTE
gg.searchNumber('Q 5C E3 0B \'şuşpançik\' 9B 11 7B')
gg.searchNumber("Q 5C E3 0B 'şuşpançik' 9B 11 7B") -- same as above

-- search for HEX '5C E3 0B' + UTF-16LE 'şuşandra' + HEX '9B 11 7B' - type forced to gg.TYPE_BYTE
gg.searchNumber('Q 5C E3 0B "şuşandra" 9B 11 7B')

-- search for HEX '5C E3 0B' + UTF-8 'şuşpançik' + HEX '9B' + UTF-16LE 'şuşandra' + '11 7B' - type forced to gg.TYPE_BYTE
gg.searchNumber('Q 5C E3 0B \'şuşpançik\' 9B "şuşandra" 11 7B')
gg.searchNumber("Q 5C E3 0B 'şuşpançik' 9B \"şuşandra\" 11 7B") -- same as above

-- search for ARM opcode
gg.searchNumber('~A MOV R1, R2', gg.TYPE_DWORD)

-- start new search
gg.clearResults()
gg.searchNumber('10', gg.TYPE_DWORD)

-- refine search if present some results in the result list
gg.searchNumber('10', gg.TYPE_DWORD)
```

:::

## gg.searchPointer

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed searchPointer(int maxOffset,
                    long memoryFrom = 0,
                    long memoryTo = -1,
                    long limit = 0
                   )
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1, 5) -- search some values
gg.searchPointer(512) -- search for possible pointers to values finded before

gg.searchNumber('10', gg.TYPE_DWORD) -- search some values
gg.loadResults(gg.getResults(5))
gg.searchPointer(512) -- search for possible pointers to values loaded before

local t = {}
t[1] = {}
t[1].address = 0x18004030 -- some desired address
t[1].flags = gg.TYPE_DWORD
t[2] = {}
t[2].address = 0x18004040 -- another desired address
t[2].flags = gg.TYPE_BYTE
gg.loadResults(t)
gg.searchPointer(512) -- search for possible pointers to values loaded before
```

:::

## gg.setRanges

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil setRanges(int ranges)
```

```lua [例子]
gg.setRanges(gg.REGION_C_HEAP)

gg.setRanges(bit32.bor(gg.REGION_C_HEAP, gg.REGION_C_ALLOC, gg.REGION_ANONYMOUS))

gg.setRanges(gg.REGION_C_HEAP | gg.REGION_C_ALLOC | gg.REGION_ANONYMOUS)
```

:::

## gg.setSpeed

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed setSpeed(double speed)
```

```lua [例子]

```

:::

## gg.setValues

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed setValues(table values)
```

```lua [例子]
gg.searchNumber('10', gg.TYPE_DWORD)
local r = gg.getResults(5) -- load items
r[1].value = '15'
print('Edited: ', gg.setValues(r))

local t = {}
t[1] = {}
t[1].address = 0x18004030 -- some desired address
t[1].flags = gg.TYPE_DWORD
t[1].value = 12345
t[2] = {}
t[2].address = 0x18004040 -- another desired address
t[2].flags = gg.TYPE_BYTE
t[2].value = '7Fh'
print('Set', t, gg.setValues(t))

-- edit ARM opcode
gg.searchNumber('~A MOV R1, R2', gg.TYPE_DWORD)
local r = gg.getResults(5) -- load items
r[1].value = '~A MOV R2, R3'
print('Edited: ', gg.setValues(r))
```

:::

## gg.setVisible

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil setVisible(bool visible)
```

```lua [例子]
function doAction()
 -- do some action for click, menu for example
 local ret = gg.choice({'Item 1', 'Item 2', 'Item 3'}) or os.exit(gg.setVisible(true))
 gg.alert('You selected: Item '..ret, 'OK')
end
gg.setVisible(false)
while true do
 if gg.isVisible() then
 gg.setVisible(false)
 doAction()
 end
 gg.sleep(100)
end
```

:::

## gg.showUiButton

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil showUiButton()
```

```lua [例子]

```

:::

## gg.skipRestoreState

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil skipRestoreState()
```

```lua [例子]
gg.setRanges(bit32.bxor(gg.REGION_C_HEAP, gg.REGION_C_ALLOC, gg.REGION_ANONYMOUS))

-- do some things like search values

-- gg.skipRestoreState() -- if you uncomment this line -
-- memory ranges after end script stay same as we set in first line.
-- If not - it will be restored to state which be before script run.
```

:::

## gg.sleep

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil sleep(int milliseconds)
```

```lua [例子]
-- 200 ms
gg.sleep(200)

-- 300 ms
local v = 300
gg.sleep(v)
```

:::

## gg.startFuzzy

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed startFuzzy(int type = gg.TYPE_AUTO,
                 long memoryFrom = 0,
                 long memoryTo = -1,
                 long limit = 0
                )
```

```lua [例子]
gg.startFuzzy()

gg.startFuzzy(gg.TYPE_DWORD)

gg.startFuzzy(gg.TYPE_FLOAT)

gg.startFuzzy(gg.TYPE_BYTE, 0x9000, 0xA09000)
```

:::

## gg.timeJump

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed timeJump(string time)
```

```lua [例子]
print('jump 1:', gg.timeJump('42345678'))
-- jump for 1 year 125 days 2 hours 41 minutes 18 seconds

print('jump 2:', gg.timeJump('1:125:2:41:18'))
-- same as above

print('jump 3:', gg.timeJump('5:13'))
-- jump for 5 minutes 13 seconds

print('jump 4:', gg.timeJump('7:3:1'))
-- jump for 7 hours 3 minutes 1 seconds

print('jump 5:', gg.timeJump('3600'))
-- jump for 1 hour

print('jump 6:', gg.timeJump('2:15:54:32'))
-- jump for 2 days 15 hours 54 minutes 32 seconds

print('jump 7:', gg.timeJump('3600.15'))
-- jump for 1 hour 0.15 seconds

print('jump 8:', gg.timeJump('7:3:1.519'))
-- jump for 7 hours 3 minutes 1.519 seconds
```

:::

## gg.toast

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
nil toast(string text,
          bool fast = false
         )
```

```lua [例子]
gg.toast('This is toast')
-- Show text notification for a long period of time

gg.toast('This is toast', true)
-- Show text notification for a short period of time
```

:::

## gg.unrandomizer

说明

**参数**
| 参数 | 说明 |
|:----:|:--:|
| demo | 示例 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| demo | 示例 |

::: code-group

```lua [默认]
mixed unrandomizer(long qword = nil,
                   long qincr = nil,
                   double double_ = nil,
                   double dincr = nil 
                  )
```

```lua [例子]
print('unrandomizer:', gg.unrandomizer(0)) -- set only qword = 0
print('unrandomizer:', gg.unrandomizer(0, 1)) -- set only qword = 0 with increment = 1
print('unrandomizer:', gg.unrandomizer(nil, nil, 0.3)) -- set only double without increment
print('unrandomizer:', gg.unrandomizer(nil, nil, 0.3, 0.01)) -- set only double with increment
print('unrandomizer:', gg.unrandomizer(2, 3, 0.45, 0.67)) -- set both
print('unrandomizer:', gg.unrandomizer()) -- off
```

:::
