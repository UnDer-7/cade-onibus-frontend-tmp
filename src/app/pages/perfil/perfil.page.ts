import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../auth/Token.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../auth/session.service';
import { ModalController } from '@ionic/angular';
import { UserFormComponent } from '../modals/user-form/user-form.component';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
})
export class PerfilPage implements OnInit {
  public user: User;
  public appName: string = environment.appName;

  constructor(
    private perfilService: PerfilService,
    private tokenService: TokenService,
    private router: Router,
    private sessionService: SessionService,
    private modalCtrl: ModalController
  ) {
    this.user = {} as User;
  }

  public ngOnInit(): void {
    this.getUser();
  }

  public sendToHome(): void {
    this.router.navigate(['home']);
  }

  public logout(): void {
    this.sessionService.logout();
  }

  public async editUser(): Promise<any> {
    const user = Object.assign({}, this.user);
    const modal = await this.modalCtrl.create({
      component: UserFormComponent,
      componentProps: {
        user: user,
        action: 'edit'
      }
    });
    await modal.present();
    modal.onDidDismiss().then(() => {
      this.getUser();
    });
  }

  get isEmpty(): boolean {
    return Object.entries(this.user).length === 0;
  }

  private getUser(): void {
    const id = this.tokenService.decodeToken()._id;
    this.perfilService.findUser(id).subscribe(res => {
      this.user = res;
    });
  }

}
