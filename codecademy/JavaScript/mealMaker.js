const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    get appetizers () {
        return this._courses.appetizers;
    },
    set appetizers (food) {
        this._courses.appetizers.push(food);
    },

    get mains () {
        return this._courses.mains;
    },
    set mains (food) {
        this._courses.mains.push(food);
    },

    get desserts () {
        return this._courses.desserts;
    },
    set desserts (food) {
        this._courses.desserts.push(food);
    },

    get courses () {
        return this._courses 
        // {
            // appetizers: this.appetizers,
            // mains: this.mains,
            // desserts: this.desserts
        // };
    },

    addDishToCourse (courseName, dishName, dishPrice)
    {
        const dish = {
            name: dishName,
            price: dishPrice
        };

        if (typeof dishPrice === "number")
        {
            switch (courseName)
            {
                case "appetizers":
                    this.appetizers = dish;
                    return 0;

                case "mains":
                    this.mains = dish;
                    return 0;

                case "desserts":
                    this.desserts = dish;
                    return 0;

                default:
                    console.log(
                        "Course must be one of: 'appetizers', 'mains', 'desserts'"
                    )
                    return 1;
            }
        } console.log("Price must be of type 'number'")
    },

    getRandomDishFromCourse(courseName)
    {
        let dishes;
        switch(courseName)
        {
            case "appetizers":
                dishes = this.appetizers;
                break;

            case "mains":
                dishes = this.mains;
                break;

            case "desserts":
                dishes = this.desserts;
                break;

            default:
                console.log(
                    "Course must be one of: 'appetizers', 'mains', 'desserts'"
                )
        }
        i = Math.floor(Math.random() * dishes.length);
        return dishes[i];
    },

    generateRandomMeal()
    {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main      = this.getRandomDishFromCourse("mains");
        const dessert   = this.getRandomDishFromCourse("desserts");

        let total = 0;
        total += appetizer.price;
        total += main.price;
        total += dessert.price;

        order = `${appetizer.name}\t${appetizer.price}\n${main.name}\t${main.price}\n${dessert.name}\t${dessert.price}\ntotal\t${total}`

        return order;
    },
};


menu.addDishToCourse("appetizers",  "app1",     2.00);
menu.addDishToCourse("appetizers",  "app2",     2.50);
menu.addDishToCourse("appetizers",  "app3",     3.00);
menu.addDishToCourse("mains",       "main1",    6.00);
menu.addDishToCourse("mains",       "main2",    6.50);
menu.addDishToCourse("mains",       "main3",    7.00);
menu.addDishToCourse("desserts",    "dess1",    4.00);
menu.addDishToCourse("desserts",    "dess2",    4.50);
menu.addDishToCourse("desserts",    "dess3",    5.00);

const randomMeal = menu.generateRandomMeal();

console.log(randomMeal);
