export interface IAccount {
  id: number,
  name: string,
  currency: string,
  amount: number,
  date: string,
  detail: AccountDetail
}

export interface AccountDetail {
  accountNumber: string,
  accountType: string,
  branch: string,
  transactions: AccountTransaction[]
}

export interface AccountTransaction {
  id: number,
  date: string, 
  amount: number,
  description: string
}