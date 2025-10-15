# SAMTOP GROUP LIMITED Website

## 部署指南 - GitHub Pages

### 步骤1：安装依赖
```bash
pnpm install
```

### 步骤2：构建项目
```bash
pnpm build
```

### 步骤3：部署到GitHub Pages
```bash
pnpm deploy
```

### 常见问题解决

#### 问题：网站显示空白
如果部署后打开samtopgroup.github.io显示空白页面，请检查：

1. **确保使用了HashRouter**
   - 项目已配置使用HashRouter替代BrowserRouter，这是GitHub Pages必需的

2. **检查构建路径**
   - package.json中已配置正确的构建路径：`vite build --base=/`

3. **确保.nojekyll文件存在**
   - 这个文件告诉GitHub Pages不要使用Jekyll处理，确保所有文件都能被正确访问

4. **检查控制台错误**
   - 在浏览器中按F12打开控制台，查看是否有任何错误信息
   - 常见错误包括资源加载失败或JavaScript错误

5. **确保GitHub Pages设置正确**
   - 在GitHub仓库的Settings > Pages中，确保：
     - Source选择为gh-pages分支
     - 目录选择为/(root)
     - 部署状态显示为"已成功部署"

如果问题仍然存在，请尝试：
- 清除浏览器缓存后重新加载页面
- 等待几分钟，GitHub Pages部署可能需要时间生效
- 重新运行`pnpm deploy`命令重新部署