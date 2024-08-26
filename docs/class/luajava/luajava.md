# Luajava 函数库 {#luajava}
luajava 函数库 lua 使用时与 java 交互的库

## 指南

打印函数库内容
```lua
  print(luajava)
```

::: tip
使用中如何判断luajava库是否存在呢
```lua
  asset(luajava, "luajava for nil!")
```
:::

## 函数说明及用法

## luajava.bindClass

函数：绑定java类到lua中

**参数**
| 参数 | 说明 |
|:----:|:--:|
| className | 类名 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| 类实例 | 返回该类实例 |

::: code-group

```lua [默认]
luajava.bindClass(string className) -- return Object | nil
```

```lua [例子]
local Toast = luajava.bindClass("android.widget.Toast")
print(Toast) -- 打印
```

:::


## luajava.new

函数：创建一个java对象

**参数**
| 参数 | 说明 |
|:----:|:--:|
| class | 类实例 |
| args | new对象传入的参数 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| 对象 | 返回新的对象 |

::: code-group

```lua [默认]
luajava.new(class, args) -- return Object | nil
```

```lua [例子]
local Looper = luajava.bindClass("android.os.Looper")
local Handler = luajava.bindClass("android.os.Handler")

handler = luajava.new(Handler, Looper:getMainLooper())
print(handler)
```
:::


## luajava.newInstance

函数：创建一个java对象

**参数**
| 参数 | 说明 |
|:----:|:--:|
| class | 类实例 |
| args | new对象传入的参数 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| 对象 | 返回新的对象 |

::: code-group

```lua [默认]
luajava.newInstance(className, args) -- return Object | nil
```

```lua [例子]
local Looper = luajava.bindClass("android.os.Looper")

handler = luajava.newInstance("android.os.Handler", Looper:getMainLooper())
print(handler)
```
:::


## luajava.createProxy

函数：创建一个代理对象

**参数**
| 参数 | 说明 |
|:----:|:--:|
| interfaceName | 接口名称 |
| invocation | 回调方法 |

**返回**
| 返回 | 说明 |
|:----:|:--:|
| 接口 | 代理对象 |

::: code-group

```lua [默认]
luajava.createProxy(interfaceName, invocation) -- return Object | nil
```

```lua [例子]
local context = luajava.bindClass("com.luaj.LuaActivity"):getContext()
local Toast = luajava.bindClass("android.widget.Toast")
local Looper = luajava.bindClass("android.os.Looper")

handler = luajava.newInstance("android.os.Handler", Looper:getMainLooper())

Runnable = luajava.createProxy("java.lang.Runnable", {
    run = function()
        Toast:makeText(context, "你好，世界！", Toast.LENGTH_SHORT):show()
    end
})

handler:post(Runnable)
```
::: tip
代理"java.lang.Runnable"的接口 回调函数 run 输出内容
接口名称 回调函数名称一定要正确
:::
