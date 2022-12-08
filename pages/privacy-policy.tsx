import { url } from "lib/util";

import Link from "next/link";
import { Page } from "@unflexible/ui-next-page";
import { Stacked, Columns, Block, PlainText } from "@unflexible/ui-core";
import { Scaffold, Sidebar, Footer } from "components/layout";
import { PageHeading } from "components/heading";

export default function PlivacyPolicyPage() {
  return (
    <Page
      title="個人情報保護方針 | Studio.Suiro（スタジオ・スイロ）"
      description="群馬県高崎市のシステム開発サービスStudio.Suiro（スタジオ・スイロ）の個人情報保護方針です。「ことば」を大切にしたWebサイトを制作しています。他にも、誰でも使えるシステムや誰にでも伝わるデザインを作るのが得意です。"
      path={url("privacy-policy")}
      color="#fafafa"
      ogImage={url("images/og.png")}
      ogType="article"
    >
      <Scaffold
        title="個人情報保護方針 | 群馬県高崎市でシステム開発ならStudio.Suiro（スタジオ・スイロ）"
        sidebar={<Sidebar />}
        footer={<Footer />}
      >
        <PageHeading name="個人情報保護方針" />

        <section>
          <Stacked padding={{ xl: [3, 3], xs: [2, 2] }} wrap>
            <Columns justify="flex-start">
              <Block width={{ xl: "640px" }} maxWidth="100%">
                <PlainText>
                  <p>
                    当社は、以下の通り個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
                  </p>

                  <h2>個人情報の管理</h2>
                  <p>
                    当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
                  </p>

                  <h2>個人情報の利用目的</h2>
                  <p>
                    本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、E-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
                  </p>
                  <p>
                    お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
                  </p>

                  <h2>個人情報の第三者への開示・提供の禁止</h2>
                  <p>
                    当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                  </p>
                  <ul>
                    <li>お客さまの同意がある場合</li>
                    <li>
                      お客さまが希望されるサービスを行うために当社が業務を委託する業者に対して開示する場合
                    </li>
                    <li>法令に基づき開示することが必要である場合</li>
                  </ul>

                  <h2>個人情報の安全対策</h2>
                  <p>
                    当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                  </p>

                  <h2>ご本人の照会</h2>
                  <p>
                    お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                  </p>

                  <h2>法令、規範の遵守と見直し</h2>
                  <p>
                    当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
                  </p>

                  <h2>Cookieについて</h2>
                  <p>
                    当社は、当社のウェブサイトをより一層便利にご利用いただけるよう、サイトの中にCookies（クッキー）を使用する場合がありますが、Cookiesによって個人を特定できる情報を得ることはありません。
                  </p>

                  <h2>お問い合わせ</h2>
                  <p>
                    <Link href={url("contact")}>お問い合わせフォーム</Link>
                    よりお問い合わせください。
                  </p>
                </PlainText>
              </Block>
            </Columns>
          </Stacked>
        </section>
      </Scaffold>
    </Page>
  );
}
