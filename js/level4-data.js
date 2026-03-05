/* ============================================
   Level 4: ディテーリングとエビデンス活用
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "ディテーリングとエビデンス活用",
    icon: "📊",
    description: "臨床エビデンスの読み方・伝え方と効果的なディテーリング手法を習得する",
    modules: [
        {
            id: 401,
            title: "臨床試験データの読み方",
            duration: "15分",
            content: `
<h2>MRが理解すべき臨床試験の基本</h2>
<p>MRは「論文を読む研究者」ではありませんが、<strong>臨床試験データを正しく理解し、医師に分かりやすく伝える</strong>能力が必要です。</p>

<h3>臨床試験デザインの種類</h3>
<table>
<tr><th>デザイン</th><th>特徴</th><th>エビデンスレベル</th></tr>
<tr><td><strong>RCT（無作為化比較試験）</strong></td><td>最も信頼性の高い試験デザイン</td><td>高い</td></tr>
<tr><td>コホート研究</td><td>特定集団の長期追跡</td><td>中程度</td></tr>
<tr><td>症例対照研究</td><td>結果から原因を遡る</td><td>中程度</td></tr>
<tr><td>症例報告・症例集積</td><td>個別の症例報告</td><td>低い</td></tr>
</table>

<h3>読むべき主要ポイント</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>主要評価項目（Primary Endpoint）</strong>試験の主目的。この結果が最も重要。例：「全生存期間（OS）」「無増悪生存期間（PFS）」</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>対象患者集団</strong>どんな患者が対象か。自分の担当医師の患者層と一致するか確認。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>比較対照</strong>プラセボ比較か実薬比較か。実薬比較の方がインパクトが大きい。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>統計的有意差</strong>p値（p<0.05）とハザード比（HR）/オッズ比（OR）の95%信頼区間。</div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><strong>安全性データ</strong>有害事象の種類・頻度・重篤度。特にGrade 3以上の重篤な有害事象。</div></div>
</div>

<h2>統計用語の理解</h2>
<table>
<tr><th>用語</th><th>意味</th><th>MRとしての伝え方</th></tr>
<tr><td><strong>p値</strong></td><td>結果が偶然である確率</td><td>「p<0.001で統計的に有意な差が認められました」</td></tr>
<tr><td><strong>HR（ハザード比）</strong></td><td>イベント発生リスクの比</td><td>「HR 0.7は、リスクが30%減少したことを意味します」</td></tr>
<tr><td><strong>NNT</strong></td><td>1人の患者を救うために必要な治療人数</td><td>「NNT 10は、10人治療すると1人が恩恵を受けます」</td></tr>
<tr><td><strong>95%CI</strong></td><td>真の値が含まれる95%の範囲</td><td>「信頼区間が1をまたがないため、統計的に有意です」</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">データの伝え方の注意点</div>
<ul>
<li><strong>相対リスク減少</strong>と<strong>絶対リスク減少</strong>を使い分ける（相対リスク50%減少でも、絶対値では2%→1%かもしれない）</li>
<li>サブグループ解析の結果を全体の結論として伝えない</li>
<li>有意差のない結果を「差がない」と言い切らない（「有意差は認められなかった」が正確）</li>
</ul>
</div>
            `,
            quiz: [
                { id: "q401_1", type: "choice", question: "臨床試験で最も信頼性の高いデザインはどれですか？", options: ["コホート研究", "症例対照研究", "RCT（無作為化比較試験）", "症例報告"], answer: 2, explanation: "RCT（Randomized Controlled Trial：無作為化比較試験）が最も信頼性の高い試験デザインです。" },
                { id: "q401_2", type: "choice", question: "HR（ハザード比）0.7の意味として正しいのはどれですか？", options: ["効果が70%増加", "リスクが30%減少", "副作用が70%減少", "生存率が0.7%改善"], answer: 1, explanation: "HR 0.7はイベント発生リスクが対照群と比べて30%減少したことを意味します（1-0.7=0.3→30%減少）。" },
                { id: "q401_3", type: "fill", question: "1人の患者を救うために必要な治療人数を表す指標の略称は？（アルファベット3文字）", answer: "NNT", explanation: "NNT（Number Needed to Treat）は1人の患者に恩恵をもたらすために必要な治療人数で、薬の効果を直感的に伝えるのに有用です。" }
            ]
        },
        {
            id: 402,
            title: "効果的なディテーリング",
            duration: "12分",
            content: `
<h2>ディテーリングとは</h2>
<p>ディテーリング（Detailing）とは、<strong>医師に対して医薬品の有効性・安全性情報を説明するプロモーション活動</strong>のことです。MRの最も中核的な業務です。</p>

<h2>キーメッセージの設計</h2>
<p>ディテーリングの核となる<strong>キーメッセージ</strong>は、マーケティング部門が策定した戦略に基づきつつ、個々の医師のニーズに合わせてカスタマイズします。</p>

<h3>優れたキーメッセージの要素</h3>
<ul>
<li><strong>患者ベネフィット中心:</strong> 製品特性ではなく、患者にとっての価値</li>
<li><strong>エビデンスに裏付け:</strong> 必ず臨床データで裏付ける</li>
<li><strong>差別化ポイント:</strong> 競合品との明確な違い</li>
<li><strong>シンプル:</strong> 1メッセージ1ベネフィット。複雑にしない</li>
</ul>

<div class="scenario-box">
<div class="scenario-box-title">キーメッセージの例（架空の降圧薬）</div>
<p class="bad">弱い:「24時間の持続的な降圧効果があります」（Feature のみ）</p>
<p class="good">強い:「1日1回の投与で24時間安定した降圧を実現し、早朝高血圧による心血管イベントリスクを○%低減します。○○試験で実証されています」（FABの完全版）</p>
</div>

<h2>ビジュアルエイド（VA）の活用</h2>
<p>ビジュアルエイド（タブレット上のスライドや印刷資材）は、ディテーリングの<strong>補助ツール</strong>です。</p>

<div class="info-box success">
<div class="info-box-title">VA活用のベストプラクティス</div>
<ol>
<li>VAは「見せるもの」ではなく「対話のきっかけ」</li>
<li>全ページを見せる必要はない。医師の関心に合わせて選択</li>
<li>グラフを指差しながら説明。要点を口頭で補足</li>
<li>VAを読み上げるだけのプレゼンはNG（医師は自分で読める）</li>
<li>医師の反応を見ながらペースを調整</li>
</ol>
</div>

<h2>クロージング技術</h2>
<p>ディテーリングの最後に、<strong>医師の処方意向を確認し、次のアクションにつなげる</strong>ステップです。</p>

<h3>クロージングの種類</h3>
<table>
<tr><th>タイプ</th><th>例</th><th>適する状況</th></tr>
<tr><td><strong>試用依頼型</strong></td><td>「次の新規患者さんでぜひお試しください」</td><td>初回処方獲得時</td></tr>
<tr><td><strong>選択肢型</strong></td><td>「○○の患者さんと△△の患者さん、どちらに適していると思われますか？」</td><td>処方対象を明確化したい時</td></tr>
<tr><td><strong>確認型</strong></td><td>「先生のお考えでは、このデータは臨床的に意義があると思われますか？」</td><td>医師の見解を確認したい時</td></tr>
<tr><td><strong>次回約束型</strong></td><td>「○○のデータをお持ちしますので、来週お時間いただけますか？」</td><td>継続的な情報提供時</td></tr>
</table>
            `,
            quiz: [
                { id: "q402_1", type: "choice", question: "優れたキーメッセージの要素として最も重要なのはどれですか？", options: ["薬価の安さ", "患者ベネフィット中心であること", "競合品の欠点", "MRの経験談"], answer: 1, explanation: "キーメッセージは製品特性ではなく、患者にとっての価値（ベネフィット）を中心に設計します。" },
                { id: "q402_2", type: "choice", question: "ビジュアルエイド（VA）の正しい使い方はどれですか？", options: ["全ページを必ず見せる", "VAを読み上げる", "医師の関心に合わせて対話のきっかけとして使う", "VA無しで口頭のみで説明する"], answer: 2, explanation: "VAは「見せるもの」ではなく「対話のきっかけ」です。全ページを見せる必要はなく、医師の関心に合わせて選択的に使います。" },
                { id: "q402_3", type: "choice", question: "初回処方を獲得したい場合のクロージングとして最も適切なのはどれですか？", options: ["「ぜひ処方してください」と直接依頼する", "「次の新規患者さんでぜひお試しください」と試用を依頼する", "「処方しないと損ですよ」とプレッシャーをかける", "何も言わずに資材だけ置いて帰る"], answer: 1, explanation: "試用依頼型クロージング（「次の新規患者さんでぜひお試しください」）が初回処方獲得に最も適しています。" }
            ]
        },
        {
            id: 403,
            title: "ガイドラインと学会対策",
            duration: "10分",
            content: `
<h2>治療ガイドラインの重要性</h2>
<p>治療ガイドラインは<strong>学会が策定する標準的な治療指針</strong>であり、医師の処方判断に最も大きな影響を与える文書です。</p>

<h3>ガイドラインとMRの関係</h3>
<ul>
<li>自社製品がガイドラインに掲載されている → <strong>最大のプロモーション資材</strong></li>
<li>第一選択薬として推奨されている → 処方獲得の最大のチャンス</li>
<li>ガイドラインに掲載されていない → ガイドライン外使用の提案は慎重に</li>
<li>ガイドライン改訂のタイミング → 処方パターンが大きく変わるチャンス</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">ガイドライン活用のポイント</div>
<ol>
<li>担当疾患領域の最新ガイドラインを完全に把握する</li>
<li>自社品のガイドライン上の推奨グレード（推奨度A/B/C等）を明確に</li>
<li>「ガイドラインでは○○が推奨されています」は最も説得力のある言葉</li>
<li>ガイドライン改訂時は速やかに情報提供（医師より先に知っておく）</li>
</ol>
</div>

<h2>学会対策</h2>
<p>主要学会は新しいエビデンスが発表される場であり、<strong>MRにとって最大の情報収集と営業の機会</strong>です。</p>

<h3>学会前の準備</h3>
<ul>
<li>プログラムを事前に確認し、自社品・競合品関連の発表をリストアップ</li>
<li>担当医師が発表するセッションを把握</li>
<li>自社のブース出展やサテライトシンポジウムの準備</li>
</ul>

<h3>学会中の活動</h3>
<ul>
<li>重要セッションに参加しメモを取る</li>
<li>新しいエビデンスの速報を社内に共有</li>
<li>KOLとの接点を確保（ただし過度な接待は禁止）</li>
</ul>

<h3>学会後のフォロー</h3>
<ul>
<li>重要な発表内容を担当医師に速やかに報告</li>
<li>「○○学会で△△のデータが発表されましたが…」は最高のオープニング</li>
<li>新しいエビデンスを踏まえたディテーリング戦略の更新</li>
</ul>
            `,
            quiz: [
                { id: "q403_1", type: "choice", question: "MRにとってガイドラインが重要な理由として最も適切なのはどれですか？", options: ["法律で義務づけられているから", "医師の処方判断に最も大きな影響を与えるから", "薬価に影響するから", "MR認定試験に出るから"], answer: 1, explanation: "治療ガイドラインは医師の処方判断に最も大きな影響を与える文書であり、自社品の推奨度はプロモーションの核心です。" },
                { id: "q403_2", type: "choice", question: "学会後のフォローとして最も効果的なのはどれですか？", options: ["何も報告しない", "2ヶ月後にまとめて報告する", "重要な発表内容を速やかに担当医師に報告する", "自社に有利な情報のみ伝える"], answer: 2, explanation: "学会で発表された重要なエビデンスを速やかに担当医師に報告することが、信頼構築と情報提供の両面で効果的です。" },
                { id: "q403_3", type: "fill", question: "学会が策定する標準的な治療指針のことを何と呼びますか？", answer: "ガイドライン", explanation: "治療ガイドラインは学会が策定する標準的な治療指針で、エビデンスに基づいて推奨される治療法を体系化したものです。" }
            ]
        },
        {
            id: 404,
            title: "処方獲得のプロセス",
            duration: "10分",
            content: `
<h2>処方獲得までの段階モデル</h2>
<p>医師が新しい薬を処方するまでには<strong>心理的な段階</strong>があります。各段階に応じたアプローチが重要です。</p>

<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>認知（Awareness）</strong>医師が製品の存在を知る段階。→ 製品名と基本情報の浸透。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>理解（Knowledge）</strong>作用機序や臨床データを理解する段階。→ 詳細な製品説明とエビデンス提供。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>関心（Interest）</strong>「使ってみたい」と興味を持つ段階。→ 差別化ポイントの明確化、症例提案。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>試用（Trial）</strong>初めて処方する段階。→ 適切な患者像の提案、処方サポート。</div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><strong>採用（Adoption）</strong>継続的に処方する段階。→ 処方後のフォローアップ、追加エビデンスの提供。</div></div>
<div class="step"><div class="step-num">6</div><div class="step-content"><strong>推奨（Advocacy）</strong>他の医師にも勧める段階。→ 講演依頼、症例発表の支援。</div></div>
</div>

<h2>処方開始後のフォローアップ</h2>
<div class="info-box success">
<div class="info-box-title">処方開始後にMRがすべきこと</div>
<ol>
<li><strong>初回処方の結果確認:</strong> 「○○の患者さん、いかがでしたか？」</li>
<li><strong>有効性の確認:</strong> 期待通りの効果が得られているか</li>
<li><strong>安全性の確認:</strong> 副作用は出ていないか（収集義務！）</li>
<li><strong>追加処方の提案:</strong> 良好な結果なら、類似の患者への拡大を提案</li>
<li><strong>トラブル対応:</strong> 問題があれば迅速に学術部門と連携して対応</li>
</ol>
</div>

<div class="info-box danger">
<div class="info-box-title">処方獲得できない場合</div>
<ul>
<li>焦って強引なクロージングをしない</li>
<li>「なぜ処方していただけないか」を理解する質問をする</li>
<li>医師のペースを尊重し、長期的な関係を優先</li>
<li>処方は獲得できなくても、情報提供者としての信頼は積み上がっている</li>
</ul>
</div>
            `,
            quiz: [
                { id: "q404_1", type: "choice", question: "処方獲得の段階モデルで「初めて処方する」段階はどれですか？", options: ["認知", "理解", "関心", "試用"], answer: 3, explanation: "試用（Trial）が医師が初めて処方する段階です。適切な患者像の提案と処方サポートが重要です。" },
                { id: "q404_2", type: "choice", question: "初回処方後にMRが最優先で確認すべきことはどれですか？", options: ["追加処方の予定", "有効性と安全性の結果", "薬価への反応", "他の医師への推薦意向"], answer: 1, explanation: "初回処方後は有効性の確認と安全性（副作用）の確認が最優先です。特に副作用情報の収集はMRの義務です。" },
                { id: "q404_3", type: "choice", question: "処方の「推奨（Advocacy）」段階で有効なアプローチはどれですか？", options: ["薬価の割引を提案する", "講演依頼や症例発表の支援", "訪問頻度を減らす", "競合品への切り替えを阻止する"], answer: 1, explanation: "推奨段階では、医師が他の医師にも勧めるよう講演への登壇依頼や症例発表の支援が効果的です。" }
            ]
        }
    ]
};
