import { PageLayout } from "../components/PageLayout";
import { useTranslation } from "react-i18next";
import { Search, Mail, MessageCircle, FileQuestion, HelpCircle } from "lucide-react";

export function SupportCenter() {
  const { t, i18n } = useTranslation();

  return (
    <PageLayout title={t("support_center").toLocaleUpperCase(i18n.language)} subtitle={i18n.language === "tr" ? "YARDIM VE DESTEK" : "HELP AND SUPPORT"}>
      <div className="space-y-12">
        <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-white">{t("support_center_page.help_title")}</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {t("support_center_page.intro")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
              <MessageCircle className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">{t("support_center_page.faq_title")}</h3>
                <p className="text-sm text-gray-500">{t("support_center_page.faq_desc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
              <Mail className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">{t("support_center_page.tech_support_title")}</h3>
                <p className="text-sm text-gray-500">{t("support_center_page.tech_support_desc")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase border-b border-primary/30 pb-2">{t("support_center_page.general_questions")}</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <p className="text-white font-medium">{t("support_center_page.q1")}</p>
                <p className="text-sm mt-1">{t("support_center_page.a1")}</p>
              </li>
              <li>
                <p className="text-white font-medium">{t("support_center_page.q2")}</p>
                <p className="text-sm mt-1">{t("support_center_page.a2")}</p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase border-b border-primary/30 pb-2">{t("support_center_page.community")}</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <p className="text-white font-medium">{t("support_center_page.q7")}</p>
                <p className="text-sm mt-1">{t("support_center_page.a7")}</p>
              </li>
              <li>
                <p className="text-white font-medium">{t("support_center_page.q8")}</p>
                <p className="text-sm mt-1">{t("support_center_page.a8")}</p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase border-b border-primary/30 pb-2">{t("support_center_page.account_safety")}</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <p className="text-white font-medium">{t("support_center_page.q5")}</p>
                <p className="text-sm mt-1">{t("support_center_page.a5")}</p>
              </li>
              <li>
                <p className="text-white font-medium">{t("support_center_page.q6")}</p>
                <p className="text-sm mt-1">{t("support_center_page.a6")}</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-primary/10 p-8 rounded-2xl border border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{t("support_center_page.contact_title")}</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {t("support_center_page.contact_desc")}
          </p>
          <a
            href="mailto:destek@Helmove.app"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            destek@Helmove.app
          </a>
        </section>

        <footer className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500 italic">
            {t("support_center_page.footer")}
          </p>
        </footer>
      </div>
    </PageLayout>
  );
}

