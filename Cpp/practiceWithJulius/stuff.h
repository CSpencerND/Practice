//
// Created by Christopher Spencer on 3/22/21.
//
#include <iostream>
#ifndef PRACTICEWITHJULIUS_STUFF_H
#define PRACTICEWITHJULIUS_STUFF_H

class Sword
{
private:
    // variables
    int pwr = 1;

public:
    // methods
    void attack()
    {
        std::cout << "Attacking with power of " << pwr << std::endl;
    }

    void setPwr(int a)
    {
        pwr = a;
    }

    int getPwr()
    {
        return pwr;
    }
};


#endif //PRACTICEWITHJULIUS_STUFF_H
