import { PageLayout } from "../components/PageLayout";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function DataDeletion() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent('Data Deletion Request - Helmove');
    const body = encodeURIComponent(
      `Registered Email: ${email}\n\nReason for Deletion:\n${reason || 'Not specified'}`
    );
    window.location.href = `mailto:helmovedev@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <PageLayout title={t('data_deletion_title')} subtitle={t('data_deletion_subtitle')}>
      <div className="space-y-6 text-gray-400 leading-relaxed">
        <p>
          {t('data_deletion_intro')}
        </p>

        <div className="bg-[#FF5500]/10 border border-[#FF5500]/30 p-6 rounded-2xl mt-8">
          <h3 className="text-[#FF5500] font-bold text-lg mb-2">{t('important_notice')}</h3>
          <p className="text-sm text-gray-300">
            {t('data_deletion_warning')}
          </p>
        </div>

        <form className="mt-8 space-y-4 max-w-md" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t('registered_email_label')}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5500] transition-colors"
              placeholder={t('placeholder_email')}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t('reason_placeholder')}</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5500] transition-colors h-24 resize-none"
              placeholder={t('reason_placeholder')}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest px-6 py-3 rounded-lg w-full transition-colors mt-4"
          >
            {t('request_deletion')}
          </button>
        </form>
      </div>
    </PageLayout>
  );
}