# chappel

Курс лабораторных работ по дисциплине "Архитектура высоконагруженных приложений".

## Local deployment

Для локального развертывания необходимы следующие компоненты:

```sh
node: v22.13.0
npm: v11.0.0
```

Перед развертыванием необходимо выгрузить все вспомогательные модули:

```sh
npm install
```

Также требуется выполнить дополнительные команды для конфигурации окружения:

```sh
export NODE_OPTIONS=--openssl-legacy-provider
```

Развертывание осуществляется следующей командой:

```sh
npm run docs:dev
```