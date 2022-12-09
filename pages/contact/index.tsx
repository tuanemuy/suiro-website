import Link from "next/link";
import { Page } from "@unflexible/ui-next-page";
import { Stacked, Columns, Block, PlainText } from "@unflexible/ui-core";
import { Scaffold, Sidebar, Footer } from "components/layout";
import { PageHeading } from "components/heading";
import { Form } from "components/form";
import { Loader } from "components/indicator";
import { Panel } from "components/modal";

import { useState } from "react";
import { useRouter } from "next/router";
import { url } from "lib/util";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type Field = {
  name: string;
  email: string;
  reEmail: string;
  message: string;
  privacy: boolean;
};

export default function ContactPage() {
  const router = useRouter();

  const schema: Yup.SchemaOf<Field> = Yup.object().shape({
    name: Yup.string()
      .required("入力してください")
      .max(50, "50文字以内で入力してください"),
    email: Yup.string()
      .required("入力してください")
      .email("メールアドレスの形式が正しくありません"),
    reEmail: Yup.string()
      .required("入力してください")
      .oneOf([Yup.ref("email")], "メールアドレスが一致しません"),
    message: Yup.string().required("入力してください"),
    privacy: Yup.boolean()
      .required("同意が必要です")
      .oneOf([true], "同意が必要です"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Field>({
    resolver: yupResolver(schema),
  });

  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Field> = async (input) => {
    // @ts-ignore
    if (!window.grecaptcha) {
      setMessage(
        "上手く問い合わせできませんでした。<br/>もう一度お試しください。"
      );
      return;
    }

    setIsBusy(true);

    // @ts-ignore
    window.grecaptcha.ready(async () => {
      try {
        // @ts-ignore
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
          { action: "homepage" }
        );

        const result = await fetch(url("api/contact"), {
          method: "POST",
          body: JSON.stringify({ ...input, token }),
        });
        const data = await result.json();

        if (data.isSuccess) {
          router.push(url("contact/thanks"));
        } else {
          throw new Error(data.error);
        }
      } catch (e) {
        console.error(e);
        setIsBusy(false);
        setMessage(
          "上手く問い合わせできませんでした。<br/>もう一度お試しください。"
        );
      }
    });

    setIsBusy(false);
  };

  return (
    <Page
      title="お問い合わせ | Studio.Suiro（スタジオ・スイロ）"
      description="群馬県高崎市のシステム開発サービスStudio.Suiro（スタジオ・スイロ）のお問い合わせページです。「ことば」を大切にしたWebサイトを制作しています。他にも、誰でも使えるシステムや誰にでも伝わるデザインを作るのが得意です。"
      path={url("contact")}
      color="#fafafa"
      ogImage={url("images/og.png")}
      ogType="article"
    >
      <Scaffold
        title="お問い合わせ | 群馬県高崎市でシステム開発ならStudio.Suiro（スタジオ・スイロ）"
        sidebar={<Sidebar />}
        footer={<Footer />}
        modal={
          (isBusy || message !== null) && (
            <>
              {isBusy && <Loader />}
              {message && (
                <Panel onDismiss={() => setMessage(null)}>
                  <PlainText textAlign={{ p: "center" }}>
                    <p dangerouslySetInnerHTML={{ __html: message }} />
                  </PlainText>
                </Panel>
              )}
            </>
          )
        }
      >
        <PageHeading name="お問い合わせ" />

        <section>
          <Stacked padding={{ xl: [3, 3], xs: [2, 2] }} wrap>
            <Columns justify="flex-start">
              <Block width={{ xl: "640px" }} maxWidth="100%">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className="line">
                    <div className="label required">
                      <label htmlFor="name">お名前</label>
                    </div>

                    <div className="input">
                      <input id="name" type="text" {...register("name")} />
                    </div>

                    {errors.name && (
                      <p className="error">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="line">
                    <div className="label required">
                      <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="input">
                      <input id="email" type="email" {...register("email")} />
                    </div>

                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="line">
                    <div className="label required">
                      <label htmlFor="re-email">E-mail（再入力）</label>
                    </div>

                    <div className="input">
                      <input
                        id="re-email"
                        type="email"
                        {...register("reEmail")}
                      />
                    </div>

                    {errors.reEmail && (
                      <p className="error">{errors.reEmail.message}</p>
                    )}
                  </div>

                  <div className="line">
                    <div className="label required">
                      <label htmlFor="name">お問い合わせ内容</label>
                    </div>

                    <div className="input">
                      <textarea
                        id="message"
                        rows={8}
                        {...register("message")}
                      ></textarea>
                    </div>

                    {errors.message && (
                      <p className="error">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="line">
                    <div className="input checkbox">
                      <input
                        id="privacy"
                        type="checkbox"
                        {...register("privacy")}
                      />
                      <label htmlFor="privacy">
                        <Link href={url("privacy-policy")} target="_blank">
                          個人情報保護方針
                        </Link>
                        に同意します
                      </label>
                    </div>

                    {errors.privacy && (
                      <p className="error">{errors.privacy.message}</p>
                    )}
                  </div>

                  <div className="line">
                    <p className="en note">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <Link
                        href="https://policies.google.com/privacy"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="https://policies.google.com/terms"
                        target="_blank"
                      >
                        Terms of Service
                      </Link>{" "}
                      apply.
                    </p>
                  </div>
                </Form>
              </Block>
            </Columns>
          </Stacked>
        </section>
      </Scaffold>
    </Page>
  );
}
