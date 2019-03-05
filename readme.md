
# Patterns second lab

1.Адаптер -> принудительно привести один объект к интерфейсу другого +
2.Декоратор -> оборачиваем функцию в другую с дополнительным функционалом +
3.Мост -> вывод параметров в отдельный класс + 
4.Иттератор -> реализация разных проходов по листу +
5.Снимок -> история объекта +

## Build Commands

```
tsc -t es5 main.ts
browserify main.js > bundle.js
```

## New Build Commands

```
tsc -t es2015 main.ts
npx browserify -p esmify main.js -o bundle.js
```

## Adapter
![Adapter](https://refactoring.guru/images/patterns/cards/adapter-mini-2x.png)

Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

### Hex color Interface
```
interface IColorHEX{
    Hex:string;
}

export default IColorHEX;
```

### RGB color Interface
```
interface IColorRGB{
    Red:number;
    Green:number;
    Blue:number;
}

export default IColorRGB;
```

### Color Adapter класс который позволяет RGB и HEX объединить

```
class ColorAdapter implements IColorHEX,IColorRGB{
    public Red:number;
    public Green:number;
    public Blue:number;
    public Hex:string;
}
```

## Decorator
![Decorator](https://refactoring.guru/images/patterns/cards/decorator-mini-2x.png)

Декоратор — это структурный паттерн проектирования, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки».

Функция Draw включает в себя вызов нескольних внутренних методов
```
Draw(){
        this.Context.beginPath();
        this.Context.arc(this.X,this.Y,this.D,0,2*Math.PI);
        this.Context.stroke();
        this.Context.fillStyle = new ColorAdapter(this.Color).Hex;
        this.Context.fill();
    }

```

## Bridge
![Bridge](https://refactoring.guru/images/patterns/cards/bridge-mini-2x.png)

Мост — это структурный паттерн проектирования, который разделяет один или несколько классов на две отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.

Класс Circle включает в себя параметры ColorAdapter и Color, которые являются классами идентифицирующие цвет

```
class Circle {
    constructor(X, Y, D, Color, Context) {
        this.History = [this];
        this.X = X;
        this.Y = Y;
        this.D = D;
        this.Color = Color;
        this.Adapter = new ColorAdapter(this.Color);
        this.Context = Context;
    }
}
```

## Iterator
![Iterator](https://refactoring.guru/images/patterns/cards/iterator-mini-2x.png)

Итератор — это поведенческий паттерн проектирования, который даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.

Данный паттерн реализуется следующим интерфейсов:

```
interface IIterator{
    next();
    hasMore();
}

export default IIterator
```

А интерфейс реализуется классом

```
import IITerator from './IITerator'

class Iterator implements IITerator{
    private currentPos = 0;
    private Collection:Array<any> = new Array();

    Iterator(){ }

    next():void{
        if(this.currentPos < this.Collection.length){
            return this.Collection[this.currentPos++]
        }
        else{
            this.currentPos = 0
        }
    }
    push(item:any):void{
        this.Collection.push(item)
    }
    pop():void{
        this.Collection.pop()
    }
    hasMore():Boolean{
        if(this.currentPos < this.Collection.length){
            return true;
        }
        else{
            return false;
        }
    }
}

export default Iterator
```

## Memento
![Iterator](https://refactoring.guru/images/patterns/cards/memento-mini-2x.png)

Снимок — это поведенческий паттерн проектирования, который позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации.

Данный паттерн реализуется интерфейсом

```
interface IMementoCircle{
    getName():string;
    getSnapshot(version:number)
}

export default IMementoCircle;
```

А интерфейс реализуется
```
class Circle implements IMementoCircle{
    ...
    getName(){
        return "Circle";
    }

    getSnapshot(version:number){
        if(this.History.length > version){
            return this.History[version];
        }
        else{
            return this;
        }
    }
}
```
