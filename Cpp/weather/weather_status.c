#include <stdio.h>


const char *weather(void);


int main()
{
    const char *result[] = {weather()};
    printf("%s", *result);
    return 0;
}


const char *weather(void)
{
    char *weather_str[31];
    FILE *fptr;

    fptr = fopen("/home/cs/.cache/weather/weather_str_clean", "r");
    fgets(*weather_str, 31, fptr);
    fclose(fptr);

    return *weather_str;
}
