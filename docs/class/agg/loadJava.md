# Lua调用java

### LuaJava函数库
Luaj中lua和java交互的一个函数库 [文档](../luajava/luajava)

### import
- 作用: 动态加载，调用时创建 class 实例，也可快速索引其内容
```lua
--明确知道类全名
import "java.io.File"
print(File)
local f = File("/sdcard/")
print(f)

--懒得写类名或者某个包下要导入的类太多时
import "android.ext.*"
print(Tools) --这里它将导入android.ext.Tools

--当导入了不同包下的类，但类名相同时可通过写类全名来调用或者区分
import "android.fix.Activity"
import "android.app.Activity"

print(android.fix.Activity)
print(android.app.Activity)

```
### object
- 作用: 动态创建设定的库前缀，调用时创建 class 实例，也可快速索引其内容
```lua

--一共有三种调用方法
--单参数调用
object "android"

--多参数调用
object("android", "java")

--传入 table 数据
object {
"android",
"androidx",
"java",
"abc" = "com", -- 可以自定义名称
"material" = "com.google.android.material"
}

print("android 库:", android)
print("androidx 库:", androidx)
print("java 库:", java)
print("com 库:", abc)
print("-----------")

print(android.ext.Tools)
print(java.io.File)
print(android.content.SharedPreferences)
print(android.content.pm.ApplicationInfo)
print(android.widget.ImageView)
--自定义前缀
print(material.bottomnavigation.BottomNavigationView)

print(androidx.coordinatorlayout.widget.CoordinatorLayout)
```