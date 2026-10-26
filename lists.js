/* たんごリスト。まいしゅう あたらしい リストを いちばん うえに たす。
   いちばん うえの リストが アプリを ひらいた ときに えらばれる。
   lower: true なら こもじで れんしゅう。setSize: 1かいの もんだいの かず。
   cards: その リストの ガチャで あつめる カード（r: 0=ノーマル 1=レア 2=キラキラ。キラキラは さいごに でる） */
var SPELL_LISTS = [
  {
    id: "2026-10-27",
    name: "10/27（か）の テスト",
    lower: true,
    setSize: 15,
    words: [
      {w:"salt water", m:"しおみず 🌊"},
      {w:"fresh water", m:"まみず（しおからくない みず） 💧"},
      {w:"drinking", m:"のむ こと 🥤"},
      {w:"cooking", m:"りょうり する こと 🍳"},
      {w:"rotation", m:"じてん（ちきゅうが じぶんで まわる こと） 🌍"},
      {w:"revolution", m:"こうてん（たいようの まわりを まわる こと） ☀️"},
      {w:"spring", m:"はる 🌸"},
      {w:"colder", m:"もっと さむい 🥶"},
      {w:"autumn", m:"あき 🍁"},
      {w:"winter", m:"ふゆ ⛄"},
      {w:"summer", m:"なつ 🏖️"},
      {w:"longer", m:"もっと ながい 📏"},
      {w:"shorter", m:"もっと みじかい ✂️"},
      {w:"clouds", m:"くも ☁️"},
      {w:"stars", m:"ほし ⭐"}
    ],
    cards: [
      {e:"🐶", n:"いぬ", r:0}, {e:"🐼", n:"パンダ", r:0}, {e:"🍭", n:"キャンディ", r:0},
      {e:"🦋", n:"ちょうちょ", r:1},
      {e:"🧜‍♀️", n:"マーメイド", r:2}
    ]
  },
  {
    id: "spellingbee-2026",
    name: "スペリングビー",
    lower: false,
    setSize: 10,
    words: [
      /* プリントの じゅんばん */
      {w:"ability", m:"できる ちから 💪"},
      {w:"attach", m:"くっつける 📎"},
      {w:"behave", m:"いいこに する 🙆"},
      {w:"blind", m:"めが みえない 🦯"},
      {w:"blush", m:"かおが あかく なる 😳"},
      {w:"borrow", m:"かりる 📚"},
      {w:"celebrate", m:"おいわいする 🎉"},
      {w:"daily", m:"まいにちの 📅"},
      {w:"dawn", m:"よあけ 🌅"},
      {w:"equal", m:"おなじ ⚖️"},
      {w:"envelope", m:"ふうとう ✉️"},
      {w:"forest", m:"もり 🌲"},
      {w:"freedom", m:"じゆう 🕊️"},
      {w:"giant", m:"きょじん 🧌"},
      {w:"thankful", m:"ありがとうの きもち 🙏"},
      {w:"hobby", m:"しゅみ ⚽"},
      {w:"honest", m:"しょうじき 😇"},
      {w:"injury", m:"けが 🩹"},
      {w:"inform", m:"しらせる 📣"},
      {w:"interact", m:"やりとりする 💬"},
      {w:"internet", m:"インターネット 🌐"},
      {w:"jealous", m:"やきもち 😒"},
      {w:"knight", m:"きし ⚔️"},
      {w:"kettle", m:"やかん 🫖"},
      {w:"knock", m:"ノックする 🚪"},
      {w:"lasso", m:"なげなわ 🤠"},
      {w:"lettuce", m:"レタス 🥬"},
      {w:"lively", m:"げんき いっぱい 🤸"},
      {w:"modern", m:"いまふうの 🏙️"},
      {w:"narrow", m:"せまい 🤏"},
      {w:"passenger", m:"のりものの おきゃくさん 🚌"},
      {w:"perform", m:"はっぴょうする 🎭"},
      {w:"promise", m:"やくそく 🤝"},
      {w:"remove", m:"とりのぞく 🚮"},
      {w:"random", m:"ランダム 🎲"},
      {w:"rescue", m:"たすける 🚁"},
      {w:"scratch", m:"ひっかく 🐈"},
      {w:"serious", m:"まじめ 🧐"},
      {w:"sibling", m:"きょうだい 👧👦"},
      {w:"sausage", m:"ソーセージ 🌭"},
      {w:"switch", m:"スイッチ 🔘"},
      {w:"terrified", m:"とても こわがる 😱"},
      {w:"timid", m:"こわがり 🐭"},
      {w:"travel", m:"りょこうする ✈️"},
      {w:"upset", m:"かなしく させる 😢"},
      {w:"vanish", m:"きえる 🫥"},
      {w:"victorious", m:"かった 🏆"},
      {w:"wicked", m:"わるい 😈"},
      {w:"yawn", m:"あくび 🥱"},
      {w:"zipper", m:"チャック 🤐"}
    ],
    cards: [
      {e:"🐰", n:"うさぎ", r:0}, {e:"🐱", n:"ねこ", r:0}, {e:"🐹", n:"ハムスター", r:0},
      {e:"🍓", n:"いちご", r:0}, {e:"🍰", n:"ケーキ", r:0}, {e:"🎀", n:"リボン", r:0},
      {e:"🦄", n:"ユニコーン", r:1}, {e:"🌈", n:"にじ", r:1}, {e:"🧁", n:"カップケーキ", r:1},
      {e:"👸", n:"プリンセス", r:2}
    ]
  }
];
