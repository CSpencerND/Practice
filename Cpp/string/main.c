#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main (int argc, char *argv[])
{
     
    char colors[][8] = { "#302D41", "#89dceb" };
    // #define colors { "#302D41", "#89dceb" }

    // char grey[8];
    // char cyan[8];

    // memcpy(grey, const void *, unsigned long);
    // memmove(grey, &colors[0], 7 * sizeof(char));
    // memmove(cyan, &colors[7], 8 * sizeof(char));
    
    printf("Grey is: %s\n", colors[0]);
    printf("Cyan is: %s\n", colors[1]);

    return 0;
}
