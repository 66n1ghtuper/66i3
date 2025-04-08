import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          my_projects: "My Projects",
          order_website: "Order Website",
          projects_for_sale: "Projects for Sale",
          welcome_title: "Welcome to My Portfolio Site!",
          frontend_developer: "I am a frontend developer",
          creating_interactive_websites: "creating interactive and functional websites. If you want to order a website or project, I will be happy to cooperate and deliver on time!",
          for_collaboration_contact: "For ongoing collaboration or offers, contact me — click the airplane button in the top right corner to go to Telegram.",
          open_for_new_ideas: "I am open to new ideas and collaborative projects.",
          thank_you_for_visiting: "Thank you for visiting my site!",
          write_to_telegram: "Write in Telegram",
          my_github: "My GitHub",
          coming_soon: "Coming Soon",
          projects: {
            title: "My Projects",
            first_version_title: "First Version of My Portfolio",
            first_version_description: "Demonstration of basic web development and design skills at the initial stage of learning.",
            landing_title: "Landing Page for Car Audio Studio",
            landing_description: "This project became an important milestone in my career, proving the possibility of creating quality commercial solutions.",
            service_title: "Service for Providing Services",
            service_description: "The project became socially significant, helping migrants avoid fraud and quickly adapt to a new country.",
            scooter_rental_title: "Scooter Rental Website",
            scooter_rental_description: "The project became the business card of the company, increasing brand recognition in the micromobility market.",
            professional_growth_title: "Demonstration of Professional Growth",
            professional_growth_description: "This project reflects my professional growth — from basic layout skills to a comprehensive approach in development.",
            visit_site: "Visit Site",
          },
          order_form: {
            greeting: "Hello! Let's create the perfect website.",
            ask_name: "What should I call you?",
            greet_user: "Nice to meet you, {{name}}!",
            ask_telegram: "What is your Telegram username? (without @)",
            ask_description: "Please provide a brief description:",
            confirm_data: "Please confirm the information:",
            name: "Name",
            telegram: "Telegram",
            description: "Description",
            confirm_yes: "Yes",
            confirm_no: "No",
            success_message: "Great! Your application has been submitted.",
            telegram_contact: "I will contact you on Telegram shortly.",
            restart: "Alright, let's start over. What is your name?",
            new_application: "📌 New website application!",
            welcome_title: "Do you want to order a website?",
            interactive_prompt: "Let's do this interactively!",
            start_order: "Start order"
          },
          projects_for_sale_page: {
            title: "Projects for Sale",
            no_projects: "Currently I don't have any projects for sale."
          }
     }
      },
      ru: {
        translation: {
          home: "Главная",
          my_projects: "Мои проекты",
          order_website: "Заказать сайт",
          projects_for_sale: "Проекты на продажу",
          welcome_title: "Добро пожаловать на мой сайт-портфолио!",
          frontend_developer: "Я фронтенд разработчик",
          creating_interactive_websites: "создающий интерактивные и функциональные веб-сайты. Если вы хотите заказать сайт или проект, я буду рад сотрудничеству и сделаю в срок!",
          for_collaboration_contact: "Для постоянного сотрудничества или оффера свяжитесь со мной — нажмите на кнопку самолетика в правом верхнем углу, чтобы перейти в Telegram.",
          open_for_new_ideas: "Я открыт для новых идей и совместных проектов.",
          thank_you_for_visiting: "Спасибо за посещение моего сайта!",
          write_to_telegram: "Написать в Telegram",
          my_github: "Мой GitHub",
          coming_soon: "Скоро",
          projects: {
            title: "Мои проекты",
            first_version_title: "Первая версия моего портфолио",
            first_version_description: "Демонстрация базовых навыков веб-разработки и дизайна на начальном этапе обучения.",
            landing_title: "Лендинг для студии автозвука",
            landing_description: "Этот проект стал важным этапом в моей карьере, доказавшим возможность создания качественных коммерческих решений.",
            service_title: "Сервис для оказания услуг",
            service_description: "Проект стал социально значимым, помогая мигрантам избежать мошенничества и быстро адаптироваться в новой стране.",
            scooter_rental_title: "Сайт для аренды скутеров",
            scooter_rental_description: "Проект стал визитной карточкой компании, увеличив узнаваемость бренда на рынке микромобильности.",
            professional_growth_title: "Демонстрация профессионального роста",
            professional_growth_description: "Этот проект отражает мой профессиональный рост — от базового владения версткой до комплексного подхода в разработке.",
            visit_site: "Посетить сайт",
          },
          order_form: {
            greeting: "Привет! Давай создадим идеальный сайт.",
            ask_name: "Как я могу к вам обращаться?",
            greet_user: "Приятно познакомиться, {{name}}!",
            ask_telegram: "Какой ваш Telegram username? (без @)",
            ask_description: "Дайте краткое описание:",
            confirm_data: "Подтвердите данные:",
            name: "Имя",
            telegram: "Telegram",
            description: "Описание",
            confirm_yes: "Да",
            confirm_no: "Нет",
            success_message: "Отлично! Заявка отправлена.",
            telegram_contact: "Я свяжусь с вами в Telegram в ближайшее время.",
            restart: "Хорошо, начнем заново. Как вас зовут?",
            new_application: "📌 Новая заявка на сайт!",
            welcome_title: "Хотите заказать сайт?",
            interactive_prompt: "Давайте сделаем это в интерактивном режиме!",
            start_order: "Начать заказ"
          },
          projects_for_sale_page: {
            title: "Проекты на продажу",
            no_projects: "В настоящее время у меня нет готовых проектов для продажи.",
          }
        }
      }
    },
    lng: "ru", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
