export type Language = 'zh' | 'en';

export interface ContentData {
  nav: {
    home: string;
    services: string;
    platforms: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    description: string;
    items: {
      title: string;
      desc: string;
      icon: 'brain' | 'users' | 'code';
    }[];
  };
  platforms: {
    title: string;
    description: string;
    items: {
      title: string;
      desc: string;
      image: string;
    }[];
  };
  about: {
    title: string;
    founded: string;
    foundedText: string;
    mission: string;
    missionText: string;
  };
  contact: {
    title: string;
    phone: string;
    wechat: string;
    address: string;
    cta: string;
    copy: string;
    copied: string;
  };
  footer: {
    rights: string;
  };
}