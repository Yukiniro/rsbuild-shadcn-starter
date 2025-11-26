# Rsbuild + Shadcn + React Starter

一个基于 Rsbuild、React 19、TypeScript 和 Shadcn UI 的现代化前端项目模板。

## 🚀 技术栈

- **构建工具**: [Rsbuild](https://rsbuild.rs/) - 基于 Rspack 的现代前端构建工具
- **框架**: [React 19](https://react.dev/) - 最新的 React 版本
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **UI 组件**: [Shadcn UI](https://ui.shadcn.com/) - 美观且可定制的组件库
- **图标**: [Lucide React](https://lucide.dev/) - 精美的图标库
- **代码规范**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## ✨ 特性

- 🎨 基于 Shadcn UI 的精美组件系统
- 🌙 支持明暗主题切换
- 📱 响应式设计
- 🔧 TypeScript 严格模式配置
- 🚀 快速的开发体验
- 📦 优化的生产构建
- 🎯 路径别名配置 (`@/` 指向 `src/`)
- 🧹 代码格式化和检查工具

## 📁 项目结构

```text
rsbuild-shadcn-starter/
├── public/                 # 静态资源
│   └── favicon.png
├── src/
│   ├── components/         # 组件目录
│   │   └── ui/            # Shadcn UI 组件
│   │       └── button.tsx
│   ├── lib/               # 工具函数
│   │   └── utils.ts
│   ├── styles/            # 样式文件
│   │   └── globals.css
│   ├── App.tsx            # 根组件
│   ├── env.d.ts           # 类型声明
│   └── index.tsx          # 入口文件
├── components.json        # Shadcn UI 配置
├── eslint.config.mjs      # ESLint 配置
├── postcss.config.mjs     # PostCSS 配置
├── rsbuild.config.ts      # Rsbuild 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 🛠️ 安装与设置

1. 克隆项目

```bash
git clone <repository-url>
cd rsbuild-shadcn-starter
```

1. 安装依赖

```bash
pnpm install
```

## 🚀 开发

启动开发服务器，应用将在 [http://localhost:3000](http://localhost:3000) 运行：

```bash
pnpm run dev
```

## 📦 构建

构建生产版本：

```bash
pnpm run build
```

预览生产构建：

```bash
pnpm run preview
```

## 🧹 代码规范

检查代码规范：

```bash
pnpm run lint
```

格式化代码：

```bash
pnpm run format
```

## 🎨 添加 Shadcn UI 组件

使用以下命令添加新的 Shadcn UI 组件：

```bash
npx shadcn@latest add [component-name]
```

例如，添加一个卡片组件：

```bash
npx shadcn@latest add card
```

## 🌙 主题切换

项目已配置支持明暗主题切换。可以通过在根元素添加 `dark` 类来切换主题：

```javascript
// 切换到暗色主题
document.documentElement.classList.add('dark');

// 切换到亮色主题
document.documentElement.classList.remove('dark');
```

## 📚 学习更多

- [Rsbuild 文档](https://rsbuild.rs/) - 探索 Rsbuild 的特性和 API
- [Rspack 文档](https://rspack.rs/) - 了解底层打包工具
- [Shadcn UI 文档](https://ui.shadcn.com/) - 探索组件库
- [Tailwind CSS 文档](https://tailwindcss.com/docs) - 学习样式框架
- [React 文档](https://react.dev/) - 了解 React 框架

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
