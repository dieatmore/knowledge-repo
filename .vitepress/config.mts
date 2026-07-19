import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Knowledge Repository',
  description: '面向全栈工程师的知识体系',
  srcDir: '.',
  outDir: '.vitepress/dist',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '前端', link: '/frontend/' },
      { text: '后端', link: '/backend/' },
      { text: '计算机基础', link: '/cs/' },
      { text: '软件工程', link: '/engineering/' },
      { text: '实战', link: '/real-world/' },
      { text: '工具', link: '/tools/' },
    ],

    sidebar: {
      '/frontend/': [
        {
          text: '浏览器',
          collapsed: false,
          items: [
            { text: '浏览器渲染流程', link: '/frontend/browser/draw-render' },
            { text: '重绘与回流', link: '/frontend/browser/repaint-reflow' },
          ],
        },
        {
          text: 'HTML & CSS',
          collapsed: false,
          items: [
            { text: '!important 用法', link: '/frontend/html-css/!important' },
            { text: 'BFC 块级格式化上下文', link: '/frontend/html-css/BFC' },
            { text: '块级 vs 行内元素', link: '/frontend/html-css/block-vs-inline' },
            { text: '盒子模型', link: '/frontend/html-css/box-model' },
            { text: 'box-sizing', link: '/frontend/html-css/box-sizing' },
            { text: 'Canvas', link: '/frontend/html-css/canvas' },
            { text: 'CSS 居中方案', link: '/frontend/html-css/centering' },
            { text: '清除浮动', link: '/frontend/html-css/clearfix' },
            { text: 'CSS @import', link: '/frontend/html-css/css-import' },
            { text: 'CSS 单位', link: '/frontend/html-css/css-units' },
            { text: 'DOM & CSSOM', link: '/frontend/html-css/DOM-CSSOM' },
            { text: 'flex 与 flex:1', link: '/frontend/html-css/flex-flex1' },
            { text: '元素隐藏方式', link: '/frontend/html-css/hiding-elements' },
            { text: 'iframe 详解', link: '/frontend/html-css/iframe' },
            { text: 'position 定位', link: '/frontend/html-css/position' },
            { text: '伪类与伪元素', link: '/frontend/html-css/pseudo-classes' },
            { text: '替换元素', link: '/frontend/html-css/replaced-elements' },
            { text: '旋转动画', link: '/frontend/html-css/rotate-animation' },
            { text: '选择器匹配', link: '/frontend/html-css/selector-matching' },
            { text: '语义化 HTML', link: '/frontend/html-css/semantic-html' },
            { text: '选择器优先级', link: '/frontend/html-css/specificity' },
            { text: '文本溢出处理', link: '/frontend/html-css/text-overflow' },
            { text: '三栏布局', link: '/frontend/html-css/three-column-layout' },
            { text: '过渡/变换/动画', link: '/frontend/html-css/transition-transform-animation' },
          ],
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: '数组方法', link: '/frontend/javascript/array-methods' },
            { text: 'splice 详解', link: '/frontend/javascript/array-splice' },
            { text: '箭头函数', link: '/frontend/javascript/arrow-functions' },
            { text: 'bind / call / apply', link: '/frontend/javascript/bind-call-apply' },
            { text: '浏览器检测', link: '/frontend/javascript/browser-detect' },
            { text: 'classList', link: '/frontend/javascript/classlist' },
            { text: '闭包', link: '/frontend/javascript/closure' },
            { text: '柯里化', link: '/frontend/javascript/currying' },
            { text: 'defer vs async', link: '/frontend/javascript/defer-async' },
            { text: 'DOM 操作', link: '/frontend/javascript/dom-manipulation' },
            { text: '元素几何属性', link: '/frontend/javascript/element-geometry' },
            { text: 'ES2019 新特性', link: '/frontend/javascript/es2019' },
            { text: 'ES6 新特性', link: '/frontend/javascript/es6' },
            { text: '事件流', link: '/frontend/javascript/event-flow' },
            { text: '事件循环', link: '/frontend/javascript/event-loop' },
            { text: 'focus & blur', link: '/frontend/javascript/focus-blur' },
            { text: '垃圾回收', link: '/frontend/javascript/garbage-collection' },
            { text: '迭代器', link: '/frontend/javascript/iteration' },
            { text: 'new 操作符', link: '/frontend/javascript/new-operator' },
            { text: 'null vs undefined', link: '/frontend/javascript/null-undefined' },
            { text: '原始类型', link: '/frontend/javascript/primitive-types' },
            { text: '原型链', link: '/frontend/javascript/prototype-chain' },
            { text: '定时器', link: '/frontend/javascript/settimeout-setinterval' },
            { text: '稀疏数组', link: '/frontend/javascript/sparse-arrays' },
            { text: '数组/字符串方法大全', link: '/frontend/javascript/splice()-slice()-split()-map()-find()-filter()-some()-every()-reduce()-keys()-values()-flat()' },
            { text: '字符串方法', link: '/frontend/javascript/string-methods' },
            { text: 'TypeScript', link: '/frontend/javascript/TS' },
            { text: '类型检测', link: '/frontend/javascript/type-check' },
            { text: 'var / let / const', link: '/frontend/javascript/var-let-const' },
          ],
        },
        {
          text: '前端框架 — Vue',
          collapsed: false,
          items: [
            { text: 'npm / pnpm / yarn 包管理', link: '/frontend/frameworks/vue/npm-pnpm-yarn' },
            { text: 'Webpack vs Vite', link: '/frontend/frameworks/vue/webpack-vite' },
          ],
        },
      ],

      '/backend/': [
        {
          text: '数据库 — SQL',
          collapsed: false,
          items: [
            { text: 'MySQL 索引原理与优化', link: '/backend/database/sql/mysql-index' },
          ],
        },
      ],

      '/cs/': [
        {
          text: '算法',
          collapsed: false,
          items: [
            { text: '哈希冲突与解决', link: '/cs/algorithms/hash-collision' },
          ],
        },
        {
          text: '数据结构',
          collapsed: false,
          items: [
            { text: '数组与链表', link: '/cs/data-structures/array-linked' },
            { text: '栈与堆', link: '/cs/data-structures/stack-heap' },
          ],
        },
        {
          text: '计算机网络',
          collapsed: false,
          items: [
            { text: 'CDN 内容分发网络', link: '/cs/network/cdn' },
            { text: '连接队列溢出', link: '/cs/network/connection-ueue-overflow' },
            { text: 'DNS 预解析', link: '/cs/network/dns-prefetch' },
            { text: '三次握手与四次挥手', link: '/cs/network/handshake-termination' },
            { text: 'HTTP 方法与状态码', link: '/cs/network/http-methods-codes' },
            { text: 'OSI 五层与七层模型', link: '/cs/network/layer5-layer7' },
            { text: '网络拥塞控制', link: '/cs/network/network-congestion' },
          ],
        },
        {
          text: '操作系统',
          collapsed: false,
          items: [
            { text: '帧缓冲与信号', link: '/cs/os/framebuffer-signal' },
          ],
        },
      ],

      '/engineering/': [
        {
          text: 'Web 安全',
          collapsed: false,
          items: [
            { text: 'DDoS & CC 攻击', link: '/engineering/security/DDoS-CC' },
            { text: 'XSS 跨站脚本攻击', link: '/engineering/security/XSS' },
          ],
        },
      ],

      '/real-world/': [
        {
          text: '滴滴',
          collapsed: false,
          items: [
            { text: '中后台 UI 一致性', link: '/real-world/real-business/didi/backend-ui-consistency' },
            { text: 'KOP 域名适配', link: '/real-world/real-business/didi/domain-adaptation' },
          ],
        },
        {
          text: '林科楼数据中心',
          collapsed: false,
          items: [
            { text: '地图控件', link: '/real-world/real-business/nefu-data-center/map-control' },
          ],
        },
      ],

      '/tools/': [
        {
          text: 'Git',
          collapsed: false,
          items: [
            { text: 'Git 学习笔记', link: '/tools/git/git-study' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dieatmore/knowledge-repo' },
    ],

    footer: {
      message: 'Powered by VitePress',
    },

    editLink: {
      pattern: 'https://github.com/dieatmore/knowledge-repo/edit/main/:path',
    },

    search: {
      provider: 'local',
    },
  },

  // 排除不需要处理的文件
  srcExclude: [
    '**/node_modules/**',
    '**/.git/**',
    '**/.github/**',
    'templates/**',
  ],
})
