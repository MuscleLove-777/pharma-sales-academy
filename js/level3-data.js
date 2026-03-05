/* ============================================
   Level 3: アプローチと面談技術
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "アプローチと面談技術",
    icon: "🗣️",
    description: "医師へのアプローチ方法、面談の組み立て、第一印象の作り方を習得する",
    modules: [
        {
            id: 301,
            title: "医療機関へのアクセス",
            duration: "12分",
            content: `
<h2>医療機関タイプ別のアクセス方法</h2>
<p>医療機関のタイプによって、MRのアクセス方法は大きく異なります。</p>

<h3>大学病院・大規模病院</h3>
<ul>
<li><strong>アクセス難易度:</strong> 高い。訪問規制が厳しい</li>
<li><strong>主なアプローチ:</strong> 医局訪問、外来前の朝駆け、説明会の開催</li>
<li><strong>注意点:</strong> 訪問可能時間帯が限られる（昼休みのみ等）。アポイント必須の場合も</li>
<li><strong>キーパーソン:</strong> 教授・准教授（方針決定者）、医局長（実務キーマン）、薬剤部長</li>
</ul>

<h3>地域中核病院</h3>
<ul>
<li><strong>アクセス難易度:</strong> 中程度</li>
<li><strong>主なアプローチ:</strong> 外来待ち、昼の説明会、薬剤部経由</li>
<li><strong>キーパーソン:</strong> 部長クラス（処方方針決定者）、病棟薬剤師</li>
</ul>

<h3>クリニック（開業医）</h3>
<ul>
<li><strong>アクセス難易度:</strong> 比較的容易だが、院長の好みに左右される</li>
<li><strong>主なアプローチ:</strong> 診療終了後の面会、昼休み訪問</li>
<li><strong>キーパーソン:</strong> 院長（＝処方決定者）、受付スタッフ（ゲートキーパー）</li>
</ul>

<h2>ゲートキーパーとの関係構築</h2>
<p><strong>ゲートキーパー</strong>（受付、看護師、秘書等）は医師への面会を左右する重要な存在です。</p>

<div class="info-box success">
<div class="info-box-title">ゲートキーパー対応のポイント</div>
<ol>
<li>名前を覚え、名前で呼ぶ</li>
<li>丁寧で簡潔なコミュニケーション</li>
<li>訪問の目的を明確に伝える</li>
<li>待ち時間に不平を言わない</li>
<li>施設のルール（訪問時間、アポイント等）を厳守</li>
<li>小さな情報（医師のスケジュール等）に感謝を示す</li>
</ol>
</div>

<h2>COVID-19後のアクセス変化</h2>
<p>パンデミック以降、医療機関のMR訪問規制は大きく変化しました。</p>
<ul>
<li><strong>完全予約制</strong>の施設が増加（飛び込み訪問不可）</li>
<li><strong>面会時間の制限</strong>（5分以内等）</li>
<li><strong>Web面談</strong>の許容・推奨</li>
<li><strong>MR訪問不可日</strong>の設定（週1〜2日はMR受付しない等）</li>
<li>一部施設では訪問規制が緩和されつつあるが、完全には元に戻っていない</li>
</ul>
            `,
            quiz: [
                { id: "q301_1", type: "choice", question: "クリニック（開業医）へのアクセスで最も重要なゲートキーパーは誰ですか？", options: ["薬剤部長", "看護部長", "受付スタッフ", "MSL"], answer: 2, explanation: "クリニックでは受付スタッフがゲートキーパーとして医師への面会を左右する重要な存在です。" },
                { id: "q301_2", type: "choice", question: "COVID-19後のMR訪問環境の変化として正しくないものはどれですか？", options: ["完全予約制の施設が増加", "面会時間の制限", "訪問規制が全て撤廃された", "Web面談の許容"], answer: 2, explanation: "COVID-19後も訪問規制は完全には撤廃されておらず、予約制や時間制限が継続している施設が多いです。" },
                { id: "q301_3", type: "choice", question: "大学病院でのアクセスで正しいのはどれですか？", options: ["飛び込み訪問が最も効果的", "訪問規制が最も厳しく、アポイントが必要な場合が多い", "MSとの同行訪問が義務", "土日の訪問が推奨される"], answer: 1, explanation: "大学病院はアクセス難易度が最も高く、訪問可能時間帯が限られ、アポイントが必須の場合も多いです。" }
            ]
        },
        {
            id: 302,
            title: "面談の組み立て方",
            duration: "15分",
            content: `
<h2>面談の基本構造（AIDCA モデル）</h2>
<p>限られた面談時間で最大の効果を得るため、<strong>構造化された面談</strong>が重要です。</p>

<div class="steps">
<div class="step"><div class="step-num">A</div><div class="step-content"><strong>Attention（注意喚起）- 30秒</strong>挨拶と、医師の関心を引くオープニング。「先日の学会で○○のデータが発表されましたが…」など。</div></div>
<div class="step"><div class="step-num">I</div><div class="step-content"><strong>Interest（興味喚起）- 1分</strong>医師の課題やニーズに結びつける。「先生がおっしゃっていた○○の課題に関連して…」</div></div>
<div class="step"><div class="step-num">D</div><div class="step-content"><strong>Desire（欲求喚起）- 2〜3分</strong>自社製品の価値をエビデンスとともに提示。FAB話法で患者ベネフィットを明確に。</div></div>
<div class="step"><div class="step-num">C</div><div class="step-content"><strong>Conviction（確信）- 1分</strong>裏付けとなるデータや症例を提示し、信頼性を強化。</div></div>
<div class="step"><div class="step-num">A</div><div class="step-content"><strong>Action（行動促進）- 30秒</strong>次のステップを提案。「ぜひ次の新規患者さんでお試しいただけませんか」</div></div>
</div>

<h2>面談時間別の戦略</h2>
<table>
<tr><th>面談時間</th><th>戦略</th><th>伝えるべきこと</th></tr>
<tr><td><strong>30秒〜1分</strong><br>（廊下面談）</td><td>ワンメッセージ</td><td>最も伝えたい1つのキーメッセージのみ</td></tr>
<tr><td><strong>3〜5分</strong><br>（標準面談）</td><td>AIDCA型</td><td>キーメッセージ+エビデンス1つ+クロージング</td></tr>
<tr><td><strong>10〜15分</strong><br>（説明会）</td><td>プレゼン型</td><td>疾患概要→製品情報→エビデンス→まとめ</td></tr>
<tr><td><strong>30分以上</strong><br>（アポイント面談）</td><td>対話型</td><td>深い議論、質疑応答、症例ディスカッション</td></tr>
</table>

<h2>オープニングの技術</h2>
<p>最初の30秒で医師の<strong>「聞く姿勢」</strong>を作れるかが面談の成否を分けます。</p>

<div class="scenario-box">
<div class="scenario-box-title">良いオープニングの例</div>
<p class="bad">NG:「今日は○○薬についてご説明に参りました」（一方的）</p>
<p class="good">OK:「先日、先生が○○の患者さんで悩まれていたとお伺いしました。それに関連する新しいデータをお持ちしました」（医師のニーズ起点）</p>
<p class="good">OK:「先週の○○学会で、ガイドラインの改訂案が議論されていましたが、ご存知でしたか？」（最新情報で関心を引く）</p>
</div>

<h2>質問力を磨く</h2>
<p>優れたMRは「話す力」以上に<strong>「質問する力」</strong>を持っています。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>オープンクエスチョン</h4>
<p>「○○についてどうお考えですか？」</p>
<p>→ 医師の考えや課題を引き出す</p>
</div>
<div class="compare-card">
<h4>クローズドクエスチョン</h4>
<p>「○○をお使いになったことは？」</p>
<p>→ 具体的な事実を確認する</p>
</div>
</div>
            `,
            quiz: [
                { id: "q302_1", type: "choice", question: "AIDCAモデルで最も多くの時間を割くべきフェーズはどれですか？", options: ["Attention（注意喚起）", "Interest（興味喚起）", "Desire（欲求喚起）", "Action（行動促進）"], answer: 2, explanation: "Desire（欲求喚起）に2〜3分を割き、自社製品の価値をエビデンスとともに提示することが面談の核心部分です。" },
                { id: "q302_2", type: "choice", question: "30秒〜1分の廊下面談で取るべき戦略はどれですか？", options: ["AIDCAの全ステップを早口で伝える", "最も伝えたい1つのキーメッセージのみ伝える", "資材を渡して終わる", "次回のアポイントのみ取る"], answer: 1, explanation: "30秒〜1分の短い面談では、ワンメッセージ戦略で最も伝えたい1つのキーメッセージのみを明確に伝えます。" },
                { id: "q302_3", type: "choice", question: "良いオープニングの特徴として最も適切なのはどれですか？", options: ["自社製品の特徴から始める", "競合品の弱点から始める", "医師のニーズや関心事から始める", "薬価の説明から始める"], answer: 2, explanation: "医師のニーズや関心事を起点にしたオープニングが最も効果的です。一方的な製品説明からの開始は避けましょう。" }
            ]
        },
        {
            id: 303,
            title: "ランチョンセミナーの運営",
            duration: "10分",
            content: `
<h2>ランチョンセミナー（昼の説明会）</h2>
<p>ランチョンセミナーは<strong>医師の昼休みに弁当を提供しながら製品説明を行う</strong>MRの重要な活動です。通常の面談より長い時間（10〜15分）をいただけるため、効果的な情報提供の機会です。</p>

<h2>事前準備</h2>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>2〜3週間前：日程調整</strong>医局秘書や薬剤部を通じて日程を確保。他社とのバッティングを避ける。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>1週間前：内容確定</strong>プレゼン内容の確定と資材準備。参加予定人数の確認。弁当の手配（アレルギー確認）。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>前日：最終確認</strong>プレゼンのリハーサル。機材（PC、プロジェクター）の動作確認。弁当の最終発注。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>当日：早めの到着</strong>開始30分前には到着。会場セッティング、弁当配置、機材接続。</div></div>
</div>

<h2>プレゼンテーションの構成（15分版）</h2>
<table>
<tr><th>パート</th><th>時間</th><th>内容</th></tr>
<tr><td>導入</td><td>2分</td><td>疾患の背景・課題提示</td></tr>
<tr><td>製品紹介</td><td>3分</td><td>作用機序、適応症、用法・用量</td></tr>
<tr><td>エビデンス</td><td>5分</td><td>臨床試験結果（主要評価項目、安全性）</td></tr>
<tr><td>まとめ</td><td>2分</td><td>キーメッセージの要約、処方のポイント</td></tr>
<tr><td>質疑応答</td><td>3分</td><td>医師からの質問に回答</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">成功するプレゼンのコツ</div>
<ul>
<li><strong>スライドは1枚1メッセージ:</strong> 情報を詰め込みすぎない</li>
<li><strong>データはビジュアルで:</strong> グラフ・図表を活用し、数字の羅列は避ける</li>
<li><strong>結論から先に:</strong> 忙しい医師はポイントを早く知りたい</li>
<li><strong>症例ベースで語る:</strong> 「こんな患者さんに効果的です」というストーリー</li>
<li><strong>質疑応答を恐れない:</strong> 質問は医師の関心の表れ。答えられない質問は「確認してご報告します」</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">弁当の注意点</div>
弁当代は公正競争規約の範囲内（1人あたりの上限あり）。豪華すぎる弁当はコンプライアンスリスク。内容より「情報の質」で勝負しましょう。
</div>
            `,
            quiz: [
                { id: "q303_1", type: "choice", question: "ランチョンセミナーの日程調整は何週間前から行うのが理想ですか？", options: ["前日", "1週間前", "2〜3週間前", "2ヶ月前"], answer: 2, explanation: "2〜3週間前から日程調整を行い、他社とのバッティングを避けて確実に枠を確保します。" },
                { id: "q303_2", type: "choice", question: "15分のプレゼンで最も時間を割くべきパートはどれですか？", options: ["導入", "製品紹介", "エビデンス", "まとめ"], answer: 2, explanation: "エビデンスに5分を割き、臨床試験結果や安全性データを丁寧に説明することが最も重要です。" },
                { id: "q303_3", type: "choice", question: "質疑応答で答えられない質問が出た場合の適切な対応はどれですか？", options: ["適当に回答する", "質問を無視して次に進む", "「確認してご報告します」と伝える", "「それは競合品の話です」とかわす"], answer: 2, explanation: "答えられない質問には正直に「確認してご報告します」と伝え、必ずフォローアップすることが信頼構築につながります。" }
            ]
        },
        {
            id: 304,
            title: "オブジェクションハンドリング",
            duration: "12分",
            content: `
<h2>オブジェクション（反論・異議）への対応</h2>
<p>医師からの反論や懸念は、<strong>処方を検討している証拠</strong>でもあります。適切に対応できれば、むしろ信頼を深めるチャンスです。</p>

<h2>よくあるオブジェクションと対応法</h2>

<div class="scenario-box">
<div class="scenario-box-title">「今使っている薬で十分だよ」（現状維持バイアス）</div>
<p class="bad">NG:「でも○○薬より優れているんです」（否定から入る）</p>
<p class="good">OK:「先生の治療で良好な結果を出されていると思います。ただ、○○の点でお困りの患者さんがいらっしゃいましたら、当薬が選択肢になるかもしれません」</p>
</div>

<div class="scenario-box">
<div class="scenario-box-title">「副作用が心配だ」（安全性懸念）</div>
<p class="bad">NG:「副作用はほとんどありません」（曖昧な否定）</p>
<p class="good">OK:「ご懸念はごもっともです。臨床試験では○○の副作用が○%で報告されていますが、多くは軽度で投与継続可能でした。安全性モニタリングのポイントをご説明させてください」</p>
</div>

<div class="scenario-box">
<div class="scenario-box-title">「薬価が高い」（経済性懸念）</div>
<p class="bad">NG:「高いですが効きます」（価格の正当化のみ）</p>
<p class="good">OK:「確かに薬価は○○円ですが、入院日数の短縮や有害事象の減少を考慮すると、トータルコストでは○○の報告があります。費用対効果のデータをお示しします」</p>
</div>

<div class="scenario-box">
<div class="scenario-box-title">「症例数が少ない」（エビデンス不足懸念）</div>
<p class="bad">NG:「十分な症例数です」（主観的反論）</p>
<p class="good">OK:「現在の承認時データに加えて、市販後の大規模調査が進行中です。現時点の○○名のデータでは○○が確認されています。新しいデータが出次第すぐにお届けします」</p>
</div>

<h2>LAER（ラーメソッド）</h2>
<p>オブジェクション対応の基本フレームワーク：</p>
<div class="steps">
<div class="step"><div class="step-num">L</div><div class="step-content"><strong>Listen（傾聴）</strong>医師の懸念を最後まで聴く。遮らない。うなずきやアイコンタクトで傾聴姿勢を示す。</div></div>
<div class="step"><div class="step-num">A</div><div class="step-content"><strong>Acknowledge（受容）</strong>懸念を受け止める。「おっしゃる通り、○○は重要なポイントです」</div></div>
<div class="step"><div class="step-num">E</div><div class="step-content"><strong>Explore（掘り下げ）</strong>懸念の背景を探る。「具体的にどのような患者さんで心配されていますか？」</div></div>
<div class="step"><div class="step-num">R</div><div class="step-content"><strong>Respond（回答）</strong>エビデンスに基づいた適切な回答を提示。</div></div>
</div>

<div class="info-box tip">
<div class="info-box-title">心構え</div>
オブジェクションは「拒否」ではなく「情報を求めている」サインです。反論と受け取って防御的にならず、医師の本当の懸念を理解し、適切な情報で応えましょう。
</div>
            `,
            quiz: [
                { id: "q304_1", type: "choice", question: "LAERメソッドの最初のステップはどれですか？", options: ["Acknowledge（受容）", "Listen（傾聴）", "Explore（掘り下げ）", "Respond（回答）"], answer: 1, explanation: "LAERメソッドの最初のステップはListen（傾聴）です。医師の懸念を最後まで聴くことから始めます。" },
                { id: "q304_2", type: "choice", question: "「副作用が心配だ」という反論への適切な対応はどれですか？", options: ["副作用はほとんどないと説明する", "臨床試験での具体的なデータを示し、モニタリングポイントを説明する", "話題を変える", "他の薬はもっと副作用が多いと伝える"], answer: 1, explanation: "具体的な臨床試験データ（発生率、重篤度、対処法）を示し、安全性モニタリングのポイントを説明するのが適切です。" },
                { id: "q304_3", type: "choice", question: "オブジェクションの本質的な意味はどれですか？", options: ["処方を完全に拒否している", "MRへの不信感", "情報を求めているサイン", "競合品への忠誠"], answer: 2, explanation: "オブジェクションは「拒否」ではなく「情報を求めている」サインです。適切に対応すれば信頼を深めるチャンスになります。" }
            ]
        }
    ]
};
