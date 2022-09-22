jQuery('#datetimepicker').datetimepicker({
    format: 'd.m.Y H:i',
    inline: true,
    lang: 'zh-TW',
    minTime: "10:00",                // 设置timepicker最小的限制时间   如：08:00
    maxTime: "22:00",                // 设置timepicker最小的限制时间   如：08:00
    // startDate: true,
    validateOnBlur: true,
    disabledDates: ['10.10.2022', '23.09.2022'],
    formatDate: 'd.m.Y',
    // showApplyButton: true,
});



$('#datetimepicker').datetimepicker({
    onChangeDateTime: function (dateText, inst) {
        console.log(dateText);
    }
});
$('#input').datetimepicker();
$('#confirm').on('click', function () {
    // Use
    let jsDate = $('#datetimepicker').datetimepicker('getValue');
    // if (jsDate !== null) { // if any date selected in datepicker
    //     jsDate instanceof Date; // -> true
    //     jsDate.getDate();
    //     jsDate.getMonth();
    //     jsDate.getFullYear();
    // }
    console.log(jsDate);
    console.log(jsDate.toLocaleString());
    console.log(jsDate.getHours());
    // console.log(jsDate.getDate());
    // console.log(jsDate.getMonth() + 1);
    // console.log(jsDate.getFullYear());
    // localStorage.setItem('resvDate', jsDate);

    localStorage.setItem('resvDate', JSON.stringify(jsDate));
    localStorage.setItem('resvTimeStart', JSON.stringify(jsDate.getHours()));
    // localStorage.setItem('resvDate', JSON.stringify(jsDate.format('yyyy-MM-dd hh:mm:ss')));
    // this.orderList = JSON.parse(orderLists)


});
$(document).ready(function () {
    let resvDate = localStorage.getItem('resvDate');
    let resvDateStrParse = JSON.parse(resvDate);
    let resvDateYY = resvDateStrParse.substring(0, 10);
    console.log(resvDate);
    console.log(resvDateStrParse);
    console.log(resvDateYY);
    $('#resvDate').text(resvDateYY);

    let resvTimeStart = localStorage.getItem('resvTimeStart');
    let resvTimeStartStrParse = JSON.parse(resvTimeStart);
    // let resvTimeStartYY = resvTimeStartStrParse.substring(0, 10);
    console.log(resvTimeStart);
    console.log(resvTimeStartStrParse);
    // console.log(resvTimeStartYY);
    $('#resvTimeStart').text(resvTimeStart + ":00");
});
