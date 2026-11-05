/*
 * Vibe Coding 作品清單
 * ------------------------------------------------------------
 * 新增作品：複製下面的範本區塊、改內容，順序 = 顯示順序（新的放上面）。
 * 截圖放在 /vibe/img/<id>/ 資料夾，第一張會當卡片封面。
 *
 * 欄位說明
 *   id        英文代號，也是截圖資料夾名稱（必填）
 *   title     作品名稱（必填）
 *   type      "App" / "網站" / "LINE Bot" / "工具" …（會變成篩選按鈕）
 *   category  分類，例如 "健康" / "旅行" / "生活" / "手作"（會變成篩選按鈕）
 *   period    做出來並實際使用的期間，例如 "2026-03 ~ 2026-05"
 *   status    "使用中" / "已下架" / "任務完成" …
 *   summary   卡片上的一句話介紹
 *   problem   為什麼做它：當時遇到什麼問題
 *   usage     實際使用：誰用、用多久、用了幾次、結果如何（這段最重要）
 *   how       選填，怎麼做的：技術上有趣的地方
 *   stack     語言與技術，例如 ["Python", "Flask", "LINE Messaging API"]
 *   images    截圖檔名陣列 + 說明，例如 [{ src: "1.png", caption: "首頁" }]
 *   links     選填，還活著的連結，例如 [{ label: "GitHub", url: "https://..." }]
 *
 * ---- 範本（複製這段）----
 * {
 *   id: "example",
 *   title: "作品名稱",
 *   type: "網站",
 *   category: "生活",
 *   period: "2026-01 ~ 2026-02",
 *   status: "已下架",
 *   summary: "一句話介紹。",
 *   problem: "當時遇到的問題。",
 *   usage: "實際怎麼用、用了多久、誰用、結果。",
 *   stack: ["HTML", "JavaScript"],
 *   images: [{ src: "1.png", caption: "說明" }],
 *   links: []
 * },
 */
window.VIBE_PROJECTS = [
  {
    id: "dingdong",
    title: "DING DONG 叮咚",
    type: "App",
    category: "生活",
    period: "2026-10 ~ 現在",
    status: "使用中",
    summary: "男朋友上班不開 LINE，所以我把閒置手機變成他桌上的專屬通知螢幕。",
    problem: "男朋友工作時不開 LINE，有事找他常常要等很久才看到，急事也一樣。",
    usage: "從 2026 年 10 月中開始每天用，到現在還在用。\n一支閒置的 iPhone 放在男朋友桌上當接收螢幕，我從自己手機的發送端傳訊息，內容馬上出現在他手邊。他不用打字，按快速回應就能回我；標成緊急的訊息只要沒回應，就會一直通知到回為止。\n現在大部分訊息他都會馬上看到，下班前也能直接提醒他來載我。非常開心，好用一百分。",
    stack: ["Swift", "SwiftUI", "iOS", "ntfy.sh", "Xcode", "launchd"],
    images: [],
    links: []
  },
  {
    id: "first_birthday_ritual",
    title: "度晬鑼",
    type: "網站",
    category: "家庭活動",
    period: "2026-11",
    status: "等待上場",
    summary: "幫姪子辦抓週，主持要敲鑼，但不想為了一天去買一面鑼，所以做了一面手機鑼。",
    problem: "抓週的流程裡，開場、每唸完一樣道具、寶寶抓到東西、結尾都要敲鑼。真的鑼只會用這一次，買了也沒地方放。",
    usage: "預計在姪子的抓週當天用手機當鑼：開場和結尾按「敲三聲」，道具唸完和抓到東西時點鑼面敲一聲。下面直接列出什麼時候敲幾聲，主持人不用另外背流程。\n輸入寶寶的名字就會產生專屬網址，傳給家人一打開就是「○○ 度晬鑼」。寶寶在旁邊時可以把音量調到「輕」。",
    how: "整個作品只有一個 HTML 檔，不用任何框架。\n鑼聲不是錄音檔，是用 Web Audio API 即時合成的：疊加 8 個不成整數倍的泛音，音高微微往上滑，再加一小段濾波雜音模擬鑼槌打下去的聲音，所以每一聲都有點不一樣。\n敲鑼時會讓手機螢幕保持亮著，也能加到主畫面當成 App 開。",
    stack: ["HTML", "CSS", "JavaScript", "Web Audio API", "PWA", "Screen Wake Lock", "GitHub Pages"],
    images: [
      { src: "1.jpg", caption: "主畫面：點鑼面敲一聲，或用下方按鈕敲三聲" },
      { src: "2.jpg", caption: "敲下去時鑼會擺動，並擴散出一圈波紋" },
      { src: "3.jpg", caption: "輸入寶寶名字，產生可以分享的專屬網址" }
    ],
    links: [{ label: "敲敲看", url: "https://laugh.tw/first_birthday_ritual/" }]
  }
];
