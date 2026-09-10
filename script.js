document.addEventListener('DOMContentLoaded', () => {

    // --- データベース ---
    const characterData = {
        'char-mitsuki': {
            group: 'main',
            name: 'ミツキ / Mitsuki',
            catchphrase: '「自分の正体とこの世界の秘密を知りたい。ただそれだけ。」',
            gender: '無性',
            height: '170cm',
            race: '人間',
            personalpronoun: '自分',
            like: '未知のもの、謎解き、読書',
            dislike: 'あまりない',
            abilities: 'ただの人間ではあるが、高い観察力で疑似的に心を読める。',
            bio: '記憶喪失。知的好奇心旺盛で肝が据わっている。<br>感情や痛覚が鈍く、危険なことに首を突っ込みがち。',
            imgThumb: 'images/thumb_mitsuki.png',
            imgNormal: 'images/mitsuki_normal.png',
            relationships: {
                'char-memoire': 'なんだかんだ言えど親切。常に誰かのそばにくっついてるから、孤独を恐れているのだと思う。',
                'char-future': '話が合う。お互い遠慮してないし、無駄のない議論を好むから有意義な話し合いができる。わかりにくいけど自己犠牲的なところがある。',
                'char-teraz': '明るくて健気。人懐っこい。でも、根本には狂気が潜んでいる。',
                'char-adler': '素直になれない子。根は誰よりも優しい。',
                'char-ichthus': '周りをよく見ていて気配り上手。心の奥に強い意志を感じる。',
                'char-regina': '仕事ができて強か。腹の奥で何かよからぬことを企んでいるように見える。'
            },
            qna: {
                alcohol: 'お酒は強いほうだけど、美味しさがわからない。',
                hobby: '読書。新しい知識を見つけたらみんなで実験している。',
                food: '好きな食べ物はこれと言ってないけど、アドラーの料理は美味しいと思う。'
            }
        },
        'char-memoire': {
            group: 'main',
            name: 'メモワール / Memoire',
            catchphrase: '「どれどれ、君にはどんな黒歴史があるのかな～？」',
            gender: '男',
            height: '203cm',
            race: '煤のバケモノ',
            personalpronoun: '僕',
            like: 'ゴシップネタ、散歩、日光浴',
            dislike: '水、一人でじっとしていること',
            abilities: '煤を操る能力。黒くうごめく謎の生命を生み出すことができる。',
            bio: '過去の管理人。マイペースでいたずら好き。執着が強くメンヘラ気質な所も。<br>博識でなんでも教えてくれるが自身については何も語らない。',
            imgThumb: 'images/thumb_memoire.png',
            imgNormal: 'images/memoire_normal.png',
            relationships: {
                'char-mitsuki': 'ミツキ君のことは僕が守ってあげる。記憶の檻の中でのびのびと過ごしてほしいな～。',
                'char-future': 'フュー君はいわゆる面倒くさい女ってタイプだけど、イタズラに乗っかてくれるときは超面白い。あの悪そうな顔がいいよねぇ。',
                'char-teraz': '無邪気で可愛い弟子だよ。 でも、あの子のドジっぷりはちょっと心配になるね～。',
                'char-adler': '誰に対しても喧嘩売っちゃう子。でも怒られたときとか失敗したときのシュンとした顔は可愛いよね～。',
                'char-ichthus': 'イクサス君はいいリアクションしてくれるから、ついついからかいたくなっちゃうんだよね。あの真面目な顔が崩れるとこ、最高！',
                'char-regina': '野心的で見ていて面白いよね。でも、あの人の前だと僕の煤まで透かされてる気がして落ち着かないよ～。',
                'char-scientia':'僕より背が高くてびっくりしちゃった。わがままでスイーツ好きな所をみると子供みたいにも見えてきて面白いよね～。'
            },
            qna: {
                alcohol: '大好きだよ！ 特にワイン。泣き上戸だから、いい感じに酔うとすぐ感情が爆発しちゃうけどね。',
                hobby: '人の日記を盗み見ること……あ、冗談冗談！ 日光浴しながら雑談するのが好きだよ～。',
                food: 'クリーム系の味が好きだな～。スープとかパスタとかシチューとか。'
            }
        },
        'char-future': {
            group: 'main',
            name: 'フューチャー / Future',
            catchphrase: '「理想では世界を救えない。合理的な取捨選択が必要だ。」',
            gender: '女',
            height: '190cm',
            race: '蛸のバケモノ',
            personalpronoun: '私',
            like: '哲学、功利主義、煙草',
            dislike: '感情的な人、非効率なこと',
            abilities: '8本の触手を操る能力。体のあらゆる場所から触手を生やすことができる。',
            bio: '未来の管理人。冷酷なリアリスト。<br>最大多数の利益のために破壊によって戦争を終わらせた元軍人。<br>イクサスとは同郷のいとこ同士。',
            imgThumb: 'images/thumb_future.png',
            imgNormal: 'images/future_normal.png',
            relationships: {
                'char-mitsuki': '話し相手としては理想的だ。ただ、何を考えているのか全然わからん。時々こちらの思考を読まれているように感じる。',
                'char-memoire': '奴は楽観的過ぎる。その割には問題を器用に解決できるのだから、不思議でしょうがない。',
                'char-teraz': '子供は行動が読めない。特にテラスは全く予測不能だ。暴れるなら私を巻き込まないところでやれ。',
                'char-adler': 'シニカリストである反面、私に対しては甘えるところがあるな。姐さんと慕ってくれるのは案外悪くない。',
                'char-ichthus': '色々言いたいことはあるが…奴は人が良すぎる。うんざりするほどだ。',
                'char-regina': '権力にものを言わせて人を支配しようとするあの態度は、見ていて不快だ。',
                'char-scientia':'熾天使のくせに天界の法を守ろうとしない'
            },
            qna: {
                alcohol: 'よく飲んでいる。飲み比べなら負けたことがない。まったく酔わないからな。',
                hobby: '静かな部屋で1本の煙草が完全に灰になるまでの時間を測ること。',
                food: '干した魚が好きだな。昔よく食べていた。'
            }
        },
        'char-teraz': {
            group: 'main',
            name: 'テラス / Teraz',
            catchphrase: '「テラスにお任せください！全部ぶっ壊しちゃいますよ！」',
            gender: '両性',
            height: '160cm',
            race: '骨のバケモノ',
            personalpronoun: 'テラス',
            like: '戦闘、食べること',
            dislike: '閉所、苦いもの、料理すること',
            abilities: '骨を操る能力。一体の飢者髑髏のように大きな骸骨を生み出して戦わせることができる。',
            bio: '天真爛漫なドジっ子。敬語で話すが幼い言動が目立つ。時々倫理観の欠けた発言で場を凍らせてしまうことも。<br>愛想よくふるまっているが基本的にすべてのものに無関心。人間時代の大切な人に似ていることからオルクスに執着している。',
            imgThumb: 'images/thumb_teraz.png',
            imgNormal: 'images/teraz_normal.png',
            relationships: {
                'char-mitsuki': 'ミツキさんは優しい人です！テラスが何かやらかしても怒らないし、いつも手を貸してくれます！',
                'char-memoire': '強くて優しい頼れるししょーです！決闘で一度手合わせをしましたが、ししょーの戦ってる姿に感激しちゃいました！',
                'char-future': 'フューチャーさんはちょっと怖いですけど、記憶の檻の中で一番頼れる人です！ししょーとミツキさんはちょっと適当な所があるので、フューチャーさんがいると安心します！',
                'char-adler': 'アドちゃんは親友です！いつも一緒に遊んでくれます！アドちゃんの料理は世界一です！',
                'char-ichthus': 'イクサスさんは見た目が怖いです…でも話すと思ったよりいい人で面白いですよ！',
                'char-regina': '嫌な大人って感じですよね。あの人の前だとテラスの骨もガタガタしちゃいます！',
                'char-scientia':'喋ってるのに口が全く動いてなくて怖いです…どうやって喋ってるかすごく気になるので一度口をこじ開けてみたいですね…！'
            },
            qna: {
                alcohol: '飲みやすいお酒なら好きですよ！でもお酒に弱いのであまり飲むなと言われています…',
                hobby: '戦うことです！アドちゃんはよく決闘相手になってくれます！',
                food: 'お肉が大好きです！アドちゃんの料理もお肉が多いので嬉しいです！'
            }
        },
        'char-adler': {
            group: 'main',
            name: 'アドラー / Adler',
            catchphrase: '「ボクのスピードについてこれるかな？」',
            gender: '女',
            height: '162cm',
            race: '天使と鷹のバケモノのハーフ(アモノ)',
            personalpronoun: 'ボク',
            like: '勝負、料理、野菜',
            dislike: '上下関係、ルール',
            abilities: '高速移動と素早い反応能力を持つ。長い爪で攻撃もできる。',
            bio: '楽園の大樹所属の情報の運び屋。斜に構えた態度で皮肉をよく言う。<br>スキエンティアの娘であり、彼の「天使とバケモノの交配」実験の過程で生まれたアモノ。天使でもバケモノでもない上に、あの智恵天使の娘なので周りから距離を置かれていた。',
            imgThumb: 'images/thumb_adler.png',
            imgNormal: 'images/adler_normal.png',
            relationships: {
                'char-mitsuki': '何考えてるかよくわかんないけど、誠実で信用できるヤツだよね。',
                'char-memoire': '子供みたいなときと大人みたいなときがある。自由人って感じだよね。',
                'char-future': '姐さんにはいつもよくしてもらってるよ。ボクのわがままも聞いてくれる。',
                'char-teraz': 'ドジでアホだけど、一番面白くていいヤツだね。',
                'char-ichthus': 'イクサスさんは最高の上司ランキングでぶっちぎりの1位だね。マジで頼れる。',
                'char-regina': 'あまり関わったことはないけど、トップに立つカリスマ性は感じるよ。',
                'char-scientia': 'あの人は…なんていうか、怖い。父親だけど、あまり近づきたくない存在だな。尊敬はしてるんだけど。'
            },
            qna: {
                alcohol: 'あー…ボクお酒は一口飲んだだけでダメ。体が受け付けないんだよ。',
                hobby: 'オリジナルの料理を作ること。テラスやミツキによくふるまってるね。',
                food: '野菜が好き。意外ってよく言われる。'
            }
        },
        'char-ichthus': {
            group: 'main',
            name: 'イクサス / Ichthus',
            catchphrase: '「」',
            gender: '男',
            height: '195cm',
            race: '魚のバケモノ',
            personalpronoun: '私、俺',
            like: '世話を焼くこと、睡眠、入浴',
            dislike: '権威、不平等',
            abilities: '優れた聴力と高い耐久力を持つ。水を操る能力もある。',
            bio: '楽園の大樹の副官。博愛主義のロマンチスト。<br>大柄な体格と鋭い目つきとは裏腹に、世話焼きで人を甘やかすのが好き。<br>フューチャーとは同郷のいとこ同士。',
            imgThumb: 'images/thumb_ichthus.png',
            imgNormal: 'images/ichthus_normal.png',
            relationships: {
                'char-mitsuki': 'ミツキは知的好奇心旺盛だな。自身の記憶を探るために、危険を顧みないところは心配している。焦りすぎは禁物だ。',
                'char-memoire': 'イタズラが過ぎることがあるが、少年のような心を忘れない人だ。とはいえ面倒ごとを起こすのはもうやめてくれ。',
                'char-future': 'フューは一人で抱え込みすぎるところがある。もっと周囲に心を開いて頼ってほしい。…俺はが手を貸したいのはやまやまだが、彼女からは拒絶されている。また昔みたいに他愛ない話で盛り上がれる日が来ると願う。',
                'char-teraz': 'テラスはとても純粋で、それ故に危うい。まだ幼いようだから、俺たちが正しい方向に導いてあげないといけないな。',
                'char-adler': '言葉こそ強いが、友人思いで他人をよく見ている。アドラーの鋭い一言がむしろ場を和ませることもあるんだ。',
                'char-regina': '寵愛天使様は見ていて惹きつけられるような強さがある。あっという間に人を懐柔する策略家でもあるな。',
                'char-scientia': 'あの狂人…いやなんでもない、長官は一番相手が難しい。基本自身の研究優先で面倒な仕事をすべて押し付けてくる。その上何かと断れないように仕向けてくるから面倒だ。',
                'char-genius': 'ゲニウスさんはとても真面目で、正義感が強い。彼にとっての正義はカミサマという絶対的な力なのだろう。',
                'char-oculos': 'オルクスさんは基本人前に姿を現すことはない。あまり会ったことがないが、達観していて、何かを悟っているような感じがする。'
            },
            qna: {
                alcohol: '時々飲む。飲みすぎると眠くなってしまうから、普段はほどほどに控えている。',
                hobby: '睡眠グッズを集めることだ。いい睡眠は仕事の効率を上げてくれる。',
                food: '柑橘系の味が好きだ。故郷の特産品でエヴォスという果物がある。華やかな甘みで美味しいんだ。'
            }
        },
        'char-regina': {
            group: 'sub',
            name: 'レギーナ / Regina',
            catchphrase: '「アナタの才能はすばらしい。是非ワタクシと手を組みませんか？」',
            gender: '女',
            height: '180cm',
            race: '熾天使',
            personalpronoun: 'ワタクシ',
            like: 'ギャンブル、酒、スキンシップ',
            dislike: '慎重な考え方、保守派',
            abilities: '目を合わせた相手を操る能力。精神的な支配を行うことができる。',
            bio: '<p>最高位の天使である熾天使「寵愛天使」。神の意志を司る存在。</p>',
            imgThumb: 'images/thumb_regina.png',
            imgNormal: 'images/regina_normal.png',
            relationships: {
                'char-mitsuki': '私の瞳を見つめても正気を保っていられるなんて、面白い。ねぇ、あなた本当に「人間」なのかしら？',
                'char-memoire': '煤の塊さん。彼が昔犯した「大罪」の記録、今度楽園の図書館からこっそり盗み出して読んじゃおうかしら。',
                'char-future': '合理的で冷徹。統治者としては満点だけど、お友達にするには退屈な女ね。もっとスリルを愛しなさいな。',
                'char-teraz': 'あら、可愛い骨のお人形。私の能力が効かないのは、支配するべき「脳」の構造が普通と違うからかしら？',
                'char-adler': 'あの生意気な羽をむしって、私のカゴの中に閉じ込めておけたらどんなに愉快でしょうね。フフ。',
                'char-ichthus': '海の底の大きな魚。彼はいつもすべてを許すような目をしているわね。いつかその偽善を剥ぎ取ってみたいわ。'
            },
            qna: {
                alcohol: 'あら、お酒のない世界なんて地獄だわ！ ブランデーを煽りながら、チェスで賭け事をするのが最高よ。',
                hobby: 'カジノの運営、それと可愛い子たちを口説き落として、私のために泣き狂う姿をコレクションすることかしら？',
                food: 'チーズが好きよ。香りの強いものからマイルドなものまで、幅広く楽しんでいるわ。'
            }
        },
        'char-scientia': {
            group: 'sub',
            name: 'スキエンティア / Scientia',
            catchphrase: '「ボクはこの世のすべてを知り尽くしている。オマエの未知はボクの知るところっつーことだ。」',
            gender: '男',
            height: '230cm',
            race: '熾天使',
            personalpronoun: 'ボク',
            like: '実験、知識、スイーツ',
            dislike: 'バカ',
            abilities: '現在の法則と矛盾しない範囲であらゆる法則を生み出すことができる。',
            bio: '最高位の天使である熾天使「智恵天使」。知識と情報を司る存在。<br>天界の情報機関「楽園の大樹」の長官。自身の研究を最優先するマッドサイエンティストで、独特の感性や言葉遣いで周囲を振り回す。',
            imgThumb: 'images/thumb_scientia.png',
            imgNormal: 'images/scientia_normal.png',
            relationships: {
                'char-mitsuki': '突如記憶の檻に現れたニンゲン…じ・つ・に・！調査しがいのあるサンプルだ！',
                'char-memoire': '煤野郎？たいして面白くもない。ただのメンヘラじゃねーの？',
                'char-future': '蛸女？頑固で融通が利かない。女はおとなしく言うことを聞いてればいいのさ。',
                'char-teraz': '骨ガキ？アイツは究極のバカ。バカは嫌いだ。',
                'char-adler': 'アドラー…アドラントゥスか。もうアイツの実験は終わったからどうでもいい。',
                'char-ichthus': 'お魚チャン？アイツはイイね。有能なうえにボクを前にしても意見できる唯一の部下だ。',
                'char-regina':'レギーナは狡猾で抜け目がない。アイツとの駆け引きは実に愉快だ。',
                'char-genius':'頑固で脳筋な若造。武力だけで解決できると思うなよ～？',
                'char-oculos':'お姫サマはいつもポヤポヤしてるナ。まぁ静かで口出ししてこないのは悪くない。'
            },
            qna: {
                alcohol: '酒～～～？甘いなら何でもいい。アルコールはあってもなくても変わらん。',
                hobby: '研究と実験だね。あとは白黒のものを集めることとか。',
                food: 'スイーツだ！甘味は脳への最高のエネルギー！ボクにとってはもはや呼吸と同義だね。'
            }
        },
        'char-genius': {
            group: 'sub',
            name: 'ゲニウス / Genius',
            catchphrase: '「天界の盾となり、主の剣となろう！」',
            personalpronoun: 'オレ',
            gender: '男',
            height: '155cm',
            race: '熾天使',
            like: '鍛錬',
            dislike: '自由人、辛い物',
            abilities: '光り輝く炎を操る。攻撃、防御、治癒など多様な用途がある。',
            bio: '最高位の天使である熾天使「守護天使」。天界軍「楽園の聖槍」の大将。<br>正義感が強く、カミサマを崇拝している。努力家で鍛錬を怠らないストイックな性格。レイシストでありバケモノを毛嫌いする。',
            imgThumb: 'images/thumb_genius.png',
            imgNormal: 'images/genius_normal.png',
            relationships: {
                'char-mitsuki': '記憶の檻に迷い込んだ人間…天界の脅威になるようなら人間であろうと容赦はしない。',
                'char-memoire': '記憶の管理人の中でも特に危険な人物だ。戦闘力はもちろん何を考えているのか全く読めないところが脅威的だ。',
                'char-future': '記憶の管理人の中ではまだ常識がある。しかし血も涙もない奴だ。',
                'char-teraz': '子供のような外見に騙されてはいけない。戦闘を娯楽とする危険な人物だ。',
                'char-adler': '戦いたいから軍に入らせてくれと頼んできたときは驚いた。戦闘を目的とする者を前線に立たせるつもりはない。',
                'char-ichthus': 'あのスキエンティアに気に入られて一日で副長官に任命されたらしいな。度胸はあるようだ。',
                'char-regina': 'この世で主と一番つながりが深い人物だ。彼女も主のことを支えている。オレも一度でいいから謁見の機会が欲しいな。',
                'char-scientia': '頭の狂った老害だ。ヤツは主のことを実験対象として見ている。熾天使としてあるまじき行為、主への冒涜だ。',
                'char-oculos': 'いつも眠そうにしている。魂を覗く仕事は心身への負担が大きそうだ。'
            },
            qna: {
                alcohol: '基本飲まない。常に万全の状態でいるために、アルコールは避けているんだ。',
                hobby: '趣味というよりルーティーンではあるが、毎日の主への祈りの時間は心を癒してくれる。',
                food: '基本なんでも好きだが、形式ばらない食事が好きだな。みんなでワイワイ食べるのが一番だ。'
            }
        },
        'char-oculos': {
            group: 'sub',
            name: 'オルクス / Oculis',
            catchphrase: '「見えすぎても困っちゃうの。あまり近づかないで。」',
            gender: '女',
            height: '160cm',
            race: '熾天使',
            personalpronoun: 'ワタシ',
            like: '睡眠、静かな所',
            dislike: 'うるさい所',
            abilities: '魂の本質を見透かす能力。相手の心の奥底にあるものを見抜くことができる。',
            bio: '最高位の天使である熾天使「観照天使」。天界の入り口「楽園の神門」の観照者。天界に入る死んだ人間の魂を審査する役割を持つ。<br>無口で仕事以外はほとんど話さない。常にぼんやりしている。',
            imgThumb: 'images/thumb_oculos.png',
            imgNormal: 'images/oculos_normal.png',
            relationships: {
                'char-mitsuki': '空っぽの人間。',
                'char-memoire': 'ふわふわしている…？それ以上は見えない。',
                'char-future': '静かな絶望と少しの寂しさ。不条理に揉まれて疲れている魂。',
                'char-teraz': '…複雑。二つの魂が絡み合っている…？あの子には何かを感じる。',
                'char-adler': '燻っている向上心と無邪気な心。子供でいたいのに、大人にならなきゃいけない葛藤が見える。',
                'char-ichthus': '固い信念と僅かな恐怖。一番大切なものを守るために必死になっているのが見える。',
                'char-regina': '強い野心と狡猾さ。決して美しいとは言えないけど強い魂。',
                'char-scientia': '狂気と好奇心。常に何かを考えているのがわかる。',
                'char-genius': '純粋な正義感と少しの不安。正しいことをしたいけど、うまくいくか不安で仕方ない感じが見える。'
            },
            qna: {
                alcohol: 'お酒はきらい。',
                hobby: '鳥と話すこと。あとは、静かな場所で瞑想すること。',
                food: '特に好きな食べ物はない。食べること自体があまり好きじゃないから。'
            }
        },
        'char-nox': {
            group: 'sub',
            name: 'ノックス / Nox',
            catchphrase: '「オレはオレのために戦う…」',
            gender: '男',
            height: '193cm',
            race: '天使',
            personalpronoun: 'オレ',
            like: '暗所、きのこ',
            dislike: '日光',
            abilities: '影に潜ることができる。',
            bio: '天界軍「楽園の聖槍」の副将。<br>鬱屈で根暗。生活スキルは皆無。顔がいいがその性格のせいで幻滅されがち。<br>ゲニウスやアモとは幼馴染。',
            imgThumb: 'images/thumb_nox.png',
            imgNormal: 'images/nox_normal.png',
            relationships: {
                'char-mitsuki': '人間の中では珍しく、芯のある奴だ。俺はあいつのことを認めてる。',
                'char-memoire': 'あいつは自由すぎる。だが、仲間思いなところは認める。',
            },
            qna: {
                alcohol: '酒…大好きだけど飲みすぎるとゲニウスに怒られる。',
                hobby: '刀を研いでいるときは無心でいられる。',
                food: '辛い食べ物とキノコ料理。'
            }
        }
    };

    // 💡 現在詳細画面で開いているキャラクターのIDを記録する変数
    let currentDetailCharId = null;

    // --- キャラクター一覧（顔アイコン）を自動生成 ---
    const mainGrid = document.getElementById('main-char-grid');
    const subGrid = document.getElementById('sub-char-grid');

    if (mainGrid && subGrid) {
        Object.keys(characterData).forEach(charId => {
            const char = characterData[charId];
            const card = document.createElement('div');
            card.className = 'character-card';
            // 💡 ここで「data-char-id」を付与しています
            card.setAttribute('data-char-id', charId);

            card.innerHTML = `
                <div class="icon-wrapper">
                    <img src="${char.imgThumb}" alt="${char.name}" onerror="this.src='https://via.placeholder.com/100?text=Icon'">
                </div>
                <span class="char-name-label">${char.name.split(' / ')[0]}</span>
            `;

            if (char.group === 'main') {
                mainGrid.appendChild(card);
            } else if (char.group === 'sub') {
                subGrid.appendChild(card);
            }
        });
    }

    // --- 画面切り替えの処理 ---
    const sections = document.querySelectorAll('section');

    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = (section.id === targetId) ? 'block' : 'none';
        });
        window.scrollTo(0, 0);
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.getAttribute('data-target'));
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('back-to-home')) {
            showSection('home-section');
        }
    });

    const backToListBtn = document.querySelector('.back-to-list');
    if (backToListBtn) {
        backToListBtn.addEventListener('click', () => {
            showSection('char-list-section');
        });
    }


    // --- 関係性（他キャラからの印象）を描画する関数 ---
    function renderRelationFromOthers(targetCharId) {
        const container = document.getElementById('detail-relations-list');
        if (!container) return;
        container.innerHTML = ''; // 一旦クリア

        Object.keys(characterData).forEach(speakerId => {
            if (speakerId === targetCharId) return; 

            const speaker = characterData[speakerId];
            if (speaker.relationships && speaker.relationships[targetCharId]) {
                const comment = speaker.relationships[targetCharId];

                const row = document.createElement('div');
                row.className = 'relation-item';
                row.innerHTML = `
                    <div class="relation-speaker">
                        <img src="${speaker.imgThumb}" alt="${speaker.name}" class="relation-speaker-thumb">
                        <span class="relation-speaker-name">${speaker.name.split(' / ')[0]}</span>
                    </div>
                    <div class="relation-bubble">
                        <p>${comment}</p>
                    </div>
                `;
                container.appendChild(row);
            }
        });
    }


    // 💡 詳細画面データを描画するメイン関数（矢印処理からも使い回せるように独立させました）
    function renderCharacterDetail(charId) {
        const data = characterData[charId];
        if (!data) return;

        currentDetailCharId = charId; // 現在開いているIDをしっかり記憶！

        const elName = document.getElementById('detail-name');
        const elCatch = document.getElementById('detail-catchphrase');
        const elGender = document.getElementById('detail-gender');
        const elHeight = document.getElementById('detail-height');
        const elRace = document.getElementById('detail-race');
        const elPersonalPronoun = document.getElementById('detail-personal-pronoun');
        const elBio = document.getElementById('detail-bio');
        const elLike = document.getElementById('detail-like');
        const elDislike = document.getElementById('detail-dislike');
        const elAbilities = document.getElementById('detail-abilities');

        if (elName) elName.textContent = data.name;
        if (elCatch) elCatch.textContent = data.catchphrase;
        if (elGender) elGender.textContent = data.gender;
        if (elHeight) elHeight.textContent = data.height;
        if (elRace) elRace.textContent = data.race;
        if (elPersonalPronoun) elPersonalPronoun.textContent = data.personalpronoun;
        if (elBio) elBio.innerHTML = data.bio;
        if (elLike) elLike.textContent = data.like;
        if (elDislike) elDislike.textContent = data.dislike;
        if (elAbilities) elAbilities.textContent = data.abilities;

        const detailImg = document.getElementById('detail-img');
        if (detailImg) detailImg.src = data.imgNormal;

        const expButtons = document.querySelectorAll('.exp-btn');
        if (expButtons.length >= 2) {
            expButtons[0].setAttribute('data-face', data.imgNormal);
            expButtons[1].setAttribute('data-face', data.imgSmile);
            expButtons.forEach(btn => btn.classList.remove('active'));
            expButtons[0].classList.add('active');
        }

        const bars = document.querySelectorAll('.bar-fill');
        if (bars.length >= 3) {
            bars[0].style.width = '0%';
            bars[1].style.width = '0%';
            bars[2].style.width = '0%';
        }

        renderRelationFromOthers(charId);
        showSection('char-detail-section');

        setTimeout(() => {
            if (bars.length >= 3) {
                bars[0].style.width = data.status.int;
                bars[1].style.width = data.status.spd;
                bars[2].style.width = data.status.str;
            }
        }, 100);
    }


    // --- 顔アイコン（カード）がクリックされたときの処理 ---
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.character-card');
        if (!card) return;

        // 💡 取得する属性名を生成ロジックと合わせて「data-char-id」に変更！
        const charId = card.getAttribute('data-char-id');
        if (charId) {
            renderCharacterDetail(charId);
        }
    });


    // 💡 --- 【修正】キャラクター左右切り替えボタンの処理 ---
    const prevBtn = document.getElementById('prev-char-btn');
    const nextBtn = document.getElementById('next-char-btn');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => switchCharacter('prev'));
        nextBtn.addEventListener('click', () => switchCharacter('next'));
    }

    function switchCharacter(direction) {
        if (!currentDetailCharId) return;

        // データベース（characterData）に登録されている順番でID配列を作成
        const charIds = Object.keys(characterData);
        if (charIds.length <= 1) return;

        let currentIndex = charIds.indexOf(currentDetailCharId);
        if (currentIndex === -1) return;

        let nextIndex;
        if (direction === 'next') {
            nextIndex = currentIndex + 1;
            if (nextIndex >= charIds.length) nextIndex = 0; // ループして最初へ
        } else if (direction === 'prev') {
            nextIndex = currentIndex - 1;
            if (nextIndex < 0) nextIndex = charIds.length - 1; // ループして最後へ
        }

        const nextCharId = charIds[nextIndex];
        // 次のキャラのデータを描画
        renderCharacterDetail(nextCharId);
    }


    // --- 表情差分切り替え ---
    const expButtons = document.querySelectorAll('.exp-btn');
    const detailImg = document.getElementById('detail-img');

    expButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            expButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const newImgPath = e.target.getAttribute('data-face');
            if (detailImg) {
                detailImg.style.opacity = 0;
                setTimeout(() => {
                    detailImg.src = newImgPath;
                    detailImg.style.opacity = 1;
                }, 100);
            }
        });
    });


    // --- 「みんなに質問（Q&A）」画面の自動生成 ---
    function initQnAbuilder() {
        const alcoholContainer = document.getElementById('qa-alcohol-list');
        const hobbyContainer = document.getElementById('qa-hobby-list');
        const foodContainer = document.getElementById('qa-food-list');

        if (!alcoholContainer || !hobbyContainer || !foodContainer) return;

        alcoholContainer.innerHTML = '';
        hobbyContainer.innerHTML = '';
        foodContainer.innerHTML = '';

        Object.keys(characterData).forEach(charId => {
            const char = characterData[charId];
            
            if (char.qna) {
                const item1 = document.createElement('div');
                item1.className = 'qa-answer-box';
                item1.innerHTML = `
                    <div class="qa-responder">
                        <img src="${char.imgThumb}" alt="${char.name}">
                        <span>${char.name.split(' / ')[0]}</span>
                    </div>
                    <div class="qa-text"><p>${char.qna.alcohol || '（未回答）'}</p></div>
                `;
                alcoholContainer.appendChild(item1);

                const item2 = document.createElement('div');
                item2.className = 'qa-answer-box';
                item2.innerHTML = `
                    <div class="qa-responder">
                        <img src="${char.imgThumb}" alt="${char.name}">
                        <span>${char.name.split(' / ')[0]}</span>
                    </div>
                    <div class="qa-text"><p>${char.qna.hobby || '（未回答）'}</p></div>
                `;
                hobbyContainer.appendChild(item2);

                const item3 = document.createElement('div');
                item3.className = 'qa-answer-box';
                item3.innerHTML = `
                    <div class="qa-responder">
                        <img src="${char.imgThumb}" alt="${char.name}">
                        <span>${char.name.split(' / ')[0]}</span>
                    </div>
                    <div class="qa-text"><p>${char.qna.food || '（未回答）'}</p></div>
                `;
                foodContainer.appendChild(item3);
            }
        });
    }

    const qaNavBtn = document.querySelector('.nav-btn[data-target="char-qa-section"]');
    if (qaNavBtn) {
        qaNavBtn.addEventListener('click', () => {
            initQnAbuilder();
        });
    }

});