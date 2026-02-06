import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-onpush-stratetgy',
  imports: [],
  standalone: true,
  templateUrl: './onpush-stratetgy.html',
  styleUrl: './onpush-stratetgy.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushStratetgy {
  @Input() user!: { name: string };
}
