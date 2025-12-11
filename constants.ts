import { ContentData, Language } from './types';

export const translations: Record<Language, ContentData> = {
  zh: {
    nav: {
      home: '首页',
      services: '核心业务',
      platforms: '核心平台',
      about: '关于我们',
      contact: '联系我们',
    },
    hero: {
      title: '重塑数字未来',
      subtitle: 'Silk AI Studio 致力于通过 AI 智能体、数字人技术与 Vibe Coding 重新定义人机交互体验。',
      cta: '探索更多',
    },
    services: {
      title: '我们的专长',
      description: '三大核心业务，全方位赋能企业智能化转型。',
      items: [
        {
          title: 'AI 智能体开发',
          desc: '构建具备自主感知、规划与执行能力的智能 Agent，为您处理复杂任务流。',
          icon: 'brain',
        },
        {
          title: 'AI 数字人定制',
          desc: '打造高保真、交互自然的 3D/2D 数字分身，适用于直播、客服及品牌代言。',
          icon: 'users',
        },
        {
          title: 'Vibe Coding 应用制作',
          desc: '基于自然语言的快速应用开发，让创意瞬间转化为可用的软件产品。',
          icon: 'code',
        },
      ],
    },
    platforms: {
      title: '核心平台生态',
      description: '自研三大底层平台，支撑无限创新可能。',
      items: [
        {
          title: '自研智能体开发平台',
          desc: '一站式 Agent 编排与部署环境，支持多模态交互与插件扩展。',
          image: 'https://drive.google.com/thumbnail?id=1QWSwcXnYJGllkBRAY8T82wXXhn1pb_Yp&sz=w1000',
        },
        {
          title: 'AI 驱动数字人平台',
          desc: '实时驱动引擎，让数字人具备如同真人的表情、动作与语音交互能力。',
          image: 'https://drive.google.com/thumbnail?id=1pnN_ttQNgQAVOQohWmgKzHSmLiVFvHlL&sz=w1000',
        },
        {
          title: 'Vibe Coding 解决方案平台',
          desc: '零门槛代码生成与应用托管，加速数字化产品落地周期。',
          image: 'https://drive.google.com/thumbnail?id=1lllZH5pDbG1uo8Fs61mOi3ylr3fU18uA&sz=w1000',
        },
      ],
    },
    about: {
      title: '关于 Silk AI Studio',
      founded: '成立时间',
      foundedText: '2025年11月',
      mission: '愿景',
      missionText: '让 AI 像丝绸般顺滑地融入人类生活。',
    },
    contact: {
      title: '开启合作',
      phone: '电话',
      wechat: '微信',
      address: '地址',
      cta: '立即咨询',
      copy: '复制',
      copied: '已复制',
    },
    footer: {
      rights: '© 2025 Silk AI Studio. All rights reserved.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      platforms: 'Platforms',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Reshaping the Digital Future',
      subtitle: 'Silk AI Studio is dedicated to redefining HCI through AI Agents, Digital Humans, and Vibe Coding.',
      cta: 'Explore More',
    },
    services: {
      title: 'Our Expertise',
      description: 'Three core businesses empowering enterprise intelligence transformation.',
      items: [
        {
          title: 'AI Agent Development',
          desc: 'Building autonomous agents capable of perception, planning, and execution for complex workflows.',
          icon: 'brain',
        },
        {
          title: 'AI Digital Human',
          desc: 'Creating high-fidelity 3D/2D digital avatars for streaming, customer service, and branding.',
          icon: 'users',
        },
        {
          title: 'Vibe Coding Apps',
          desc: 'Rapid application development based on natural language, turning ideas into software instantly.',
          icon: 'code',
        },
      ],
    },
    platforms: {
      title: 'Platform Ecosystem',
      description: 'Three proprietary platforms supporting infinite innovation possibilities.',
      items: [
        {
          title: 'Agent Development Platform',
          desc: 'One-stop Agent orchestration and deployment environment supporting multimodal interaction.',
          image: 'https://drive.google.com/thumbnail?id=1QWSwcXnYJGllkBRAY8T82wXXhn1pb_Yp&sz=w1000',
        },
        {
          title: 'AI-Driven Digital Human Platform',
          desc: 'Real-time driving engine enabling digital humans to have lifelike expressions and interactions.',
          image: 'https://drive.google.com/thumbnail?id=1pnN_ttQNgQAVOQohWmgKzHSmLiVFvHlL&sz=w1000',
        },
        {
          title: 'Vibe Coding Solution Platform',
          desc: 'Zero-threshold code generation and app hosting to accelerate product launch cycles.',
          image: 'https://drive.google.com/thumbnail?id=1lllZH5pDbG1uo8Fs61mOi3ylr3fU18uA&sz=w1000',
        },
      ],
    },
    about: {
      title: 'About Silk AI Studio',
      founded: 'Founded',
      foundedText: 'November 2025',
      mission: 'Mission',
      missionText: 'Integrating AI into human life as smoothly as silk.',
    },
    contact: {
      title: 'Start Collaboration',
      phone: 'Phone',
      wechat: 'WeChat',
      address: 'Address',
      cta: 'Contact Us',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      rights: '© 2025 Silk AI Studio. All rights reserved.',
    },
  },
};

export const CONTACT_INFO = {
  phone: '+86 18022100923',
  wechat: '1183613979',
  email: 'contact@silkai.studio',
};

export const LOGO_URL = "https://youke2.picui.cn/s1/2025/12/11/693a189e7d580.png";