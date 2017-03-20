export class TotalAmount {
    name: string;
    surname: string;
    date: string;
    totalAmount: number;
    subpayments: Subpayments[];
}

export class Subpayments {
    purpose: string;
    amount: number;
}

export const customerdata: TotalAmount[] = [
  {
      name: 'leon',
      surname: 'lina',
      date: 'lll',
      totalAmount: 321312,
      subpayments: [
          {
              purpose: 'hot water',
              amount: 321
          },
           {
              purpose: 'electricity',
              amount: 200
          }
      ]
  }
];

export const purposes = ['gas', 'water', 'electricity', 'rent'];