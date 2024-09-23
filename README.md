```markdown
# README

## Оглавление

1. [Описание проекта](#описание-проекта)
2. [Технологический стек](#технологический-стек)
3. [Установка и настройка](#установка-и-настройка)
4. [Основные функции](#основные-функции)
5. [Структура проекта](#структура-проекта)
6. [Запуск проекта](#запуск-проекта)
7. [Контакты](#контакты)

---

## Описание проекта

Данный проект представляет собой веб-приложение для заказа пиццы, где пользователи могут выбирать различные виды пицц, фильтровать их по категориям, сортировать по популярности и цене, а также добавлять в корзину для оформления заказа. Приложение также поддерживает пагинацию, анимации загрузки и адаптивный дизайн для различных устройств.

---

## Технологический стек

Проект разработан с использованием современных технологий:

- **React** – библиотека для построения пользовательских интерфейсов.
- **Redux Toolkit** – управление состоянием приложения.
- **TypeScript** – язык программирования для типизации JavaScript.
- **Vite** – инструмент для быстрого сборщика модулей.
- **React Router** – маршрутизация страниц.
- **Axios** – для выполнения HTTP-запросов.
- **SCSS** – модульные стили для улучшенной работы с CSS.
- **Redux Thunk** – для обработки асинхронных запросов в Redux.
- **LocalStorage API** – для сохранения состояния корзины на клиенте.

---

## Установка и настройка

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-репозиторий.git
   ```
2. Перейдите в директорию проекта:
   ```bash
   cd project-directory
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```

---

## Основные функции

- **Фильтрация и сортировка пицц**: пользователи могут фильтровать пиццы по категориям и сортировать их по популярности, цене и названию.
- **Поиск**: возможность поиска пицц по названию.
- **Добавление в корзину**: выбор размера и типа пиццы с возможностью добавления в корзину.
- **Пагинация**: поддержка постраничного отображения товаров.
- **Загрузка данных с сервера**: асинхронная загрузка пицц с сервера и отображение индикатора загрузки.
- **Работа с LocalStorage**: сохранение состояния корзины между сессиями.
- **Обработка ошибок**: отображение страницы с ошибкой для недоступных маршрутов.

---

## Структура проекта

- **src/** – основная директория с исходным кодом:
  - **components/** – все компоненты React.
  - **redux/** – директория для Redux-слайсов и асинхронных действий.
  - **pages/** – страницы приложения.
  - **scss/** – стили в формате SCSS.
  - **utils/** – утилиты для расчета цены, работы с LocalStorage и поиска товаров в корзине.

---

## Запуск проекта

Для запуска проекта в продакшн-режиме выполните следующие шаги:

1. Соберите проект:
   ```bash
   npm run build
   ```
2. Запустите сервер:
   ```bash
   npm run preview
   ```

---

## Контакты

Если у вас возникли вопросы или предложения по проекту, вы можете связаться со мной:

- **Email**: your.email@example.com
- **GitHub**: [https://github.com/ваш-профиль](https://github.com/ваш-профиль)

---

# README

## Table of Contents

- [README](#readme)
	- [Table of Contents](#table-of-contents)
	- [Project Description](#project-description)
	- [Technology Stack](#technology-stack)
	- [Installation and Setup](#installation-and-setup)
	- [Main Features](#main-features)
	- [Project Structure](#project-structure)
	- [Running the Project](#running-the-project)
	- [Contacts](#contacts)

---

## Project Description

This project is a web application for ordering pizza, where users can choose various types of pizzas, filter them by categories, sort them by popularity and price, and add them to a cart for checkout. The application also supports pagination, loading animations, and responsive design for various devices.

---

## Technology Stack

The project is built using modern technologies:

- **React** – a library for building user interfaces.
- **Redux Toolkit** – state management for the application.
- **TypeScript** – a programming language for type-safe JavaScript.
- **Vite** – a tool for fast module bundling.
- **React Router** – for routing between pages.
- **Axios** – for making HTTP requests.
- **SCSS** – modular styles for improved CSS management.
- **Redux Thunk** – for handling asynchronous requests in Redux.
- **LocalStorage API** – for saving cart state on the client.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git
   ```
2. Navigate to the project directory:
   ```bash
   cd project-directory
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project in development mode:
   ```bash
   npm run dev
   ```

---

## Main Features

- **Filtering and Sorting Pizzas**: users can filter pizzas by categories and sort them by popularity, price, and title.
- **Search**: the ability to search for pizzas by title.
- **Add to Cart**: selecting pizza size and type with the option to add to the cart.
- **Pagination**: support for displaying products page by page.
- **Loading Data from Server**: asynchronous loading of pizzas from the server with a loading indicator.
- **Working with LocalStorage**: saving cart state between sessions.
- **Error Handling**: displaying an error page for unavailable routes.

---

## Project Structure

- **src/** – main directory containing source code:
  - **components/** – all React components.
  - **redux/** – directory for Redux slices and asynchronous actions.
  - **pages/** – application pages.
  - **scss/** – styles in SCSS format.
  - **utils/** – utilities for price calculations, working with LocalStorage, and finding products in the cart.

---

## Running the Project

To run the project in production mode, follow these steps:

1. Build the project:
   ```bash
   npm run build
   ```
2. Start the server:
   ```bash
   npm run preview
   ```

---

## Contacts

If you have any questions or suggestions about the project, feel free to contact me:

- **Email**: your.email@example.com
- **GitHub**: [https://github.com/your-profile](https://github.com/your-profile)

---
```