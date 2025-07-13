import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-child-chagedetections',
  imports: [ScrollingModule],
  standalone: true,
  templateUrl: './child-chagedetections.component.html',
  styleUrl: './child-chagedetections.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildChagedetectionsComponent {
  @Input() childRcvr: any = [];
  
  triggerUnrelatedChnage() {
    let test = { id: 101, name: 'test' };
    this.childRcvr = [...this.childRcvr,test]
    console.log('Un-related change');
  }
}
