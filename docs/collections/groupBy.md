---
label: 集合
title: groupBy
slug: /groupBy
sidebar_position: 17
---

<big><b>`groupBy(list, iteratee, [context])`</b></big>
&emsp;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="1" label="groupBy" default>
  ```ts
  import group from "./group";

  export default group((result, value, key) => {
    // 5. 如果 value 存在 直接 push
    if (result[key]) result[key].push(value);
    // 6. 不存在 赋值 [value]
    else result[key] = [value];
  });

  ```
  </TabItem>
  <TabItem value="2" label="group">
  ```ts
  function group(behavior) {
    return function (obj, iteratee, context?) {
      // 1. 默认初始化结果对象
      const result = {};

      each(obj, (...args) => {
        let key = null;
        const value = args[0];
        // 2. 如果是函数，直接调用结果
        if (typeof iteratee === "function") {
          key = iteratee.apply(context, args);
        } else {
          // 3. 非函数 -> 当作属性处理
          key = value[iteratee];
        }
        // 4. 调用函数
        behavior(result, value, key);
      });

      return result;
    };
}
  ```
  </TabItem>
</Tabs>

