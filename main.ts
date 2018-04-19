//% weight=70 icon="\uf017"
//% color=#EC7505 block="時間"
namespace rtc {
    const rtcAddress = 104;
    function bcd2bin(val: number) {
        return val - 6 * (val >> 4);
    }
    function bin2bcd(val: number) {
        return val + 6 * (val / 10);
    }
    function getTimeData() {
        pins.i2cWriteNumber(rtcAddress, 0, NumberFormat.UInt8LE, false);
        return pins.i2cReadBuffer(rtcAddress, pins.sizeOf(NumberFormat.UInt8LE) * 10);
    }

     
    //% blockId=set_time block="時間を設定 年(下２けた)%years | 月%months| 日%days| 時%hours| 分%minutes|秒 %seconds"
    export function setTimeDate(years: number, months: number, days: number, 
        hours: number, minutes: number, seconds: number): void{
        pins.i2cWriteNumber(rtcAddress, 0, NumberFormat.UInt8LE, false);
        let i2cBuffer = pins.createBuffer(NumberFormat.UInt8LE * 11);
        
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 1, 0);
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 2, 0);
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 3, 0);
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 4, 128 + bin2bcd(seconds));
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 5, bin2bcd(minutes));
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 6, bin2bcd(hours));
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 7, bin2bcd(days));
        //i2cBuffer.setNumber(NumberFormat.UInt8LE, 8, 1 % 7);
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 9, bin2bcd(months));
        i2cBuffer.setNumber(NumberFormat.UInt8LE, 10, bin2bcd(years));
        pins.i2cWriteBuffer(rtcAddress, i2cBuffer, false);
    }

    //% blockId=get_year block="年"
    export function getYear(): number {
        let timeBuf = getTimeData();
        let year = bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, 9));
        return year;
    }
    //% blockId=get_month block="月"
    export function getMonth(): number {
        let timeBuf = getTimeData();
        let months = bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, 8));
        return months;
    }
    //% blockId=get_day block="日"
    export function getDay(): number {
        let timeBuf = getTimeData();
        let days = bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, 6));
        return days;
    }
    //% blockId=get_hour block="時"
    export function getHours(): number {
        let timeBuf = getTimeData();
        let hours = bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, 5));
        return hours;
    }
    //% blockId=get_minute block="分"
    export function getMinute(): number {
        let timeBuf = getTimeData();
        let minutes = bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, 4));
        return minutes;
    }
    //% blockId=get_sec block="秒"
    export function getSec(): number {
        let timeBuf = getTimeData();
        let seconds = bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, 3)-128);
        return seconds;
    }

    
}