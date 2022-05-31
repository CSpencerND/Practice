#include <stdio.h>
// #include <string.h>
// #include "../util.h"

// static char * weather(void);
static void weather(void);

int main()
{
    weather();
    return 0;
}

// char * weather(void)
void weather(void)
{
    char weather[31];
    FILE *fptr;

    fptr = fopen("/home/cs/.cache/weather/weather_str_clean", "r");
    if (fptr != NULL)
    {
        fgets(weather, 31, fptr);
        fclose(fptr);
    }

    printf("%s", weather);

    // // current icon
    // char current_icon[11];
    // fptr = fopen("/home/cs/.cache/weather/current_icon", "r");

    // if (fptr != NULL)
    // {
    //     fgets(current_icon, 11, fptr);
    //     strcat(weather, current_icon);
    //     fclose(fptr);
    // }
    // else
    // {
    //     printf("Nothing here.\n");
    // }


    // // current temp
    // char current_temp[11];
    // fptr = fopen("/home/cs/.cache/weather/current_temp", "r");

    // if (fptr != NULL)
    // {
    //     fgets(current_temp, 11, fptr);
    //     strcat(weather, current_temp);
    //     fclose(fptr);
    // }
    // else
    // {
    //     printf("Nothing here.\n");
    // }


    // // trend
    // char trend[11];
    // fptr = fopen("/home/cs/.cache/weather/trend", "r");

    // if (fptr != NULL)
    // {
    //     fgets(trend, 11, fptr);
    //     strcat(weather, trend);
    //     fclose(fptr);
    // }
    // else
    // {
    //     printf("Nothing here.\n");
    // }


    // // forecast_icon
    // char forecast_icon[11];
    // fptr = fopen("/home/cs/.cache/weather/forecast_icon", "r");

    // if (fptr != NULL)
    // {
    //     fgets(forecast_icon, 11, fptr);
    //     strcat(weather, forecast_icon);
    //     fclose(fptr);
    // }
    // else
    // {
    //     printf("Nothing here.\n");
    // }


    // forecast_temp
    // char forecast_temp[11];
    // fptr = fopen("/home/cs/.cache/weather/forecast_temp", "r");

    // if (fptr != NULL)
    // {
    //     fgets(forecast_temp, 11, fptr);
    //     strcat(weather, forecast_temp);
    //     fclose(fptr);
    // }
    // else
    // {
    //     printf("Nothing here.\n");
    // }

    // printf("%s\n", weather);
    // return weather;
}

