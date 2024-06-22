let dishes = [
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 11.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
  ]


async function getMenu() {
    try {
        const menu = document.getElementById("menu");
        menu.innerHTML = '';

        dishes.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.className = "dish";
            dishElement.innerHTML = `
            <img src="${dish.imgSrc}" alt="${dish.name}">
            <div class="dish-name">
              <div>
                <h3>${dish.name}</h3>
                <p>${dish.price}</p>
              </div>
              <span class="material-symbols-outlined">add</span>
            </div>`;
            menu.appendChild(dishElement);
        });
    } catch (error) {
        console.error('Error rendering menu:', error);
    }
}

  function getRandomBurgers() {
    const burgers = ["Cheeseburger", "Double Cheeseburger", "Bacon Burger", "Veggie Burger", "Mushroom Swiss Burger", "Spicy Jalapeno Burger"];
    const selectedBurgers = [];
    
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * burgers.length);
      selectedBurgers.push(burgers[randomIndex]);
    }

    return selectedBurgers;
  }

  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderedBurgers = getRandomBurgers();
        const order = {
          burgers: orderedBurgers,
        };
        console.log('Order:', order);
        resolve(order);
      }, 2500);
    });
  }

  // orderPrep()
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const prepResult = { order_status: true, paid: false };
        console.log('Order Preparation:', prepResult);
        resolve(prepResult);
      }, 1500);
    });
  }

  // payOrder()
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const paymentResult = { order_status: true, paid: true };
        console.log('Payment:', paymentResult);
        resolve(paymentResult);
      }, 1000);
    });
  }

  // thankyouFnc() - Display a thank you alert
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }

  // Handling promises using async/await
  async function orderProcess() {
    try {
      await getMenu();
      const order = await takeOrder();
      const orderPreparation = await orderPrep();
      const paymentResult = await payOrder();

      if (paymentResult.paid) {
        thankyouFnc();
      }
    } catch (error) {
      console.error('Error during order process:', error);
    }
  }

  // Run the order process on page load
  document.addEventListener('DOMContentLoaded', orderProcess);