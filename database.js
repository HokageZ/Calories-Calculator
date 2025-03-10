const foodData = {
    "Fruits": [
        { "ar": "تفاح", "en": "Apple", "calories": 52 },
        { "ar": "موز", "en": "Banana", "calories": 89 },
        { "ar": "بطيخ", "en": "Watermelon", "calories": 30 },
        { "ar": "فراولة", "en": "Strawberry", "calories": 32 },
        { "ar": "توت اسود", "en": "Blackberry", "calories": 43 },
        { "ar": "اناناس", "en": "Pineapple", "calories": 50 },
        { "ar": "يوسفي", "en": "Tangerine", "calories": 53 },
        { "ar": "كيوي", "en": "Kiwi", "calories": 61 },
        { "ar": "برتقال", "en": "Orange", "calories": 47 },
        { "ar": "عنب احمر", "en": "Red Grapes", "calories": 67 },
        { "ar": "خوخ", "en": "Peach", "calories": 39 },
        { "ar": "مانجا", "en": "Mango", "calories": 60 },
        { "ar": "جوافة", "en": "Guava", "calories": 68 },
        { "ar": "بلح", "en": "Dates", "calories": 282 },
        { "ar": "مشمش", "en": "Apricot", "calories": 48 },
        { "ar": "تين شوكي", "en": "Prickly Pear", "calories": 41 },
        { "ar": "كاكا", "en": "Persimmon", "calories": 127 },
        { "ar": "شمام", "en": "Cantaloupe", "calories": 34 },
        { "ar": "كمثرى", "en": "Pear", "calories": 57 },
        { "ar": "بلح مجدول", "en": "Medjool Dates", "calories": 277 },
        { "ar": "رمان", "en": "Pomegranate", "calories": 83 },
        { "ar": "زبيب", "en": "Raisins", "calories": 299 },
        { "ar": "ليمون", "en": "Lemon", "calories": 29 },
        { "ar": "افوكادو", "en": "Avocado", "calories": 160 },
        { "ar": "برقوق", "en": "Plum", "calories": 46 },
        { "ar": "نكتارين", "en": "Nectarine", "calories": 44 },
        { "ar": "عناب", "en": "Jujube", "calories": 79 },
        { "ar": "جوز الهند", "en": "Coconut", "calories": 354 },
        { "ar": "جريب فروت", "en": "Grapefruit", "calories": 42 },
        { "ar": "كنتالوب", "en": "Cantaloupe", "calories": 34 },
        { "ar": "عصير قصب", "en": "Sugarcane Juice", "calories": 269 },
        { "ar": "يقطين", "en": "Pumpkin", "calories": 26 }
    ],
    "Fats": [
        { "ar": "فول سوداني", "en": "Peanuts", "calories": 567 },
        { "ar": "فستق", "en": "Pistachios", "calories": 562 },
        { "ar": "عين الجمل", "en": "Walnuts", "calories": 654 },
        { "ar": "بندق", "en": "Hazelnuts", "calories": 628 },
        { "ar": "زبدة", "en": "Butter", "calories": 717 },
        { "ar": "طحينة", "en": "Tahini", "calories": 594 },
        { "ar": "مايونيز", "en": "Mayonnaise", "calories": 680 },
        { "ar": "جبنة بيضاء", "en": "White Cheese", "calories": 310 },
        { "ar": "جبنة رومي", "en": "Rumi Cheese", "calories": 407 },
        { "ar": "لب سورى", "en": "Syrian Cheese", "calories": 584 },
        { "ar": "لب اصفر", "en": "Yellow Cheese", "calories": 557 },
        { "ar": "لب ابيض", "en": "White Cheese", "calories": 446 },
        { "ar": "كاجو", "en": "Cashews", "calories": 553 },
        { "ar": "زبدة الفول السوداني", "en": "Peanut Butter", "calories": 588 },
        { "ar": "زيت الذره", "en": "Corn Oil", "calories": 900 },
        { "ar": "زيت الزيتون", "en": "Olive Oil", "calories": 884 },
        { "ar": "زيت الكتان", "en": "Flaxseed Oil", "calories": 884 },
        { "ar": "زيت درار الشمس", "en": "Sunflower Oil", "calories": 884 },
        { "ar": "لبن نصف دسم", "en": "Semi-Skimmed Milk", "calories": 50 },
        { "ar": "لبن كامل الدسم", "en": "Whole Milk", "calories": 42 },
        { "ar": "جبنة نستو", "en": "Nesto Cheese", "calories": 239 },
        { "ar": "زبادى كامل الدسم", "en": "Full-Fat Yogurt", "calories": 61 },
        { "ar": "زبادي مراعي تريتس", "en": "Marai Treats Yogurt", "calories": 128 },
        { "ar": "زبادي قليل الدسم", "en": "Low-Fat Yogurt", "calories": 58 },
        { "ar": "لبن خالي الدسم", "en": "Skimmed Milk", "calories": 70 }
    ],
    "Carbohydrates": [
        { "ar": "رز بني", "en": "Brown Rice", "calories": 111 },
        { "ar": "رز بسمتى", "en": "Basmati Rice", "calories": 129 },
        { "ar": "رز ابيض", "en": "White Rice", "calories": 130 },
        { "ar": "بقصماط", "en": "Biscuits", "calories": 407 },
        { "ar": "عيش بلدى", "en": "Baladi Bread", "calories": 265 },
        { "ar": "العيش الفينو", "en": "Fino Bread", "calories": 318 },
        { "ar": "عيش توست", "en": "Toast Bread", "calories": 313 },
        { "ar": "اسباجيتي", "en": "Spaghetti", "calories": 158 },
        { "ar": "حمص", "en": "Chickpeas", "calories": 364 },
        { "ar": "زبيب", "en": "Raisins", "calories": 116 },
        { "ar": "مربى فرارلة", "en": "Strawberry Jam", "calories": 278 },
        { "ar": "طعمية", "en": "Falafel", "calories": 333 },
        { "ar": "عيش الشوفان", "en": "Oat Bread", "calories": 269 },
        { "ar": "تومية", "en": "Tomato Paste", "calories": 150 },
        { "ar": "خيار مخلل", "en": "Pickled Cucumber", "calories": 11 },
        { "ar": "شوفان", "en": "Oats", "calories": 389 },
        { "ar": "كاتشب", "en": "Ketchup", "calories": 112 },
        { "ar": "سكر", "en": "Sugar", "calories": 387 },
        { "ar": "مستردة", "en": "Mustard", "calories": 60 },
        { "ar": "صلصة طماطم", "en": "Tomato Sauce", "calories": 29 },
        { "ar": "عسل نحل", "en": "Honey", "calories": 304 },
        { "ar": "بطاطس مقلية", "en": "French Fries", "calories": 312 },
        { "ar": "تمر", "en": "Dates", "calories": 282 }
    ],
    "Proteins": [
        { "ar": "ديك رومي", "en": "Turkey", "calories": 189 },
        { "ar": "جبنة قريش", "en": "Cottage Cheese", "calories": 98 },
        { "ar": "دجاج مقلى", "en": "Fried Chicken", "calories": 246 },
        { "ar": "كفتة", "en": "Kofta", "calories": 243 },
        { "ar": "لحمة بقري", "en": "Beef", "calories": 250 },
        { "ar": "تونة", "en": "Tuna", "calories": 132 },
        { "ar": "كبدة", "en": "Liver", "calories": 165 },
        { "ar": "جمبري", "en": "Shrimp", "calories": 119 },
        { "ar": "بيض مسلوق", "en": "Boiled Egg", "calories": 155 },
        { "ar": "وراك فراخ", "en": "Chicken Wings", "calories": 179 },
        { "ar": "بيض اومليت", "en": "Omelette", "calories": 154 },
        { "ar": "صدور فراخ", "en": "Chicken Breast", "calories": 165 },
        { "ar": "سمك بورى", "en": "Bouri Fish", "calories": 117 },
        { "ar": "سمك بلطى", "en": "Tilapia Fish", "calories": 129 },
        { "ar": "سمك روسى", "en": "Russian Fish", "calories": 305 },
        { "ar": "سمك السالمون", "en": "Salmon", "calories": 206 },
        { "ar": "لحمة ضاني (خروف)", "en": "Lamb Meat", "calories": 294 }
    ],
    "Vegetables": [
        { "ar": "عدس", "en": "Lentils", "calories": 116 },
        { "ar": "بازلاء", "en": "Peas", "calories": 81 },
        { "ar": "بطاطس", "en": "Potatoes", "calories": 77 },
        { "ar": "بطاطا", "en": "Sweet Potatoes", "calories": 86 },
        { "ar": "فول", "en": "Fava Beans", "calories": 347 },
        { "ar": "كوسة", "en": "Zucchini", "calories": 17 },
        { "ar": "جزر", "en": "Carrots", "calories": 41 },
        { "ar": "بصل", "en": "Onion", "calories": 40 },
        { "ar": "سبانخ", "en": "Spinach", "calories": 23 },
        { "ar": "ملوخيه", "en": "Molokhia", "calories": 66 },
        { "ar": "بامية", "en": "Okra", "calories": 33 },
        { "ar": "فاصوليا خضراء", "en": "Green Beans", "calories": 31 },
        { "ar": "فاصوليا بيضاء", "en": "White Beans", "calories": 67 },
        { "ar": "خيار", "en": "Cucumber", "calories": 15 },
        { "ar": "طماطم", "en": "Tomato", "calories": 18 },
        { "ar": "الخس", "en": "Lettuce", "calories": 15 },
        { "ar": "الجرجير", "en": "Arugula", "calories": 29 },
        { "ar": "القلقاس", "en": "Taro", "calories": 112 },
        { "ar": "الفلفل", "en": "Bell Pepper", "calories": 40 },
        { "ar": "الذرة", "en": "Corn", "calories": 96 },
        { "ar": "الثوم", "en": "Garlic", "calories": 149 },
        { "ar": "الشبت", "en": "Dill", "calories": 43 },
        { "ar": "الباذنجان", "en": "Eggplant", "calories": 25 },
        { "ar": "البقدونس", "en": "Parsley", "calories": 36 },
        { "ar": "ماشروم", "en": "Mushroom", "calories": 22 }
    ],
    "All": [
        { "ar": "تفاح", "en": "Apple", "calories": 52 },
        { "ar": "موز", "en": "Banana", "calories": 89 },
        { "ar": "بطيخ", "en": "Watermelon", "calories": 30 },
        { "ar": "فراولة", "en": "Strawberry", "calories": 32 },
        { "ar": "توت اسود", "en": "Blackberry", "calories": 43 },
        { "ar": "اناناس", "en": "Pineapple", "calories": 50 },
        { "ar": "يوسفي", "en": "Tangerine", "calories": 53 },
        { "ar": "كيوي", "en": "Kiwi", "calories": 61 },
        { "ar": "برتقال", "en": "Orange", "calories": 47 },
        { "ar": "عنب احمر", "en": "Red Grapes", "calories": 67 },
        { "ar": "خوخ", "en": "Peach", "calories": 39 },
        { "ar": "مانجا", "en": "Mango", "calories": 60 },
        { "ar": "جوافة", "en": "Guava", "calories": 68 },
        { "ar": "بلح", "en": "Dates", "calories": 282 },
        { "ar": "مشمش", "en": "Apricot", "calories": 48 },
        { "ar": "تين شوكي", "en": "Prickly Pear", "calories": 41 },
        { "ar": "كاكا", "en": "Persimmon", "calories": 127 },
        { "ar": "شمام", "en": "Cantaloupe", "calories": 34 },
        { "ar": "كمثرى", "en": "Pear", "calories": 57 },
        { "ar": "بلح مجدول", "en": "Medjool Dates", "calories": 277 },
        { "ar": "رمان", "en": "Pomegranate", "calories": 83 },
        { "ar": "زبيب", "en": "Raisins", "calories": 299 },
        { "ar": "ليمون", "en": "Lemon", "calories": 29 },
        { "ar": "افوكادو", "en": "Avocado", "calories": 160 },
        { "ar": "برقوق", "en": "Plum", "calories": 46 },
        { "ar": "نكتارين", "en": "Nectarine", "calories": 44 },
        { "ar": "عناب", "en": "Jujube", "calories": 79 },
        { "ar": "جوز الهند", "en": "Coconut", "calories": 354 },
        { "ar": "جريب فروت", "en": "Grapefruit", "calories": 42 },
        { "ar": "كنتالوب", "en": "Cantaloupe", "calories": 34 },
        { "ar": "عصير قصب", "en": "Sugarcane Juice", "calories": 269 },
        { "ar": "يقطين", "en": "Pumpkin", "calories": 26 },
        { "ar": "فول سوداني", "en": "Peanuts", "calories": 567 },
        { "ar": "فستق", "en": "Pistachios", "calories": 562 },
        { "ar": "عين الجمل", "en": "Walnuts", "calories": 654 },
        { "ar": "بندق", "en": "Hazelnuts", "calories": 628 },
        { "ar": "زبدة", "en": "Butter", "calories": 717 },
        { "ar": "طحينة", "en": "Tahini", "calories": 594 },
        { "ar": "مايونيز", "en": "Mayonnaise", "calories": 680 },
        { "ar": "جبنة بيضاء", "en": "White Cheese", "calories": 310 },
        { "ar": "جبنة رومي", "en": "Rumi Cheese", "calories": 407 },
        { "ar": "جبنة قريش", "en": "Cottage Cheese", "calories": 98 },
        { "ar": "لب سورى", "en": "Syrian Cheese", "calories": 584 },
        { "ar": "لب اصفر", "en": "Yellow Cheese", "calories": 557 },
        { "ar": "لب ابيض", "en": "White Cheese", "calories": 446 },
        { "ar": "كاجو", "en": "Cashews", "calories": 553 },
        { "ar": "زبدة الفول السوداني", "en": "Peanut Butter", "calories": 588 },
        { "ar": "زيت الذره", "en": "Corn Oil", "calories": 900 },
        { "ar": "زيت الزيتون", "en": "Olive Oil", "calories": 884 },
        { "ar": "زيت الكتان", "en": "Flaxseed Oil", "calories": 884 },
        { "ar": "زيت درار الشمس", "en": "Sunflower Oil", "calories": 884 },
        { "ar": "لبن نصف دسم", "en": "Semi-Skimmed Milk", "calories": 50 },
        { "ar": "لبن كامل الدسم", "en": "Whole Milk", "calories": 42 },
        { "ar": "جبنة نستو", "en": "Nesto Cheese", "calories": 239 },
        { "ar": "زبادى كامل الدسم", "en": "Full-Fat Yogurt", "calories": 61 },
        { "ar": "زبادي مراعي تريتس", "en": "Marai Treats Yogurt", "calories": 128 },
        { "ar": "زبادي قليل الدسم", "en": "Low-Fat Yogurt", "calories": 58 },
        { "ar": "لبن خالي الدسم", "en": "Skimmed Milk", "calories": 70 },
        { "ar": "رز بني", "en": "Brown Rice", "calories": 111 },
        { "ar": "رز بسمتى", "en": "Basmati Rice", "calories": 129 },
        { "ar": "رز ابيض", "en": "White Rice", "calories": 130 },
        { "ar": "بقصماط", "en": "Biscuits", "calories": 407 },
        { "ar": "عيش بلدى", "en": "Baladi Bread", "calories": 265 },
        { "ar": "العيش الفينو", "en": "Fino Bread", "calories": 318 },
        { "ar": "عيش توست", "en": "Toast Bread", "calories": 313 },
        { "ar": "اسباجيتي", "en": "Spaghetti", "calories": 158 },
        { "ar": "حمص", "en": "Chickpeas", "calories": 364 },
        { "ar": "زبيب", "en": "Raisins", "calories": 116 },
        { "ar": "مربى فرارلة", "en": "Strawberry Jam", "calories": 278 },
        { "ar": "طعمية", "en": "Falafel", "calories": 333 },
        { "ar": "عيش الشوفان", "en": "Oat Bread", "calories": 269 },
        { "ar": "تومية", "en": "Tomato Paste", "calories": 150 },
        { "ar": "خيار مخلل", "en": "Pickled Cucumber", "calories": 11 },
        { "ar": "شوفان", "en": "Oats", "calories": 389 },
        { "ar": "كاتشب", "en": "Ketchup", "calories": 112 },
        { "ar": "سكر", "en": "Sugar", "calories": 387 },
        { "ar": "مستردة", "en": "Mustard", "calories": 60 },
        { "ar": "صلصة طماطم", "en": "Tomato Sauce", "calories": 29 },
        { "ar": "عسل نحل", "en": "Honey", "calories": 304 },
        { "ar": "بطاطس مقلية", "en": "French Fries", "calories": 312 },
        { "ar": "تمر", "en": "Dates", "calories": 282 },
        { "ar": "عدس", "en": "Lentils", "calories": 116 },
        { "ar": "بازلاء", "en": "Peas", "calories": 81 },
        { "ar": "بطاطس", "en": "Potatoes", "calories": 77 },
        { "ar": "بطاطا", "en": "Sweet Potatoes", "calories": 86 },
        { "ar": "فول", "en": "Fava Beans", "calories": 347 },
        { "ar": "كوسة", "en": "Zucchini", "calories": 17 },
        { "ar": "جزر", "en": "Carrots", "calories": 41 },
        { "ar": "بصل", "en": "Onion", "calories": 40 },
        { "ar": "سبانخ", "en": "Spinach", "calories": 23 },
        { "ar": "ملوخيه", "en": "Molokhia", "calories": 66 },
        { "ar": "بامية", "en": "Okra", "calories": 33 },
        { "ar": "فاصوليا خضراء", "en": "Green Beans", "calories": 31 },
        { "ar": "فاصوليا بيضاء", "en": "White Beans", "calories": 67 },
        { "ar": "خيار", "en": "Cucumber", "calories": 15 },
        { "ar": "طماطم", "en": "Tomato", "calories": 18 },
        { "ar": "الخس", "en": "Lettuce", "calories": 15 },
        { "ar": "الجرجير", "en": "Arugula", "calories": 29 },
        { "ar": "القلقاس", "en": "Taro", "calories": 112 },
        { "ar": "الفلفل", "en": "Bell Pepper", "calories": 40 },
        { "ar": "الذرة", "en": "Corn", "calories": 96 },
        { "ar": "الثوم", "en": "Garlic", "calories": 149 },
        { "ar": "الشبت", "en": "Dill", "calories": 43 },
        { "ar": "الباذنجان", "en": "Eggplant", "calories": 25 },
        { "ar": "البقدونس", "en": "Parsley", "calories": 36 },
        { "ar": "ماشروم", "en": "Mushroom", "calories": 22 }
    ]
}; 