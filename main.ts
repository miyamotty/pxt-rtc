//% weight=70 icon="\uf017" color=#EC7505 block="時間"
namespace rtc{


    const rtcAddress = 104;

    // function getTimeData() {
    //     pins.i2cWriteNumber(rtcAddress, 0, NumberFormat.UInt8LE, false);
    //     return pins.i2cReadBuffer(rtcAddress, pins.sizeOf(NumberFormat.UInt8LE) * 10);
    // }
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function bcd2bin(val: number) {
        return val - 6 * (val >> 4);
    }
    function bin2bcd(val: number) {
        return val + 6 * (val / 10);
    }

    // function writeTimeData(years: number, months: number, days: number,
    //     hours: number, minutes: number, seconds: number) {
    //     pins.i2cWriteNumber(rtcAddress, 0, NumberFormat.UInt8LE, false);
    //     let i2cBuffer = pins.createBuffer(NumberFormat.UInt8LE * 11);
    //     // i2cBuffer[0] = 0;
    //     // i2cBuffer[1] = 0;
    //     // i2cBuffer[2] = 224;//0~2は設定用
    //     // i2cBuffer[3] = 128 + bin2bcd(seconds);//秒から
    //     // i2cBuffer[4] = bin2bcd(minutes);
    //     // i2cBuffer[5] = bin2bcd(hours);
    //     // i2cBuffer[6] = bin2bcd(days);
    //     // i2cBuffer[7] = 0;
    //     // i2cBuffer[8] = bin2bcd(months);
    //     // i2cBuffer[9] = bin2bcd(years);
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 1, 0);
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 2, 0);
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 3, 0);
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 4, 128 + bin2bcd(seconds));
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 5, bin2bcd(minutes));
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 6, bin2bcd(hours));
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 7, bin2bcd(days));
    //     //i2cBuffer.setNumber(NumberFormat.UInt8LE, 8, 1 % 7);
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 9, bin2bcd(months));
    //     i2cBuffer.setNumber(NumberFormat.UInt8LE, 10, bin2bcd(years));
    //     pins.i2cWriteBuffer(rtcAddress, i2cBuffer, false);

    // }
    

    // writeTimeData(19, 2, 28, 23, 59, 45);

    //% blockId=set_time block="時間の設定 %years %months %days %hours %minutes"
    export function setTimeData(years: number, months: number, days: number,
        hours: number, minutes: number): void {

        }
    //% blockId=get_years block="年"
    export function getYears(): number {
        return 18;
    }
    // function getTimeData() {
    //     pins.i2cWriteNumber(rtcAddress, 0, NumberFormat.UInt8LE, false);
    //     return pins.i2cReadBuffer(rtcAddress, pins.sizeOf(NumberFormat.UInt8LE) * 10);
    // }
    
    // input.onButtonPressed(Button.B, () => {
    //     let timeBuf = getTimeData();

    //     for (let i = timeBuf.length - 1; i > 2; i--) {
    //         basic.showNumber(bcd2bin(timeBuf.getNumber(NumberFormat.UInt8LE, i)));
    //         basic.showLeds(`
    //     . . . . .
    //     . . . . .
    //     . . . . .
    //     . . . . .
    //     . . . . .
    //     `);
    //     }


}