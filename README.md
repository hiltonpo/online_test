1、封裝axios, 要求是處理http請求的請求攔截和響應攔截. 請求攔截處理 : 將token和傳lang（多語言）添加在請求頭; 響應攔截處理接口調用成功或失敗的處理, 最好封裝成Promise
=>未完成，只有使用axios的then與catch處理

2、粗略寫一個 從頁面調接口開始到接口調用, vuex中間層再到頁面渲染的例子, 不需要太複雜
=>這題應該是v-router吧(?)
如果是的話，app.vue裡有使用v-router串接holiday.vue與Westholiday.vue

3、封裝一個父子組件通信的例子, 使用多種方式進行通信
=> app.vue與panel.vue之間使用$emit做傳遞
calendar.vue與event.vue之間使用prop傳遞

4、封裝一個echart組件, 圖表類型隨意
=> app.vue加入chart.vue的component

5、寫一個工具函數, 將上傳的圖片壓縮大小. 可以使用開源插件
=>未完成

6、將一段dom結構生成一張base64圖片
=>未完成

