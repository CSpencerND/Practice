#include <iostream>
#include "stuff.h"

void printDayOfWeek(int d)
{
  d--;
  std::string dayList[7] = {"Monday", "Tuesday", "Wednesday", "Thursday",
                            "Friday", "Saturday", "Sunday"};
  std::cout << "The day of the week is " << dayList[d];
}

int main()
{
  // int day;
  // std::cout << "Type a number for the day of the week: " <<std::endl;
  // std::cin >> day;

  // switch (day)
  // {
  //   case 1:
  //     printDayOfWeek(day);
  //     break;
  //   case 2:
  //     printDayOfWeek(day);
  //     break;
  //   case 3:
  //     printDayOfWeek(day);
  //     break;
  //   case 4:
  //     printDayOfWeek(day);
  //     break;
  //   case 5:
  //     printDayOfWeek(day);
  //     break;
  //   case 6:
  //     printDayOfWeek(day);
  //     break;
  //   case 7:
  //     printDayOfWeek(day);
  //     break;
  //   default:
  //   std::cout << "Must be a number between 1 and 7";
  // }

  Sword claymore;
  claymore.setPwr(5);
  claymore.attack();



}