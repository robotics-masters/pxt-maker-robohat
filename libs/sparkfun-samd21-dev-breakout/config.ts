namespace config {
    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PB08;
    export const PIN_A2 = DAL.PB09;
    export const PIN_A3 = DAL.PA04;
    export const PIN_A4 = DAL.PA05;
    export const PIN_A5 = DAL.PB02;

    export const PIN_D0 = DAL.PA11;
    export const PIN_D1 = DAL.PA10;
    export const PIN_D2 = DAL.PA14;
    export const PIN_D3 = DAL.PA09;
    export const PIN_D4 = DAL.PA08;
    export const PIN_D5 = DAL.PA15;
    export const PIN_D6 = DAL.PA20;
    export const PIN_D7 = DAL.PA21;
    export const PIN_D8 = DAL.PA06;
    export const PIN_D9 = DAL.PA07;
    export const PIN_D10 = DAL.PA18;
    export const PIN_D11 = DAL.PA16;
    export const PIN_D12 = DAL.PA19;
    export const PIN_D13 = DAL.PA17;
    export const PIN_MISO = DAL.PA19;
    export const PIN_MOSI = DAL.PA16;
    export const PIN_SCK = DAL.PA17;
    export const PIN_SCL = DAL.PA23;
    export const PIN_SDA = DAL.PA22;
    export const PIN_RXLED = DAL.PB03;
    export const PIN_TXLED = DAL.PA27;

    export const PIN_LED = PIN_D13;
    export const PIN_RX = PIN_D0;
    export const PIN_TX = PIN_D1;
    export const PIN_JACK_TX = PIN_TX;
    export const PIN_JACK_COMMLED = PIN_TXLED;

    export const PIN_DISPLAY_CS = PIN_A2;
    export const PIN_DISPLAY_SCK = PIN_SCK;
    export const PIN_DISPLAY_MOSI = PIN_MOSI;
    export const PIN_DISPLAY_DC = PIN_A4;
    export const PIN_DISPLAY_RST = PIN_A5;
    export const PIN_DISPLAY_MISO = PIN_MISO;
    // export const PIN_DISPLAY_BL = PIN_D4; plugged to power
    export const DISPLAY_CFG0 = 0x00000090;
    export const DISPLAY_CFG1 = 0x000e14ff;
    export const DISPLAY_CFG2 = 24;
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;

    export const PIN_ACCELEROMETER_INT = PIN_D2;

    export const PIN_LCD_RESET = PIN_D7;
    export const PIN_LCD_ENABLE = PIN_D8;
    export const PIN_LCD_DATALINE4 = PIN_D9;
    export const PIN_LCD_DATALINE5 = PIN_D10;
    export const PIN_LCD_DATALINE6 = PIN_D11;
    export const PIN_LCD_DATALINE7 = PIN_D12;
}
