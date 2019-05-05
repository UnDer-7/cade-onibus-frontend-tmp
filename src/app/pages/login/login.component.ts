import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SessionHandler } from '../../auth/session.handler';
import { SocialUserToUser } from '../../models/user.model';
import { UtilService } from '../../utils/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public readonly contentColor: string = environment.contentColor;
  public readonly appName: string = environment.appName;

  @BlockUI() private blockUi!: NgBlockUI;

  constructor(
    private socialService: AuthService,
    private utilService: UtilService,
    private sessionHandler: SessionHandler,
  ) {
  }

  public async google(): Promise<void> {
    this.blockUi.start();
    await this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).catch(this.blockUi.stop);
    this.loginWithGoogle();
  }

  private loginWithGoogle(): void {
    this.socialService.authState.pipe(
      finalize(() => this.blockUi.stop()),
    ).subscribe(res => {
      this.sessionHandler.loginWithGoogle(SocialUserToUser(res));
    });
  }
}
