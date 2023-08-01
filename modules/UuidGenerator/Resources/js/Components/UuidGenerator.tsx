import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { copyToClipboard } from '../utils/clipboard';
import { useTranslation } from 'react-i18next';
import { type PageProps } from '@/types';
export default function UuidGenerator({ ns }: PageProps<{ ns: string }>) {
  const { t } = useTranslation();
  const [uuid, setUuid] = useState(uuidv4());
  const generateUuidV4Action = () => {
    setUuid(uuidv4());
  };

  const copyToClipboardAction = () => {
    copyToClipboard(uuid);
  };

  return (
    <>
      <div className="w-full px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="flex flex-row">
          <div className="flex-grow">
            <div className="flex flex-wrap text-lg font-semibold text-gray-900 gap-4">
              <span data-pw="uuid-value">{uuid}</span>
              <button
                onClick={copyToClipboardAction}
                className="ml-2 text-sm text-gray-500 hover:text-gray-700"
              >
                {t('generator.copy', { ns })}
              </button>
              <button
                onClick={generateUuidV4Action}
                className="ml-2 text-sm text-gray-500 hover:text-gray-700"
              >
                {t('generator.generate', { ns })}
              </button>
            </div>
            <div className="text-sm text-gray-500">{t('uuid', { ns })}</div>
          </div>
        </div>
      </div>
    </>
  );
}
