import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus={true}
        placeholder={t('Введите username')}
        className={cls.input}
        type="text"
      />
      <Input
        placeholder={t('Введите пароль')}
        className={cls.input}
        type="text"
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
