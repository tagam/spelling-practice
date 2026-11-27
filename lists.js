/* たんごリスト。まいしゅう あたらしい リストを いちばん うえに たす。
   アプリは いちばん うえの リストを つかう（URL に ?list=ID を つけると ほかの リスト）。
   lower: true なら こもじで れんしゅう。keepCase: true なら かいた とおりの おおもじ・こもじで れんしゅうし、
   おおもじ・こもじが ちがうと まちがいに する（つきの なまえ など）。setSize: 1かいの もんだいの かず。
   words の かわりに groups（title・words・hint・examples）を かくと、カテゴリの じゅんばんで だして コツも でる。
   hint は 1つ でも ["…", "…"] の ように いくつか でも よい。
   order（たんごの ならび）を かくと、もんだいは その じゅんばんで でる。
   stampDays を かくと「きょうの れんしゅう」と スタンプカードに なる（そろうと ガチャけん 3まい）。
   ガチャの カードは cards.js（しゅうを またいで あつめる カードダス） */
var SPELL_LISTS = [
  {
    id: "2026-12-04",
    name: "12/4（きん）の テスト",
    lower: true,
    setSize: 15,
    stampDays: 4,  /* れんしゅうする ひの かず（スタンプの かず）。そろうと ガチャけん 3まい */
    /* もんだいの じゅんばん（スプレッドシートの ひょうと おなじ）。なければ groups の じゅんばん */
    order: ["playground", "slide", "swing", "ladder", "monkey bar", "first", "safety", "follow",
            "heavy", "thump", "strike", "piece", "period", "mounted", "physical"],
    groups: [
      {
        title: "🛝 こうえんの あそびどうぐ",
        words: [
          {w:"playground", m:"こうえん 🏞️（みんなで あそぶ ところ）"},
          {w:"slide", m:"すべりだい 🛝（すーっと すべる あそびどうぐ）"},
          {w:"swing", m:"ぶらんこ 🎠（ゆらゆら ゆれる あそびどうぐ）"},
          {w:"ladder", m:"はしご 🪜（のぼったり おりたり する どうぐ）"},
          {w:"monkey bar", m:"うんてい 🐒（ぶらさがって すすむ あそびどうぐ）"}
        ],
        hint: "playground は play（あそぶ）＋ ground（じめん）",
        examples: [
          {en:"I play on the slide and the swing at the playground.", ja:"こうえんで すべりだいと ぶらんこで あそぶよ（slide・swing・playground）"},
          {en:"Climb the ladder to the monkey bar.", ja:"はしごを のぼって うんていに いこう（ladder・monkey bar）"}
        ]
      },
      {
        title: "🦺 あんぜんの ことば",
        words: [
          {w:"safety", m:"あんぜん 🦺（けがを しない こと）"},
          {w:"first", m:"いちばん さいしょ 🥇（1ばんめ）"},
          {w:"follow", m:"まもる・ついていく 👣（きまりや ひとに したがう こと）"}
        ],
        examples: [
          {en:"Safety first! Follow the rules.", ja:"あんぜんが いちばん！ きまりを まもろうね（safety・first・follow）"}
        ]
      },
      {
        title: "💥 おとと ちからの ことば",
        words: [
          {w:"heavy", m:"おもい 🏋️（もつのが たいへんな こと）"},
          {w:"thump", m:"ドスン 💥（おもい ものが おちる おと）"},
          {w:"strike", m:"たたく ⚡（つよく うつ こと）"}
        ],
        examples: [
          {en:"The heavy box fell with a thump.", ja:"おもい はこが ドスンと おちたよ（heavy・thump）"},
          {en:"Strike the drum!", ja:"たいこを たたいて！（strike）"}
        ]
      },
      {
        title: "⭐ そのほかの ことば",
        words: [
          {w:"piece", m:"ひとつ・かけら 🧩（ちいさく わけた ひとつ）"},
          {w:"period", m:"じかんめ 🕐（じゅぎょうの くぎり）"},
          {w:"mounted", m:"とりつけた 🔩（しっかり つけた こと）"},
          {w:"physical", m:"からだの 🤸（からだを うごかす こと）"}
        ],
        hint: "piece の なかには pie（パイ）が いる。a piece of pie！",
        examples: [
          {en:"Can I have a piece of cake?", ja:"ケーキを ひとつ もらえる？（piece）"},
          {en:"We do physical exercise in the second period.", ja:"2じかんめに からだを うごかすよ（physical・period）"},
          {en:"The swing is mounted on a strong pole.", ja:"ぶらんこは じょうぶな ぼうに とりつけて あるよ（mounted）"}
        ]
      }
    ]
  },
  {
    id: "2026-11-27",
    name: "11/27（きん）の テスト",
    lower: true,
    setSize: 15,
    stampDays: 3,  /* かようびから はじめるので か〜もくの 3にち。そろうと ガチャけん 3まい */
    /* もんだいの じゅんばん（スプレッドシートの ひょうと おなじ）。なければ groups の じゅんばん */
    order: ["time", "clock", "hour", "minutes", "bright", "dark", "noisy", "quiet",
            "meat", "flight", "height", "fourth", "wonderful", "remake", "means"],
    groups: [
      {
        title: "⏰ じかんの ことば",
        words: [
          {w:"time", m:"じかん ⏰（いま なんじ？の じかん）"},
          {w:"clock", m:"とけい 🕰️（じかんが わかる もの）"},
          {w:"hour", m:"1じかん ⌛（60ぷんの こと）"},
          {w:"minutes", m:"ふん ⏱️（60びょうで 1ぷん）"}
        ],
        examples: [
          {en:"What time is it? Look at the clock.", ja:"いま なんじ？ とけいを みてね（time・clock）"},
          {en:"One hour is sixty minutes.", ja:"1じかんは 60ぷんだよ（hour・minutes）"}
        ]
      },
      {
        title: "🔁 はんたいの ことば",
        words: [
          {w:"bright", m:"あかるい ☀️（ひかって あかるい こと）"},
          {w:"dark", m:"くらい 🌑（ひかりが なくて くらい こと）"},
          {w:"noisy", m:"うるさい 📢（おとが おおきい こと）"},
          {w:"quiet", m:"しずか 🤫（おとが しない こと）"}
        ],
        examples: [
          {en:"The sun is bright. The night is dark.", ja:"おひさまは あかるい。よるは くらいよ（bright・dark）"},
          {en:"The class is noisy. Please be quiet.", ja:"クラスが うるさいね。しずかに してね（noisy・quiet）"}
        ]
      },
      {
        title: "✈️ ight の なかま",
        words: [
          {w:"flight", m:"ひこうきの たび ✈️（そらを とんで いく こと）"},
          {w:"height", m:"たかさ 📏（せの たかさ）"},
          {w:"bright", m:"あかるい ☀️（ひかって あかるい こと）"}
        ],
        hint: "flight も height も bright も おしりは ight。gh は よまない",
        examples: [
          {en:"We went on a flight.", ja:"ひこうきに のって でかけたよ（flight）"},
          {en:"What is your height?", ja:"せの たかさは どのくらい？（height）"}
        ]
      },
      {
        title: "⭐ そのほかの ことば",
        words: [
          {w:"meat", m:"おにく 🍖（たべる にく）"},
          {w:"fourth", m:"4ばんめ 4️⃣（1、2、3の つぎ）"},
          {w:"wonderful", m:"すばらしい 🌟（とても すてきな こと）"},
          {w:"remake", m:"つくりなおす 🔁（もう いちど つくる こと）"},
          {w:"means", m:"いみする 💬（〜という いみに なる）"}
        ],
        hint: [
          "re が つくと『もう いちど』。make → remake",
          "wonder に ful で wonderful"
        ],
        examples: [
          {en:"I like meat.", ja:"おにくが すきだよ（meat）"},
          {en:"This is my fourth cookie!", ja:"これで 4まいめの クッキーだよ！（fourth）"},
          {en:"What a wonderful day!", ja:"すばらしい 1にちだね！（wonderful）"},
          {en:"Let's remake the sandcastle.", ja:"すなの おしろを つくりなおそう（remake）"},
          {en:"Big means \"large\".", ja:"big は「おおきい」という いみだよ（means）"}
        ]
      }
    ]
  },
  {
    id: "2026-11-20",
    name: "11/20（きん）の テスト",
    keepCase: true,
    setSize: 15,
    stampDays: 4,  /* れんしゅうする ひの かず（スタンプの かず）。そろうと ガチャけん 3まい */
    /* もんだいの じゅんばん（スプレッドシートの ひょうと おなじ）。なければ groups の じゅんばん */
    order: ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December", "rainbow", "breeze", "dust"],
    groups: [
      {
        title: "📅 つきの なまえ",
        words: [
          {w:"January", m:"いちがつ 🎍（1ねんの はじめの つき）"},
          {w:"February", m:"にがつ ☃️（さむい ふゆの つき）"},
          {w:"March", m:"さんがつ 🎎（ひなまつりの つき）"},
          {w:"April", m:"しがつ 🌸（さくらが さく つき）"},
          {w:"May", m:"ごがつ 🎏（こいのぼりの つき）"},
          {w:"June", m:"ろくがつ ☔（つゆの つき）"},
          {w:"July", m:"しちがつ 🎋（たなばたの つき）"},
          {w:"August", m:"はちがつ 🍉（なつやすみの つき）"},
          {w:"September", m:"くがつ 🌕（おつきみの つき）"},
          {w:"October", m:"じゅうがつ 🎃（ハロウィンの つき）"},
          {w:"November", m:"じゅういちがつ 🍁（もみじの つき）"},
          {w:"December", m:"じゅうにがつ 🎄（1ねんの おわりの つき）"}
        ],
        hint: [
          "つきの なまえは さいしょの もじが いつも おおもじ",
          "September・October・November・December は みんな おしりが ber",
          "June と July は どっちも Ju で はじまる"
        ],
        examples: [
          {en:"January is the first month.", ja:"1がつは 1ねんの さいしょの つきだよ（January）"},
          {en:"It is cold in February.", ja:"2がつは さむいよ（February）"},
          {en:"Flowers bloom in March and April.", ja:"3がつと 4がつは はなが さくよ（March・April）"},
          {en:"May is a nice month.", ja:"5がつは いい つきだね（May）"},
          {en:"It is rainy in June.", ja:"6がつは あめが おおいよ（June）"},
          {en:"We swim in July and August.", ja:"7がつと 8がつは およぐよ（July・August）"},
          {en:"The moon is pretty in September.", ja:"9がつは おつきさまが きれいだよ（September）"},
          {en:"We see red leaves in October and November.", ja:"10がつと 11がつは あかい はっぱが みられるよ（October・November）"},
          {en:"Christmas is in December.", ja:"クリスマスは 12がつだよ（December）"}
        ]
      },
      {
        title: "🌈 しぜんの ことば",
        words: [
          {w:"rainbow", m:"にじ 🌈（あめの あとに でる なないろ）"},
          {w:"breeze", m:"そよかぜ 🍃（やさしく ふく かぜ）"},
          {w:"dust", m:"ほこり 🌫️（ちいさな ごみの こな）"}
        ],
        hint: "rainbow は rain（あめ）＋ bow（ゆみ）。あめの あとの ゆみの かたち",
        examples: [
          {en:"I see a rainbow after the rain.", ja:"あめの あとに にじが みえるよ（rainbow）"},
          {en:"A gentle breeze blows the dust away.", ja:"そよかぜが ほこりを ふきとばすよ（breeze・dust）"}
        ]
      }
    ]
  },
  {
    id: "2026-11-13",
    name: "11/13（きん）の テスト",
    lower: true,
    setSize: 15,
    stampDays: 4,  /* れんしゅうする ひの かず（スタンプの かず）。そろうと ガチャけん 3まい */
    /* もんだいの じゅんばん（スプレッドシートの ひょうと おなじ）。なければ groups の じゅんばん */
    order: ["air", "clean", "dirty", "fresh", "breathe", "weather", "storm", "smoke",
            "shape", "objects", "factory", "vehicles", "burned", "release", "pollutes"],
    groups: [
      {
        title: "🌬️ くうきの ことば",
        words: [
          {w:"air", m:"くうき 🌬️（いきを すう ときの みえない もの）"},
          {w:"breathe", m:"いきを する 😮‍💨（くうきを すったり はいたり する）"},
          {w:"fresh", m:"しんせん 🌿（あたらしくて きもちいい こと）"},
          {w:"clean", m:"きれい ✨（よごれて いない こと）"},
          {w:"dirty", m:"きたない 🦠（よごれて いる こと）"}
        ],
        hint: "clean ⇔ dirty は はんたいの ことば",
        examples: [
          {en:"We breathe fresh air.", ja:"しんせんな くうきを すうよ（breathe・fresh・air）"},
          {en:"Clean air is good. Dirty air is bad.", ja:"きれいな くうきは いい。きたない くうきは だめ（clean・dirty）"}
        ]
      },
      {
        title: "🌤️ おてんきの ことば",
        words: [
          {w:"weather", m:"てんき 🌤️（はれや あめの こと）"},
          {w:"storm", m:"あらし ⛈️（つよい かぜと あめ）"}
        ],
        examples: [
          {en:"The weather is bad. A storm is coming!", ja:"てんきが わるいね。あらしが くるよ！（weather・storm）"}
        ]
      },
      {
        title: "💨 よごれの ことば",
        words: [
          {w:"smoke", m:"けむり 💨（ものが もえると でる もの）"},
          {w:"burned", m:"もえた 🔥（ひで もえた こと）"},
          {w:"release", m:"だす 🎈（そとに だす こと）"},
          {w:"pollutes", m:"よごす 🏭💨（くうきや みずを よごす こと）"},
          {w:"factory", m:"こうじょう 🏭（ものを つくる ところ）"},
          {w:"vehicles", m:"のりもの 🚗（くるまや バスの こと）"}
        ],
        examples: [
          {en:"The factory and vehicles release smoke.", ja:"こうじょうや のりものは けむりを だすよ（factory・vehicles・release・smoke）"},
          {en:"Smoke pollutes the air.", ja:"けむりは くうきを よごすよ（pollutes）"},
          {en:"The paper burned.", ja:"かみが もえたよ（burned）"}
        ]
      },
      {
        title: "📦 ものの ことば",
        words: [
          {w:"objects", m:"もの 📦（みえて さわれる もの）"},
          {w:"shape", m:"かたち 🔺（まるや しかくの こと）"}
        ],
        examples: [
          {en:"Look at the objects. What shape are they?", ja:"ものを みてね。どんな かたちかな？（objects・shape）"}
        ]
      }
    ]
  },
  {
    id: "2026-11-06",
    name: "11/6（きん）の テスト",
    lower: true,
    setSize: 15,
    stampDays: 4,  /* れんしゅうする ひの かず（スタンプの かず）。そろうと ガチャけん 3まい */
    /* もんだいの じゅんばん（スプレッドシートの ひょうと おなじ）。なければ groups の じゅんばん */
    order: ["rainy", "windy", "cloudy", "garden", "smile", "gift", "share", "pretty",
            "something", "behind", "moving", "different", "separate", "unripe", "chutney"],
    groups: [
      {
        title: "🌦️ おてんきの ことば",
        words: [
          {w:"rainy", m:"あめの 🌧️（あめが ふって いる）"},
          {w:"windy", m:"かぜが つよい 🌬️（かぜが びゅうびゅう ふく）"},
          {w:"cloudy", m:"くもりの ☁️（くもが いっぱい）"}
        ],
        hint: "rain に y で rainy、wind に y で windy、cloud に y で cloudy",
        examples: [
          {en:"It is rainy today.", ja:"きょうは あめだよ（rainy）"},
          {en:"It is windy and cloudy.", ja:"かぜが つよくて くもりだよ（windy・cloudy）"}
        ]
      },
      {
        title: "😊 やさしさの ことば",
        words: [
          {w:"smile", m:"えがお 😊（にっこり わらう こと）"},
          {w:"gift", m:"プレゼント 🎁（ひとに あげる もの）"},
          {w:"share", m:"わけあう 🍰（みんなで わける こと）"}
        ],
        examples: [
          {en:"I share my gift with a smile.", ja:"にっこり わらって プレゼントを わけるよ（share・gift・smile）"}
        ]
      },
      {
        title: "🌷 にわと たべもの",
        words: [
          {w:"garden", m:"にわ 🌷（はなや やさいを そだてる ところ）"},
          {w:"pretty", m:"かわいい 🌸（きれいで かわいい こと）"},
          {w:"unripe", m:"まだ たべごろじゃない 🍏（まだ あおくて かたい くだもの）"},
          {w:"chutney", m:"チャツネ 🥭（くだものや やさいで つくった ソース）"}
        ],
        hint: "un が つくと『〜じゃない』。ripe（たべごろ）→ unripe（たべごろじゃない）",
        examples: [
          {en:"Pretty flowers grow in the garden.", ja:"にわに かわいい はなが さいて いるよ（pretty・garden）"},
          {en:"This mango is unripe.", ja:"この マンゴーは まだ たべごろじゃないよ（unripe）"},
          {en:"I eat chutney with curry.", ja:"カレーと いっしょに チャツネを たべるよ（chutney）"}
        ]
      },
      {
        title: "🔀 ちがいの ことば",
        words: [
          {w:"different", m:"ちがう 🔀（おなじ じゃない こと）"},
          {w:"separate", m:"わける ✂️（べつべつに する こと）"}
        ],
        examples: [
          {en:"Separate the red and blue balls. They are different colors.", ja:"あかと あおの ボールを わけてね。いろが ちがうよ（separate・different）"}
        ]
      },
      {
        title: "⭐ そのほかの ことば",
        words: [
          {w:"something", m:"なにか ❓（なにかは わからない もの）"},
          {w:"behind", m:"うしろに 🙈（〜の うしろ）"},
          {w:"moving", m:"うごいている 🚗（うごいて いる こと）"}
        ],
        examples: [
          {en:"Something is moving behind the tree!", ja:"きの うしろで なにかが うごいて いるよ！（something・moving・behind）"}
        ]
      }
    ]
  },
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
    ]
  }
];
