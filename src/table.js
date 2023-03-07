const users = [
  {
    _id: '5d220b10e8265cc978e2586b',
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: 'Buckner Osborne',
    gender: 'male',
    company: 'EMPIRICA',
    email: 'bucknerosborne@empirica.com',
    phone: '+1 (850) 411-2997',
    registered: '2018-08-13T04:28:45 -03:00',
    nestedField: { total: 300 }
  },
  {
    _id: '5d220b10144ef972f6c2b332',
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: 'Rosalie Smith',
    gender: 'female',
    company: 'KATAKANA',
    email: 'rosaliesmith@katakana.com',
    phone: '+1 (943) 463-2496',
    registered: '2016-12-09T05:15:34 -02:00',
    nestedField: { total: 400 }
  },
  {
    _id: '5d220b1083a0494655cdecf6',
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: 'Estrada Davenport',
    gender: 'male',
    company: 'EBIDCO',
    email: 'estradadavenport@ebidco.com',
    phone: '+1 (890) 461-2088',
    registered: '2016-03-04T03:36:38 -02:00',
    nestedField: { total: 200 }
  }
]

const wrapperBox = document.querySelector('.wrapper')
const objectOfUser = users.reduce((acc, user) => {
  acc[user._id] = user
  return acc
}, {})

function fillTable (users) {
  if (!users) {
    console.error('The list of users is empty')
    return
  }

  const fragment = document.createDocumentFragment()
  const table = document.createElement('table')
  table.classList.add('balance-table')
  table.style.width = '100%'
  table.style.borderCollapse = 'collapse'
  table.style.border = '6px solid #4287f5'

  const tBody = document.createElement('tbody')

  const trHeaderInform = createTableHeader([{ content: '#', className: 'th-index' }, { content: 'Name' }, { content: 'Email' }, { content: 'Balance' }])
  table.appendChild(trHeaderInform)

  Object.values(users).forEach((user, index) => {
    const row = createTableRow([{ content: index + 1 }, { content: user.name, className: 'td-user-name' }, { content: user.email }, { content: user.balance }])
    tBody.appendChild(row)
  })

  const balance = Object.values(users).reduce((acc, user) => {
    return acc + user.balance
  }, 0)

  const balanceRow = createTableRow([{ content: `Total balance: ${balance}$`, className: 'balance-cell-for-all-users' }])
  tBody.appendChild(balanceRow)

  table.appendChild(tBody)
  fragment.appendChild(table)
  wrapperBox.appendChild(fragment)
}

fillTable(objectOfUser)

function createTableHeader (content) {
  const tHead = document.createElement('thead')
  const tr = createTableRow(content)
  tHead.appendChild(tr)

  return tHead
}

function createTableRow (content) {
  const tr = document.createElement('tr')

  content.forEach(item => {
    const td = document.createElement('td')
    td.textContent = item.content
    td.classList.add('td-default')
    if (item.className) {
      td.classList.add(item.className)
    }
    tr.appendChild(td)
  })

  return tr
}
