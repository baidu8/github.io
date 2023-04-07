function show_date_time() {
    window.setTimeout("show_date_time()", 1e3), BirthDay = new Date("04/07/2023 21:07:13 "), today = new Date, timeold =
        today.getTime() - BirthDay.getTime(), sectimeold = timeold / 1e3, secondsold = Math.floor(sectimeold), msPerDay =
        24 * 60 * 60 * 1e3, e_daysold = timeold / msPerDay, daysold = Math.floor(e_daysold), e_hrsold = 24 * (e_daysold -
            daysold), hrsold = Math.floor(e_hrsold), e_minsold = 60 * (e_hrsold - hrsold), minsold = Math.floor(60 * (
            e_hrsold - hrsold)), seconds = Math.floor(60 * (e_minsold - minsold)), span_dt_dt.innerHTML =
        "<font style=color:#C40000>" + daysold + "</font> 天 <font style=color:#C40000>" + hrsold +
        "</font> 时 <font style=color:#C40000>" + minsold + "</font> 分 <font style=color:#C40000>" + seconds +
        "</font> 秒"
}
show_date_time();
