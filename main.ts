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
        let i = timeBuf.length-1;
        let year = bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, i));
        return 18;
    }
    
}