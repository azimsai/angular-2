
import {Component} from 'angular2/core'
import {CourseService} from  './course.service';

@Component({
    selector: 'nv-courses',
        template: `
                    <h2>Courses</h2>
                    <h4>{{title}}</h4>
                    <ul>
                        <li *ngFor="#course of courses">{{course}}</li>
                    </ul>
                  `,
    providers:[CourseService]
})

export class CoursesComponent{
    title: string = "List of courses";
    courses: string[];
    
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}