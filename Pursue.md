## Pursue to the end

##### 1. 你真的了解let吗 ？ 暂时性死区到底是什么？let到底有没有变量提示？参考文章: https://fangyinghang.com/let-in-js/

##### 2. emoji到底是什么？他和Unicode有什么关系？参考文章: https://blog.csdn.net/changqijihua/article/details/122118158

##### 3. element-ui组件Cascader 级联选择器内部BUG，手动清空options会导致报错，原因确定为options清空后，activePath没有清空，内部使用activePath去查找就会找不到成为null导致，参考代码

```javascript
// 假设cascader的options变量为this.options，绑定v-mode变量为select ref为cascader

// 先清除选中项和激活的项
this.$refs.cascader.$refs.panel.clearCheckedNodes()   // 清除选中项
this.$refs.cascader.$refs.panel.activePath = []              //  清除激活的菜单
// 再清空选项或赋值新的选项
this.select = []
this.options = []
```

##### 参考文章:https://github.com/ElemeFE/element/issues/20203
