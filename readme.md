
1 - Адаптер -> принудительно привести один объект к интерфейсу другого +
2 - Декоратор -> оборачиваем функцию в другую с дополнительным функционалом +
3 - Мост -> вывод параметров в отдельный класс + 
4 - Иттератор -> реализация разных проходов по листу +
5 - Снимок -> история объекта +

build commands

tsc -t es5 main.ts
browserify main.js > bundle.js


new build commands

tsc -t es2015 main.ts
npx browserify -p esmify main.js -o bundle.js