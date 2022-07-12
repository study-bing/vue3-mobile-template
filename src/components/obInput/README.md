```js
typeValue:
int: /^(-)?(?:(?:[1-9]\d{0,}|0(?!\d))(?:)?)?/, // 整数
cen: /[A-Za-z0-9\u4e00-\u9fa5\s]+/, // 中文、整数、英文
noText: /[a-zA-Z0-9_]+/, // 字母,整数,下划线
number: /^(-)?(?:(?:[1-9]\d{0,}|0(?!\d))(?:\.\d{0,})?)?/, // 数字
noWord: /[a-zA-Z0-9-`~!@#\$%^&_()\_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&_（）——\-+={}|、]+/, // 不能输入汉字
en: /[a-zA-Z0-9]+/, //字符整数
ce: /[A-Za-z\u4e00-\u9fa5\s]+/, // 字符中文
onlyE: /[a-zA-Z_-]+/, //英文下划线,

minValue: 最小值
maxValue: 最大值
```

其他参考 [https://vxetable.cn/#/input/api]