const section = document.querySelector(".publications");


///массив данных для карточек
const initialCards = [{
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:O3NaXMp0MMsC",
        image: "/vendor/images/image1.svg",
        theme: "Topic-driven Ensemble for Online Advertising Generation",
        authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
        article: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:GnPB-g6toBAC",
        image: "/vendor/images/image2.2.png",
        theme: "Convolutional neural networks with hierarchical context transfe…",
        authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
        article: "In this work, we consider a problem of predicting the next state of a given area using retrospective information. The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state prediction problems - density variability, a sig…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:blknAaTinKkC",
        image: "/vendor/images/image3.svg",
        theme: "Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat…",
        authors: "Ksenia Mukhina, Alexander Visheratin, Denis Nasonov",
        article: "One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. But it is widely known that the…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:hMod-77fHWUC",
        image: "./vendor/images/image4.svg",
        theme: "Peregreen–modular database for efficient storage of historical tim…",
        authors: "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B…",
        article: "The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but als…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:k_IJM867U9cC",
        image: "./vendor/images/image5.svg",
        theme: "Intelligent sightseeing in immensely manifold cities: Case …",
        authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich",
        article: "In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: locations social media popularity and rating, distances of place from others in r…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:4JMBOYKVnBMC",
        image: "./vendor/images/image6.svg",
        theme: "User Profiles Matching for Different Social Networks Based …",
        authors: "User Profiles Matching for Different Social Networks Based …",
        article: "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:RHpTSmoSYBkC",
        image: "./vendor/images/image7.svg",
        theme: "Orienteering Problem with Functional Profits for multi-sourc…",
        authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
        article: "Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of …",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:maZDTaKrznsC",
        image: "./vendor/images/image8.svg",
        theme: "Intellectual Execution Scheme of Iterative Computational Models …",
        authors: " Mikhail Melnik, Denis A Nasonov,   Alexey Liniov",
        article: "In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also becomes more complex. This leads more and more often to the need to use high-performance computationalclusters, such as supercomputers. Created m…",
    },

    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:TFP_iSt0sucC",
        image: "./vendor/images/image9.svg",
        theme: "Urban events prediction via convolutional neural networks a…",
        authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
        article: "In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models...",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:bEWYMUwI8FkC",
        image: "./vendor/images/image10.svg",
        theme: "Ensemble-based method of answers retrieval for domain spe…",
        authors: "Iskander Safiulin, Nikolay Butakov, Dmitriy Alexandrov, Denis Nasonov",
        article: "Many companies want or prefer to use chatbot systems to provide smart assistants for accompanying human specialists especially newbies with automatic consulting. Implementation of a really useful smart assistant for a specific domain requires a knowledge base for this domain, that often e…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:iH-uZ7U-co4C",
        image: "./vendor/images/image11.svg",
        theme: "Evaluation of modern tools and techniques for storing time-serie…",
        authors: "Alexey Struckov, Semen Yufa, Alexander A Visheratin, Denis Nasonov",
        article: "Time series data as its analysis and applications recently have become increasingly important in different areas and domains. Many fields of science and industry rely on storing and processing large amounts of time series - economics and finance, medicine, the Internet of Things, environmental protection, …",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:r0BpntZqJG4C",
        image: "./vendor/images/image12.svg",
        theme: "Workflow scheduling using neural networks and reinforcement lear…",
        authors: "Mikhail Melnik, Denis Nasonov",
        article: "The development of information technologies entails a nonlinear growth of both volumes of data and the complexity of data processing itself. Scheduling is one of the main components for optimizing the operation of   the computing system. Currently, there are a large number of scheduling algorithms. However, even in spite of existing hybrid sch…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:R3hNpaxXUhUC",
        image: "./vendor/images/image13.svg",
        theme: "Building City-Scale Walking Itineraries Using Large Geospatia…",
        authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
        article: "Nowadays, social networks play an important role in many aspects of peoples life and in traveling in particular. People share their experience and opinions not only on specialized sites, like TripAdvisor, but also in social networks, e.g. Instagram. Combining information from different sources we can ge…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:TQgYirikUcIC",
        image: "./vendor/images/image14.svg",
        theme: "Forecasting of the Urban Area State Using Convolutional Neural…",
        authors: "Ksenia D Mukhina, Alexander A Visheratin, Gali-Ketema Mbogo, Denis Nasonov",
        article: "Active development of modern cities requires not only efficient monitoring systems but furthermore forecasting systems that can predict future state of the urban area with high accuracy. In this work we present a method for urban area prediction based on geospatial activity of users in social network. One of the …",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:HDshCWvjkbEC",
        image: "./vendor/images/image15.svg",
        theme: "Multiscale event detection using convolutional quadtrees and ada…",
        authors: "A A Visheratin, K D Mukhina, A K Visheratina, D Nasonov, A V Boukhanovsky",
        article: "Increasing popularity of social networks made them a viable data source for many data mining applications and event detection is no exception. Researchers aim not only to find events that happen in networks but more importantly to identify and locate events occurring in the real world. In this paper, we …",
    },
    {
        articleLink: "",
        image: "./vendor/images/image16.svg",
        theme: "...",
        authors: "Nikolay Butakov, Maxim Petrov, Ksenia Mukhina, Denis Nasonov, Sergey Kovalchuk",
        article: "Data provided by social media becomes an increasingly important analysis material for social scientists, market analysts, and other stakeholders. Diversity of interests leads to the emergence of a variety of crawling techniques and programming solutions. Nevertheless, these solutions have a lack of flexibility to sati…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:-f6ydRqryjwC",
        image: "./vendor/images/image17.svg",
        theme: "The multi-level adaptive approach for efficient execution of multi-sc…",
        authors: "D Nasonov, N Butakov, M Melnik, A Visheratin, A Linev, P Shvets, S Sobolev, K Mukhina",
        article: "Today advanced research is based on complex simulations which require a lot of computational resources that usually are organized in a very complicated way from technical part of the view. It means that a scientist from physics, biology or even sociology should struggle with all technical is…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:IWHjjKOFINEC",
        image: "./vendor/images/image18.svg",
        theme: "Precedent-Based Approach for the Identification of Deviant Behavio…",
        authors: "Anna V Kalyuzhnaya, Nikolay O Nikitin, Nikolay Butakov, Denis Nasonov",
        article: "The current paper is devoted to a problem of deviant users’ identification in social media. For this purpose, each user of social media source should be described through a profile that aggregates open information about him/her within the special structure. Aggregated user profiles are formally describ…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:ZeXyd9-uunAC",
        image: "./vendor/images/image19.svg",
        theme: "Blockchain-based transaction integrity in distributed big data …",
        authors: "Denis Nasonov, Alexander A Visheratin, Alexander Boukhanovsky",
        article: "Today Big Data occupies a crucial part of scientific research areas as well as in the business analysis of large companies. Each company tries to find the best way to make generated Big Data sets valuable and profitable. However, in most cases, companies have not enough opportunities and budget t…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:qxL8FJ1GzNcC",
        image: "./vendor/images/image20.svg",
        theme: "Towards a scenario-based solution for extreme metocean event sim…",
        authors: "A Kalyuzhnaya, D Nasonov, S Ivanov, S Kosukhin, A Boukhanovsky",
        article: "Today, metocean investigations, combined with forecasts and analysis of extreme events, require new design and development approaches because of their complexity. Extreme metocean events forecasting and prevention is an urgent computing task from decision-making and for reaction point of view.",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:YOwf2qJgpHMC",
        image: "./vendor/images/image21.svg",
        theme: "Storage tier-aware replicative data reorganization with prioritization…",
        authors: "Anton Spivak, Andrew Razumovskiy, Denis Nasonov, Alexander Boukhanovsky, Anton Redice",
        article: "The importance of data collection, processing, and analysis is rapidly growing. Big Data technologies are in high demand in many fields, including bio-informatics, hydrometeorology, and high energy physics. One of the most popular computational paradigms used in large data processing fra…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:J_g5lzvAfSwC",
        image: "./vendor/images/image22.svg",
        theme: "Hybrid scheduling algorithm in early warning systems",
        authors: "A Visheratin, M Melnik, D Nasonov, N Butakov, A Boukhanovsky",
        article: "The development of an efficient Early Warning System (EWS) is essential for the prediction and prevention of imminent natural hazards. In addition to providing a computationally intensive infrastructure with extensive data transfer, high-execution reliability and hard-deadline satisfaction are important req…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:0EnyYjriUFMC",
        image: "./vendor/images/image23.svg",
        theme: "Distributed data-driven platform for urgent decision making in car…",
        authors: "Sergey V Kovalchuk, Evgeniy Krotov, Pavel A Smirnov, Denis A Nasonov, Alexey N Yakovlev",
        article: "his paper presents ongoing research aimed at developing a data-driven platform for clinical decision support systems (DSSs) that require integration and processing of various data sources within a single solution. Resource management is developed within a framework of an urgent computing approach to address …",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:hC7cP41nSMkC",
        image: "./vendor/images/image24.svg",
        theme: "Byzantine fault-tolerant and semantic-driven consensus proto…",
        authors: "Stepan Rakitin, Alexander A Visheratin, Denis Nasonov",
        article: "To provide fault tolerance, modern distributed storage systems use specialized network topologies and consensus protocols that create high overheads. The main disadvantage of existing specialized topologies is a difficulty to implement an efficient data placement that takes into account locality of the data. In scie…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:qUcmZB5y_30C",
        image: "./vendor/images/image25.svg",
        theme: "Adaptive performance model for dynamic scaling Apache Spark St…",
        authors: "Max Petrov, Nikolay Butakov, Denis Nasonov, Mikhail Melnik",
        article: "Nowadays, data volumes increase exceptionally, a lot of information comes from different sources, for example, from mobile phones, sensors, traffic, etc. All information from these sources can be represented as a data streams, which can grow up and fall in time in their size. In the first case, data proce…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:QIV2ME_5wuYC",
        image: "./vendor/images/image26.svg",
        theme: "Hybrid evolutionary workflow scheduling algorithm for dynami…",
        authors: "D Nasonov, A Visheratin, N Butakov, N Shindyapina, M Melnik, A Boukhanovsky",
        article: "he optimal workflow scheduling is one of the most important issues in heterogeneous distributed computational environments. Existing heuristic and evolutionary scheduling algorithms have their advantages and disadvantages. In this work we propose a hybrid algorithm based on heuristic methods…",
    },
    {
        articleLink: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:kNdYIx-mwKoC",
        image: "./vendor/images/image27.svg",
        theme: "Execution time estimation for workflow scheduling",
        authors: "A Chirkin, Adam SZ Belloum, S Kovalchuk, Marc X Makkes, M Melnik, A Visheratin, D Nasonov",
        article: "Estimation of the execution time is an important part of the workflow scheduling problem. The aim of this paper is to highlight common problems in estimating the workflow execution time and propose a solution that takes into account the complexity and the stochastic aspects of the workflow compone…",
    },
];





//for header-mobile
const buttonMobile = document.querySelector(".header__menu-mobile-button");
const logoMobile = document.querySelector(".logo_place_mobile-menu");
const logoHeader = document.querySelector(".logo_place_header");
buttonMobile.addEventListener("click", function() {
    if (!buttonMobile.classList.contains("header__menu-mobile-button_open")) {
        logoMobile.style.opacity = "1";
        logoHeader.style.opacity = "0";
    } else {
        logoMobile.style.opacity = "0";
        logoHeader.style.opacity = "1";
    }
    buttonMobile.classList.toggle("header__menu-mobile-button_open");
});
//swiper about
const swiperAbout = new Swiper(".about__swiper", {
    // Optional parameters
    direction: "horizontal",
    //loop: true,
    slidesPerView: 3,
    slideClass: "about__slide",
    wrapperClass: "about__swiper-wrapper",
    //slidesPerGroup: 3,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: ".about__pagination",
        type: "bullets",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".about__swiper-button-next",
        prevEl: ".about__swiper-button-prev",
    },
    breakpoints: {
        1440: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});
///создаем карточку и накладываем слушатели
function createCard(cardData) {
    const card = document
        .querySelector("#card")
        .content.querySelector(".cardconteiner")
        .cloneNode(true);
    const overlay = card.querySelector(".cardconteiner__overlay");
    const about = card.querySelector(".cardconteiner__about");
    const link = card.querySelector(".cardconteiner__text");
    const triangle = card.querySelector(".cardconteiner__triangle");
    const linksConteiner = card.querySelector(".cardconteiner__links");

    triangle.addEventListener("click", (event) => {
        const links = event.currentTarget
            .closest(".cardconteiner")
            .querySelector(".cardconteiner__links");
        links.classList.toggle("cardconteiner__links_visible");
    });

    overlay.addEventListener("mouseover", (event) => {
        event.currentTarget
            .closest(".cardconteiner")
            .querySelector(".cardconteiner__about")
            .classList.add("cardconteiner__about_removed");
        event.currentTarget
            .closest(".cardconteiner")
            .querySelector(".cardconteiner__footer")
            .classList.add("cardconteiner__footer_type_visible");
        event.currentTarget
            .querySelector(".cardconteiner__text")
            .classList.add("cardconteiner__text_visible");
        event.currentTarget
            .querySelector(".cardconteiner__arrow ")
            .classList.add("cardconteiner__arrow_visible");
        event.currentTarget
            .querySelector(".cardconteiner__triangle")
            .classList.add("cardconteiner__triangle_visible");
    });

    overlay.addEventListener("mouseout", (event) => {
        event.currentTarget
            .closest(".cardconteiner")
            .querySelector(".cardconteiner__about")
            .classList.remove("cardconteiner__about_removed");
        event.currentTarget
            .closest(".cardconteiner")
            .querySelector(".cardconteiner__footer")
            .classList.remove("cardconteiner__footer_type_visible");
        event.currentTarget
            .querySelector(".cardconteiner__text")
            .classList.remove("cardconteiner__text_visible");
        event.currentTarget
            .querySelector(".cardconteiner__arrow ")
            .classList.remove("cardconteiner__arrow_visible");
        event.currentTarget
            .querySelector(".cardconteiner__triangle")
            .classList.remove("cardconteiner__triangle_visible");
    });

    const image = card.querySelector(".cardconteiner__image");
    const theme = card.querySelector(".cardconteiner__title");
    const authors = card.querySelector(".cardconteiner__authors");
    const article = card.querySelector(".cardconteiner__article");
    link.setAttribute("href", cardData.articleLink);
    image.setAttribute("src", cardData.image);
    theme.textContent = cardData.theme;
    authors.textContent = cardData.authors;
    article.textContent = cardData.article;

    return card;
}

///добавляем карточки в слайдер
function addCard(cardData) {
    const slider = document.querySelector(".publications__swiper_wrapper");
    slider.append(createCard(cardData));
}

initialCards.forEach((item) => {
    addCard(item);
});

///логика дя скрытия всплывающего блока с ссылками на соцсети
section.addEventListener("mouseover", (e) => {
    if (
        e.target.classList.contains("cardconteiner__about") ||
        e.target.classList.contains("cardconteiner__article") ||
        e.target.classList.contains("publications__swiper") ||
        e.target.classList.contains("publications__swiper_wrapper") ||
        e.target === e.currentTarget
    ) {
        e.currentTarget
            .querySelectorAll(".cardconteiner__links")
            .forEach((item) => {
                item.classList.remove("cardconteiner__links_visible");
            });
    }
});

const swiper = new Swiper(".publications__swiper", {
    slideClass: "cardconteiner",
    wrapperClass: "publications__swiper_wrapper ",
    direction: "horizontal",

    grabCursor: true,

    pagination: {
        el: ".publications__pagination",

        clickable: true,
        type: "bullets",
        bulletClass: "publications__pagination_bullet",
        bulletActiveClass: "publications__pagination_bullet_active",
        bulletElement: "span",

        centerInsufficientSlides: true,
    },
    navigation: {
        nextEl: ".publications__button-next",
        prevEl: ".publications__button-prev",
    },
    breakpoints: {
        1440: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
        759: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        290: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

function closePopup(popup) {
    popup.removeEventListener("click", handleClickOverlay);
    popup.classList.remove("popup_opened");
}

const handleClickOverlay = (evt) => {
    if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__exit-button")
    ) {
        closePopup(evt.currentTarget);
    }
};

function openPopup(popup) {
    popup.classList.add("popup_opened");
    popup.addEventListener("click", handleClickOverlay);
}

const detailsButtons = document.querySelectorAll(".industrial__button");
const popupLab = document.querySelector("#lab");

detailsButtons.forEach((button) => {
    button.addEventListener("click", function() {
        openPopup(popupLab);
    });
});

const swiperTeamSection = new Swiper(".team__swiper-containers", {
    slideClass: "team__container",
    wrapperClass: "team__containers",
    direction: "horizontal",
    grabCursor: true,
    pagination: {
        el: ".team__pagination",
        clickable: true,
        type: "bullets",
        bulletClass: "team__radio-button",
        bulletActiveClass: "team__radio-button_type_active",
        bulletElement: "button",
        centerInsufficientSlides: true,
    },
    navigation: {
        nextEl: ".team__radio-button_type_next",
        prevEl: ".team__radio-button_type_prev",
    },

    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
        1410: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            // loop: false,
        },
        320: {
            slidesOffsetBefore: -49, //отступ для первого слайда
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 2,
            loop: true,
        },
    },
});