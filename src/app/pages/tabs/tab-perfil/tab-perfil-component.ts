import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { decodeJWT } from '../../../auth/jwt.handler';
import { User } from '../../../models/user.model';
import { UserService } from '../../../resource/user.service';
import { PopoverController } from '@ionic/angular';
import { ConfigPopoverComponent } from '../../modal/config-popover/config-popover.component';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: 'tab-perfil-component.html',
})
export class TabPerfilComponent implements OnInit {
  public readonly appName: string = environment.appName;
  public readonly appColor: string = environment.contentColor;
  public isLoading: boolean = false;

  public user: User = {} as User;

  constructor(
    private userService: UserService,
    private popoverCtrl: PopoverController,
  ) {
  }

  public ngOnInit(): void {
    this.getUser();
  }

  public canShowLine(last: boolean): string | undefined {
    if (last) return 'none';
  }

  public async showOptions(): Promise<void> {
    const pop = await this.popoverCtrl.create({
      component: ConfigPopoverComponent,
    });

    await pop.present();
  }

  private getUser(): void {
    this.isLoading = true;
    this.userService.getUser(decodeJWT().email).pipe(
      finalize(() => this.isLoading = false),
    ).subscribe(res => this.user = res);
  }
}
