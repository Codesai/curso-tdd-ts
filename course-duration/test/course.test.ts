import {Course} from "../src/course";

describe('Course', () => {
    let course: Course;

    beforeEach(() => {
        course = new Course("macramé");
    });

    it('identifies short courses', () => {
        course.start();
        course.end();

        expect(course.isShort()).toBeTruthy();
    });

    it.todo('identifies long courses',);

    it.todo('knows the course title');
});