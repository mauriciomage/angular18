import { Component, input, output, computed, signal, OnInit, ɵɵInputTransformsFeature, Signal, WritableSignal, Input } from '@angular/core';
import { IUser, IModifiedUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrl: './dumb.component.scss'
})
export class DumbComponent {
  onNameChange = output<string>();

  // angular v17
  userList = input.required({
    alias: 'users',
    transform: this.concatUserNames
  });

  protected filteredUsers = computed(() =>
    this.userList().filter(({ displayName }) =>  displayName.startsWith(this.query())
    )
  );

  // old versionn
  // @Input() users!: IUser[];
  
  // protected filteredUsers = computed(() =>
  //   this.users.filter(({ name }) =>  name.startsWith(this.query())
  //   )
  // );


  // new output()
  displayUsers = output<boolean>();

  private query = signal('');

  public updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }


  concatUserNames(users: IUser[]): IModifiedUser[] {
    return users.map(({ name, lastName, ...user }) => ({
      ...user,
      displayName: `${name} ${lastName}`,
    }));
  }

  hideUsers(): void {
    this.displayUsers.emit(false);
  }

}
