# qq函数

qq登录可以作为验证唯一值，意思是用户不用自己生成机器码，也不用考虑单用户多机器使用的问题
| 参数名称       |      作用      |  类型 |
| ------------- | :-----------:  | ----: |
| code          |    访问返回码   | number|
| data          |登录后用户一些信息|   json|
| openId        |    用户唯一值   | string|
| token         |   用户token    | string|
| expiresIn     |  token过期时间  | number|
| error         |      错误信息   | string|
## qq.login

QQ授权登录

**例子**

```lua

function getFirstTenDigits(number)
	local strNumber = tostring(number) -- 将数字转换为字符串
	local firstTen = tonumber(string.sub(strNumber, 1, 10)) -- 截取前十位并转换为数字
	return firstTen
end

local data = qq.login() -- 调用 // [!code focus]
local time = getFirstTenDigits(data.expiresIn)
local datetime = os.date("%Y-%m-%d %H:%M:%S" , time)
gg.alert("token过期时间"..datetime.."\n"..tostring(data))
```

## qq.logout

QQ授权登出

**例子**

```lua
qq.logout()
gg.toast("登出成功")
```