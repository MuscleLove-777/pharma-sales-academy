/* ============================================
   Level 1: 製薬営業の基礎知識
   ============================================ */
const LEVEL1_DATA = {
    id: 1,
    title: "製薬営業の基礎知識",
    icon: "💊",
    description: "MRの役割、製薬業界の構造、コンプライアンスの基本を理解する",
    modules: [
        {
            id: 101,
            title: "MRとは何か",
            duration: "12分",
            content: `
<h2>MR（医薬情報担当者）の定義</h2>
<p>MR（Medical Representative）は、<strong>医療従事者に対して医薬品の品質・有効性・安全性に関する情報を提供し、収集する</strong>ことを職務とする専門職です。一般的な営業職とは異なり、「売る」のではなく「情報を届ける」ことが本質です。</p>

<div class="info-box tip">
<div class="info-box-title">MRの法的位置づけ</div>
<ul>
<li>薬機法において「医薬情報担当者」として位置づけ</li>
<li>MR認定制度（MR認定センター）による資格認定</li>
<li>医薬品の適正使用のために必要な情報提供が義務</li>
<li>価格交渉や値引き交渉は行わない（MSとの違い）</li>
</ul>
</div>

<h2>MRとMS（医薬品卸営業）の違い</h2>
<table>
<tr><th>項目</th><th>MR</th><th>MS</th></tr>
<tr><td>所属</td><td>製薬企業</td><td>医薬品卸売業</td></tr>
<tr><td>主な役割</td><td>医薬品情報の提供・収集</td><td>医薬品の受注・配送・価格交渉</td></tr>
<tr><td>対象</td><td>医師・薬剤師</td><td>医療機関・調剤薬局</td></tr>
<tr><td>取扱品目</td><td>自社製品のみ</td><td>複数メーカーの製品</td></tr>
<tr><td>価格交渉</td><td>行わない</td><td>行う</td></tr>
</table>

<h2>MRの1日の流れ</h2>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>7:30 - 朝の準備</strong>メール確認、当日の訪問計画最終確認、資材準備。CRMシステムで前回面談記録を確認。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>8:30 - 卸朝礼参加</strong>担当卸のMS朝礼に参加し、製品情報の共有や市場情報の収集。MSとの関係構築。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>9:30 - 午前の施設訪問</strong>病院の外来開始前の「朝駆け」訪問。待合室で医師を待ち、短時間でのディテーリング。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>12:00 - 昼の説明会</strong>弁当持参の院内説明会（ランチョンセミナー）。10〜15分のプレゼンテーション。</div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><strong>14:00 - 午後の訪問</strong>クリニック、調剤薬局、次の病院を回る。処方情報の収集やフォローアップ。</div></div>
<div class="step"><div class="step-num">6</div><div class="step-content"><strong>17:00 - 夕方の面会</strong>外来終了後の医師を待ち面会。夕方は比較的長い時間をいただけることが多い。</div></div>
<div class="step"><div class="step-num">7</div><div class="step-content"><strong>19:00 - 日報・事務作業</strong>CRMへの面談記録入力、翌日の準備、メール対応、社内報告。</div></div>
</div>

<h2>MR数の推移と現状</h2>
<p>日本のMR数はピークの<strong>2013年（約65,000人）</strong>から減少を続け、現在は<strong>約49,000人</strong>まで縮小しています。約25%の減少です。</p>

<div class="info-box warning">
<div class="info-box-title">MR減少の背景</div>
<ul>
<li>デジタルチャネル（Web面談・メール等）の普及</li>
<li>COVID-19以降の医療機関のアクセス制限</li>
<li>製薬企業のコスト効率化</li>
<li>後発医薬品（ジェネリック）シフトによるプロモーション不要化</li>
</ul>
</div>
            `,
            quiz: [
                { id: "q101_1", type: "choice", question: "MRの主な役割として最も適切なものはどれですか？", options: ["医薬品の価格交渉", "医薬品情報の提供と収集", "医薬品の配送管理", "医薬品の製造管理"], answer: 1, explanation: "MRの本質的な役割は医療従事者に対して医薬品の品質・有効性・安全性に関する情報を提供し、収集することです。" },
                { id: "q101_2", type: "choice", question: "価格交渉を行うのはMRとMSのどちらですか？", options: ["MR", "MS", "両方", "どちらも行わない"], answer: 1, explanation: "価格交渉を行うのはMS（医薬品卸営業）です。MRは情報提供に徹し、価格交渉は行いません。" },
                { id: "q101_3", type: "choice", question: "日本のMR数はピーク時の約65,000人から現在約何人に減少していますか？", options: ["約55,000人", "約49,000人", "約42,000人", "約35,000人"], answer: 1, explanation: "日本のMR数は2013年のピーク時（約65,000人）から約49,000人まで、約25%減少しています。" },
                { id: "q101_4", type: "fill", question: "MRの正式な英語名称は Medical _____ です。（英単語1語）", answer: "Representative", explanation: "MRはMedical Representative（医薬情報担当者）の略称です。" }
            ]
        },
        {
            id: 102,
            title: "製薬業界の構造理解",
            duration: "12分",
            content: `
<h2>製薬業界のプレイヤー</h2>
<p>MRとして活動するには、製薬業界全体の構造を理解することが不可欠です。</p>

<div class="visual-box">
<div class="visual-box-title">製薬業界の主要プレイヤー</div>
<div style="text-align:left;max-width:550px;margin:0 auto;font-size:0.85rem;">
<p><strong>【開発・製造】</strong> 製薬企業（内資系・外資系）</p>
<p><strong>【流通】</strong> 医薬品卸（アルフレッサ、メディパル、スズケン、東邦HD）</p>
<p><strong>【処方・使用】</strong> 医療機関（病院・クリニック）、調剤薬局</p>
<p><strong>【審査・規制】</strong> 厚労省、PMDA、都道府県</p>
<p><strong>【支払】</strong> 健康保険組合、国民健康保険、後期高齢者医療</p>
<p><strong>【情報】</strong> 学会、ガイドライン委員会、KOL</p>
</div>
</div>

<h2>医薬品の分類</h2>
<table>
<tr><th>分類</th><th>特徴</th><th>MRの関わり</th></tr>
<tr><td><strong>新薬（先発品）</strong></td><td>特許保護期間中の医薬品</td><td>最も重要。積極的なプロモーション対象</td></tr>
<tr><td><strong>長期収載品</strong></td><td>特許切れの先発品</td><td>ジェネリック浸透で売上減少。守りの営業</td></tr>
<tr><td><strong>後発品（GE）</strong></td><td>ジェネリック医薬品</td><td>価格競争が中心。MR訪問は少ない</td></tr>
<tr><td><strong>OTC医薬品</strong></td><td>市販薬</td><td>MR対象外（一般消費者向け）</td></tr>
</table>

<h2>薬価制度の基本</h2>
<p>日本の医薬品は<strong>公定価格（薬価）</strong>が国により決定されます。MRが理解すべきポイント：</p>
<ul>
<li><strong>薬価収載:</strong> 新薬が保険適用される際に薬価が決定</li>
<li><strong>薬価改定:</strong> 原則2年ごとに薬価が引き下げ（近年は毎年中間年改定も）</li>
<li><strong>市場拡大再算定:</strong> 売上が予想を大きく上回ると追加の薬価引き下げ</li>
<li><strong>費用対効果評価:</strong> 高額薬には費用対効果が適用される場合あり</li>
</ul>

<div class="info-box danger">
<div class="info-box-title">薬価改定がMRに与える影響</div>
薬価引き下げは製薬企業の売上に直結します。MRは薬価改定の影響を理解し、「薬価が下がっても価値がある」ことを医師に伝えられる必要があります。また、新薬の上市時には薬価の高さが処方障壁になることもあり、医療経済的な情報提供が重要になっています。
</div>

<h2>主要な製薬企業（日本市場）</h2>
<h3>内資系大手</h3>
<p>武田薬品、アステラス、第一三共、エーザイ、中外製薬、小野薬品、塩野義、大塚製薬、住友ファーマ</p>
<h3>外資系大手</h3>
<p>ファイザー、MSD、ノバルティス、ロシュ、アストラゼネカ、ブリストル・マイヤーズ、ヤンセン、リリー、サノフィ、アッヴィ</p>
            `,
            quiz: [
                { id: "q102_1", type: "choice", question: "日本の医薬品4大卸に含まれないのはどれですか？", options: ["アルフレッサ", "メディパル", "テルモ", "スズケン"], answer: 2, explanation: "テルモは医療機器メーカーであり、医薬品卸ではありません。4大卸はアルフレッサ、メディパル、スズケン、東邦HDです。" },
                { id: "q102_2", type: "choice", question: "MRが最も積極的にプロモーションを行う医薬品分類はどれですか？", options: ["後発品", "OTC医薬品", "新薬（先発品）", "長期収載品"], answer: 2, explanation: "新薬（先発品）が最も重要なプロモーション対象です。特許保護期間中に市場シェアを確立することが目標です。" },
                { id: "q102_3", type: "choice", question: "日本の薬価改定は原則何年ごとに行われますか？", options: ["毎年", "2年ごと", "3年ごと", "5年ごと"], answer: 1, explanation: "薬価改定は原則2年ごとに行われます。近年は中間年にも改定が実施されるようになっています。" }
            ]
        },
        {
            id: 103,
            title: "コンプライアンスと倫理",
            duration: "10分",
            content: `
<h2>製薬営業のコンプライアンス</h2>
<p>製薬業界のMRは、他の営業職以上に<strong>厳格なコンプライアンス</strong>が求められます。違反は個人のキャリアだけでなく、企業の存続にも影響します。</p>

<h2>主要な規制・コード</h2>

<h3>1. 公正競争規約</h3>
<p>医療用医薬品の<strong>景品類提供</strong>に関する自主規制です。</p>
<ul>
<li><strong>提供禁止:</strong> 医療関係者への金品・物品の提供は原則禁止</li>
<li><strong>例外:</strong> 医学・薬学的な情報提供に伴う必要最小限のもの（資材、文献等）</li>
<li><strong>飲食の上限:</strong> 1人あたり2万円（講演会後の懇親会等）</li>
<li><strong>タクシー代等の交通費:</strong> 講演料に含まれない合理的な交通費は可</li>
</ul>

<h3>2. JPMAプロモーションコード</h3>
<p>日本製薬工業協会（JPMA）が定める<strong>医薬品プロモーションの自主基準</strong>です。</p>
<ul>
<li>科学的根拠に基づいた情報提供のみ許可</li>
<li>承認外の効能・効果の宣伝は禁止（<strong>オフラベルプロモーション禁止</strong>）</li>
<li>他社製品の誹謗中傷は禁止</li>
<li>臨床データの恣意的な選択・提示は禁止</li>
</ul>

<h3>3. 透明性ガイドライン</h3>
<p>製薬企業が医療関係者に支払った費用の<strong>公開義務</strong>です。</p>
<ul>
<li>講演料、コンサルティング料、原稿執筆料の公開</li>
<li>研究費の公開</li>
<li>年1回、企業のWebサイトで公開</li>
</ul>

<div class="info-box danger">
<div class="info-box-title">絶対にやってはいけないこと</div>
<ol>
<li><strong>適応外処方の推奨:</strong> 承認されていない効能・効果での使用を勧める</li>
<li><strong>過度な接待:</strong> 医療関係者への過度な飲食・贈答</li>
<li><strong>データの改ざん・捏造:</strong> 副作用情報の隠蔽やデータの恣意的選択</li>
<li><strong>キックバック:</strong> 処方量に応じた見返りの提供</li>
<li><strong>未公表データの漏洩:</strong> 社内限定のデータを医師に提供</li>
</ol>
</div>

<h2>副作用情報の収集義務</h2>
<p>MRには<strong>副作用情報の収集と報告の義務</strong>があります。これは営業成績に関係なく、最も優先される業務です。</p>
<ul>
<li>医師から副作用情報を聴取したら、即座に社内（安全管理部門）に報告</li>
<li>重篤な副作用は<strong>15日以内</strong>にPMDAに報告（企業責任）</li>
<li>「都合の悪い情報は報告しない」は重大なコンプライアンス違反</li>
</ul>

<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：コンプライアンス判断</div>
<p>医師A先生から「この薬は適応外だけど○○疾患に効くって聞いたんだけど、データある？」と聞かれた場合：</p>
<p class="bad">NG: 「はい、こういうデータがあります」と適応外のデータを積極的に紹介する</p>
<p class="good">OK: 「添付文書に記載の適応症についてご説明させていただきます。適応外使用については、先生のご判断となりますが、公表文献でしたらお調べしてお持ちすることは可能です」</p>
</div>
            `,
            quiz: [
                { id: "q103_1", type: "choice", question: "製薬企業のMRが絶対にやってはいけないことはどれですか？", options: ["競合品の情報を収集する", "承認されていない効能での使用を推奨する", "医師に副作用情報を提供する", "学会のガイドライン変更を紹介する"], answer: 1, explanation: "適応外処方の推奨（オフラベルプロモーション）は最も重大なコンプライアンス違反の一つです。" },
                { id: "q103_2", type: "choice", question: "重篤な副作用情報は何日以内にPMDAに報告する義務がありますか？", options: ["7日以内", "15日以内", "30日以内", "60日以内"], answer: 1, explanation: "重篤な副作用は15日以内にPMDAに報告する義務があります（死亡・死亡のおそれがある場合は即時報告が必要なケースもあります）。" },
                { id: "q103_3", type: "fill", question: "承認されていない効能での使用を推奨する行為を「○○○○○プロモーション」と呼びます。カタカナで答えてください。", answer: "オフラベル", explanation: "オフラベルプロモーション（off-label promotion）は薬機法およびプロモーションコードで禁止されている行為です。" }
            ]
        },
        {
            id: 104,
            title: "製品知識の習得法",
            duration: "10分",
            content: `
<h2>MRに必要な製品知識</h2>
<p>MRは自社製品の「歩く添付文書」と呼ばれるほど、<strong>深い製品知識</strong>が求められます。</p>

<h3>マスターすべき5つの知識領域</h3>
<table>
<tr><th>領域</th><th>内容</th><th>情報源</th></tr>
<tr><td><strong>疾患知識</strong></td><td>病態生理、疫学、診断基準</td><td>教科書、ガイドライン、学会</td></tr>
<tr><td><strong>製品知識</strong></td><td>作用機序、PK/PD、適応症</td><td>添付文書、IF、社内研修</td></tr>
<tr><td><strong>臨床エビデンス</strong></td><td>臨床試験結果、RWE</td><td>論文、学会発表、社内資料</td></tr>
<tr><td><strong>競合品知識</strong></td><td>競合品の特性、差別化ポイント</td><td>各社添付文書、論文比較</td></tr>
<tr><td><strong>ガイドライン</strong></td><td>治療指針における自社品の位置づけ</td><td>学会ガイドライン</td></tr>
</table>

<h2>主要な情報源</h2>

<h3>添付文書</h3>
<p>医薬品に法的に添付が義務づけられた<strong>最も基本的な公式文書</strong>です。</p>
<ul>
<li><strong>効能・効果:</strong> 承認された適応症</li>
<li><strong>用法・用量:</strong> 投与方法と推奨量</li>
<li><strong>禁忌:</strong> 絶対に使ってはいけない患者・状況</li>
<li><strong>副作用:</strong> 頻度別の副作用一覧</li>
<li><strong>相互作用:</strong> 併用注意・併用禁忌の薬剤</li>
</ul>

<h3>インタビューフォーム（IF）</h3>
<p>添付文書を補完する<strong>より詳細な情報</strong>を記載した文書です。MRの日常業務で最も参照する文書の一つ。</p>

<h3>RMP（医薬品リスク管理計画）</h3>
<p>医薬品の安全性に関する<strong>リスク管理計画</strong>。重要な特定されたリスク、潜在的リスク、不足情報を明記。</p>

<h2>製品知識の「使い方」</h2>
<div class="info-box success">
<div class="info-box-title">知識を営業に変換するコツ</div>
<ol>
<li><strong>Feature（特徴）→ Advantage（優位性）→ Benefit（利点）</strong>の流れで説明</li>
<li>例：「1日1回投与（F）→ 服薬コンプライアンス向上（A）→ 患者のQOL改善（B）」</li>
<li>医師のニーズに合わせて強調するポイントを変える</li>
<li>データは「数字」ではなく「患者にとっての意味」で伝える</li>
</ol>
</div>
            `,
            quiz: [
                { id: "q104_1", type: "choice", question: "添付文書を補完するより詳細な情報を記載した文書は何ですか？", options: ["RMP", "インタビューフォーム", "CTD", "CSR"], answer: 1, explanation: "インタビューフォーム（IF）は添付文書を補完する詳細な情報文書で、MRが日常的に参照します。" },
                { id: "q104_2", type: "choice", question: "FAB話法のBが意味するものはどれですか？", options: ["Budget（予算）", "Benefit（利点）", "Brand（ブランド）", "Barrier（障壁）"], answer: 1, explanation: "FAB話法のBはBenefit（利点）で、Feature（特徴）→Advantage（優位性）→Benefit（利点）の流れで製品価値を伝えます。" },
                { id: "q104_3", type: "choice", question: "医薬品のリスク管理計画の略称はどれですか？", options: ["GVP", "RMP", "GCP", "PMS"], answer: 1, explanation: "RMP（Risk Management Plan：医薬品リスク管理計画）は重要なリスクと安全対策を明記した計画です。" }
            ]
        }
    ]
};
