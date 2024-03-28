// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2024-01-08T09:15:04.904Z",
    "2024-01-12T10:17:24.185Z",
    "2024-02-18T14:11:59.604Z",
    "2024-02-27T17:01:17.194Z",
    "2024-03-24T23:36:17.929Z",
    "2024-03-26T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2023-11-01T13:15:33.035Z",
    "2023-11-30T09:48:16.867Z",
    "2023-12-25T06:04:23.907Z",
    "2024-01-25T14:18:46.235Z",
    "2024-02-05T16:33:06.386Z",
    "2024-02-10T14:43:26.374Z",
    "2024-03-25T18:49:59.371Z",
    "2024-03-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    "2023-11-02T12:14:32.035Z",
    "2023-11-10T09:48:16.867Z",
    "2023-12-23T06:04:23.907Z",
    "2024-01-11T14:18:46.235Z",
    "2024-01-04T16:33:06.386Z",
    "2024-02-13T14:43:26.374Z",
    "2024-03-21T18:49:59.371Z",
    "2024-03-23T12:01:20.894Z",
  ],
  currency: "Yuan",
  locale: "zh-HK",
};

// const now1 = new Date(2023, 11, 18, 21, 31, 17);
// console.log(now1.toISOString());

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    "2023-11-03T13:15:33.035Z",
    "2023-11-24T09:48:16.867Z",
    "2023-12-20T06:04:23.907Z",
    "2024-01-15T14:18:46.235Z",
    "2024-02-25T16:33:06.386Z",
    "2024-03-10T14:43:26.374Z",
    "2024-03-21T18:49:59.371Z",
    "2024-03-24T12:01:20.894Z",
  ],
  currency: "CHF",
  locale: "it-CH",
};

const account5 = {
  owner: "Bikram Debnath",
  movements: [430, 10000, -700, 500, -90, 4000, 300, -150, 2000, -200],
  interestRate: 1.8,
  pin: 7477,

  movementsDates: [
    "2023-11-11T12:15:33.035Z",
    "2023-11-20T09:28:16.867Z",
    "2023-12-25T06:04:23.907Z",
    "2024-01-15T14:18:46.235Z",
    "2024-01-18T16:33:06.386Z",
    "2024-02-10T14:43:26.374Z",
    "2024-03-09T18:49:59.371Z",
    "2024-03-18T12:01:20.894Z",
    "2024-03-25T12:01:20.894Z",
    "2024-03-26T12:01:20.894Z",
  ],
  currency: "INR",
  locale: "en-IN",
};

const account6 = {
  owner: "Payel Debnath",
  movements: [
    430, 1000, -300, 450, -190, 40000, 300, -150, -1000, 200, 477, -333,
  ],
  interestRate: 1.7,
  pin: 7733,

  movementsDates: [
    "2023-11-19T13:15:33.035Z",
    "2023-11-23T09:48:16.867Z",
    "2023-12-17T06:04:23.907Z",
    "2024-01-19T14:18:46.235Z",
    "2024-02-20T16:33:06.386Z",
    "2024-02-01T14:43:26.374Z",
    "2024-02-15T18:49:59.371Z",
    "2024-03-13T12:17:20.894Z",
    "2024-03-23T12:19:20.894Z",
    "2024-03-24T17:11:20.894Z",
    "2024-03-26T19:21:20.894Z",
    "2024-04-26T21:01:20.894Z",
  ],
  currency: "INR",
  locale: "en-IN",
};

const accounts = [account1, account2, account3, account4, account5, account6];

//  ------------ DATA  -------------------///
//ELEMENT
const wellcomeMassage = document.querySelector(".wellcome-massage");
const loginMassage = document.querySelector(".not-login__sms");
const wrongInput = document.querySelector(".wrong-input");
//////
const userLogin = document.querySelector(".login-input__user");
const userLoginPin = document.querySelector(".login-input__pin");
const currentBalenceDate = document.querySelector(".date");
const currentBalence = document.querySelector(".curent-balance__sum");

const containerApp = document.querySelector(".bankist-app");
const containerMovements = document.querySelector(".movements");

const valueSumIn = document.querySelector(".calculate__value-in");
const valueSumOut = document.querySelector(".calculate__value-out");
const valueSumIntrest = document.querySelector(".calculate__value-intrest");

const transferUser = document.querySelector(".money__transfer-user");
const transferMoney = document.querySelector(".money__transfer-amount");

const inputIoan = document.querySelector(".input__loan-amount");
const loanMassage = document.querySelector(".loan-massage__show");
// const loanMassageNgt = document.querySelector(".loan-massage__show--ngt");

const closeUser = document.querySelector(".Close__acc--user");
const closeUserPin = document.querySelector(".Close__acc--pin");

const loginBtn = document.querySelector(".login-btn");
const sortBtn = document.querySelector(".sort-btn");
const transferMoneyBtn = document.querySelector(".Transfer-btn__to");
const loanBtn = document.querySelector(".loan-btn__me");
const closeBtn = document.querySelector(".close-btn__to");

const labelTimer = document.querySelector(".timer");

//////////// ----------- APP WORKING--------------------------------🥙🥙🥙🥙🥙🥙

// console.log(accounts);

setTimeout(() => (loginMassage.textContent = `You ar'nt loged in ...`), 1000);
setTimeout(
  () => (loginMassage.textContent = `Please input your userID & pin 👤🔑`),
  6000
);
// setTimeout(() => (loginMassage.style.opacity = 0), 15000);

const formatMovementDate = function (date, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcdaysPassed(new Date(), date);

  if (dayPassed === 0) return "TODAY";
  if (dayPassed === 1) return "YESTERDAY";
  if (dayPassed <= 7) return `${dayPassed}  DAYS AGO`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = `${date.getFullYear()}`.padStart(2, 0);
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovement = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movSrt = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movSrt.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatedMov = formatCur(mov, acc.locale, acc.currency);

    // new Intl.NumberFormat(acc.locale, {
    //   style: "currency",
    //   currency: acc.currency,
    // }).format(mov);

    const html = `
      <div class="movements-balance">
        <div class="movements-text movements-text__${type}">${
      i + 1
    } ${type}</div>
        <div class="movements-date">${displayDate}</div>
        <div class="movements-value">${formatedMov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//// calculate sum balance -------------
const calcDisplayBalance = function (acc) {
  acc.balanceSum = acc.movements.reduce((accu, cur) => accu + cur, 0);

  currentBalence.textContent = formatCur(
    acc.balanceSum,
    acc.locale,
    acc.currency
  );
};

//// calculate IN OUT balance
const calculateInOutBalance = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((accu, mov) => accu + mov, 0);
  valueSumIn.textContent = formatCur(income, acc.locale, acc.currency);

  const output = acc.movements
    .filter((mov) => mov < 0)
    .reduce((accu, mov) => accu + mov, 0);
  valueSumOut.textContent = formatCur(output, acc.locale, acc.currency);

  const intrest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((accu, int) => accu + int, 0);
  valueSumIntrest.textContent = formatCur(intrest, acc.locale, acc.currency);
};

//// USER name -------------
const creatUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
creatUserName(accounts);

const updateUI = function (acc) {
  displayMovement(acc);
  calcDisplayBalance(acc);
  calculateInOutBalance(acc);
};

//// -- logOut timer
const logOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    /// in each call, print the remaning time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //// when 0 sec, stop timer and log out user
    if (time === 0) {
      clearInterval(timerUI);
      wellcomeMassage.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }

    //decress 1 sec
    time--;
  };
  /// set time to 5 minutes
  let time = 240;
  //// call the Time every seconds
  tick();
  const timerUI = setInterval(tick, 1000);
  return timerUI;
};

/// --- adEventListener LOG IN

let currentAccount, timerUI;

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.username === userLogin.value);
  console.log(currentAccount);

  if (currentAccount?.pin === +userLoginPin.value) {
    console.log("LOGIN");

    wellcomeMassage.textContent = `Wellcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };
    currentBalenceDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    //// -- creat curent date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = `${now.getFullYear()}`.padStart(2, 0);
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const Minute = `${now.getMinutes()}`.padStart(2, 0);
    // const sec = `${now.getSeconds()}`.padStart(2, 0);
    // currentBalenceDate.textContent = `${day}/${month}/${year}, ${hour}:${Minute}:${sec}`;

    // loginMassage.classList.remove("not-login__sms");
    loginMassage.style.opacity = 0;
    wrongInput.style.opacity = 0;
    // clear filds
    // userLogin.value = "";
    // userLoginPin.value = "";
    userLogin.value = userLoginPin.value = "";
    userLoginPin.blur();

    if (timerUI) clearInterval(timerUI);
    timerUI = logOutTimer();

    updateUI(currentAccount);
  } else {
    wrongInput.textContent = `wrong input ❌, please try again 😢`;
  }
});

/// ---------------transfer money

transferMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +transferMoney.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === transferUser.value
  );

  transferUser.value = transferMoney.value = "";
  transferMoney.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balanceSum &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    // restart timer
    clearInterval(timerUI);
    timerUI = logOutTimer();
  }
});

///////// -------- LOAN section

loanBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amountLn = Math.floor(+inputIoan.value);

  if (
    amountLn > 0 &&
    currentAccount.movements.some((mov) => mov >= amountLn * 0.1)
  ) {
    /////////----------
    setTimeout(function () {
      currentAccount.movements.push(amountLn);
      currentAccount.movementsDates.push(new Date().toISOString());

      loanMassage.textContent = `You input right amount for loan`;
      loanMassage.style.color = "green";
      // loanMassage.classList.remove("loan-massage__red");
      loanMassage.style.opacity = 100;
      setInterval(() => (loanMassage.style.opacity = 0), 5000);

      updateUI(currentAccount);
      // restart timer

      clearInterval(timerUI);
      timerUI = logOutTimer();
    }, 3000);
  } else {
    loanMassage.textContent = `You input too much amount for loan`;
    // loanMassage.classList.add("loan-massage__red");.
    loanMassage.style.color = "red";
    loanMassage.style.opacity = 100;
    setInterval(() => (loanMassage.style.opacity = 0), 5000);

    updateUI(currentAccount);
  }

  inputIoan.value = "";
  inputIoan.blur();
  // loanMassage.textContent = "";
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    closeUser.value === currentAccount.username &&
    +closeUserPin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // console.log(index);
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  closeUser.value = closeUserPin.value = "";
  closeUserPin.blur();
});

let sorted = false;
sortBtn.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/*
///// my solution one line code
const creatUserName = function (accs) {
  accs.forEach(
    (acc) =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join(""))
  );
};
creatUserName(accounts);
console.log(accounts);

*/
// const user = "Steven Thomas Williams";

/*
let arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, 4));

// console.log(arr.splice(-4));
console.log(arr.splice(1, 2));

console.log(arr);
// console.log(arr.splice(1));

arr = ["a", "b", "c", "d", "e", "f"];
const arr2 = ["m", "l", "k", "j", "i", "h", "g"];
console.log(arr2.reverse());

const add = arr.concat(arr2);
console.log(add);

console.log(add.join(" _ "));

const arri = [23, 64, 54, 37];
console.log(arri[arri.length - 1]);
console.log(arri.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement${i + 1}:=> You deposite ${mov}`);
  } else {
    console.log(`Movement${i + 1}:=> You withdrawal ${Math.abs(mov)}`);
  }
}
console.log("------ forEach -----with function-----");

movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement${i + 1}: You deposite ${mov}`);
  } else {
    console.log(`Movement${i + 1}: You withdrawal ${Math.abs(mov)}`);
  }
});

console.log("------ forEach -----with ----- AROW ----- function-----");

movements.forEach((mov, i) =>
  mov > 0
    ? console.log(`Movement${i + 1}:- You deposite ${mov}`)
    : console.log(`Movement${i + 1}:- You withdrawal ${Math.abs(mov)}`)
);

*/

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

////  it is my solution

// const checkDogs = function (dogsJulia, dogsKate) {
//   const julliaDogsCurrected = dogsJulia.slice();
//   julliaDogsCurrected.splice(0, 1);
//   julliaDogsCurrected.splice(-2);
//   const dogs = julliaDogsCurrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach((dog, i) =>
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//   );
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const checkDogs = function (dogsJulia, dogsKate) {
  const julliaDogsCurrected = dogsJulia.slice();
  julliaDogsCurrected.splice(0, 1);
  julliaDogsCurrected.splice(-2);
  const dogs = julliaDogsCurrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.2;

// const movementsUSD = movements.map((mov) => mov * euroToUsd);
// console.log(movementsUSD);
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i, arr) =>
    `Movement${i + 1}: You ${mov > 0 ? "deposit" : "withdrawal"} ${Math.abs(
      mov
    )}`

  // if (mov > 0) {
  //   return `Movement${i + 1}: You deposite ${mov}`;
  // } else {
  //   return `Movement${i + 1}: You withdrawal ${Math.abs(mov)}`;
  // }
);

console.log(movementsDescription);

*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
console.log(movements.filter((mov) => mov > 0));
console.log(movements.filter((mov) => mov < 0));

const deposit = [];
for (const mov of movements) {
  if (mov > 0) {
    deposit.push(mov);
  }
}
console.log(deposit);

const withdrew = [];
for (const mov of movements) if (mov < 0) withdrew.push(mov);
console.log(withdrew);

*/

/*

console.log(movements.reduce((accu, mov) => accu + mov, 0));

const depositFor = movements
  .filter((mov) => mov > 0)
  .reduce((accu, movs) => accu + movs, 0);
console.log(depositFor);

const withdrewFor = movements
  .filter((mov) => mov < 0)
  .reduce((accu, movs) => accu + movs, 0);
console.log(withdrewFor);

console.log(depositFor + withdrewFor);

//// for loop

let balance = 0;
for (const movs of movements) balance += movs;
console.log(balance);

*/

/*

const max = movements.reduce((accu, cur) => {
  if (accu > cur) {
    return accu;
  } else {
    return cur;
  }
});
console.log(max);

const max2 = movements.reduce((accu, cur) => (accu > cur ? accu : cur));
console.log(max2);
const min = movements.reduce((accu, cur) => (accu < cur ? accu : cur));
console.log(min);
*/

//coding challenge #2

/*
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAge.filter((age) => age >= 18);
  // console.log(adults);
  const average = adults.reduce((accu, cur) => accu + cur, 0) / adults.length;
  // console.log(average);
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 1, 3, 6, 4]);
console.log(avg1, avg2);
*/
//////// one line code

/*
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((accu, age, i, arr) => accu + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

///////////////
const eurToUsd = 1.2;
const totalDepositeUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((accu, mov) => accu + mov, 0);

console.log(totalDepositeUSD);
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
const accountsMovements = accounts.map((acc) => acc.movements);
console.log(accountsMovements);

const allMovements = accountsMovements.flat();
console.log(allMovements);

//// one line code
// const allAccountMovement = accounts.flatMap((acc) => acc.movements);
// console.log(allAccountMovement);

const allAccountMovement = accounts
  .flatMap((acc) => acc.movements)
  .reduce((accu, mov) => accu + mov, 0);
console.log(allAccountMovement);

// const z = Array.from({ length: 100 }, (_, i) => i + 1);
// console.log(z);

currentBalence.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements-value"),
    (ele) => Number(ele.textContent.replace("₹", ""))
  );
  console.log(movementsUI);
});

*/

/*

const depositALL = accounts.flatMap((mov) => mov.movements);
console.log(depositALL);

const totalDeposite = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((accu, mov) => accu + mov, 0);
console.log(totalDeposite);

const totalDeposite2 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov < 0)
  .reduce((accu, mov) => accu + mov, 0);
console.log(totalDeposite2);

const totalDeposite3 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000)
  .reduce((accu, mov, i, arr) => i + 1);
console.log(totalDeposite3);

const totalDeposite4 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, curt) => (curt >= 1000 ? count + 1 : count), 0);
console.log(totalDeposite4);

/// 3

// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur);
//       return sum;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );
// console.log(sums);

const { deposit, withdrawal } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur);
      return sum;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(deposit, withdrawal);

const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
  const titlCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return titlCase;
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not TOO long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

*/

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
/*

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//// 1

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

/// 2

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog are eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

//// 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little`);

//// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

//// 6.

const cheackEatingOK = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(cheackEatingOK));

// 7.
console.log(dogs.filter(cheackEatingOK));

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const dogSort = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSort);


*/
/*
///scuar 2
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** 2);
console.log(25 * 2);

//// quebe 3
console.log(25 ** (1 / 3));
console.log(8 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(25 * 0.5);
console.log(25 * 0.25);

console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomINT = (max, min) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomINT(10, 2));

console.log((2.7).toFixed(2));
console.log((2.71).toFixed(2));
console.log((2.7).toFixed(2));
*/

/*
///// -----------------------
currentBalence.addEventListener("click", function () {
  const movementsID = document
    .querySelectorAll(".movements-value")
    .forEach((mov, i) =>
      i % 2 === 0
        ? ((mov.style.backgroundColor = "orangered"),
          (mov.style.color = "white"))
        : i % 3 === 0
        ? ((mov.style.backgroundColor = "green"), (mov.style.color = "white"))
        : ((mov.style.backgroundColor = "yellow"), (mov.style.color = "red"))
    );
  return movementsID;
});


*/

/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(10000n + 10000n);
// console.log(10000 + 10000n);
console.log(10000 + 10000);

console.log(15n > 20);
console.log(20 > 15n);
console.log(20n > 20);
console.log(20n === 20);
console.log(20n == 20);
console.log(20n == "20");
*/
/*
const now = new Date();
console.log(now);

console.log(new Date("12 jun ,2020"));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2025, 9, 22, 12, 10, 2));

console.log(new Date(4 * 24 * 60 * 60 * 1000));
*/
/// working with dates

/*
const future = new Date(2037, 9, 11, 11, 25, 33);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());

/// time stamp
console.log(future.getTime());
console.log(new Date(2138853333000));
console.log(Date.now());

*/

/*

const calcdaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcdaysPassed(new Date(2037, 4, 10), new Date(2037, 5, 24));
console.log(days1);

*/

/*

const num = 3565654.325;

const options = {
  style: "currency",

  // style: "percent",
  // unit: "mile-per-hour",
  // unit: "celsius",

  unit: "celsius",
  currency: "INR",
};

console.log("USD:", new Intl.NumberFormat("en-US", options).format(num));
console.log("INR:", new Intl.NumberFormat("en-IN", options).format(num));
console.log("germeny:", new Intl.NumberFormat("de-DE", options).format(num));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
console.log("Syria:", new Intl.NumberFormat("ar-SY", options).format(num));

*/
/*
/// -- set timeOut

setTimeout(() => console.log("Order your pizza - 🦧 "), 2000);
setTimeout(() => console.log("Plase wait some time.... 🕗 "), 4000);
// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with... ${ing1} ${ing2} 🍕 `),
//   8000,
//   "Olive",
//   "Mashroom"
// );

const ingredient = ["Olive", "Potato", "Mashroom", "Panir"];

const itsPizzaTime = setTimeout(
  (ing1, ing2, ing3, ing4) =>
    console.log(
      `Here is your pizza with... ${ing1} , ${ing2} , ${ing3} and ${ing4} 🍕 `
    ),
  8000,
  ...ingredient
);

if (ingredient.includes("Panir")) {
  clearTimeout(itsPizzaTime);
}

*/

// ---- set interval

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// setInterval(function () {
//   const now = new Date();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const seconds = now.getSeconds();
//   console.log(`${hour}:${minute}:${seconds}`);
// }, 1000);
