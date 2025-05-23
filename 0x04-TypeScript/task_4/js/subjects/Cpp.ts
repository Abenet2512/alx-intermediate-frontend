/// <reference path="Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
