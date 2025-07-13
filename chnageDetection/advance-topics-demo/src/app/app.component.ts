import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  QueryList,
  signal,
  SimpleChanges,
  ViewChild,
  viewChild,
  ViewChildren,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ChangeDetectionExampleComponent } from './topics/change-detection-example/change-detection-example.component';
import { CourseCardComponent } from './topics/change-detection-example/course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/model';
import { HighlightDirective } from './custom-directive/highlight.directive';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { filterByCatagory } from './topics/change-detection-example/custom-pipe/filterByCatagory';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { ChildChagedetectionsComponent } from './child-chagedetections/child-chagedetections.component';
import { ProfileCardComponent } from './re-usable/profile-card/profile-card.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChangeDetectionExampleComponent,
    //HighlightDirective,
    CourseCardComponent,
    AsyncPipe,
    filterByCatagory,
    CommonModule,
    ChildChagedetectionsComponent,
    ProfileCardComponent,
    RouterModule
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent
  implements AfterViewInit, OnInit, OnChanges, AfterViewChecked
{
  private titleData = new BehaviorSubject<string>('');
  titleData$ = this.titleData.asObservable();
  title = 'advance-topics-demo';
  colorRed:string ='red';
  praentNameVariable:string ="Quick Summary Table";
  // signal example
  public counter: any = signal(1);
  user = signal({name:'asif', age:32})
  // listOfCourses = [...COURSES];
  listOfCourses: any;
  listOfCourses$: Observable<Course[]> | undefined;
  private firstTimeCourseList: Course[] = [];
  myItems = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: `item  ${i + 1}`,
  }));
  @ViewChild(CourseCardComponent) childComp!: CourseCardComponent;
  @ViewChildren(CourseCardComponent)
  childComps1!: QueryList<CourseCardComponent>;
  // ngAfterViewInit(){
  //   console.log('childComp', this.childComp);
  // }
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  onCourseSelected(course: Course) {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'Bearer - ss332332&&&&^',
    });
    this.http
      .put(`http://localhost:9000/api/courses/${course.id}`, course, {
        headers,
      })
      .subscribe((res: any) => {
        this.titleData.next(res.description);
      });
    // console.log("listOfCourses", course)
  }
  showCourseDetails() {
    // console.log(this.childComp.clickMethodFromChild());
  }

  ngAfterViewInit(): void {
    this.listOfCourses[0].description = 'Angular for XXXXX';
    //console.log('sasss', this.childComps1.length);
  }
  ngOnInit(): void {
    const param = new HttpParams().set('page', '1').set('pageSize', '10');
    // this.http
    //   .get('http://localhost:9000/api/courses', { params: param })
    //   .subscribe((val) => (this.listOfCourses = val));
    this.listOfCourses$ = this.http.get<Course[]>(
      'http://localhost:9000/api/courses',
      { params: param }
    );

    // this.titleData$ = this.listOfCourses$.pipe(
    //   map( (courses: Course[]) => courses.map(course => course.description).join(', '))
    // );

    // signal handon
    this.counter.set(200);
    this.counter.update((c:any) => c + 100);
    alert('Signal Value ' + this.counter());
    this.user.update(user => ({ ...user, name: 'Admin Khan' }));
    alert(this.user().name + this.user().age);
  }

  deletCourseById(course: Course) {
    alert(course.id);
  }
  ngDoCheck(): void {
    // console.log('ngDocheck11');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('parent Onchage trigger');
  }
  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked");
  }
}
