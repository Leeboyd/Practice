# 前端學習 @ goodideas-studio

## 切版練習
<pre>
| 資料夾名稱    |   練習課題     | 內容
----------------------------------------------------------------------------------------------
| leeboy01    | 基礎HTML+CSS  | CSS四個雷區：boxing-model, display, position, Float and clear
| leeboy02    | 基礎HTML+CSS  | 切版要點：由上到下．由左至右
| leeboy03    | Bootstrap 3  | Grid System 佈局
| leeboy04    | Bootstrap 3  | BS元件 與 HTML 5
| leeboy05    | SASS Compass | 巢狀結構．CSS預處理器．ＲＷＤ佈局
| leeboy06    | 綜合－官網頁   | javascript library, 輪播, 漢堡選單
| leeboy07    | 綜合－電商頁   | 綜合
</pre>

## javascript
* Tainan Food
```ruby
使用{{mustache}}模板，將firebase資料庫render至網頁 
```
[mustache.js](https://github.com/janl/mustache.js/)
* Ractive CRUD
```ruby
為Tainan Food列表建立"新增","修改","刪除"功能 
```
[Ractive.js](http://www.ractivejs.org/)
* FB_graph_api
```erb
實作FB登入取得Access Tokens，列出使用者發佈的文章 
```
## node.js
* PTTMailer
```ruby
使用npm模組化設計，做到"自動排程" -> "爬文" -> "儲存" -> "寄到信箱"４個功能 
```
* Basic_Authentication
***
*注意, 在測試所有功能之前 MongoDB server 都必須先打開*
***
1.basic-auth
```ruby
1. server.js
實做一個要求輸入"帳號密碼"的簡易認證功能。
2. server2.js
用戶端輸入"帳號密碼" -> Server端傳送"Signed cookie"給使用者 -> 用戶端爾後的req.headers都會帶cookie
3. server3.js
成功登入後，Server端儲存在session紀錄的資料，並傳輸給用戶端的 cookie，
用戶端的記憶體會儲存這些資料，用戶端在後續的req會帶著session資訊供Server端查詢。
```
2.rest-server-passport
```ruby
利用Express framework開發REST API，
Routing "GET"、"POST"、"DELETE"、"PUT" 四個動作，
對應"查詢"、"新增"、"刪除"、"更新" 四個功能
models: Mongoose schemas （ORM）和 MongoDB database (no-SQl DB)
+ 權限管理：admin用戶才可以做"POST"、"DELETE"、"PUT"、"GET"（查詢）有login的用戶都能操作
```
