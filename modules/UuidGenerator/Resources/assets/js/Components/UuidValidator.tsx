import { validate as uuidValidate, version as uuidVersion } from 'uuid';
import { useState, useMemo } from 'react';
import clsx from 'clsx';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useTranslation } from 'react-i18next';
import { type PageProps } from '@/types';
export default function UuidValidator({ ns }: PageProps<{ ns: string }>) {
  const { t } = useTranslation();
  const [uuid, setUuid] = useState('');
  const isValid = useMemo(() => {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
  }, [uuid]);

  return (
    <>
      <div className="w-full sm:max-w-xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="uuid-input-validator">{t('validator.label', { ns })}</Label>
          <Input
            type="text"
            id="uuid-input-validator"
            placeholder="Uuid v4"
            value={uuid}
            onChange={e => {
              setUuid(e.target.value);
            }}
          />
        </div>
        {uuid && (
          <div className="flex flex-row">
            <div className="flex-grow">
              <div
                className={clsx({
                  'text-green-600': isValid,
                  'text-red-600': !isValid,
                })}
              >
                {t('validator.' + (isValid ? 'valid' : 'invalid'), {
                  ns,
                  value: 'UUID v4',
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
