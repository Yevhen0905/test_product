export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '29.06.2017',
    description: 'list1',
    get products() {
      return products
    }
  },
  {
    id: 2,
    title: 'Order 2',
    date: '15.07.2020',
    description: 'list2',
    get products() {
      return products
    }
  },
  {
    id: 3,
    title: 'Order 3',
    date: '20.11.2021',
    description: 'list3',
    get products() {
      return products
    }
  }
]

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Monitors',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017.06.29 12:09:33',
      end: '2018.06.29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2022.06.01 10:01:22'
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Monitors',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017.06.29 12:09:33',
      end: '2018.06.29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2022.06.01 10:01:22'
  },
  {
    id: 2,
    serialNumber: 1245,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Laptop',
    type: 'Laptop',
    specification: 'Specification 2',
    guarantee: {
      start: '2020.05.09 10:03:01',
      end: '2021.06.29 18:09:33'
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: 0 },
      { value: 5200, symbol: 'UAH', isDefault: 1 }
    ],
    order: 2,
    date: '2017.06.29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1256,
    isNew: 0,
    photo: 'pathToFile.jpg',
    title: 'Mobile',
    type: 'Mobile',
    specification: 'Specification 3',
    guarantee: {
      start: '2021.06.15 14:00:22',
      end: '2022.10.12 12:06:55'
    },
    price: [
      { value: 300, symbol: 'USD', isDefault: 0 },
      { value: 7200, symbol: 'UAH', isDefault: 1 }
    ],
    order: 3,
    date: '2017.06.29 12:09:33'
  }
]

// export const jsonString = JSON.stringify(orders, null, 2);
// console.log(jsonString);
