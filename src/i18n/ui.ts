// Centralized UI strings. Persian is the source/default; English mirrors it.
// Add a key here for any new visible text and populate both locales.
export type Locale = 'fa' | 'en';

export const languages: { code: Locale; label: string; path: string }[] = [
  { code: 'fa', label: 'فارسی', path: '/' },
  { code: 'en', label: 'English', path: '/en/' },
];

export const ui = {
  fa: {
    htmlLang: 'fa',
    dir: 'rtl',
    brand: 'زوروان لینوکس',
    documentTitle: 'زوروان لینوکس — توزیع لینوکس برای فارسی‌زبانان',
    metaDescription:
      'زوروان لینوکس، توزیعی مبتنی بر دبیان پایدار با میزکار کِ‌دِ‌ای پلاسما، بومی‌سازی‌شده برای کاربران و توسعه‌دهندگان فارسی‌زبان.',
    skipToContent: 'رفتن به محتوای اصلی',
    languageToggleLabel: 'تغییر زبان',
    heroTagline: 'توزیع لینوکس مبتنی بر دبیان پایدار، ساخته‌شده برای فارسی‌زبانان',
    heroLead:
      'نام زوروان از ایزد دانای زمان بی‌انتها گرفته شده است؛ توزیعی پایدار و مدرن با بومی‌سازی کامل فارسی، پشتیبانی از فلت‌پک و ابزارهای دور زدن محدودیت‌های شبکه.',
    ctaDocs: 'مستندات و مشخصات فنی',
    ctaRepos: 'مخازن پروژه',
    missionTitle: 'درباره زوروان',
    missionBody:
      'زوروان لینوکس روی پایه‌ی سنگ‌محک دبیان پایدار ساخته شده و میزکار کِ‌دِ‌ای پلاسما را با نشست وِیلَند به‌صورت پیش‌فرض ارائه می‌کند. فونت وزیرمتن، چیدمان راست‌چین، صفحه‌کلید استاندارد فارسی (اسیری ۹۱۴۷) و نیم‌فاصله به‌صورت بومی پیکربندی شده‌اند. کدک‌های چندرسانه‌ای، شتاب‌دهنده‌های گرافیکی و ادغام فلت‌هاب از تجربه‌ای بی‌دردسر سراسری پشتیبانی می‌کنند.',
    featuresTitle: 'ویژگی‌های کلیدی',
    features: [
      { t: 'مبتنی بر دبیان پایدار', d: 'پایداری و امنیتی که از دبیان بلامنازع است.' },
      { t: 'میزکار کِ‌دِ‌ای پلاسما', d: 'نشست وِیلَند به‌طور پیش‌فرض، با پشتیبان X11.' },
      { t: 'بومی‌سازی کامل فارسی', d: 'فونت وزیرمتن، چیدمان راست‌چین و تقویم جلالی.' },
      { t: 'صفحه‌کلید استاندارد', d: 'چیدمان فارسی اسیری ۹۱۴۷ با نیم‌فاصله روی Shift+Space.' },
      { t: 'کدک‌ها و گرافیک', d: 'پخش همه‌فرمتی و شتاب‌دهنده VA-API/VDPAU از جعبه.' },
      { t: 'فلت‌پک و فلت‌هاب', d: 'نرم‌افزارهای سندباکس‌شده از طریق دیسکاور.' },
    ],
    reposTitle: 'نقشه‌ی مخازن',
    reposLead: 'همه‌ی پروژه‌های زوروان لینوکس روی سازمان گیت‌هاب میزبانی می‌شوند.',
    downloadTitle: 'دریافت',
    downloadLead:
      'اولین نسخه‌ی پایدار هنوز منتشر نشده است. نسخه‌های پیش‌انتشار (ISO) به‌زودی روی صفحه‌ی انتشارها در دسترس خواهند بود.',
    downloadCta: 'مشاهده‌ی انتشارها',
    downloadStatusBadge: 'به‌زودی',
    footerMission: 'زوروان لینوکس، پروژه‌ای متن‌باز و جامعه‌محور.',
    footerDocs: 'مستندات',
    footerCode: 'کد منبع',
    footerLicense: 'تحت مجوز پروژه‌های مشخص‌شده در هر مخزن.',
  },
  en: {
    htmlLang: 'en',
    dir: 'ltr',
    brand: 'Zurvan Linux',
    documentTitle: 'Zurvan Linux — a Debian-based distro for Persian speakers',
    metaDescription:
      'Zurvan Linux: a Debian Stable distribution with the latest KDE Plasma, built and localized for Persian-speaking users and developers.',
    skipToContent: 'Skip to content',
    languageToggleLabel: 'Switch language',
    heroTagline: 'A Debian Stable-based Linux distribution, built for Persian speakers',
    heroLead:
      'Named after Zurvan, the Persian deity of infinite time: a stable, modern distro with full Persian localization, Flatpak support, and modular network-bypass tooling.',
    ctaDocs: 'Spec & architecture',
    ctaRepos: 'Project repositories',
    missionTitle: 'About Zurvan',
    missionBody:
      'Zurvan Linux is built on the rock-solid Debian Stable foundation and ships the latest KDE Plasma with a Wayland session by default. Vazirmatn typography, RTL mirroring, the standard Persian keyboard (ISIRI 9147) and ZWNJ are configured natively. Multimedia codecs, graphics acceleration and Flathub integration make for an out-of-the-box experience.',
    featuresTitle: 'Key features',
    features: [
      { t: 'Debian Stable base', d: 'The stability and security Debian is known for.' },
      { t: 'KDE Plasma (latest stable)', d: 'Wayland session by default, with an X11 fallback.' },
      { t: 'Full Persian locale', d: 'Vazirmatn font, RTL mirroring, Jalali calendar.' },
      { t: 'Standard keyboard', d: 'ISIRI 9147 Persian layout with ZWNJ on Shift+Space.' },
      { t: 'Codecs & graphics', d: 'Every-format playback plus VA-API/VDPAU, out of the box.' },
      { t: 'Flatpak & Flathub', d: 'Sandboxed apps via Discover.' },
    ],
    reposTitle: 'Repository map',
    reposLead: 'All Zurvan Linux projects live on the GitHub organization.',
    downloadTitle: 'Download',
    downloadLead:
      'The first stable release is not out yet. Pre-release ISOs will be available on the Releases page soon.',
    downloadCta: 'Browse releases',
    downloadStatusBadge: 'Soon',
    footerMission: 'Zurvan Linux — an open-source, community-driven project.',
    footerDocs: 'Documentation',
    footerCode: 'Source code',
    footerLicense: 'Licensed per the LICENSE in each repository.',
  },
} as const;

export type UI = (typeof ui)['fa'];
