#◆ mainTabs()
##window viewList ( string tabTitle, userdata view, bool lock, userdara window )window viewList ( string tabTitle, userdata view, bool lock, userdara window )
##一、解释：将绘制的view显示在tab悬浮窗里进行绑定
##二、调用参数：
▪tabTitle▪
tab栏的字符串标题
▪view▪
由AGG或者luajava创建的view实例。
▪lock▪
锁定菜单(设置true锁定)。
▪window▪
tab栏悬浮窗的实例(如果留空则创建新的tab悬浮窗，传入tab悬浮窗实例将view装载此window上而不创建新实例)。
##三、返回值：返回tab悬浮窗的实例。
```lua
local view = gg.viewText ( '112233' )
local window = gg.mainTabs( 'tab栏1' , view , false )
local view = gg.viewText ( '223344' )
gg.mainTabs( 'tab栏2' , view , false , window )
local view = gg.viewText ( '334455' )
gg.mainTabs( 'tab栏3' , view , true , window )
local view = gg.viewText ( '445566' )
gg.mainTabs( '新tab栏' , view , false )

