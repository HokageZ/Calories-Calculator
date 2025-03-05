const translations = {
    "ar": {
      "title": "حاسبة استبدال السعرات الحرارية",
      "categoryLabel": "اختر نوع المجموعة الغذائية:",
      "food1Label": "اختر نوع الطعام الأول:",
      "weightLabel": "أدخل الوزن (بالغرام):",
      "food2Label": "اختر نوع الطعام الثاني (البديل):",
      "calculateBtn": "احسب",
      "langSwitch": "En"
    },
    "en": {
      "title": "Calorie Replacement Calculator",
      "categoryLabel": "Select food category:",
      "food1Label": "Select the first food type:",
      "weightLabel": "Enter weight (grams):",
      "food2Label": "Select the second food type (alternative):",
      "calculateBtn": "Calculate",
      "langSwitch": "Ar"
    }
  };
  
  let currentLang = "ar";
  
  function switchLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.body.lang = currentLang;
    document.getElementById("title").innerText = translations[currentLang]["title"];
    document.getElementById("categoryLabel").innerText = translations[currentLang]["categoryLabel"];
    document.getElementById("food1Label").innerText = translations[currentLang]["food1Label"];
    document.getElementById("weightLabel").innerText = translations[currentLang]["weightLabel"];
    document.getElementById("food2Label").innerText = translations[currentLang]["food2Label"];
    document.getElementById("calculateBtn").innerText = translations[currentLang]["calculateBtn"];
    document.getElementById("langSwitch").innerText = translations[currentLang]["langSwitch"];
    
    document.querySelectorAll("#categorySelect option").forEach(option => {
      option.innerText = option.dataset[currentLang];
    });
    
    updateFoodOptions();
  }
  
  document.getElementById("langSwitch").addEventListener("click", switchLanguage);
  
  function updateFoodOptions() {
    let category = document.getElementById('categorySelect').value;
    let food1Select = document.getElementById('food1Select');
    let food2Select = document.getElementById('food2Select');
    food1Select.innerHTML = "";
    food2Select.innerHTML = "";
    
    foodData[category].forEach(food => {
      let option1 = new Option(food[currentLang], food.calories);
      let option2 = new Option(food[currentLang], food.calories);
      if (category === "All") {
        // Store the food group in a data attribute.
        option1.dataset.group = food.group;
        option2.dataset.group = food.group;
      }
      food1Select.add(option1);
      food2Select.add(option2);
    });
  
    if (category === "All") {
      // When a food is selected in the first dropdown,
      // filter the second dropdown to only show foods from the same group.
      food1Select.addEventListener('change', function() {
        let selectedGroup = this.options[this.selectedIndex].dataset.group;
        food2Select.innerHTML = "";
        foodData["All"].forEach(food => {
          if (food.group === selectedGroup) {
            let option = new Option(food[currentLang], food.calories);
            option.dataset.group = food.group;
            food2Select.add(option);
          }
        });
      });
    }
  }
  
  function validateInput() {
    let weightInput = document.getElementById('weightInput');
    let value = weightInput.value.trim();
    if (!/^[0-9]+(\.[0-9]*)?$/.test(value) || parseFloat(value) <= 0) {
      weightInput.setCustomValidity(currentLang === "ar" ? "يرجى إدخال رقم صحيح أكبر من الصفر." : "Please enter a valid number greater than zero.");
    } else {
      weightInput.setCustomValidity("");
    }
  }
  
  function calculateEquivalentWeight() {
    const food1Select = document.getElementById('food1Select');
    const food2Select = document.getElementById('food2Select');
    const weightInput = document.getElementById('weightInput');
  
    let caloriesPer100g1 = Number(food1Select.value);
    let caloriesPer100g2 = Number(food2Select.value);
    let weight1 = Number(weightInput.value);
  
    if (isNaN(caloriesPer100g1) || isNaN(caloriesPer100g2) || isNaN(weight1) || weight1 <= 0) {
      document.getElementById('result').innerText = currentLang === "ar" 
        ? 'الرجاء اختيار الطعامين وإدخال وزن صحيح.' 
        : 'Please select both foods and enter a valid weight.';
      return;
    }
  
    let equivalentWeight = (weight1 * caloriesPer100g1) / caloriesPer100g2;
    document.getElementById('result').innerText = currentLang === "ar" 
      ? "يجب تناول " + equivalentWeight.toFixed(2) + " جرام من الطعام البديل لمعادلة السعرات الحرارية." 
      : "You should eat " + equivalentWeight.toFixed(2) + " grams of the alternative food to match the calories.";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    updateFoodOptions();
  });