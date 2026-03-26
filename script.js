









const translations = {
    ky: {
        title1: "Иско авто Дубай",
        title2: "Саламатсызбы бул жерден сиз Дубайдан машина заказ кыла аласыз",
        title3: "Менин атым Торобеков Искен",
        title4: "Текшерип алуу",
        title5: "Бизден машина заказ кылсаңыз 10% скидка аласыз"
    },
    ru: {
        title1: "Иско авто Дубай",
        title2: "Здравствуйте, здесь вы можете заказать машину из Дубая",
        title3: "Меня зовут Торобеков Искен",
        title4: "Проверка",
        title5: "При заказе авто получите скидку 10%"
    },
    en: {
        title1: "Isko Auto Dubai",
        title2: "Hello, here you can order a car from Dubai",
        title3: "My name is Torobekov Isken",
        title4: "Check",
        title5: "Order a car and get 10% discount"
    }

}


 (lang) 
  

    if (document.getElementById("title1"))
        document.getElementById("title1").innerText = translations[lang].title1;

    if (document.getElementById("title2"))
        document.getElementById("title2").innerText = translations[lang].title2;

    if (document.getElementById("title3"))
        document.getElementById("title3").innerText = translations[lang].title3;

    if (document.getElementById("title4"))
        document.getElementById("title4").innerText = translations[lang].title4;

    if (document.getElementById("title5"))
        document.getElementById("title5").innerText = translations[lang].title5;

    // кнопкалар
    let btns = document.querySelectorAll(".buyBtn");

    btns.forEach(btn => {
        if (lang === "ky") btn.value = "сатып алуу";
        else if (lang === "ru") btn.value = "купить";
        else if (lang === "en") btn.value = "buy";
    });




async function getRate() {
    const result = document.getElementById("result");

    try {
        let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        let data = await response.json();

        let rate = data.rates.KGS;

        result.innerHTML = "💵 1 USD = " + rate + " сом";
    } catch (error) {
        result.innerHTML = "Курс жүктөлгөн жок ❌";
    }
}