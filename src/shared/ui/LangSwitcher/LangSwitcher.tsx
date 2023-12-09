import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from '../Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
    >
      {t(short ? 'короткий язык' : 'Язык')}
    </Button>
  );
};

export default memo(LangSwitcher);
