# agg functions

agg 函数

## gg.adb

说明

**例子**

```lua
gg.adb()
```

## gg.classCheck

说明

**例子**

```lua
gg.classCheck()
```

## gg.colorAlert

说明

**例子**

```lua
gg.colorAlert()
```

## gg.compileJava

说明

**例子**

```lua
gg.compileJava()
```

## gg.download

说明

**例子**

```lua
gg.download()
```

## gg.exit

说明

**例子**

```lua
gg.exit()
```

## gg.fingerprint

说明

**例子**

```lua
gg.fingerprint()
```

## gg.format

说明

**例子**

```lua
gg.format()
```

## gg.getApp

说明

**例子**

```lua
gg.getApp()
```

## gg.getClassMethods

说明

**例子**

```lua
gg.getClassMethods()
```

## gg.getWM

说明

**例子**

```lua
gg.getWM()
```

## gg.isTabVisible

说明

**例子**

```lua
gg.isTabVisible()
```

## gg.isVPN

说明

**例子**

```lua
gg.isVPN()
```

## gg.loadClass

说明

**例子**

```lua
gg.loadClass()
```

## gg.luaThread

说明

**例子**

```lua
gg.luaThread()
```

## gg.mainLua

说明

**例子**

```lua
gg.mainLua()
```

## gg.mainMultiChoice

说明

**例子**

```lua
gg.mainMultiChoice()
```

## gg.mainPrompt

说明

**例子**

```lua
gg.mainPrompt()
```

## gg.mainSwitch

说明

**例子**

```lua
gg.mainSwitch()
```

## gg.mainTabs

说明

window viewList ( string tabTitle, userdata view, bool lock, userdara window )window viewList ( string tabTitle, userdata view, bool lock, userdara window )

一、解释：将绘制的view显示在tab悬浮窗里进行绑定

二、调用参数：

▪tabTitle▪
tab栏的字符串标题。
▪view▪
由AGG或者luajava创建的view实例。
▪lock▪
锁定菜单(设置true锁定)。
▪window▪
tab栏悬浮窗的实例(如果留空则创建新的tab悬浮窗，传入tab悬浮窗实例将view装载此window上而不创建新实例)。
##三、返回值：返回tab悬浮窗的实例。

**例子**

```lua
local view = gg.viewText ( '112233' )
local window = gg.mainTabs( 'tab栏1' , view , false )
local view = gg.viewText ( '223344' )
gg.mainTabs( 'tab栏2' , view , false , window )
local view = gg.viewText ( '334455' )
gg.mainTabs( 'tab栏3' , view , true , window )
local view = gg.viewText ( '445566' )
gg.mainTabs( '新tab栏' , view , false )
```

## gg.mainWeb

说明

**例子**

```lua
gg.mainWeb()
```

## gg.notification

说明

**例子**

```lua
gg.notification()
```

## gg.setProcessInfo

说明

**例子**

```lua
gg.setProcessInfo()
```

## gg.setTabVisible

说明

**例子**

```lua
gg.setTabVisible()
```

## gg.shell

说明

**例子**

```lua
gg.shell()
```

## gg.viewList

说明

**例子**

```lua
gg.viewList()
```

## gg.viewMultiChoice

说明

**例子**

```lua
gg.viewMultiChoice()
```

## gg.viewPrompt

说明

**例子**

```lua
gg.viewPrompt()
```

## gg.viewSwitch

说明

**例子**

```lua
gg.viewSwitch()
```

## gg.viewText

说明

**例子**

```lua
gg.viewText()
```

## gg.viewThreadList

说明

**例子**

```lua
gg.viewThreadList()
```

## gg.viewTouch

说明

**例子**

```lua
gg.viewTouch()
```

## gg.viewWeb

说明

**例子**

```lua
gg.viewWeb()
```
