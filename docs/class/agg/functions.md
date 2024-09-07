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

table getClassMethods ( string class )

一、解释：

获取指定类(已经加载的类)的所有公共方法以及字段

二、调用参数：

▪class▪

完整的类名

三、返回值：

返回包含指定类的方法字段表或带错误的字符串。

**例子**

```lua
local wind = gg.getClassMethods("android.ext.MainService")--类名需要完整的路径
for k , v in pairs(wind) do
	local paramter = { }
	for n , t in pairs(v.parameters) do
		local p_name = t.parameter_name--方法参数的名字
		local p_type = t.parameter_type--方法参数的类型
		local y_p_n = p_type
		table.insert(paramter, y_p_n.." "..p_name)
	end
	local up_par = table.concat(paramter , ", ")
	local r_t = v.return_type--方法的返回值
	local text = r_t.." "..v.method_name.."("..up_par..")"
	print(text)
end
```

## gg.getWM

说明

**例子**

```lua
gg.getWM()
```

## gg.isTabVisible

说明

bool isTabVisible ()

一、解释：

检查Tab悬浮窗是否显示

二、调用参数：

无

三、返回值：

如果tab悬浮窗打开，则返回true，否则返回false

**例子**

```lua
local view = gg.viewText("一段文字")
gg.mainTabs("tab标题", view, false)
gg.setTabVisible(false)--隐藏
gg.alert("是否显示"..tostring(gg.isTabVisible()))
gg.sleep(2000)
gg.setTabVisible(true)--延迟两秒后显示
gg.alert("是否显示"..tostring(gg.isTabVisible()))
```

## gg.isVPN

说明

bool isVPN ()

一、解释：

检查当前设备是否开启网络代理(VPN)

二、调用参数：

无

三、返回值：

如果VPN打开，则返回true，否则返回false

**例子**

```lua
print(gg.isVPN())
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

三、返回值：返回tab悬浮窗的实例。

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

mixed notification ( string title, string message )

一、解释：调用系统通知显示指定文本(需要通知权限)

二、调用参数：

▪title▪

显示的标题
▪message▪

显示的具体内容

三、返回值：

无。

**例子**

```lua
gg.notification("AGG通知","醒醒，该起床了！")
```

## gg.setProcessInfo

说明

mixed setProcessInfo ( string processName )

一、解释：

设置当前进程(应用名)

二、调用参数：
  
 ▪processName▪
  
应用的进程名称
  
三、返回值：

返回true或false。

**例子**

```lua
gg.setProcessInfo("造梦西游OL")
```

## gg.setTabVisible

说明

mixed setTabVisible ( bool visible )

一、解释：

设置Tab悬浮窗隐藏或者显示(false表示隐藏)

二、调用参数：

▪visible▪

true表示显示tab悬浮窗，false表示隐藏

三、返回值：

返回nil或带错误的字符串。

**例子**

```lua
local view = gg.viewText("一段文字")
gg.mainTabs("tab标题", view, false)
gg.setTabVisible(false)--隐藏
gg.sleep(2000)
gg.setTabVisible(true)--延迟两秒后显示
```

## gg.shell

说明

**例子**

```lua
gg.shell()
```

## gg.viewList

说明

userdata viewList ( table items, function flushed )

一、解释：

绘制一个菜单列表的view

二、调用参数：

▪items▪

包涵要显示的菜单列表，每个元素都是一个包含以下字段的表：title（字符串标题，必需）、subTitle（字符串副标题，必须）、main（点击此项后回调的函数，必需）。

▪flushed▪

菜单列表视图下拉刷新函数的回调。

**例子**

```lua
function mainAP(Table, func, tabTitle)
    -- 菜单封装
    local list = { }
    for(k, v in pairs(Table)) {
            table.insert(list , { title = v[1] , subTitle = v[2] , main = function()
                    v[3](v[4], v[5])
                end
            })
        }
        local list = gg.viewList(list , func)
        return gg.mainTabs(tabTitle , list.getView() , false , window)
    end
    function flushed()
        gg.toast("下拉刷新")
    end
    function onclick(i)
        gg.toast("点击了菜单"..i)
    end
    window = mainAP({
        { "菜单1" , "菜单副标题1" , function()
                gg.toast("点击了菜单1")
            end
        } ,
        { "菜单2" , "菜单副标题2" , onclick,2 } ,
        { "菜单3" , "菜单副标题3" , onclick,3 } ,
    } , flushed , "主菜单" )
```

## gg.viewMultiChoice

说明

userdata viewMultiChoice ( table items, function onclick )

一、解释：

绘制一个多选列表的view

二、调用参数：

▪items▪

包涵要显示的多选列表，每个元素都是一个字符串。

▪onclick▪

多选视图按钮函数的回调。



**例子**

```lua
local multiTable={}
for i=1,50 do
    table.insert(multiTable,i)
end
function onclick(items)
    gg.alert(tostring(items))--打印已经勾选的列表
end
local view = gg.viewMultiChoice(multiTable, onclick)
gg.mainTabs("多选视图", view, false)
```

## gg.viewPrompt

说明

userdata viewPrompt ( table prompts, table defaults = {}, table types = {}, function onclick )

一、解释：绘制一个输入列表的view

二、调用参数：

▪prompts▪

该表指定了每个输入字段的键和描述。

▪defaults▪

该表根据提示为每个键指定默认值。

▪types▪

该表指定了提示中每个键的类型。有效类型：“number”、“text”、“path”、“file”、“new_file”、“setting”、“speed”、“checkbox”、“slider”、“range_slider”、“chip”。根据输入字段附近附加元素的类型输出（例如，用于选择路径或文件的按钮等）。

▪onclick▪

输入列表按钮函数的回调。

三、返回值：

返回绘制结束之后的view。

**例子**

```lua
function onClick(tab)
    gg.alert(tostring(tab))
end
local view = gg.viewPrompt(
{ "内置单范围滑动条" ,
    "内置多范围滑动条" ,
    { "TapTap" , "IOS" , "4399" , "vivo" } ,
    { "TapTap" , "IOS" , "4399" , "vivo" } ,
    '内置单选标签输入框' ,
    '内置多选标签输入框' ,
    '输入框1' ,
    '输入框2' ,
    '勾选框1' ,
    '勾选框2' ,
    '文件路径' ,
    '文件'} ,
{ { from = -100 , to = 300 , value = 50 , size = 5 , tickVisible = false } ,
    { from = 10 , to = 200 , value = { 20 , 100 , 180 , 200 } } ,2 ,{ 1 , 3 } ,{ '苹果' , '橘子' , '草莓' , '香蕉' , '1315' , '1319' , '1514' , '1596' } ,{ '苹果' , '橘子' , '草莓' , '香蕉' , '1315' , '1319' , '1514' , '1596' } ,'123' ,'456' ,true ,false ,'/storage/emulated/0/AppProjects/' ,'/storage/emulated/0/AppProjects/最新的luaj.zip'} ,{ "slider" , "range_slider" , 'number' , "chip" , 'text' , "chip" , "number" , 'text' , 'checkbox' , 'checkbox' , 'path' , 'file' } , onClick )
gg.mainTabs ( '输入框' , view , false )
```

## gg.viewSwitch

说明

userdata viewSwitch ( table items )

一、解释：

绘制一个开关列表的view

二、调用参数：

▪items▪

包涵要显示的开关列表，每个元素都是一个包含以下字段的表：title（字符串标题，必需）、open（开关开启后的回调函数，必须）、close（开关关闭后的回调函数，必需）、isCheck（开关默认的状态(true默认开启，false关闭)，必须）。

三、返回值：

返回绘制结束之后的view。

**例子**

```lua
function switchAp ( Table , tabTitle )
    -- 开关封装
    local list = { }
    for ( k , v in pairs ( Table ) ) {
            table.insert ( list , { title = v [ 1 ] , open = v [ 2 ] , close = v [ 3 ] , isCheck = v [ 4 ] } )
        }
        local swit = gg.viewSwitch ( list )
        gg.mainTabs ( tabTitle , swit , false , window
    end
    switchAp ( {
        { '人物无敌1(加载动画)' , function ( )
                gg.sleep ( 3000 ) -- 模拟耗时
                gg.toast ( '人物无敌1开启' )
            end, function ( )
                gg.sleep ( 3000 ) -- 模拟耗时
                gg.toast ( '人物无敌1关闭' )
            end
        } ,
        { '{?人物:#FFF86363:1:1:true}无敌2' , function ( )
                gg.toast ( '人物无敌2开启' )
            end
            , function ( )
                gg.toast ( '人物无敌2关闭' )
            end
            , true
        } ,
        { '人物无敌3' , function ( )
                gg.toast ( '人物无敌3开启' )
            end\n\n\t\t\t, function ( )
                gg.toast ( '人物无敌3关闭' )
            end
            , true
        }
    } , "开关视图" )
```

## gg.viewText

说明

userdata viewText ( string text )

一、解释：

绘制一个长文本的view

二、调用参数：

▪text▪

需要显示的字符串文本。

三、返回值：

返回绘制结束之后的view。

**例子**

```lua
local view = gg.viewText ( '--------{?天启全功能脚本公告:#FFFFFFFF:1.5}--------{?2023.04.19:#FF486AFF:1:0:true}更新日志适配造梦13.4.1版本({?4399:#FFF86363:1:1:true})适配造梦13.4.1版本(渠道服)2023.04.17更新日志适配造梦13.4.0版本(4399)2023.03.26更新日志优化人物无敌(免疫debuff伤害)适配造梦13.3.4(4399)2023.03.23更新日志更换新的人物无敌功能(更无敌)修复了称号秒杀直接把属性加在面板上的问题降低了全局秒杀的伤害(当然，建议还是不要使用)2023.03.18更新日志新增奇闻录激活图鉴功能(装备功能>>开奇闻录)新增五中一键录入全角色白装(装备功能>>无中功能>>一键录入)移除全ID查询功能(目前有动态检索功能可以直接检索物品查ID)优化悬浮窗体验修复物理功能无限法宝无效问题2023.03.17更新日志新增雇佣功能(角色功能>>其他功能)[该功能还未完善]适配造梦13.3.2版本(4399)适配造梦13.3.2版本(渠道服)适配新版防闪(看见此公告请快速更新游戏)' )
gg.mainTabs( '脚本公告' , view , false , window)
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

userdata viewWeb ( string url )

一、解释：

绘制一个web的view

二、调用参数：

▪url▪

网址链接。

三、返回值：

返回绘制结束之后的view。


**例子**

```lua
local view = gg.viewWeb( 'https://tianqix.gitee.io')
gg.mainTabs( '广告页' , view , false , window)

```