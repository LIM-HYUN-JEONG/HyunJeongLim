import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdCheck, MdDarkMode, MdLanguage, MdLightMode } from 'react-icons/md';
import i18next from 'src/locale/i18n';

export default function SettingIcons() {
  const { i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1">
      <ThemeSwitcher />

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" isIconOnly>
            <MdLanguage size={20} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu selectedKeys={[i18n.language]} aria-label="Static Actions" onAction={(key) => changeLanguage(key as string)} disabledKeys={['en']}>
          <DropdownItem key="ko" endContent={i18n.language === 'ko' && <MdCheck />}>
            한국어(ko)
          </DropdownItem>
          <DropdownItem key="en" endContent={i18n.language === 'en' && <MdCheck />}>
            English(en)
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button variant="bordered" isIconOnly as={'a'} target="_blank" href={'https://github.com/IM-HYUN-JEONG'}>
        <AiOutlineGithub size={20} />
      </Button>
    </div>
  );
}

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (mounted) {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  };

  useEffect(() => {
    setMounted(true); // 컴포넌트가 마운트된 후에 테마 변경을 허용
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === 'light'}
      onClick={toggleTheme}
      thumbIcon={({ isSelected, className }) => (isSelected ? <MdLightMode className={className} /> : <MdDarkMode className={className} />)}
    ></Switch>
  );
};

import { Switch } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
