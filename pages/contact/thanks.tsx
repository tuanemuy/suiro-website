import { url } from "lib/util";
import { color } from "config";

import { Page } from "@unflexible/ui-next-page";
import { Stacked, PlainText } from "@unflexible/ui-core";
import { Scaffold, Sidebar, Footer } from "components/layout";
import { PageHeading } from "components/heading";
import { Button01 } from "components/button";

export default function ContactThanksPage() {
  return (
    <Page
      title="お問い合わせ完了 | Studio.Suiro（スタジオ・スイロ）"
      description="群馬県高崎市のシステム開発サービスStudio.Suiro（スタジオ・スイロ）のお問い合わせページです。「ことば」を大切にしたWebサイトを制作しています。他にも、誰でも使えるシステムや誰にでも伝わるデザインを作るのが得意です。"
      path={url("contact/thanks")}
      color="#fafafa"
      ogImage={url("images/og.png")}
      ogType="article"
    >
      <Scaffold
        title="お問い合わせ完了 | 群馬県高崎市でシステム開発ならStudio.Suiro（スタジオ・スイロ）"
        sidebar={<Sidebar />}
        footer={<Footer />}
      >
        <PageHeading name="お問い合わせ" />

        <section>
          <Stacked padding={{ xl: [3, 3], xs: [2, 2] }} wrap>
            <Stacked>
              <PlainText>
                <h3>問い合わせが完了しました</h3>
                <p>
                  スタジオ・スイロへのお問い合わせ誠にありがとうございます。
                  <br />
                  返信があるまで、今しばらくお待ちください。
                </p>
              </PlainText>
            </Stacked>

            <Stacked padding={{ xl: [2, 0], xs: [1, 0] }}>
              <Button01
                name="ホームに戻る"
                sub="Back to home"
                kind="link"
                href={url("")}
                color={color.accent}
              />
            </Stacked>
          </Stacked>
        </section>
      </Scaffold>
    </Page>
  );
}
