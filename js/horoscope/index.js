$("#gethoroscope").on("click", function () {
    let birthday = $(".dateholder").val();
    console.log(birthday);
    let myBirthday = new Date(birthday);
    let horoscope = getHoroscope(myBirthday);
    console.log(horoscope);
    $("#horosimg").attr("src", `img/${horoscope}.PNG`)
});
function getHoroscope(pDate) {
    var month = pDate.getMonth() + 1;
    var day = pDate.getDate();
    let horoscope = null;
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        horoscope = "Capricon";
    }
    else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        horoscope = "Aquarius";
    }
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        horoscope = "Pisces";
    }
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        horoscope = "Aries";
    }
    else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        horoscope = "Taurus";
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        horoscope = "Gemini";
    }
    else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        horoscope = "Cancer";
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        horoscope = "Leo";
    }
    else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        horoscope = "Vigro";
    }
    else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        horoscope = "Libra";
    }
    else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        horoscope = "Scorpio";
    }
    else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        horoscope = "Capricorn";
    }
    return horoscope;
} 