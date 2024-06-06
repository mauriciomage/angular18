import { Component, signal, WritableSignal, Signal, computed, effect, EffectRef } from '@angular/core';
import { mockBankAccounts } from '../../mock/data.mock';
import { IAccount } from '../../interfaces/account.interface';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public title = 'angular18';
  public author = 'Mauricio';
  public doubleValue = signal(false);
  public count: WritableSignal<number> = signal(0);
  public accounts: WritableSignal<IAccount[]> = signal(mockBankAccounts)
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

  public handleNameChange(name: string): void {
    console.log('name changed', name);
    this.author = name;
  }

  public openDetail(account: any): void {
    this.dialog.open(DetailsComponent, {
      width: '400px',
      data: account
    });

  }

  onDestroy(): void {
    this.effect.destroy();
  }
}
