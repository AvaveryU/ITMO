const base = document.querySelectorAll(".projects__item");
const active = document.querySelector(".projects__item_active");
const activeItem = document.querySelectorAll(".projects__item_active");
const activeSide = document.querySelectorAll(".projects__item_active-side");

let pages = 14;

const swiperAll = new Swiper(".mySwiper_1", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiperAll, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperGos = new Swiper(".mySwiper_2", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperSpec = new Swiper(".mySwiper_3", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperDev = new Swiper(".mySwiper_4", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

// Tablet swipers

const swiperAllTablet = new Swiper(".mySwiper_1-tablet", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiperAll, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperGosTablet = new Swiper(".mySwiper_2-tablet", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperSpecTablet = new Swiper(".mySwiper_3-tablet", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperDevTablet = new Swiper(".mySwiper_4-tablet", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

// Mobile swipers

const swiperAllMobile = new Swiper(".mySwiper_1-mobile", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiperAll, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperGosMobile = new Swiper(".mySwiper_2-mobile", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperSpecMobile = new Swiper(".mySwiper_3-mobile", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiperDevMobile = new Swiper(".mySwiper_4-mobile", {
    slidesPerView: 1,

    spaceBetween: 100,

    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function createPagination(swiper, current, total) {
            let str = '<ul class="projects__pagination">';
            let active;
            let pageCutLow = current - 1;
            let pageCutHigh = current + 1;

            if (total < 6) {
                for (let p = 1; p <= total; p++) {
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages )">' +
                        p +
                        "</a></li>";
                }
            } else {
                if (current === 1 || current === 5) {
                    pageCutHigh += 2;
                } else if (current === 2 || current === 6) {
                    pageCutHigh += 1;
                } else if (current === 4 || current === 8) {
                    pageCutHigh += -1;
                }

                if (current === 3) {
                    pageCutLow -= 2;
                } else if (current === 4) {
                    pageCutLow -= 3;
                } else if (current === 5) {
                    pageCutLow -= -1;
                } else if (current === 7) {
                    pageCutLow -= 1;
                } else if (current === 8) {
                    pageCutLow -= 2;
                } else if (current === total) {
                    pageCutLow -= 2;
                } else if (current === total - 1) {
                    pageCutLow -= 1;
                }

                for (let p = pageCutLow; p <= pageCutHigh; p++) {
                    if (p === 0) {
                        p += 1;
                    }
                    if (p > total) {
                        continue;
                    }
                    active = current == p ? "active" : "no";
                    str +=
                        '<li class="projects__page-item ' +
                        active +
                        '"><a class="projects__page" onclick="createPagination(' +
                        p +
                        ', pages)">' +
                        p +
                        "</a></li>";
                }

                if (current < total - 1) {
                    if (current < total - 2) {
                        str +=
                            '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                            (current + 2) +
                            ', pages)">...</a></li>';
                    }
                    str +=
                        '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                        total +
                        "</a></li>";
                }
            }

            str += "</ul>";

            document.getElementById("pagination").innerHTML = str;
            return str;
        },
    },
});

const swiper_1 = document.getElementById("tab-01");
const swiper_2 = document.getElementById("tab-02");
const swiper_3 = document.getElementById("tab-03");
const swiper_4 = document.getElementById("tab-04");

const swiper_1_tablet = document.getElementById("tab-01-tablet");
const swiper_2_tablet = document.getElementById("tab-02-tablet");
const swiper_3_tablet = document.getElementById("tab-03-tablet");
const swiper_4_tablet = document.getElementById("tab-04-tablet");

const swiper_1_mobile = document.getElementById("select-01-mobile");
const swiper_2_mobile = document.getElementById("select-02-mobile");
const swiper_3_mobile = document.getElementById("select-03-mobile");
const swiper_4_mobile = document.getElementById("select-04-mobile");

function createPagination(current, total) {
    let str = '<ul class="projects__pagination">';
    let active;
    let pageCutLow = current - 1;
    let pageCutHigh = current + 1;

    if (swiperAll && swiper_1.classList.contains("projects__swiper_active")) {
        swiperAll.slideTo(`${pageCutLow}`, 0);
    }
    if (swiperGos && swiper_2.classList.contains("projects__swiper_active")) {
        swiperGos.slideTo(`${pageCutLow}`, 0);
    }
    if (swiperSpec && swiper_3.classList.contains("projects__swiper_active")) {
        swiperSpec.slideTo(`${pageCutLow}`, 0);
    }
    if (swiperDev && swiper_4.classList.contains("projects__swiper_active")) {
        swiperDev.slideTo(`${pageCutLow}`, 0);
    }

    if (
        swiperAllTablet &&
        swiper_1_tablet.classList.contains("projects__swiper-tablet_active")
    ) {
        swiperAllTablet.slideTo(`${pageCutLow}`, 0);
    }
    if (
        swiperGosTablet &&
        swiper_2_tablet.classList.contains("projects__swiper-tablet_active")
    ) {
        swiperGosTablet.slideTo(`${pageCutLow}`, 0);
    }
    if (
        swiperSpecTablet &&
        swiper_3_tablet.classList.contains("projects__swiper-tablet_active")
    ) {
        swiperSpecTablet.slideTo(`${pageCutLow}`, 0);
    }
    if (
        swiperDevTablet &&
        swiper_4_tablet.classList.contains("projects__swiper-tablet_active")
    ) {
        swiperDevTablet.slideTo(`${pageCutLow}`, 0);
    }

    if (
        swiperAllMobile &&
        swiper_1_mobile.classList.contains("projects__swiper-mobile_active")
    ) {
        swiperAllMobile.slideTo(`${pageCutLow}`, 0);
    }
    if (
        swiperGosMobile &&
        swiper_2_mobile.classList.contains("projects__swiper-mobile_active")
    ) {
        swiperGosMobile.slideTo(`${pageCutLow}`, 0);
    }
    if (
        swiperSpecMobile &&
        swiper_3_mobile.classList.contains("projects__swiper-mobile_active")
    ) {
        swiperSpecMobile.slideTo(`${pageCutLow}`, 0);
    }
    if (
        swiperDevMobile &&
        swiper_4_mobile.classList.contains("projects__swiper-mobile_active")
    ) {
        swiperDevMobile.slideTo(`${pageCutLow}`, 0);
    }

    if (total < 6) {
        for (let p = 1; p <= total; p++) {
            active = current == p ? "active" : "no";
            str +=
                '<li class="' +
                active +
                '"><a class="projects__page" onclick="createPagination(' +
                p +
                ', pages )">' +
                p +
                "</a></li>";
        }
    } else {
        if (current === 1 || current === 5) {
            pageCutHigh += 2;
        } else if (current === 2 || current === 6) {
            pageCutHigh += 1;
        } else if (current === 4 || current === 8) {
            pageCutHigh += -1;
        }

        if (current === 3) {
            pageCutLow -= 2;
        } else if (current === 4 || current === 8) {
            pageCutLow -= 3;
        } else if (current === 5) {
            pageCutLow -= -1;
        } else if (current === 7) {
            pageCutLow -= 1;
        } else if (current === 8) {
            pageCutLow -= 2;
        } else if (current === total) {
            pageCutLow -= 2;
        } else if (current === total - 1) {
            pageCutLow -= 1;
        }

        for (let p = pageCutLow; p <= pageCutHigh; p++) {
            if (p === 0) {
                p += 1;
            }
            if (p > total) {
                continue;
            }
            active = current == p ? "active" : "no";
            str +=
                '<li class="projects__page-item ' +
                active +
                '"><a class="projects__page" onclick="createPagination(' +
                p +
                ', pages)">' +
                p +
                "</a></li>";
        }

        if (current < total - 1) {
            if (current < total - 2) {
                str +=
                    '<li class="out-of-range"><a class="projects__page" onclick="createPagination(' +
                    (current + 2) +
                    ', pages)">...</a></li>';
            }
            str +=
                '<li class="projects__page-item no"><a class="projects__page" onclick="createPagination(pages, pages)">' +
                total +
                "</a></li>";
        }
    }

    str += "</ul>";

    document.getElementById("pagination").innerHTML = str;
    return str;
}

// Табы версия desktop

document.querySelectorAll(".projects__link").forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.target.getAttribute("href").replace("#", "");

        document
            .querySelectorAll(".projects__link")
            .forEach((child) => child.classList.remove("projects__link_active"));

        document
            .querySelectorAll(".projects__swiper")
            .forEach((child) => child.classList.remove("projects__swiper_active"));

        item.classList.add("projects__link_active");
        document.getElementById(id).classList.add("projects__swiper_active");
        swiperAll.slideTo(0, 0);
        swiperSpec.slideTo(0, 0);
        swiperDev.slideTo(0, 0);
        swiperGos.slideTo(0, 0);
    });
});

// Табы версия tablet

document.querySelectorAll(".projects__link-tablet").forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.target.getAttribute("href").replace("#", "");

        document
            .querySelectorAll(".projects__link-tablet")
            .forEach((child) =>
                child.classList.remove("projects__link-tablet_active")
            );

        document
            .querySelectorAll(".projects__swiper-tablet")
            .forEach((child) =>
                child.classList.remove("projects__swiper-tablet_active")
            );

        item.classList.add("projects__link-tablet_active");

        document.getElementById(id).classList.add("projects__swiper-tablet_active");
        swiperAllTablet.slideTo(0, 0);
        swiperSpecTablet.slideTo(0, 0);
        swiperDevTablet.slideTo(0, 0);
        swiperGosTablet.slideTo(0, 0);
    });
});

const select = document.querySelector(".projects__links-mobile");


select.addEventListener("change", function() {
    if (this.value === "select_1") {
        swiper_1_mobile.classList.add("projects__swiper-mobile_active");
        swiper_2_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_3_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_4_mobile.classList.remove("projects__swiper-mobile_active");
        swiperAllMobile.slideTo(0, 0);
    } else if (this.value === "select_2") {
        swiper_2_mobile.classList.add("projects__swiper-mobile_active");
        swiper_1_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_3_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_4_mobile.classList.remove("projects__swiper-mobile_active");
        swiperSpecMobile.slideTo(0, 0);
    } else if (this.value === "select_3") {
        swiper_3_mobile.classList.add("projects__swiper-mobile_active");
        swiper_1_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_2_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_4_mobile.classList.remove("projects__swiper-mobile_active");
        swiperDevMobile.slideTo(0, 0);
    } else if (this.value === "select_4") {
        swiper_4_mobile.classList.add("projects__swiper-mobile_active");
        swiper_2_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_3_mobile.classList.remove("projects__swiper-mobile_active");
        swiper_1_mobile.classList.remove("projects__swiper-mobile_active");
        swiperGosMobile.slideTo(0, 0);
    }
});

if (select.value === "select_1") {
    swiper_1_mobile.classList.add("projects__swiper-mobile_active");
}

document.querySelector(".projects__link").click();
document.querySelector(".projects__link-tablet").click();

function open() {
    const content = this.nextElementSibling;

    this.style.display = "none";

    content.style.display = "block";
}

base.forEach((button) =>
    button.addEventListener("click", function() {
        const content = this.nextElementSibling;

        activeItem.forEach((item) => {
            if (item.getAttribute("style") === "display: block;") {
                item.setAttribute("style", "display: none;");
                base.forEach((item) => item.setAttribute("style", "display: block;"));
            }
            this.style.display = "none";
            content.style.display = "block";
        });

        activeSide.forEach((item) => {
            if (item.getAttribute("style") === "display: block;") {
                item.setAttribute("style", "display: none;");
                base.forEach((item) => item.setAttribute("style", "display: block;"));
            }
            this.style.display = "none";
            content.style.display = "block";
        });
    })
);
activeItem.forEach((button) => button.addEventListener("click", close));
activeSide.forEach((button) => button.addEventListener("click", close));

function close() {
    this.style.display = "none";

    const content = this.previousElementSibling;
    content.style.display = "block";
}

const buttonEducation = document.querySelector(".education__button");
const educationAspirant = document.querySelector(".education__group-aspirant");
const educationMagistr = document.querySelector(".education__group-magistr");

buttonEducation.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.toggle("education__button-toggle");
    educationAspirant.classList.toggle("education__group-hidden");
    educationMagistr.classList.toggle("education__group-hidden");
});