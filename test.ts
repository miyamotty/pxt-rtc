// tests go here; this will not be compiled when this package is used as a library
basic.forever(() => {
    RTC_PCF8523.setTimeData(18, 4, 18, 12, 0)
})