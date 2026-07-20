// Repository map. Language-neutral metadata; descriptions localized per-repo.
export type Repo = {
  name: string;
  url: string;
  description: { fa: string; en: string };
};

export const repos: Repo[] = [
  {
    name: 'ZurvanLinux',
    url: 'https://github.com/ZurvanLinux/ZurvanLinux',
    description: {
      fa: 'مستندات و مشخصات فنی (منبع حقیقت پروژه).',
      en: 'Specification & architecture docs (source of truth).',
    },
  },
  {
    name: 'iso-builder',
    url: 'https://github.com/ZurvanLinux/iso-builder',
    description: {
      fa: 'پیکربندی live-build و خط‌تولید ساخت ISO.',
      en: 'live-build configuration and the ISO build pipeline.',
    },
  },
  {
    name: 'apt-repository',
    url: 'https://github.com/ZurvanLinux/apt-repository',
    description: {
      fa: 'مخزن APT ایستا و کلید عمومی GPG (بر روی گیت‌هاب پیجیز).',
      en: 'Static APT repository and GPG public key (GitHub Pages).',
    },
  },
  {
    name: 'website',
    url: 'https://github.com/ZurvanLinux/website',
    description: {
      fa: 'صفحه‌ی فرود رسمی زوروان لینوکس.',
      en: 'Official Zurvan Linux landing page.',
    },
  },
  {
    name: 'branding-assets',
    url: 'https://github.com/ZurvanLinux/branding-assets',
    description: {
      fa: 'کاغذدیواری‌ها، لوگوها، تم‌های SDDM/Plymouth و آیکن‌ها.',
      en: 'Wallpapers, logos, SDDM/Plymouth themes and icon tweaks.',
    },
  },
  {
    name: 'zurvan-dns-bypass',
    url: 'https://github.com/ZurvanLinux/zurvan-dns-bypass',
    description: {
      fa: 'تعویض‌کننده‌ی ماژولار DNS (شکن / رادار / پیش‌فرض ISP).',
      en: 'Modular DNS switcher (Shecan / Radar / default ISP).',
    },
  },
  {
    name: 'welcome-app',
    url: 'https://github.com/ZurvanLinux/welcome-app',
    description: {
      fa: 'دستیار خوش‌آمد و راه‌اندازی نخستین بوت.',
      en: 'First-boot welcome and setup assistant.',
    },
  },
  {
    name: '.github',
    url: 'https://github.com/ZurvanLinux/.github',
    description: {
      fa: 'پروفایل سازمان، قالب‌های ایشو/PR و راهنمای مشارکت.',
      en: 'Org profile, issue/PR templates and contribution guides.',
    },
  },
];
