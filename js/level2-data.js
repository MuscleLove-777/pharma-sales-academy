/* ============================================
   Level 2: ターゲティングと事前準備
   ============================================ */
const LEVEL2_DATA = {
    id: 2,
    title: "ターゲティングと事前準備",
    icon: "🎯",
    description: "効果的な営業活動のためのターゲット選定と情報収集手法を習得する",
    modules: [
        {
            id: 201,
            title: "エリア分析とマーケット理解",
            duration: "12分",
            content: `
<h2>エリアマーケティングの基本</h2>
<p>MRの営業成績は<strong>担当エリアの市場理解</strong>から始まります。闇雲に訪問するのではなく、データに基づいた戦略的なアプローチが必要です。</p>

<h3>エリア分析で把握すべき情報</h3>
<table>
<tr><th>分析項目</th><th>具体的な内容</th><th>情報源</th></tr>
<tr><td><strong>市場規模</strong></td><td>担当エリアの対象疾患患者数</td><td>疫学データ、国勢調査</td></tr>
<tr><td><strong>処方動向</strong></td><td>自社品・競合品のシェア推移</td><td>IMS/IQVIAデータ、卸データ</td></tr>
<tr><td><strong>施設構成</strong></td><td>病院・クリニック・薬局の分布</td><td>施設データベース</td></tr>
<tr><td><strong>医師構成</strong></td><td>専門医数、処方ポテンシャル</td><td>医師データベース、学会名簿</td></tr>
<tr><td><strong>競合活動</strong></td><td>競合MRの訪問頻度・活動内容</td><td>卸MS情報、薬局情報</td></tr>
</table>

<h2>処方ポテンシャル分析</h2>
<p>全ての医師に同じ頻度で訪問するのは非効率です。<strong>処方ポテンシャル</strong>（その医師が自社製品を処方する可能性と量）で優先順位をつけます。</p>

<h3>デシル分析</h3>
<p>医師を処方ポテンシャルで<strong>10段階にランク分け</strong>する手法です。</p>
<ul>
<li><strong>上位20%（デシル1-2）:</strong> 全処方の約60-70%を占める。最重点ターゲット</li>
<li><strong>中位30%（デシル3-5）:</strong> 成長余地あり。攻めどころ</li>
<li><strong>下位50%（デシル6-10）:</strong> 効率重視。必要最小限の対応</li>
</ul>

<div class="info-box formula">
<div class="info-box-title">パレートの法則（80:20の法則）</div>
製薬営業でも「上位20%の医師が処方の80%を占める」という傾向があります。限られた時間を上位ターゲットに集中投下することが、営業成果を最大化する鍵です。
</div>

<h2>ペイシェントフロー分析</h2>
<p>患者がどのように医療機関を受診し、どの段階で処方が決定されるかの流れを把握します。</p>

<div class="visual-box">
<div class="visual-box-title">典型的なペイシェントフロー（がん領域の例）</div>
<p style="font-size:0.9rem;">健康診断 → <strong>かかりつけ医</strong>（紹介状） → <strong>基幹病院（専門医）</strong>（確定診断・治療方針決定）→ <strong>地域病院</strong>（継続治療）→ <strong>クリニック</strong>（経過観察）</p>
</div>

<p>ペイシェントフローを理解することで、<strong>どの施設のどの医師にアプローチすべきか</strong>が明確になります。</p>
            `,
            quiz: [
                { id: "q201_1", type: "choice", question: "デシル分析の上位20%の医師が全処方の約何%を占める傾向がありますか？", options: ["約30-40%", "約50-60%", "約60-70%", "約80-90%"], answer: 2, explanation: "デシル1-2（上位20%）の医師が全処方の約60-70%を占める傾向があります。パレートの法則に近い分布です。" },
                { id: "q201_2", type: "choice", question: "ペイシェントフロー分析の目的として最も適切なのはどれですか？", options: ["薬価を予測する", "どの施設のどの医師にアプローチすべきか明確にする", "MR数を決定する", "卸の配送ルートを最適化する"], answer: 1, explanation: "ペイシェントフロー分析により、患者の流れの中で処方決定に影響力を持つ医師・施設を特定できます。" },
                { id: "q201_3", type: "fill", question: "医師を処方ポテンシャルで10段階にランク分けする手法を○○○分析と呼びます。", answer: "デシル", explanation: "デシル分析は医師を10段階にランク分けし、営業リソースの最適配分を実現する手法です。" }
            ]
        },
        {
            id: 202,
            title: "KOLマネジメント",
            duration: "12分",
            content: `
<h2>KOL（Key Opinion Leader）とは</h2>
<p>KOLとは、<strong>学会や治療方針に影響力を持つ医師</strong>のことです。KOLの処方行動や発言は、周囲の医師の処方パターンに大きな影響を与えます。</p>

<h3>KOLの分類</h3>
<table>
<tr><th>レベル</th><th>影響範囲</th><th>特徴</th></tr>
<tr><td><strong>ナショナルKOL</strong></td><td>全国レベル</td><td>学会理事、ガイドライン作成委員、大学教授</td></tr>
<tr><td><strong>リージョナルKOL</strong></td><td>地域レベル</td><td>地域基幹病院の部長、地方学会の役員</td></tr>
<tr><td><strong>ローカルKOL</strong></td><td>地元レベル</td><td>地域の医師会で影響力を持つ開業医</td></tr>
</table>

<h2>KOL特定の方法</h2>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>学会活動の調査</strong>学会での発表歴、座長経験、ガイドライン委員歴を確認。学会のWebサイトや抄録集が情報源。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>論文発表の分析</strong>PubMedやGoogle Scholarで対象疾患領域の論文著者を調査。筆頭著者・責任著者の頻度を確認。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>処方データの分析</strong>IMS/IQVIAデータで処方量の多い医師を特定。処方量が多い＝影響力が大きいとは限らない点に注意。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>社内情報の活用</strong>MSL（メディカルサイエンスリエゾン）やマーケティング部門からの情報。過去の講演依頼実績。</div></div>
</div>

<h2>KOLとの関係構築</h2>
<div class="info-box success">
<div class="info-box-title">KOLリレーション構築のポイント</div>
<ol>
<li><strong>Give first:</strong> まず先に価値を提供する（学会情報、論文、症例相談のコーディネート等）</li>
<li><strong>医学的議論ができるレベル:</strong> KOLは「売り込み」を嫌い「科学的議論」を歓迎する</li>
<li><strong>長期視点:</strong> 短期の処方獲得ではなく、3〜5年の関係構築を目指す</li>
<li><strong>社内リソースの活用:</strong> MSLやメディカルアフェアーズとの連携で医学的な深い対話を実現</li>
<li><strong>講演会への登壇依頼:</strong> KOLの専門性を活かす場を提供（コンプライアンス遵守）</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">KOLマネジメントの注意点</div>
KOLへの過度な便宜供与や不透明な関係は、コンプライアンス上のリスクとなります。全ての支払い（講演料、コンサルティング料等）は透明性ガイドラインに基づき公開されることを常に意識しましょう。
</div>
            `,
            quiz: [
                { id: "q202_1", type: "choice", question: "ナショナルKOLの特徴として最も適切なのはどれですか？", options: ["地域の医師会長", "大学教授やガイドライン作成委員", "処方量が最も多い開業医", "卸のMS"], answer: 1, explanation: "ナショナルKOLは全国レベルで影響力を持つ医師で、学会理事、ガイドライン作成委員、大学教授などが該当します。" },
                { id: "q202_2", type: "choice", question: "KOLとの関係構築で最も重要な姿勢はどれですか？", options: ["処方量の増加を直接依頼する", "科学的議論ができるレベルで長期的な関係を構築する", "高額な接待で信頼を得る", "競合品の悪口で自社品を推す"], answer: 1, explanation: "KOLは「売り込み」を嫌い「科学的議論」を歓迎します。医学的な対話ができるレベルを目指し、長期視点で関係を構築することが重要です。" },
                { id: "q202_3", type: "fill", question: "メディカル・サイエンス・リエゾンの略称は？（アルファベット3文字）", answer: "MSL", explanation: "MSL（Medical Science Liaison）は医学的な観点からKOLと学術的な対話を行う専門職で、MRと連携してKOLリレーションを構築します。" }
            ]
        },
        {
            id: 203,
            title: "訪問計画の立て方",
            duration: "10分",
            content: `
<h2>戦略的訪問計画の策定</h2>
<p>効率的なMR活動の鍵は<strong>「誰に・いつ・何を・どのくらいの頻度で」</strong>訪問するかの計画です。</p>

<h3>訪問頻度の設計</h3>
<table>
<tr><th>ターゲットランク</th><th>月間訪問頻度</th><th>面談目標</th></tr>
<tr><td><strong>Aランク（最重点）</strong></td><td>週1〜2回</td><td>毎回面談を目指す</td></tr>
<tr><td><strong>Bランク（重点）</strong></td><td>月2〜3回</td><td>隔週で面談</td></tr>
<tr><td><strong>Cランク（標準）</strong></td><td>月1回</td><td>月1回の面談</td></tr>
<tr><td><strong>Dランク（維持）</strong></td><td>2〜3ヶ月に1回</td><td>関係維持</td></tr>
</table>

<h2>プレコール（訪問前準備）</h2>
<p>効果的な面談のためには<strong>訪問前の入念な準備</strong>が不可欠です。</p>

<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>前回面談の振り返り</strong>CRMで前回の面談内容を確認。前回のキーメッセージ、医師の反応、宿題を把握。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>今回の面談目的の設定</strong>「何を伝え、どんな反応を得たいか」を明確にする。SMART目標で設定。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>持参資材の準備</strong>添付文書、最新論文、プレゼン資材など。医師のニーズに合わせてカスタマイズ。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>想定問答の準備</strong>予想される質問や反論に対する回答を事前に準備。特に競合品との比較質問。</div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><strong>最新情報のチェック</strong>学会発表、ガイドライン改訂、競合品の動向など直近の変化を確認。</div></div>
</div>

<h2>週間スケジュールの組み方</h2>
<div class="info-box tip">
<div class="info-box-title">効率的なスケジューリングのコツ</div>
<ul>
<li><strong>午前:</strong> 病院訪問（外来前の朝駆け、医局訪問）</li>
<li><strong>昼:</strong> 説明会（ランチョンセミナー）を週2〜3回設定</li>
<li><strong>午後前半:</strong> クリニック・薬局訪問</li>
<li><strong>午後後半:</strong> 病院（外来終了後の面会待ち）</li>
<li><strong>金曜午後:</strong> 翌週の計画策定と事務作業</li>
<li><strong>移動時間の最小化:</strong> 地理的に近い施設をグルーピングして訪問</li>
</ul>
</div>

<h2>アフターコール（訪問後の振り返り）</h2>
<ul>
<li>面談内容をCRMに即日記録（記憶が新鮮なうちに）</li>
<li>医師の反応・質問・関心事を記録</li>
<li>次回の面談計画を更新</li>
<li>宿題があれば即座に対応開始</li>
<li>必要に応じて社内（学術、マーケティング）に情報共有</li>
</ul>
            `,
            quiz: [
                { id: "q203_1", type: "choice", question: "Aランクターゲットへの推奨訪問頻度はどのくらいですか？", options: ["月1回", "月2〜3回", "週1〜2回", "毎日"], answer: 2, explanation: "Aランク（最重点）ターゲットには週1〜2回の訪問で、毎回面談を目指します。" },
                { id: "q203_2", type: "choice", question: "プレコールで最初に行うべきことはどれですか？", options: ["資材の準備", "前回面談の振り返り（CRM確認）", "競合品の分析", "説明会の日程調整"], answer: 1, explanation: "プレコールではまずCRMで前回の面談内容を確認し、前回のキーメッセージ、医師の反応、宿題を把握することから始めます。" },
                { id: "q203_3", type: "fill", question: "訪問前の事前準備活動を製薬営業では何と呼びますか？", answer: "プレコール", explanation: "プレコール（Pre-call）は医師訪問前の事前準備活動で、効果的な面談のために不可欠なステップです。" }
            ]
        },
        {
            id: 204,
            title: "競合分析の手法",
            duration: "10分",
            content: `
<h2>競合品分析の重要性</h2>
<p>MRは自社品だけでなく<strong>競合品の特性も深く理解</strong>する必要があります。医師は常に治療選択肢を比較検討しており、「なぜ自社品がベストなのか」を論理的に説明できなければなりません。</p>

<h2>競合品分析のフレームワーク</h2>
<table>
<tr><th>分析項目</th><th>自社品</th><th>競合品A</th><th>競合品B</th></tr>
<tr><td>作用機序</td><td>記入</td><td>記入</td><td>記入</td></tr>
<tr><td>有効性（主要評価項目）</td><td>記入</td><td>記入</td><td>記入</td></tr>
<tr><td>安全性プロファイル</td><td>記入</td><td>記入</td><td>記入</td></tr>
<tr><td>用法・用量</td><td>記入</td><td>記入</td><td>記入</td></tr>
<tr><td>薬価</td><td>記入</td><td>記入</td><td>記入</td></tr>
<tr><td>ガイドライン上の位置づけ</td><td>記入</td><td>記入</td><td>記入</td></tr>
</table>

<h2>差別化ポイントの見つけ方</h2>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>臨床試験のHead-to-Head比較</strong>直接比較試験があれば最強のエビデンス。ない場合はクロストライアル比較（注意が必要）。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>安全性プロファイルの違い</strong>副作用の種類・頻度の違いは差別化の重要ポイント。特に長期投与の安全性。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>利便性の違い</strong>投与頻度、剤形、食事の影響、腎機能・肝機能障害時の用量調節。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>患者背景別の適性</strong>高齢者、腎機能低下患者、併用薬が多い患者など、特定の患者群での優位性。</div></div>
</div>

<div class="info-box warning">
<div class="info-box-title">競合分析の注意点</div>
<ul>
<li>競合品の誹謗中傷は<strong>プロモーションコード違反</strong></li>
<li>「○○は良くない」ではなく「自社品は○○の点で優れている」というポジティブな表現で</li>
<li>エビデンスに基づかない主張は絶対NG</li>
<li>試験デザインの違いを無視した安易な比較は信頼を失う</li>
</ul>
</div>

<h2>SOV（Share of Voice）分析</h2>
<p>SOVは<strong>医師に届く情報量における自社のシェア</strong>を指します。</p>
<ul>
<li>自社MRの訪問回数 ÷ 全CRO訪問回数 = SOV</li>
<li>SOVが高いほど処方シェアも高くなる傾向（ただし情報の質も重要）</li>
<li>競合のSOVを上回ることが処方獲得の基本戦略</li>
</ul>
            `,
            quiz: [
                { id: "q204_1", type: "choice", question: "競合品を分析する際にやってはいけないことはどれですか？", options: ["臨床試験データの比較", "エビデンスに基づかない競合品の誹謗中傷", "安全性プロファイルの比較", "ガイドライン上の位置づけの確認"], answer: 1, explanation: "競合品の誹謗中傷はプロモーションコード違反です。ポジティブな差別化表現を用い、エビデンスに基づいた比較を行う必要があります。" },
                { id: "q204_2", type: "fill", question: "医師に届く情報量における自社のシェアを表す指標の略称は？（アルファベット3文字）", answer: "SOV", explanation: "SOV（Share of Voice）は医師に届く情報量における自社のシェアで、処方シェアと相関する重要指標です。" },
                { id: "q204_3", type: "choice", question: "競合品との差別化で最も強力なエビデンスはどれですか？", options: ["症例報告", "メタアナリシス", "直接比較試験（Head-to-Head）", "エキスパートオピニオン"], answer: 2, explanation: "直接比較試験（Head-to-Head）は2つの薬剤を同一試験で比較するため、最も強力な差別化エビデンスとなります。" }
            ]
        }
    ]
};
