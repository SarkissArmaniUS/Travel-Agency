1) Скопіюй вміст папки в проєкт зі збереженням шляхів (заміни файли, що збігаються).
   Свій Camp.tsx НЕ чіпай, його тут нема.
2) npm i lenis@latest   (потрібна свіжа версія для опції anchors)
3) cp .env.local.example .env.local  і заповни ключі (див. файл). Перезапусти npm run dev.
4) .env* має бути в .gitignore (у Next-проєктах зазвичай вже є).
5) На Vercel додай ті самі змінні: Project -> Settings -> Environment Variables.
