//% weight=70 icon="\uf017" color=#EC7505 block="時間"
namespace katakana {
    
    //% blockId=show_strings block="時間を設定 20%years|年 %months|月 %days|日 %hours|時 %minutes|分 %seconds|秒"
    export function putStr(years: number, months: number, days: number, 
        hours: number, minutes: number, seconds: number): void{
        basic.pause(500)
    }
}