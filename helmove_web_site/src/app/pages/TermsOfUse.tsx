import { PageLayout } from "../components/PageLayout";
import { useTranslation } from "react-i18next";

export function TermsOfUse() {
  const { t, i18n } = useTranslation();

  return (
    <PageLayout title={t("terms_of_use").toLocaleUpperCase(i18n.language)} subtitle={t("legal").toLocaleUpperCase(i18n.language)}>
      <div className="space-y-6 text-gray-400 leading-relaxed">
        <section>
          <p>{t("terms_of_use_page.intro")}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section1_title")}</h3>
          <p>{t("terms_of_use_page.section1_content")}</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>{t("terms_of_use_page.safety_1")}</li>
            <li>{t("terms_of_use_page.safety_2")}</li>
            <li>{t("terms_of_use_page.safety_3")}</li>
            <li>{t("terms_of_use_page.safety_4")}</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section2_title")}</h3>
          <p>{t("terms_of_use_page.section2_content")}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section3_title")}</h3>
          <p>{t("terms_of_use_page.section3_content")}</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>{t("terms_of_use_page.conduct_1")}</li>
            <li>{t("terms_of_use_page.conduct_2")}</li>
            <li>{t("terms_of_use_page.conduct_3")}</li>
            <li>{t("terms_of_use_page.conduct_4")}</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section4_title")}</h3>
          <p>{t("terms_of_use_page.section4_content")}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section5_title")}</h3>
          <p>
            {t("terms_of_use_page.section5_content")} 
            <a href="mailto:yasal@Helmove.app" className="text-primary ml-1 hover:underline">
              yasal@Helmove.app
            </a>
          </p>
        </section>

        <footer className="mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            {t("last_updated")}: March 6, 2026
          </p>
        </footer>
      </div>
    </PageLayout>
  );
}

