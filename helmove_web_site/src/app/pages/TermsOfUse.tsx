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

        {/* 1. Uygunluk */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section1_title")}</h3>
          <p>{t("terms_of_use_page.section1_content")}</p>
        </section>

        {/* 2. Önce Güvenlik */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section2_title")}</h3>
          <p>{t("terms_of_use_page.section2_content")}</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>{t("terms_of_use_page.safety_rule_1")}</li>
            <li>{t("terms_of_use_page.safety_rule_2")}</li>
            <li>{t("terms_of_use_page.safety_rule_3")}</li>
            <li>{t("terms_of_use_page.safety_rule_4")}</li>
          </ul>
        </section>

        {/* 3. UGC */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section3_title")}</h3>
          <p>{t("terms_of_use_page.section3_content")}</p>
        </section>

        {/* 4. Sıfır Tolerans */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section4_title")}</h3>
          <p>{t("terms_of_use_page.section4_content")}</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>{t("terms_of_use_page.conduct_1")}</li>
            <li>{t("terms_of_use_page.conduct_2")}</li>
            <li>{t("terms_of_use_page.conduct_3")}</li>
            <li>{t("terms_of_use_page.conduct_4")}</li>
            <li>{t("terms_of_use_page.conduct_5")}</li>
          </ul>
        </section>

        {/* 5. Moderasyon */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section5_title")}</h3>
          <p className="mb-3">{t("terms_of_use_page.section5_content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("terms_of_use_page.moderation_removal")}</li>
            <li>{t("terms_of_use_page.moderation_ban")}</li>
          </ul>
        </section>

        {/* 6. Şikayet ve Engelleme */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section6_title")}</h3>
          <p className="mb-3">{t("terms_of_use_page.section6_content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("terms_of_use_page.reporting_report")}</li>
            <li>{t("terms_of_use_page.reporting_block")}</li>
          </ul>
        </section>

        {/* 7. Kullanıcı Beyanları */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section7_title")}</h3>
          <p>{t("terms_of_use_page.section7_content")}</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>{t("terms_of_use_page.rep_1")}</li>
            <li>{t("terms_of_use_page.rep_2")}</li>
            <li>{t("terms_of_use_page.rep_3")}</li>
          </ul>
        </section>

        {/* 8. Garanti Reddi */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section8_title")}</h3>
          <p>{t("terms_of_use_page.section8_content")}</p>
        </section>

        {/* 9. Sorumluluk Sınırlaması */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section9_title")}</h3>
          <p>{t("terms_of_use_page.section9_content")}</p>
        </section>

        {/* 10. Apple iOS */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section10_title")}</h3>
          <p className="mb-3">{t("terms_of_use_page.section10_content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("terms_of_use_page.apple_1")}</li>
            <li>{t("terms_of_use_page.apple_2")}</li>
            <li>{t("terms_of_use_page.apple_3")}</li>
            <li>{t("terms_of_use_page.apple_4")}</li>
            <li>{t("terms_of_use_page.apple_5")}</li>
            <li>{t("terms_of_use_page.apple_6")}</li>
            <li>{t("terms_of_use_page.apple_7")}</li>
            <li>{t("terms_of_use_page.apple_8")}</li>
          </ul>
        </section>

        {/* 11. Değişiklikler */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section11_title")}</h3>
          <p>{t("terms_of_use_page.section11_content")}</p>
        </section>

        {/* 12. İletişim */}
        <section>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("terms_of_use_page.section12_title")}</h3>
          <p>
            {t("terms_of_use_page.section12_content")}{" "}
            <a href="mailto:legal@helmove.app" className="text-[#FF5500] hover:underline">
              legal@helmove.app
            </a>
          </p>
        </section>

        <footer className="mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            {t("last_updated")}: March 14, 2026
          </p>
        </footer>
      </div>
    </PageLayout>
  );
}
