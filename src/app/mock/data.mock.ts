import { IAccount } from '../interfaces/account.interface';

export const mockBankAccounts: IAccount[] = [
  {
      id: 1,
      name: "Juan Pérez",
      currency: "USD",
      amount: 1500.75,
      date: "2024-05-31",
      detail: {
          accountNumber: "123456789",
          accountType: "Checking",
          branch: "New York",
          transactions: [
              { id: 1, date: "2024-05-01", amount: -100.00, description: "Grocery Store" },
              { id: 2, date: "2024-05-10", amount: -50.00, description: "Gas Station" },
              { id: 3, date: "2024-05-20", amount: 500.00, description: "Salary Deposit" }
          ]
      }
  },
  {
      id: 2,
      name: "Maria López",
      currency: "EUR",
      amount: 2450.30,
      date: "2024-05-31",
      detail: {
          accountNumber: "987654321",
          accountType: "Savings",
          branch: "Madrid",
          transactions: [
              { id: 1, date: "2024-05-05", amount: -200.00, description: "Electronics Store" },
              { id: 2, date: "2024-05-15", amount: -100.00, description: "Restaurant" },
              { id: 3, date: "2024-05-25", amount: 700.00, description: "Freelance Payment" }
          ]
      }
  },
  {
      id: 3,
      name: "Luis García",
      currency: "MXN",
      amount: 7800.50,
      date: "2024-05-31",
      detail: {
          accountNumber: "567890123",
          accountType: "Checking",
          branch: "Mexico City",
          transactions: [
              { id: 1, date: "2024-05-02", amount: -150.00, description: "Bookstore" },
              { id: 2, date: "2024-05-12", amount: -75.00, description: "Coffee Shop" },
              { id: 3, date: "2024-05-22", amount: 2000.00, description: "Bonus Payment" }
          ]
      }
  },
  {
      id: 4,
      name: "Ana Martínez",
      currency: "GBP",
      amount: 3200.40,
      date: "2024-05-31",
      detail: {
          accountNumber: "345678901",
          accountType: "Savings",
          branch: "London",
          transactions: [
              { id: 1, date: "2024-05-08", amount: -300.00, description: "Clothing Store" },
              { id: 2, date: "2024-05-18", amount: -50.00, description: "Gym Membership" },
              { id: 3, date: "2024-05-28", amount: 1000.00, description: "Investment Return" }
          ]
      }
  },
  {
      id: 5,
      name: "Carlos Fernández",
      currency: "CAD",
      amount: 5600.25,
      date: "2024-05-31",
      detail: {
          accountNumber: "432109876",
          accountType: "Checking",
          branch: "Toronto",
          transactions: [
              { id: 1, date: "2024-05-03", amount: -120.00, description: "Supermarket" },
              { id: 2, date: "2024-05-13", amount: -60.00, description: "Taxi Service" },
              { id: 3, date: "2024-05-23", amount: 1800.00, description: "Project Payment" }
          ]
      }
  }
];
