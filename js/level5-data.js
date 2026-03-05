/* ============================================
   Level 5: 関係構築とフォローアップ
   ============================================ */
const LEVEL5_DATA = {
    id: 5,
    title: "関係構築とフォローアップ",
    icon: "🤝",
    description: "医師・薬剤師との長期的な信頼関係を構築し、継続処方につなげるフォローアップ技術を学ぶ",
    modules: [
        {
            id: 501,
            title: "医師との信頼関係構築",
            duration: "15分",
            content: `
<h2>信頼されるMRになるために</h2>
<p>医師は1日に多くのMRと面会しますが、<strong>信頼して相談できるMR</strong>は限られています。製品情報の提供だけでなく、医師の課題解決パートナーとなることが、長期的な関係構築の鍵です。</p>

<h3>信頼関係の4つの構成要素</h3>
<div class="card-grid">
<div class="card"><h4>🎯 専門性</h4><p>疾患・治療領域の深い知識。「この領域ならこのMRに聞こう」と思われる存在になる。</p></div>
<div class="card"><h4>🤝 誠実性</h4><p>都合の悪い情報も隠さない。自社品の限界も正直に伝える。副作用報告にも迅速に対応する。</p></div>
<div class="card"><h4>⏰ 信頼性</h4><p>約束を必ず守る。依頼された資料は期限内に届ける。レスポンスが早い。</p></div>
<div class="card"><h4>💡 貢献度</h4><p>医師の臨床課題を理解し、情報提供を通じて解決に貢献する。処方実績データの提供、地域連携の支援など。</p></div>
</div>

<h3>医師タイプ別アプローチ戦略</h3>
<table>
<tr><th>タイプ</th><th>特徴</th><th>効果的なアプローチ</th></tr>
<tr><td><strong>エビデンス重視型</strong></td><td>データや論文を重視。感覚的な話を嫌う</td><td>最新の臨床試験結果、メタアナリシス、サブグループ解析を準備</td></tr>
<tr><td><strong>経験重視型</strong></td><td>自身の臨床経験を重視。他医師の使用感を知りたがる</td><td>症例報告、他院の処方状況、使用感フィードバックを共有</td></tr>
<tr><td><strong>効率重視型</strong></td><td>忙しく、短時間で要点を知りたい</td><td>1分以内のキーメッセージ。資料は要点のみマーカー。フォロー資料を後で送付</td></tr>
<tr><td><strong>関係重視型</strong></td><td>人間関係を大切にする。雑談も重要視</td><td>定期的な訪問。医師の関心事（趣味・学会活動）を把握し会話に織り交ぜる</td></tr>
</table>

<h3>信頼を損なう行動（NG行動）</h3>
<div class="highlight-box">
<ul>
<li><strong>誇大表現</strong>：エビデンスを超えた効果の主張</li>
<li><strong>競合品の不当な批判</strong>：事実に基づかない他社品のネガティブキャンペーン</li>
<li><strong>約束の不履行</strong>：「調べて回答します」と言って放置</li>
<li><strong>的外れな情報提供</strong>：医師の専門外・関心外の情報を繰り返し提供</li>
<li><strong>強引なクロージング</strong>：処方を過度にプッシュする</li>
</ul>
</div>

<h3>信頼構築の実践ステップ</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>医師のニーズを把握する</strong>診療科目、専門分野、研究テーマ、臨床上の課題をリサーチ。初回面談で関心領域を確認する。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>カスタマイズした情報提供</strong>医師のニーズに合わせた資料・データを準備。「先生の患者さんに合う」視点で情報を整理する。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>小さな約束を確実に守る</strong>「資料を明日までにお持ちします」→ 必ず実行。信頼は小さな実績の積み重ね。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>継続的な価値提供</strong>訪問のたびに新しい情報や気づきを提供。「このMRが来ると有益」と思わせる。</div></div>
</div>
`,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "医師との信頼関係を構成する要素として、最も適切でないものはどれですか？",
                    options: [
                        "疾患領域の専門的知識",
                        "自社品のメリットのみを伝える営業力",
                        "約束を必ず守る信頼性",
                        "医師の課題解決への貢献"
                    ],
                    answer: 1,
                    explanation: "自社品のメリットのみを強調することは誠実性に欠け、信頼を損ないます。都合の悪い情報（副作用・限界）も正直に伝える誠実性が信頼関係の重要な構成要素です。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "エビデンス重視型の医師へのアプローチとして最も効果的なものはどれですか？",
                    options: [
                        "他院の処方状況や使用感フィードバックを共有する",
                        "雑談を交えて親密な関係を築く",
                        "最新の臨床試験結果やメタアナリシスを提示する",
                        "1分以内のキーメッセージに絞って伝える"
                    ],
                    answer: 2,
                    explanation: "エビデンス重視型の医師は、データや論文を重視し感覚的な話を好みません。最新の臨床試験結果、メタアナリシス、サブグループ解析などのエビデンスを準備して提示することが最も効果的です。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "信頼を損なうNG行動として、最も該当しないものはどれですか？",
                    options: [
                        "自社品の副作用情報も正直に伝える",
                        "エビデンスを超えた効果を主張する",
                        "依頼された資料の回答を放置する",
                        "医師の関心外の情報を繰り返し提供する"
                    ],
                    answer: 0,
                    explanation: "副作用情報を正直に伝えることは誠実性の表れであり、信頼構築に寄与します。それ以外はすべて信頼を損なうNG行動です。"
                }
            ]
        },
        {
            id: 502,
            title: "効果的なフォローアップ戦略",
            duration: "15分",
            content: `
<h2>面談後のフォローアップが成果を決める</h2>
<p>MR活動において、面談そのものと同じくらい重要なのが<strong>フォローアップ</strong>です。面談で得た情報を活かし、次のアクションにつなげることで、処方採用・継続処方を実現します。</p>

<h3>フォローアップの基本フレームワーク「PDCA+R」</h3>
<div class="card-grid">
<div class="card"><h4>📋 Plan（計画）</h4><p>面談で得た情報をもとに、次回の訪問計画を立てる。何を、いつ、どのように伝えるか。</p></div>
<div class="card"><h4>🏃 Do（実行）</h4><p>計画に基づき、資料送付・次回面談を実行。約束したアクションを期限内に完了する。</p></div>
<div class="card"><h4>✅ Check（確認）</h4><p>フォローアップの効果を確認。処方データの変化、医師の反応を評価する。</p></div>
<div class="card"><h4>🔄 Act（改善）</h4><p>効果が不十分なら、アプローチ方法を見直す。成功パターンを他施設にも展開する。</p></div>
<div class="card"><h4>📝 Record（記録）</h4><p>すべての活動をCRMに記録。次回訪問時の参考情報として蓄積する。</p></div>
</div>

<h3>タイミング別フォローアップアクション</h3>
<table>
<tr><th>タイミング</th><th>アクション</th><th>目的</th></tr>
<tr><td><strong>面談当日</strong></td><td>面談記録の作成。依頼事項の整理。お礼メール送信（必要に応じて）</td><td>情報の正確な記録と迅速な対応</td></tr>
<tr><td><strong>1-3日以内</strong></td><td>依頼された資料・情報の提供。追加質問への回答</td><td>約束の迅速な履行で信頼獲得</td></tr>
<tr><td><strong>1-2週間後</strong></td><td>提供情報の確認フォロー。処方状況の変化確認</td><td>情報の理解促進と処方行動の確認</td></tr>
<tr><td><strong>1ヶ月後</strong></td><td>新しいエビデンスの提供。処方後のフィードバック収集</td><td>継続的な価値提供と処方維持</td></tr>
</table>

<h3>CRM活用のポイント</h3>
<div class="highlight-box">
<p><strong>SFA/CRMに記録すべき情報：</strong></p>
<ul>
<li><strong>面談内容</strong>：話題、医師の反応（ポジティブ/ネガティブ）、質問事項</li>
<li><strong>次回アクション</strong>：何を、いつまでに、どのように対応するか</li>
<li><strong>医師の関心事</strong>：研究テーマ、学会発表予定、臨床上の悩み</li>
<li><strong>処方状況</strong>：新規採用、スイッチ、処方量の変化とその理由</li>
<li><strong>競合情報</strong>：他社MRの活動状況、競合品の評判</li>
</ul>
</div>

<h3>フォローアップメールの書き方</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>件名</strong>具体的で分かりやすく。「〇〇先生へ：本日ご質問いただいた△△の件」</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>冒頭</strong>面談のお礼と要件を簡潔に。「本日はお忙しい中、お時間をいただきありがとうございました。」</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>本文</strong>依頼事項への回答、追加資料の添付。箇条書きで読みやすく整理する。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>次のアクション</strong>「来週改めてお伺いし、詳しくご説明させていただきます」など、次回の接点を明示する。</div></div>
</div>
`,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "フォローアップの「PDCA+R」フレームワークにおいて、「R」は何を指しますか？",
                    options: [
                        "Review（見直し）",
                        "Record（記録）",
                        "Repeat（繰り返し）",
                        "Result（結果）"
                    ],
                    answer: 1,
                    explanation: "PDCA+Rの「R」はRecord（記録）です。すべての活動をCRMに記録し、次回訪問時の参考情報として蓄積することが重要です。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "面談後1-3日以内に行うべきフォローアップアクションとして最も適切なものはどれですか？",
                    options: [
                        "新しいエビデンスの提供",
                        "処方状況の変化確認",
                        "依頼された資料・情報の提供",
                        "処方後のフィードバック収集"
                    ],
                    answer: 2,
                    explanation: "1-3日以内には、面談時に依頼された資料や情報を迅速に提供することが最優先です。約束の迅速な履行が信頼獲得につながります。"
                },
                {
                    id: "q502_3",
                    type: "fill",
                    question: "CRMに記録すべき「次回アクション」の3つの要素は「何を」「いつまでに」「＿＿＿」ですか？",
                    answer: "どのように",
                    explanation: "次回アクションは「何を」「いつまでに」「どのように」対応するかを明確に記録することで、計画的なフォローアップが可能になります。"
                }
            ]
        },
        {
            id: 503,
            title: "薬剤師・コメディカルとの連携",
            duration: "15分",
            content: `
<h2>医師だけではない！多職種連携の重要性</h2>
<p>処方決定権は医師にありますが、<strong>薬剤師やコメディカルスタッフ</strong>も処方に大きな影響を与えます。特に病院では薬事委員会での採用決定、調剤薬局では疑義照会や後発品変更など、多くの場面で薬剤師が関与します。</p>

<h3>薬剤師との関係構築</h3>
<h4>病院薬剤師へのアプローチ</h4>
<table>
<tr><th>対象</th><th>役割・影響力</th><th>提供すべき情報</th></tr>
<tr><td><strong>薬剤部長</strong></td><td>薬事委員会での発言権。採用・削除の決定に影響</td><td>薬価情報、後発品との比較、経済性データ</td></tr>
<tr><td><strong>病棟薬剤師</strong></td><td>処方提案（プロトコルに基づく）。医師への情報提供</td><td>用法用量、相互作用、副作用モニタリング情報</td></tr>
<tr><td><strong>DI室担当</strong></td><td>問い合わせ対応。院内情報の集約・発信</td><td>製品FAQ、最新の安全性情報、適正使用ガイド</td></tr>
</table>

<h4>調剤薬局薬剤師へのアプローチ</h4>
<div class="card-grid">
<div class="card"><h4>📋 処方箋応需の実態</h4><p>どの医療機関からの処方箋が多いか把握。主要な処方医を間接的に知る手がかりになる。</p></div>
<div class="card"><h4>💊 服薬指導への貢献</h4><p>患者向け説明資料、服薬アドヒアランス向上のツールを提供。薬剤師の業務を支援する。</p></div>
<div class="card"><h4>🔄 後発品変更への対応</h4><p>「変更不可」の必要性を医師に情報提供してもらえるよう、先発品の優位性データを共有。</p></div>
<div class="card"><h4>📞 疑義照会の活用</h4><p>薬剤師が疑義照会する際に自社品への変更を提案してもらうための情報提供。</p></div>
</div>

<h3>コメディカルとの連携ポイント</h3>
<table>
<tr><th>職種</th><th>MRとの接点</th><th>連携の意義</th></tr>
<tr><td><strong>看護師</strong></td><td>注射薬の投与管理、患者の状態観察</td><td>投与時の注意点、副作用の早期発見ポイントを共有</td></tr>
<tr><td><strong>臨床検査技師</strong></td><td>検査値モニタリング</td><td>薬効評価に必要な検査項目・タイミングを情報提供</td></tr>
<tr><td><strong>MSL（メディカルサイエンスリエゾン）</strong></td><td>社内の医学専門職</td><td>KOLとのサイエンティフィックな議論をMSLに連携</td></tr>
<tr><td><strong>医事課・事務部門</strong></td><td>薬剤採用の事務手続き</td><td>採用手続きの円滑化、見積もり・納入条件の調整</td></tr>
</table>

<h3>薬事委員会対策</h3>
<div class="highlight-box">
<p><strong>薬事委員会で新薬を採用してもらうための準備：</strong></p>
<ol>
<li><strong>申請医師の確保</strong>：処方を希望する医師に採用申請書を提出してもらう</li>
<li><strong>薬剤部への事前情報提供</strong>：製品特性、薬価、既存薬との比較データ</li>
<li><strong>経済性の説明</strong>：DPC/DRG上のメリット、入院日数短縮効果など</li>
<li><strong>安全性対策の提示</strong>：REMS（リスク管理計画）、副作用モニタリング体制</li>
<li><strong>委員へのインプット</strong>：委員会メンバーの医師・薬剤師への個別説明</li>
</ol>
</div>

<h3>チーム医療時代のMRの役割</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>多職種カンファレンスへの理解</strong>病院では定期的にカンファレンスが行われる。MRは直接参加できないが、参加する各職種に適切な情報を提供する。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>パスウェイ（クリニカルパス）への組み込み</strong>自社品がクリニカルパスに組み込まれると安定した処方が見込める。パス委員会へのアプローチも重要。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>地域包括ケアへの対応</strong>病院と診療所・薬局の連携が進む中、地域全体での自社品の位置づけを考える。退院時処方が地域の薬局でスムーズに調剤されるよう連携する。</div></div>
</div>
`,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "病院での新薬採用において、薬事委員会対策として最初に行うべきことはどれですか？",
                    options: [
                        "薬剤部への経済性データの提供",
                        "処方を希望する申請医師の確保",
                        "委員会メンバーへの個別説明",
                        "安全性対策の資料準備"
                    ],
                    answer: 1,
                    explanation: "薬事委員会での新薬採用には、まず処方を希望する医師に採用申請書を提出してもらうことが必要です。申請医師がいなければ、委員会で審議されることもありません。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "調剤薬局薬剤師へのアプローチにおいて、MRが提供すべき情報として最も重要なものはどれですか？",
                    options: [
                        "最新の臨床試験のサブグループ解析",
                        "他院の処方トレンドデータ",
                        "服薬アドヒアランス向上のための患者向け説明資料",
                        "薬事委員会向けのプレゼン資料"
                    ],
                    answer: 2,
                    explanation: "調剤薬局薬剤師は患者への服薬指導が主な業務です。服薬アドヒアランス向上のための患者向け説明資料を提供することで、薬剤師の業務を支援し、信頼関係を構築できます。"
                },
                {
                    id: "q503_3",
                    type: "fill",
                    question: "社内の医学専門職で、KOLとのサイエンティフィックな議論を担当する職種の略称は何ですか？",
                    answer: "MSL",
                    explanation: "MSL（メディカルサイエンスリエゾン）は、社内の医学専門職としてKOLとの科学的な議論やメディカルアフェアーズ活動を担当します。MRはKOLとの学術的な深い議論が必要な場合、MSLに連携します。"
                }
            ]
        },
        {
            id: 504,
            title: "アカウントマネジメント",
            duration: "15分",
            content: `
<h2>施設全体を攻略するアカウントマネジメント</h2>
<p>個々の医師への活動だけでなく、<strong>医療機関全体を一つのアカウントとして戦略的に管理する</strong>視点が重要です。特に大病院では、組織的なアプローチが処方拡大の鍵を握ります。</p>

<h3>アカウントプランの構成要素</h3>
<table>
<tr><th>要素</th><th>内容</th><th>確認方法</th></tr>
<tr><td><strong>施設プロファイル</strong></td><td>病床数、外来患者数、診療科構成、地域での位置づけ</td><td>病院HP、地域医療計画、施設見学</td></tr>
<tr><td><strong>キーパーソンマップ</strong></td><td>処方決定権者、影響者、薬事委員会メンバー</td><td>組織図、面談を通じた情報収集</td></tr>
<tr><td><strong>処方状況</strong></td><td>自社品・競合品の採用状況、処方量推移</td><td>卸データ、MR活動記録</td></tr>
<tr><td><strong>課題・機会</strong></td><td>未開拓の診療科、競合からのスイッチ機会</td><td>面談情報、市場データ分析</td></tr>
<tr><td><strong>アクションプラン</strong></td><td>目標設定、活動計画、タイムライン</td><td>上記情報の総合分析</td></tr>
</table>

<h3>キーパーソンマップの作成</h3>
<div class="highlight-box">
<p><strong>施設内の影響力と関係性を可視化する：</strong></p>
<ul>
<li><strong>チャンピオン</strong>：自社品の積極的な支持者。処方拡大の推進力</li>
<li><strong>サポーター</strong>：好意的だが積極的には推進しない。情報提供で支持を強化</li>
<li><strong>ニュートラル</strong>：中立的。エビデンス提供でサポーターに転換を狙う</li>
<li><strong>ブロッカー</strong>：競合品支持者、または自社品に否定的。対策が必要</li>
<li><strong>ゲートキーパー</strong>：薬剤部長、医局長など。アクセスの鍵を握る人物</li>
</ul>
</div>

<h3>処方プロセスの段階管理</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>認知（Awareness）</strong>医師が自社品の存在と特徴を知っている状態。まずはここから。製品紹介、リーフレット配布。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>関心（Interest）</strong>医師が自社品に興味を持ち、詳しい情報を求めている状態。エビデンス提供、説明会の実施。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>評価（Evaluation）</strong>処方を検討している段階。他剤との比較、症例検討。薬事委員会への申請支援。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>試用（Trial）</strong>初めて処方する段階。処方しやすい症例の提案、処方時の注意点を再確認。</div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><strong>採用（Adoption）</strong>定期的に処方する段階。処方経験のフィードバック収集、追加エビデンスの提供で継続を確保。</div></div>
<div class="step"><div class="step-num">6</div><div class="step-content"><strong>推奨（Advocacy）</strong>他の医師にも推奨する段階。講演依頼、症例報告への協力で推奨活動を支援。</div></div>
</div>

<h3>大病院攻略の実践テクニック</h3>
<div class="card-grid">
<div class="card"><h4>🏥 診療科横断アプローチ</h4><p>同じ薬剤が複数科で使用可能な場合、一つの診療科での成功事例を他科に展開する。例：糖尿病薬が循環器科でも使用されるケース。</p></div>
<div class="card"><h4>📊 施設データの活用</h4><p>DPC公開データから施設の疾患構成を分析。「この施設では〇〇疾患の患者が多い」という客観データでアプローチの根拠を示す。</p></div>
<div class="card"><h4>🤝 社内連携の活用</h4><p>MSL、マーケティング、メディカルアフェアーズと連携。講演会の企画、アドバイザリーボードの設定など、MR単独では実現できない活動を組み合わせる。</p></div>
<div class="card"><h4>📅 長期的な視点</h4><p>大病院の攻略は半年〜1年単位。短期的な成果に一喜一憂せず、アカウントプランに基づいた計画的な活動を継続する。</p></div>
</div>
`,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "アカウントプランにおけるキーパーソンマップで、自社品の積極的な支持者を何と呼びますか？",
                    options: [
                        "ゲートキーパー",
                        "サポーター",
                        "チャンピオン",
                        "インフルエンサー"
                    ],
                    answer: 2,
                    explanation: "チャンピオンは自社品の積極的な支持者で、処方拡大の推進力となる医師を指します。サポーターは好意的だが積極的には推進しない位置づけです。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "処方プロセスの段階管理において、「医師が初めて処方する段階」はどれに該当しますか？",
                    options: [
                        "評価（Evaluation）",
                        "試用（Trial）",
                        "採用（Adoption）",
                        "関心（Interest）"
                    ],
                    answer: 1,
                    explanation: "試用（Trial）は、医師が初めて処方する段階です。処方しやすい症例の提案や、処方時の注意点の再確認などのサポートが重要になります。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "大病院攻略において、DPC公開データを活用する目的として最も適切なものはどれですか？",
                    options: [
                        "医師の個人的な処方傾向を把握する",
                        "施設の疾患構成を分析し、アプローチの根拠を示す",
                        "薬事委員会の開催スケジュールを確認する",
                        "競合MRの訪問頻度を調べる"
                    ],
                    answer: 1,
                    explanation: "DPC公開データから施設の疾患構成を分析することで、「この施設では〇〇疾患の患者が多い」という客観データに基づいたアプローチが可能になります。"
                }
            ]
        }
    ]
};
