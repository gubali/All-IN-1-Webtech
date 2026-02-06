import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../model/model';

@Pipe({
  name: 'filterByCatagory',
  standalone: true,
})
export class filterByCatagory implements PipeTransform {
  transform(course: Course[], catagory: string) {
    if (!course || !catagory) {
      return course;
    }
    return course.filter((course) => course.category === catagory);
  }
}
