const geographicSalesData = [
  {
    id: 1,
    name: 'Piemonte',
    value: 15,
    totalAmount: 1000,
    agents: [
      {
        name: 'Mario Rossi',
        sold: 150,
        wineID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        clients: 10,
      },
      {
        name: 'Luca Verdi',
        sold: 300,
        wineID: [1, 2, 3, 4, 5, 6, 7, 8],
        clients: 5,
      },
      {
        name: 'Giovanni Bianchi',
        sold: 450,
        wineID: [1, 2, 3, 4, 5, 7, 8],
        clients: 3,
      },
    ],
  },
  {
    id: 2,
    name: 'Toscana',
    value: 20,
    totalAmount: 1500,
    agents: [
      {
        name: 'Andrea Neri',
        sold: 400,
        wineID: [1, 3, 5, 7, 9],
        clients: 12,
      },
      {
        name: 'Francesca Blu',
        sold: 500,
        wineID: [2, 4, 6, 8, 10],
        clients: 8,
      },
      {
        name: 'Giulio Rossa',
        sold: 600,
        wineID: [1, 2, 3, 5, 6],
        clients: 6,
      },
    ],
  },
  {
    id: 3,
    name: 'Veneto',
    value: 18,
    totalAmount: 1300,
    agents: [
      {
        name: 'Elena Gialli',
        sold: 350,
        wineID: [1, 2, 4, 6, 7, 9],
        clients: 7,
      },
      {
        name: 'Marco Viola',
        sold: 550,
        wineID: [2, 3, 5, 8, 10],
        clients: 9,
      },
      {
        name: 'Anna Bianchi',
        sold: 400,
        wineID: [1, 3, 5, 7],
        clients: 5,
      },
    ],
  },
  {
    id: 4,
    name: 'Sicilia',
    value: 12,
    totalAmount: 900,
    agents: [
      {
        name: 'Luca Rossi',
        sold: 250,
        wineID: [1, 4, 5, 7],
        clients: 8,
      },
      {
        name: 'Maria Verdi',
        sold: 300,
        wineID: [2, 3, 6, 8, 10],
        clients: 6,
      },
      {
        name: 'Gianni Blu',
        sold: 350,
        wineID: [1, 2, 4, 6],
        clients: 4,
      },
    ],
  },
  {
    id: 5,
    name: 'Lombardia',
    value: 10,
    totalAmount: 850,
    agents: [
      {
        name: 'Paolo Neri',
        sold: 200,
        wineID: [1, 3, 5, 8],
        clients: 9,
      },
      {
        name: 'Sara Viola',
        sold: 300,
        wineID: [2, 4, 6, 9, 10],
        clients: 6,
      },
      {
        name: 'Franco Blu',
        sold: 350,
        wineID: [1, 4, 5, 7, 9],
        clients: 5,
      },
    ],
  },
  {
    id: 6,
    name: 'Puglia',
    value: 8,
    totalAmount: 750,
    agents: [
      {
        name: 'Marta Rossi',
        sold: 200,
        wineID: [1, 3, 5, 9],
        clients: 7,
      },
      {
        name: 'Luca Verde',
        sold: 250,
        wineID: [2, 4, 6, 8],
        clients: 5,
      },
      {
        name: 'Alessandro Blu',
        sold: 300,
        wineID: [1, 2, 3, 6],
        clients: 3,
      },
    ],
  },
  {
    id: 7,
    name: 'Sardegna',
    value: 7,
    totalAmount: 600,
    agents: [
      {
        name: 'Giorgia Rossa',
        sold: 150,
        wineID: [2, 4, 6, 9],
        clients: 6,
      },
      {
        name: 'Simone Gialli',
        sold: 250,
        wineID: [1, 3, 5, 7],
        clients: 4,
      },
      {
        name: 'Chiara Verdi',
        sold: 200,
        wineID: [1, 2, 6, 8],
        clients: 3,
      },
    ],
  },
  {
    id: 8,
    name: 'Campania',
    value: 10,
    totalAmount: 800,
    agents: [
      {
        name: 'Vincenzo Rossa',
        sold: 300,
        wineID: [2, 3, 5, 8],
        clients: 8,
      },
      {
        name: 'Elisa Gialli',
        sold: 250,
        wineID: [1, 4, 6, 9],
        clients: 5,
      },
      {
        name: 'Giovanni Blu',
        sold: 250,
        wineID: [3, 5, 7],
        clients: 4,
      },
    ],
  },
]

export default geographicSalesData
