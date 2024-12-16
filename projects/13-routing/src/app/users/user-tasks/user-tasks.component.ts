import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // @Input({required: true}) userId!: string;
  // @Input()
  // set userId(uid: string) {
  //   console.log(uid);
  // }
  userId = input.required<string>();
  private usersService = inject(UsersService);

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  userName = '';

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  ngOnInit(): void {
    console.log(this.activatedRoute);
    console.log(this.activatedRoute.component);
    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.url);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || '';
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    // component: Type<any> | null
    // snapshot: ActivatedRouteSnapshot
    // url: Observable<UrlSegment[]>
    // params: Observable<Params>
    // queryParams: Observable<Params>
    // fragment: Observable<string | null>
    // data: Observable<Data>
    // paramMap: Observable<ParamMap>
    // queryParamMap: Observable<ParamMap>
    // ...
  }
}
