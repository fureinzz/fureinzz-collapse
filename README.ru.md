# &lt;fureinzz-collapse&gt;

[![npm](https://img.shields.io/npm/v/@fureinzz/fureinzz-collapse?style=flat-square)](https://www.npmjs.com/package/@fureinzz/fureinzz-collapse)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/@fureinzz/fureinzz-collapse)
![license](https://img.shields.io/github/license/fureinzz/fureinzz-collapse?style=flat-square)

##### Язык:
+ [Английский](https://github.com/fureinzz/fureinzz-collapse/blob/master/README.md)
+ [Русский](https://github.com/fureinzz/fureinzz-collapse/blob/master/README.ru.md)


`fureinzz-collapse`  создает сворачевыемый блок  контента. Для взаимодействия с элементом используйте `toggle()`,`open()`,`close()` или `opened`, для того чтобы скрыть/показать содержимое. По умолчанию содержимое элемента будет скрыто.


При взаимодействии с элементом `fureinzz-collapse` настраивает max-width/max-height в зависимости от указанного атрибута `horizontal` и показывает/скрывает содержимое.

**Предупреждение:**  для корректного функционирования не устанавливайте  **margin**/**padding**  непосредственно объекту, вместо этого поместите блок внутрь элемента и стилизуйте его

**Пример:**
```html
<fureinzz-collapse>
  <div style="padding: 10px; color: grey;">
    <span>...</span>
  </div>
</fureinzz-collapse>
```

## Демонстрация
![collapse.demo.gif](https://github.com/fureinzz/fureinzz-collapse/blob/master/demo-image/fr-collapse.demo.gif?raw=true)

## Cвойства
| Свойство | Тип | Описание | По умолчанию |
| --- | --- | --- | --- |
| `opened` | Boolean |Установите **true**, чтобы показать содержимое объекта | `false` |
| `noAnimation` | Boolean | Установите **true**, чтобы отключить анимацю  | `false` |
| `horizontal` | Boolean |Если **true** , содержимое открывается горизонтально | `false` |

## Методы
| Метод | Описание | 
| --- | --- | 
| `open`  | Изменяет состояние `opened` = **true** и показывает содержимое|
| `close`  | Изменяет состояние `opened` = **false**  и скрывает содержимое |
| `toggle`  |  Изменяет состояние `opened` = `!opened` и показывает/скрывает содержимое зависимо от нового значения `opened`|

## События
| Событие | Описание | 
| --- | --- | 
| `opened-changed`  | Срабатывает при изменении состояния `opened`|
| `animation-opened-changed`  | Срабатывает, когда заканчивается анимация перехода|


## Стилизация

Для стилизации доступны следующие пользовательские свойства 

| Свойство | Описание | По умолчанию |
| --- | --- | --- |
| `--speed` | Продолжительность анимации | `300ms` |

## Применение

#### Установка
```
npm install --save @fureinzz/fureinzz-collapse
```

#### В HTML файле
```html
<html>
  <head>
    <script type="module">
      import '@fureinzz/fureinzz-collapse/fureinzz-collapse.js'
    </script>
  </head>
  <body>
    <fureinzz-collapse>
      <div>...</div>
    </fureinzz-collapse>
  </body>
</html>
```