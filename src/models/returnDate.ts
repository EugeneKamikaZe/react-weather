import {Locale} from "../store/weather";

export default function returnDate(locale: string, isShort?: boolean) {
    const now = new Date()
    const US = {
        days: isShort
            ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        month: isShort
            ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    }
    const RU = {
        days: isShort
            ? ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
            : ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        month: isShort
            ? ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
            : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    }

    switch (locale) {
        case Locale.RU:
            return `${RU.days[now.getDay()]} ${now.getDate()} ${RU.month[now.getMonth()]}`
        case Locale.US:
            return `${US.days[now.getDay()]} ${now.getDate()} ${US.month[now.getMonth()]}`
    }
}
