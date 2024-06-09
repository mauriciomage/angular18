import { Component, signal, WritableSignal, Signal, computed, effect, EffectRef } from '@angular/core';
import { mockBankAccounts, mockUsers } from '../../mock/data.mock';
import { IAccount } from '../../interfaces/account.interface';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user.interface';


@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public title = 'angular18';
  public author = 'Mauricio';
  public accounts: WritableSignal<IAccount[]> = signal(mockBankAccounts);
  users: IUser[] = [
    { id: 1, name: 'marcel', lastName: 'scott', username: 'michael.scott' },
    { id: 2, name: 'dwight', lastName: 'schrute', username: 'dwight.schrute' },
    { id: 3, name: 'angela', lastName: 'martin', username: 'angela.martin' },
    { id: 4, name: 'jim', lastName: 'halpert', username: 'jim.halpert' },
  ];
  public doubleValue = signal(false);
  public count: WritableSignal<number> = signal(0);
  public test = signal('whatever');

  public displayUsers: boolean = true;
  
  public double: Signal<number> = computed(() => {
    if (this.doubleValue() === true) {
      return this.count() * 2;
    } else {
      return this.count();
    }
  });
  

  public effect: EffectRef;

  constructor(public dialog: MatDialog) {
    // acts whenever the Signal is updated. You can do some "side effects actions here"
    this.effect = effect(() => {
      console.log(`The current count is: ${this.count()}`);
      console.log(`And the double value is : ${this.double()}`);
    });
  }

  /**
   * Increase the count in 1
   */
  public increase(): void {
    this.count.update((value: number) => value + 1);
  }

  /**
   * Reset the value to zero.
   */
  public reset(): void {
    this.count.set(0);
  }

  /**
   * Update the writable signnal to be able to double the value
   * @param enable boolean
   */
  public setDouble(enable: boolean) {
    this.doubleValue.update(() => enable);
  }

  public handleDisplayChange(display: boolean): void {
    console.log(display);
    this.displayUsers = display;
  }

  public openDetail(account: any): void {
    this.dialog.open(DetailsComponent, {
      width: '400px',
      data: account
    });

  }

  addUser() {
    this.users = [
      {
        id: 5,
        name: 'mauricio',
        lastName: 'mage',
        username: 'mauri.mage',
      },
      ...this.users,
    ];
    console.log('Current Users', this.users);
  }

  onDestroy(): void {
    this.effect.destroy();
  }
}
