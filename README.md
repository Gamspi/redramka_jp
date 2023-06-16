# Quasar App (quasar-base-template)

A Quasar Framework app

---

## Старт работ

#### Install the dependencies
```bash
npm install
```

#### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

#### Lint the files
```bash
npm run lint
```

#### Build the app for production
```bash
quasar build
```

#### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

---

## Описание структуры
* В папке /components содержаться переиспользуемые компоненты, к-ые как минимум 2 раза используются в приложении
* В папке /pages создается папка для каждого экрана приложения. Папки компонентов внутри экрана (не универсальные) располагаются в папке этого экрана с соответствующим неймингом для читаемой вложенности, например структура внутри папки Profile:
``` js
Profile
  --ProfileOrder
    --ProdileOrderItem
  --ProfileData
    ---ProfileDataItem
```
* Файлы с расширением `.vue` именуются в CamelCase с большой буквы
* Файлы с расширением `.ts` именуются в lowerCamelCase с маленькой буквы
* Файлы контроллеров называются controller.ts и возвращают функцию `useController`

---

## Краткий Code Guide

#### Базовые правила для верстки
* При верстке блоков используется БЭМ
* Не используются инлайновые стили
* Используются переменные из файла `app.variables.scss` для повторяющихся значений
* Названия классов пишутся в kebab-case, например `.main-screen`
* Модификатор для класса обозначается добавлением двойного тире: `--`

#### Базовые правила при написании кода
* Геттер в getters хранилища имеет имя в формате getNameOfVariable, где nameOfVariable - название переменной из state.
* Мутация в mutations хранилища имеет имя в формате mutateNameOfVariable, где nameOfVariable - название переменной из state.
* Сеттер в actions хранилища имеет имя в формате setNameOfVariable, где nameOfVariable - название переменной из state.
* В том случае, если при ajax запросе с бэкенда принимаются переменные не в camelcase - на уровне мутации производить ассоциацию с корректно названными переменными.

* Названия функций должны начинаться с глагола действия и быть информативными. Не знаешь, как назвать функцию? Ответь на вопрос, что она будет делать.
* Называть события, которые вызываются через document.dispatchEvent в стиле "название_блока.название_функции". Пример вызова события:
``` js
document.dispatchEvent(new CustomEvent('order.checkStatus', { detail: { url } }));
```

* Обязательная обработка ошибок с запросов и ошибок внутри методов
* Если функция работает с данными с бэка, то максимально подгатавливаться к тому, что что-то может не прийти
* Проверить, что все константы используемые в коде вынесены в переменные
* Принцип Single Responsibility - метод должен выполнять только одну задачу

#### Composition API

* Используется модульный подход: у каждого компонента стили вынесены в style.scss, а логика в controller.ts
* Параметр `name` в компоненте соответсвует названию файла
* В методе setup делать объявления переменных рядом с местами их использования
* Переиспользуемые функции делать универсальными и выносить в src/features
* Функции, выполняющие роль фильтров выносить в src/filters
* Если в шаблоне используются таймеры, интервалы или "слушатели" событий очищать их методе beforeUnmounted
* Использовать src/services для формирования функций обращения к API

---

## Полезные ссылки
* [Руководство по качеству кода](https://gitlab.redramka.ru/missingsince1983/meetup-info/tree/main/1.%20codestyle-frontend/BASE)
* [Правила работы с GIT](https://gitlab.redramka.ru/missingsince1983/meetup-info/tree/main/1.%20codestyle-frontend/GIT)
* [Стандарты в JS](https://gitlab.redramka.ru/missingsince1983/meetup-info/tree/main/1.%20codestyle-frontend/JS)
