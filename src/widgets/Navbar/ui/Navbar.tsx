import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {
          // eslint-disable-next-line i18next/no-literal-string
        }
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos,
        fuga repellat inventore ducimus eum quod aliquid minus aperiam, cum
        nihil aliquam reprehenderit odio natus dolorum doloribus molestiae
        numquam esse!
      </Modal>
    </div>
  );
};
