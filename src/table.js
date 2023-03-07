const users = [
    {
      "_id": "5d220b10e8265cc978e2586b",
      "isActive": true,
      "balance": 2853.33,
      "age": 20,
      "name": "Buckner Osborne",
      "gender": "male",
      "company": "EMPIRICA",
      "email": "bucknerosborne@empirica.com",
      "phone": "+1 (850) 411-2997",
      "registered": "2018-08-13T04:28:45 -03:00",
          "nestedField": { total: 300 }
    },
    {
      "_id": "5d220b10144ef972f6c2b332",
      "isActive": true,
      "balance": 1464.63,
      "age": 38,
      "name": "Rosalie Smith",
      "gender": "female",
      "company": "KATAKANA",
      "email": "rosaliesmith@katakana.com",
      "phone": "+1 (943) 463-2496",
      "registered": "2016-12-09T05:15:34 -02:00",
          "nestedField": { total: 400 }
    },
    {
      "_id": "5d220b1083a0494655cdecf6",
      "isActive": false,
      "balance": 2823.39,
      "age": 40,
      "name": "Estrada Davenport",
      "gender": "male",
      "company": "EBIDCO",
      "email": "estradadavenport@ebidco.com",
      "phone": "+1 (890) 461-2088",
      "registered": "2016-03-04T03:36:38 -02:00",
      "nestedField": { total: 200 }
    }
  ];

  const wrapperBox = document.querySelector('.wrapper');
  const objectOfUser = users.reduce((acc, user) => {
    acc[user._id] =  user;
    return acc;
  }, {})

  function fillTable(users){
    if(!users){
        console.error('The list of users is empty');
        return;
    }

    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.classList.add('balance-table');
    table.style.width= '100%';
    table.style.borderCollapse ='collapse';
    table.style.border = `6px solid #4287f5`

    let trHeaderInform = createTableHeader();
    table.appendChild(trHeaderInform)
 
    Object.values(users).forEach((user, index) => {
      user.index = index + 1;
      const row = createTableRows(user.index, user);
      table.appendChild(row)
    })

   let balanceRow = calculateBalance();
   table.appendChild(balanceRow)
   fragment.appendChild(table);
   wrapperBox.appendChild(fragment);
  }

  fillTable(objectOfUser);

  function createTableHeader(){
    const tr = document.createElement('tr');
    tr.classList.add('balance-header-row');
    const tdNumberTitle = document.createElement('td');
    tdNumberTitle.classList.add('balance-cell-for-number-title')
    tdNumberTitle.textContent = '#';
    const tdNamerTitle = document.createElement('td');
    tdNamerTitle.classList.add('balance-cell-for-name-title')
    tdNamerTitle.textContent = 'Name';
    const tdEmailTitle = document.createElement('td');
    tdEmailTitle.classList.add('balance-cell-for-email-title')
    tdEmailTitle.textContent = 'Email';
    const tdBalanceTitle = document.createElement('td');
    tdBalanceTitle.classList.add('balance-cell-for-balance-title')
    tdBalanceTitle.textContent = 'Balance';
    tr.appendChild( tdNumberTitle);
    tr.appendChild(tdNamerTitle);
    tr.appendChild(tdEmailTitle);
    tr.appendChild(tdBalanceTitle)
    tr.style.border = `6px solid #4287f5`
    return tr;

  }

function createTableRows(number, {name, email, balance} = {}){
   const tr = document.createElement('tr');
   tr.classList.add('balance-information-row');
   const tdNumber = document.createElement('td');
   tdNumber.classList.add('balance-cell-for-number')
   tdNumber.textContent = number;
   const tdName = document.createElement('td');
   tdName.classList.add('balance-cell-for-name')
   tdName.textContent = name;
   const tdEmail = document.createElement('td');
   tdEmail.classList.add('balance-cell-for-email')
   tdEmail.textContent = email;
   const tdBalance = document.createElement('td');
   tdBalance.classList.add('balance-cell-for-balance')
   tdBalance.textContent = balance;
   tr.appendChild(tdNumber);
   tr.appendChild(tdName)
   tr.appendChild(tdEmail)
   tr.appendChild(tdBalance);
   return tr;
}

function calculateBalance(){
  const tr = document.createElement('tr');
  const tdAmount = document.createElement('td');
  let res = 0;

  Object.values(users).forEach(user => {
    res +=user.balance
  })

  tr.classList.add('all-balance-information-row');
  tdAmount .classList.add('balance-cell-for-all-users')
  tdAmount.textContent = `Total balance: ${res}$`;
  tdAmount.style.textAlign = 'left';
  // tdAmount.style.paddingRight = '0px 0px -400px 0px';
  tr.appendChild( tdAmount);
  return tr;
}

