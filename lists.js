/* たんごリスト。まいしゅう あたらしい リストを いちばん うえに たす。
   アプリは いちばん うえの リストを つかう（URL に ?list=ID を つけると ほかの リスト）。
   lower: true なら こもじで れんしゅう。setSize: 1かいの もんだいの かず。
   words の かわりに groups（title・words・hint・examples）を かくと、カテゴリの じゅんばんで だして コツも でる。
   cards: その リストの ガチャで あつめる カード（r: 0=ノーマル 1=レア 2=キラキラ。キラキラは さいごに でる） */
var SPELL_LISTS = [
  {
    id: "2026-10-27",
    name: "10/27（か）の テスト",
    lower: true,
    setSize: 15,
    /* カテゴリ（groups）が あれば その じゅんばんで だす。hint は こたえの あとに でる コツ */
    groups: [
      {
        title: "きせつの ことば",
        words: [
          {w:"spring", m:"はる（はなが さく きせつ） 🌸"},
          {w:"summer", m:"なつ（あつい きせつ） 🏖️"},
          {w:"autumn", m:"あき（はっぱが おちる きせつ） 🍁"},
          {w:"winter", m:"ふゆ（さむい きせつ） ⛄"}
        ],
        hint: "はる、なつ、あき、ふゆ、きせつは 4つ！",
        examples: [
          {en:"Spring, summer, autumn, winter — four seasons!", ja:"はる、なつ、あき、ふゆ、きせつは 4つ！（spring・summer・autumn・winter）"}
        ]
      },
      {
        title: "そらの ことば",
        words: [
          {w:"stars", m:"ほし（よるの そらで ひかる もの） ⭐"},
          {w:"clouds", m:"くも（そらに うかぶ しろい もの） ☁️"}
        ],
        hint: "そらに ほしと くもが みえるよ",
        examples: [
          {en:"I see stars and clouds in the sky.", ja:"そらに ほしと くもが みえるよ（stars・clouds）"}
        ]
      },
      {
        title: "みずの ことば",
        words: [
          {w:"drinking", m:"のむこと（みずや ジュースを のむ こと） 🥤"},
          {w:"cooking", m:"りょうりすること（ごはんを つくる こと） 🍳"},
          {w:"salt water", m:"しおみず（うみの しょっぱい みず） 🌊"},
          {w:"fresh water", m:"まみず（しょっぱくない のめる みず） 💧"}
        ],
        hint: "うみの みずは salt water、のめる みずは fresh water",
        examples: [
          {en:"The ocean is salt water.", ja:"うみは しおみずだよ（salt water）"},
          {en:"We use fresh water for drinking and cooking.", ja:"のむのも りょうりも まみずを つかうよ（fresh water・drinking・cooking）"}
        ]
      },
      {
        title: "くらべる ことば",
        words: [
          {w:"colder", m:"もっと さむい（〜より さむい こと） 🥶"},
          {w:"longer", m:"もっと ながい（〜より ながい こと） 📏"},
          {w:"shorter", m:"もっと みじかい（〜より みじかい こと） ✂️"}
        ],
        hint: "うしろに er が つくと「もっと〜」。longer ⇔ shorter は はんたい",
        examples: [
          {en:"Winter is colder than summer.", ja:"ふゆは なつより さむいよ（colder）"},
          {en:"In summer, days are longer. In winter, days are shorter.", ja:"なつは ひるが ながくて、ふゆは みじかいよ（longer・shorter）"}
        ]
      },
      {
        title: "ちきゅうの うごき",
        words: [
          {w:"rotation", m:"じてん（ちきゅうが じぶんで くるくる まわる こと） 🌍"},
          {w:"revolution", m:"こうてん（ちきゅうが たいようの まわりを まわる こと） ☀️"}
        ],
        hint: "rotation は 1にちで 1かい、revolution は 1ねんで 1かい",
        examples: [
          {en:"Rotation makes day and night.", ja:"じてんで ひると よるが できるよ（rotation）"},
          {en:"Revolution makes the seasons.", ja:"こうてんで きせつが できるよ（revolution）"}
        ]
      }
    ],
    cards: [
      {e:"🐶", n:"いぬ", r:0},
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
