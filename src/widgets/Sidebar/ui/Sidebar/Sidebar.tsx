import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import {
  ThemeSwitcher,
  LangSwitcher,
  Button,
  ButtonTheme,
  AppLinkTheme,
  AppLink,
} from 'shared/ui';
import { ButtonSize } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.main}
        >
          <MainPageIcon className={cls.icon} />
          <span className={cls.link}>{t('главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.about}
        >
          <AboutPageIcon className={cls.icon} />

          <span className={cls.link}>{t('о сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
