import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline">{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => i18n.changeLanguage(language.code)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;