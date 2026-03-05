/* ============================================
   Level 6: 戦略的営業マネジメントと総合演習
   ============================================ */
const LEVEL6_DATA = {
    id: 6,
    title: "戦略的営業マネジメントと総合演習",
    icon: "🏆",
    description: "KPI管理、デジタル活用、キャリア開発を学び、全レベルの知識を総合的に確認する",
    modules: [
        {
            id: 601,
            title: "KPI管理と活動分析",
            duration: "15分",
            content: `
<h2>成果を出すためのKPIマネジメント</h2>
<p>MR活動は「頑張ったかどうか」ではなく、<strong>適切なKPIに基づいて活動を管理し、成果につなげる</strong>ことが求められます。データドリブンな営業活動が、製薬業界のスタンダードになっています。</p>

<h3>MRの主要KPI体系</h3>
<table>
<tr><th>カテゴリ</th><th>KPI</th><th>測定方法</th><th>目安</th></tr>
<tr><td rowspan="3"><strong>活動量</strong></td><td>訪問件数</td><td>SFA/CRM記録</td><td>1日8-12件</td></tr>
<tr><td>面談率</td><td>訪問件数に対する面談成功率</td><td>60-80%</td></tr>
<tr><td>ディテーリング回数</td><td>製品説明を行った回数</td><td>1日5-8回</td></tr>
<tr><td rowspan="3"><strong>活動の質</strong></td><td>キーメッセージ伝達率</td><td>面談記録のレビュー</td><td>80%以上</td></tr>
<tr><td>A/Bランク施設カバー率</td><td>重要施設への訪問割合</td><td>90%以上</td></tr>
<tr><td>説明会開催数</td><td>実施記録</td><td>月2-4回</td></tr>
<tr><td rowspan="3"><strong>成果</strong></td><td>処方新規獲得数</td><td>卸データ・処方データ</td><td>月間目標に対する達成率</td></tr>
<tr><td>売上達成率</td><td>売上実績/目標</td><td>100%以上</td></tr>
<tr><td>市場シェア変化</td><td>IMS/IQVIA等のデータ</td><td>前年比プラス</td></tr>
</table>

<h3>活動分析のフレームワーク</h3>
<div class="card-grid">
<div class="card"><h4>📊 活動量 × 質マトリクス</h4>
<p><strong>高活動量・高品質</strong>：理想的。成果に直結。<br>
<strong>高活動量・低品質</strong>：忙しいが成果不足。ターゲティング見直し。<br>
<strong>低活動量・高品質</strong>：効率的だが伸びしろあり。活動量の増加で成果倍増。<br>
<strong>低活動量・低品質</strong>：根本的な改善が必要。</p></div>
<div class="card"><h4>🔄 コンバージョン分析</h4>
<p>訪問→面談→ディテーリング→処方の各段階での転換率を分析。<br>
ボトルネックを特定し、重点的に改善する。<br>
例：面談率が低い→アポイント取得方法の改善<br>
例：処方転換率が低い→クロージング技術の強化</p></div>
</div>

<h3>目標設定と活動計画の立て方</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>年間目標の分解</strong>年間売上目標を、半期→四半期→月次→週次に分解。各期間で何をどれだけ達成すべきか明確にする。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>施設別目標の設定</strong>ポテンシャルに応じてA/B/Cランク施設ごとに目標を設定。高ポテンシャル施設に活動を集中させる。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>週間活動計画の策定</strong>月曜：エリア東部の病院、火曜：中心部のクリニック、のように曜日ごとの活動エリアを決定。効率的なルート設計。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>PDCAサイクルの実行</strong>毎週の振り返りで計画と実績のギャップを分析。翌週の計画に反映する。月次レビューでは中期的な戦略も見直す。</div></div>
</div>

<h3>マネージャーへの報告ポイント</h3>
<div class="highlight-box">
<ul>
<li><strong>数字で語る</strong>：「頑張りました」ではなく「訪問件数120件、面談率75%、新規処方獲得3件」</li>
<li><strong>課題と対策をセットで</strong>：「A病院の処方が伸び悩み（課題）→ 来月の薬事委員会で追加採用を申請予定（対策）」</li>
<li><strong>成功事例を共有</strong>：他のメンバーに展開可能な成功パターンを積極的に報告</li>
<li><strong>支援要請は具体的に</strong>：「B先生の説明会を企画したいので、本社からの講演者手配を依頼したい」</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "MRの1日の訪問件数の目安として一般的な範囲はどれですか？",
                    options: [
                        "3-5件",
                        "8-12件",
                        "15-20件",
                        "25-30件"
                    ],
                    answer: 1,
                    explanation: "MRの1日の訪問件数は一般的に8-12件が目安です。質と量のバランスを保ちながら、効率的な訪問ルートで活動します。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "活動量は多いが成果が出ない場合、最も優先的に見直すべき項目はどれですか？",
                    options: [
                        "訪問件数をさらに増やす",
                        "ターゲティング（訪問先の選定）を見直す",
                        "マネージャーへの報告頻度を上げる",
                        "製品知識の勉強時間を増やす"
                    ],
                    answer: 1,
                    explanation: "高活動量・低品質の場合は、そもそも訪問すべき施設やターゲット医師の選定が適切でない可能性が高いです。ターゲティングを見直し、ポテンシャルの高い施設に活動を集中させることが最優先です。"
                },
                {
                    id: "q601_3",
                    type: "fill",
                    question: "年間売上目標を半期→四半期→月次→週次に細分化することを、目標の「＿＿」と呼びます。",
                    answer: "分解",
                    explanation: "年間目標の分解（ブレイクダウン）は、大きな目標を達成可能な小さな単位に分割するプロセスです。各期間で何をどれだけ達成すべきか明確になります。"
                }
            ]
        },
        {
            id: 602,
            title: "デジタルMRとオムニチャネル戦略",
            duration: "15分",
            content: `
<h2>MR活動のデジタルトランスフォーメーション</h2>
<p>COVID-19を契機に製薬業界のデジタル化が急速に進みました。対面訪問だけでなく、<strong>デジタルチャネルを組み合わせたオムニチャネル戦略</strong>が、これからのMR活動の標準になっています。</p>

<h3>デジタルチャネルの種類と活用法</h3>
<table>
<tr><th>チャネル</th><th>特徴</th><th>活用シーン</th><th>注意点</th></tr>
<tr><td><strong>Web面談</strong></td><td>Zoom、Teams等でのオンライン面談</td><td>遠方の医師、忙しい医師、コロナ禍での活動</td><td>対面よりも短めに（15-20分）。視覚資料を多用</td></tr>
<tr><td><strong>eディテーリング</strong></td><td>医師が自分のペースで閲覧できるデジタルコンテンツ</td><td>面談前の事前情報提供、面談後の補足</td><td>コンテンツの質が重要。医師の閲覧データを活用</td></tr>
<tr><td><strong>メール配信</strong></td><td>承認済みコンテンツのメール送信</td><td>新エビデンスの速報、学会情報の共有</td><td>頻度と内容の適切さ。オプトイン管理</td></tr>
<tr><td><strong>Webセミナー</strong></td><td>オンラインでの講演会・セミナー</td><td>KOLの講演、製品説明会</td><td>参加者のエンゲージメント維持。Q&A機能の活用</td></tr>
<tr><td><strong>医療従事者向けサイト</strong></td><td>MembersDirect等の会員サイト</td><td>コンテンツの常時提供、問い合わせ対応</td><td>サイトへの誘導方法。コンテンツの定期更新</td></tr>
</table>

<h3>オムニチャネル戦略の設計</h3>
<div class="highlight-box">
<p><strong>オムニチャネル = 複数チャネルの最適な組み合わせ</strong></p>
<p>重要なのは、各チャネルを独立して使うのではなく、<strong>医師のジャーニー（認知→関心→評価→処方→継続）に合わせて最適なチャネルを組み合わせる</strong>ことです。</p>
</div>

<h4>処方ジャーニー × チャネルマッピング例</h4>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>認知段階</strong>eディテーリングで製品概要を送付 → メールで学会発表情報を共有 → 対面訪問で初回面談</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>関心段階</strong>Web面談で詳細なエビデンス説明 → eディテーリングで関連論文を共有 → 対面で疑問点を解消</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>評価段階</strong>Webセミナーで他施設の使用経験を紹介 → 対面で個別の症例検討 → メールで薬事委員会申請資料を送付</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>処方・継続段階</strong>対面で処方後フィードバック収集 → メールで最新の安全性情報を定期送付 → Webセミナーで最新エビデンスを継続提供</div></div>
</div>

<h3>デジタル時代のMRに求められるスキル</h3>
<div class="card-grid">
<div class="card"><h4>💻 デジタルリテラシー</h4><p>Web会議ツール、CRM、eディテーリングツールの操作スキル。デジタルコンテンツの効果的な活用法。</p></div>
<div class="card"><h4>📊 データ活用力</h4><p>医師のデジタル行動データ（メール開封率、コンテンツ閲覧状況）を活動計画に反映する能力。</p></div>
<div class="card"><h4>🎥 オンラインプレゼン力</h4><p>画面共有でのプレゼンテーション、カメラ越しのコミュニケーション。対面とは異なるスキルが必要。</p></div>
<div class="card"><h4>📝 コンテンツ提案力</h4><p>マーケティング部門と連携し、医師のニーズに合ったデジタルコンテンツの企画・提案ができる。</p></div>
</div>

<h3>リモート面談の成功テクニック</h3>
<div class="card-grid">
<div class="card"><h4>事前準備</h4><p>・接続テストを事前に実施<br>・資料を画面共有用に最適化（文字を大きく、情報量を絞る）<br>・バックアップ手段（電話番号）を確認</p></div>
<div class="card"><h4>実施中</h4><p>・最初にアジェンダと所要時間を共有<br>・15-20分以内に収める<br>・画面共有と顔出しを使い分ける<br>・相手の反応を確認しながら進める</p></div>
<div class="card"><h4>実施後</h4><p>・お礼メールと資料送付を当日中に<br>・面談で使用した資料のPDFを添付<br>・次回のアクションを明記<br>・CRMに「オンライン面談」として記録</p></div>
</div>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "オムニチャネル戦略において最も重要な考え方はどれですか？",
                    options: [
                        "すべてのチャネルを均等に使用する",
                        "対面訪問を完全にデジタルに置き換える",
                        "医師のジャーニーに合わせて最適なチャネルを組み合わせる",
                        "コスト削減のためにデジタルチャネルを優先する"
                    ],
                    answer: 2,
                    explanation: "オムニチャネル戦略の本質は、医師の処方ジャーニー（認知→関心→評価→処方→継続）の各段階に合わせて、最適なチャネルを組み合わせることです。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "Web面談（リモート面談）の適切な所要時間の目安はどれですか？",
                    options: [
                        "5-10分",
                        "15-20分",
                        "30-45分",
                        "60分以上"
                    ],
                    answer: 1,
                    explanation: "Web面談は対面よりも集中力が持続しにくいため、15-20分以内に収めることが推奨されます。短時間で要点を伝え、詳細は資料送付でフォローします。"
                },
                {
                    id: "q602_3",
                    type: "fill",
                    question: "医師が自分のペースで閲覧できるデジタルコンテンツによるプロモーション手法を「e＿＿＿＿＿」と呼びます。",
                    answer: "ディテーリング",
                    explanation: "eディテーリングは、医師が自分の都合のよい時間にデジタルデバイスで製品情報を閲覧できるプロモーション手法です。面談前の事前情報提供や面談後の補足として活用されます。"
                }
            ]
        },
        {
            id: 603,
            title: "MRのキャリアパスと自己開発",
            duration: "12分",
            content: `
<h2>MRとしての成長とキャリアの展望</h2>
<p>MRは単なる「営業職」ではなく、<strong>医療に貢献する専門職</strong>です。キャリアパスも多様で、マネジメント、マーケティング、MSLなど、様々な方向への発展が可能です。</p>

<h3>MRの主なキャリアパス</h3>
<div class="card-grid">
<div class="card"><h4>📈 営業マネジメント</h4>
<p><strong>MR → リーダー → 所長 → 支店長 → 営業本部長</strong><br>
チームマネジメント、組織運営、事業計画策定。人材育成や営業戦略の立案がメインに。</p></div>
<div class="card"><h4>🔬 MSL（メディカルサイエンスリエゾン）</h4>
<p><strong>MR → MSL → メディカルアフェアーズ</strong><br>
KOLとの学術的な議論、研究者主導臨床試験の支援。高い科学的専門性が求められる。</p></div>
<div class="card"><h4>📊 マーケティング</h4>
<p><strong>MR → プロダクトマネージャー → マーケティング部長</strong><br>
製品戦略の立案、プロモーション企画、市場分析。現場経験が大きな強みに。</p></div>
<div class="card"><h4>🎓 トレーニング</h4>
<p><strong>MR → トレーナー → 研修部門長</strong><br>
新人MRの育成、継続研修の企画・実施。教えることで自身も成長。</p></div>
</div>

<h3>キャリアステージ別に求められる能力</h3>
<table>
<tr><th>ステージ</th><th>期間目安</th><th>求められる能力</th><th>重点開発項目</th></tr>
<tr><td><strong>新人MR</strong></td><td>1-3年目</td><td>製品知識、基本的な面談スキル、活動量の確保</td><td>MR認定試験合格、担当領域の疾患知識</td></tr>
<tr><td><strong>一人前MR</strong></td><td>3-5年目</td><td>戦略的思考、アカウントマネジメント、後輩指導</td><td>KOLマネジメント、プレゼンテーション力</td></tr>
<tr><td><strong>シニアMR</strong></td><td>5-10年目</td><td>大型施設攻略、エリア戦略、チームリーダーシップ</td><td>マネジメントスキル、事業感覚</td></tr>
<tr><td><strong>マネージャー</strong></td><td>10年目〜</td><td>組織運営、人材育成、事業計画策定</td><td>リーダーシップ、コーチング、経営視点</td></tr>
</table>

<h3>自己開発のためのアクションプラン</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>MR認定試験の継続学習</strong>毎年の継続研修を単なる義務ではなく、知識アップデートの機会として活用する。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>疾患・治療の最新動向のキャッチアップ</strong>学会情報、ガイドライン改訂、新薬承認情報を定期的にチェック。医学雑誌の購読やWebセミナーへの参加。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>異業種スキルの習得</strong>プレゼンテーション、データ分析、マーケティング理論など。MBAや各種資格取得もキャリアの幅を広げる。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>社内ネットワークの構築</strong>MSL、マーケティング、メディカルアフェアーズ部門との交流。キャリアチェンジの際の人脈になる。</div></div>
</div>

<h3>製薬業界の将来とMRの役割変化</h3>
<div class="highlight-box">
<p><strong>MRの数は減少傾向にありますが、質の高いMRの価値はむしろ高まっています：</strong></p>
<ul>
<li><strong>スペシャリティ医薬品の増加</strong>：オンコロジー、希少疾患など、高い専門知識が必要な領域が拡大</li>
<li><strong>デジタルとのハイブリッド</strong>：対面の価値を最大化しつつ、デジタルで補完する能力が必須</li>
<li><strong>コンサルティング型MR</strong>：情報提供だけでなく、医療課題の解決パートナーとしての役割</li>
<li><strong>アウトカム重視</strong>：処方数だけでなく、患者アウトカムの改善に貢献するMRが評価される時代へ</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "MRからKOLとの学術的な議論や研究者主導臨床試験の支援を行う職種へキャリアチェンジする場合、その職種は何ですか？",
                    options: [
                        "プロダクトマネージャー",
                        "MSL（メディカルサイエンスリエゾン）",
                        "クリニカルリサーチアソシエイト",
                        "メディカルライター"
                    ],
                    answer: 1,
                    explanation: "MSL（メディカルサイエンスリエゾン）は、KOLとの学術的な議論や研究者主導臨床試験の支援を行う職種です。MRの現場経験を活かしつつ、より科学的な専門性を発揮するキャリアパスです。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "一人前MR（3-5年目）に特に求められる重点開発項目として最も適切なものはどれですか？",
                    options: [
                        "MR認定試験合格",
                        "KOLマネジメントとプレゼンテーション力",
                        "リーダーシップとコーチング",
                        "基本的な面談スキル"
                    ],
                    answer: 1,
                    explanation: "一人前MR（3-5年目）には、戦略的思考やアカウントマネジメントが求められ、特にKOLマネジメントとプレゼンテーション力の開発が重要です。"
                },
                {
                    id: "q603_3",
                    type: "fill",
                    question: "MRの数は減少傾向にある中、情報提供だけでなく医療課題の解決パートナーとして活動するMRを「＿＿＿＿＿型MR」と呼びます。",
                    answer: "コンサルティング",
                    explanation: "コンサルティング型MRは、単なる製品情報の提供者ではなく、医師や医療機関の課題を理解し、その解決に貢献するパートナーとしての役割を果たします。"
                }
            ]
        },
        {
            id: 604,
            title: "総合テスト：製薬営業の全知識",
            duration: "20分",
            content: `
<h2>全レベルの総合確認テスト</h2>
<p>レベル1〜6で学んだ内容を総合的に確認するテストです。<strong>製薬営業の基礎から戦略的マネジメントまで</strong>、幅広い知識が問われます。</p>

<h3>復習ポイント</h3>

<h4>Level 1：製薬営業の基礎知識</h4>
<div class="card-grid">
<div class="card"><h4>💊 MRの役割</h4><p>医薬情報担当者として、医薬品の有効性・安全性情報を医療従事者に提供。副作用情報の収集・報告も重要な使命。</p></div>
<div class="card"><h4>📋 コンプライアンス</h4><p>JPMAプロモーションコード、公正競争規約の遵守。接待規制、MR認定制度の理解。</p></div>
</div>

<h4>Level 2：ターゲティングと事前準備</h4>
<div class="card-grid">
<div class="card"><h4>🎯 エリア分析</h4><p>施設のランク分け（A/B/C）、訪問優先順位の設定。市場データの活用。</p></div>
<div class="card"><h4>👔 KOLマネジメント</h4><p>キーオピニオンリーダーの特定と関係構築。講演会、アドバイザリーボード。</p></div>
</div>

<h4>Level 3：アプローチと面談技術</h4>
<div class="card-grid">
<div class="card"><h4>🗣️ 面談の組み立て</h4><p>AIDCAモデル（注意→興味→欲求→確信→行動）。FABメソッド（特徴→利点→便益）。</p></div>
<div class="card"><h4>🛡️ オブジェクションハンドリング</h4><p>LAERモデル（傾聴→承認→探索→回答）。反論を処方への転換ポイントにする技術。</p></div>
</div>

<h4>Level 4：ディテーリングとエビデンス活用</h4>
<div class="card-grid">
<div class="card"><h4>📊 臨床データの読み方</h4><p>RCT、主要評価項目、NNT、ハザード比。エビデンスレベルの理解。</p></div>
<div class="card"><h4>📈 処方獲得プロセス</h4><p>新規採用から継続処方まで。薬事委員会対策、処方モニタリング。</p></div>
</div>

<h4>Level 5：関係構築とフォローアップ</h4>
<div class="card-grid">
<div class="card"><h4>🤝 信頼関係構築</h4><p>専門性・誠実性・信頼性・貢献度の4要素。医師タイプ別アプローチ。</p></div>
<div class="card"><h4>🏥 多職種連携</h4><p>薬剤師、コメディカルとの関係構築。アカウントマネジメント。</p></div>
</div>

<h4>Level 6：戦略的営業マネジメント</h4>
<div class="card-grid">
<div class="card"><h4>📊 KPI管理</h4><p>活動量・質・成果のKPI体系。コンバージョン分析。データドリブンな営業。</p></div>
<div class="card"><h4>💻 デジタル活用</h4><p>オムニチャネル戦略、eディテーリング、Web面談。DX時代のMRスキル。</p></div>
</div>

<div class="highlight-box">
<p><strong>合格ライン：70%（7問中5問以上正解）</strong></p>
<p>このテストは全レベルから出題されます。不合格の場合は、苦手なレベルに戻って復習しましょう。</p>
</div>
`,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "MRの最も重要な使命として正しいものはどれですか？",
                    options: [
                        "自社製品の売上を最大化すること",
                        "医薬品の有効性・安全性情報を医療従事者に提供し、副作用情報を収集・報告すること",
                        "競合他社の製品情報を収集すること",
                        "医師との個人的な人間関係を構築すること"
                    ],
                    answer: 1,
                    explanation: "MR（医薬情報担当者）の最も重要な使命は、医薬品の有効性・安全性に関する情報を医療従事者に正確に提供し、医療現場からの副作用情報を収集・報告することです。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "面談の組み立てに使うAIDCAモデルで、「C」は何を指しますか？",
                    options: [
                        "Communication（コミュニケーション）",
                        "Conviction（確信）",
                        "Closing（クロージング）",
                        "Comparison（比較）"
                    ],
                    answer: 1,
                    explanation: "AIDCAモデルのCはConviction（確信）です。Attention（注意）→ Interest（興味）→ Desire（欲求）→ Conviction（確信）→ Action（行動）の順で面談を組み立てます。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "オブジェクションハンドリングのLAERモデルの正しい順序はどれですか？",
                    options: [
                        "Look（観察）→ Analyze（分析）→ Explain（説明）→ Resolve（解決）",
                        "Listen（傾聴）→ Acknowledge（承認）→ Explore（探索）→ Respond（回答）",
                        "Learn（学習）→ Accept（受容）→ Evaluate（評価）→ React（反応）",
                        "Lead（主導）→ Ask（質問）→ Educate（教育）→ Review（振り返り）"
                    ],
                    answer: 1,
                    explanation: "LAERモデルは、Listen（傾聴）→ Acknowledge（承認）→ Explore（探索）→ Respond（回答）の順序で反論に対応するフレームワークです。"
                },
                {
                    id: "q604_4",
                    type: "choice",
                    question: "信頼関係の4つの構成要素として正しくないものはどれですか？",
                    options: [
                        "専門性",
                        "誠実性",
                        "交渉力",
                        "貢献度"
                    ],
                    answer: 2,
                    explanation: "信頼関係の4つの構成要素は「専門性」「誠実性」「信頼性」「貢献度」です。「交渉力」は含まれません。交渉力は営業スキルの一つですが、信頼の構成要素とは異なります。"
                },
                {
                    id: "q604_5",
                    type: "choice",
                    question: "アカウントマネジメントにおいて、競合品の支持者で自社品に否定的な医師を何と呼びますか？",
                    options: [
                        "ニュートラル",
                        "ゲートキーパー",
                        "ブロッカー",
                        "チャンピオン"
                    ],
                    answer: 2,
                    explanation: "ブロッカーは競合品支持者または自社品に否定的な医師を指します。ブロッカーに対しては、個別の対策（エビデンスに基づく説明、影響力のある他の医師からの推奨など）が必要です。"
                },
                {
                    id: "q604_6",
                    type: "fill",
                    question: "MRの活動KPIにおいて、A/Bランク施設への訪問割合を示す指標を「A/Bランク施設＿＿＿率」と呼びます。",
                    answer: "カバー",
                    explanation: "A/Bランク施設カバー率は、重要施設への訪問割合を示すKPIで、90%以上が目安とされます。ポテンシャルの高い施設を確実にカバーすることが成果につながります。"
                },
                {
                    id: "q604_7",
                    type: "choice",
                    question: "製薬業界の将来のMR像として最も適切な表現はどれですか？",
                    options: [
                        "対面訪問を完全にやめてデジタルのみで活動するMR",
                        "より多くの施設を訪問する活動量重視のMR",
                        "情報提供だけでなく医療課題の解決パートナーとなるコンサルティング型MR",
                        "自社製品のみに特化したスペシャリストMR"
                    ],
                    answer: 2,
                    explanation: "製薬業界の将来像として、単なる情報提供者ではなく、医師や医療機関の課題を理解し解決に貢献する「コンサルティング型MR」が求められています。デジタルとのハイブリッド活動で対面の価値を最大化する能力も必須です。"
                }
            ]
        }
    ]
};
