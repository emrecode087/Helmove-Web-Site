import { PageLayout } from "../components/PageLayout";
import { useTranslation } from "react-i18next";

export function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <PageLayout title={t("privacy_policy")} subtitle={t("legal")}>
      <div className="space-y-6 text-gray-400 leading-relaxed">
        <section>
          <p>{t("privacy_policy_page.intro")}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("privacy_policy_page.section1_title")}</h3>
          <p>{t("privacy_policy_page.section1_content")}</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>{t("privacy_policy_page.profile_info")}</li>
            <li>{t("privacy_policy_page.geo_location")}</li>
            <li>{t("privacy_policy_page.media_content")}</li>
            <li>{t("privacy_policy_page.device_data")}</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("privacy_policy_page.section2_title")}</h3>
          <p>{t("privacy_policy_page.section2_content")}</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>{t("privacy_policy_page.use_case_1")}</li>
            <li>{t("privacy_policy_page.use_case_2")}</li>
            <li>{t("privacy_policy_page.use_case_3")}</li>
            <li>{t("privacy_policy_page.use_case_4")}</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("privacy_policy_page.section3_title")}</h3>
          <p>{t("privacy_policy_page.section3_content")}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("privacy_policy_page.section4_title")}</h3>
          <p>{t("privacy_policy_page.section4_content")}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("privacy_policy_page.section5_title")}</h3>
          <p>
            {t("privacy_policy_page.section5_content")} 
            <a href="mailto:destek@Helmove.app" className="text-primary ml-1 hover:underline">
              destek@Helmove.app
            </a>
          </p>
        </section>

        <footer className="mt-8 pt-8 border-t border-white/10 flex flex-col space-y-2">
          <p className="text-sm text-gray-500">
            {t("last_updated")}: March 6, 2026
          </p>
          <p className="text-xs text-gray-600 italic">
            {t("privacy_policy_page.footer")}
          </p>
        </footer>
      </div>
    </PageLayout>
  );
}

