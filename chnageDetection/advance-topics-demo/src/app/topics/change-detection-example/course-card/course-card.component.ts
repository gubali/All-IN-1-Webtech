import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Course } from '../../../model/model';
import { CommonModule, NgClass } from '@angular/common';
import { HighlightDirective } from '../../../custom-directive/highlight.directive';
import { AppComponent } from '../../../app.component';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked {
  // @Input({ required: true }) course!: Course[];
  currentCourses: any[] = [];
  private previousTitles = '';
  private coursesSubscription!: Subscription;
  @Input() course!: Course;
  @Input() cardIndex!: number;
  @Output()
  courseSelected = new EventEmitter<Course>();
  @Output()
  selectedCourseById = new EventEmitter<Course>();
  latestDescription: string = '';
  constructor(
    private appComponent: AppComponent,
    private cd: ChangeDetectorRef
  ) {}
 

  /**
   * A lifecycle hook that is called when any data-bound property of a directive changes.
   * Define an `ngOnChanges` method to handle the changes.
   */

  // @ContentChild('courseImage', { static: false }) image: any;
  onTitleChnaged(newTitle: string) {
    this.course.description = newTitle;
  }
  onCourseViewd(description: string) {
    this.courseSelected.emit({ ...this.course, description });
  }

  clickMethodFromChild() {
    return 'metod call from child';
  }
  deletCourse(id: number) {
    this.selectedCourseById.emit({ ...this.course, id });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(" onchnages", changes);
   }
  ngOnInit() {
    console.log("ngOnInit");
    this.appComponent.titleData$.subscribe((description) => {
      this.latestDescription = description;
    });
  }
 
ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    this.course.description ="XYZ22222222222";
    
}
  ngOnDestroy(): void {
      console.log("ngOnDestroy");
      
  }
}
