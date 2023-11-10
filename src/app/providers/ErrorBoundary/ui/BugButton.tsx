import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

// Component for testing ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwErr = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwErr}>{t('throw Error')}</Button>;
};
