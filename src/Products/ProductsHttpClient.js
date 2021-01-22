import Response from './Response';
import ProductDetailResponse from './ProductDetailResponse';
import ProductsListResponse from './ProductsListResponse';

export default class ProductsHttpClient {
    static STUDENTS = [
        { studentId: 1, studentSchoolId: 'Acer Nitro 5 Ryzen 5 Quad Core 3550H - (8 GB/1 TB HDD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) AN515-43-R3JU Gaming Laptop  (15.6 inch, Obsidian Black, 2.3 kg', firstName: '\n' +
                'NVIDIA GeForce GTX 1650\n' +
                '15.6 inch Full HD LED Backlit IPS ComfyView Display (16:9 Aspect Ratio, Wide Viewing Angle Upto 170 Degrees)\n' +
                'Light Laptop without Optical Disk Drive\n' +
                'Pre-installed Genuine Windows 10 OS', lastName: '₹73,999', studentEmail: '₹73,999' },
        { studentId: 2, studentSchoolId: 'HP Omen Ryzen 5 Hexa Core 4600H - (8 GB/512 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce GTX 1660 Ti) 15-en0002AX Gaming Laptop  (15.6 inch, Mica Silver, 2.37 kg)', firstName: 'NVIDIA GeForce GTX 1660 Ti\n' +
                '15.6 inch Full HD LED Backlit Display\n' +
                'Light Laptop without Optical Disk Drive\n' +
                'Pre-installed Genuine Windows 10 OS', lastName: '₹79,990', studentEmail: '₹79,990' },
        { studentId: 3, studentSchoolId: 'Lenovo Ideapad S145 Core i3 7th Gen - (4 GB/1 TB HDD/Windows 10 Home) S145-15IKB Laptop  (15.6 inch, Platinum Grey, 1.85 kg, With MS Office)', firstName: 'Pre-installed Genuine Windows 10 OS\n' +
                'Preloaded with MS Office\n' +
                'Light Laptop without Optical Disk Drive\n' +
                '15.6 inch Full HD LED Backlit TN Display (220 nits Brightness, 16:9 Aspect Ratio)', lastName: '₹30,990', studentEmail: '₹30,990' },
        { studentId: 4, studentSchoolId: 'Asus VivoBook 15 Core i3 7th Gen - (4 GB/1 TB HDD/Windows 10 Home) X543UA-DM341T Laptop  (15.6 inch, Transparent Silver, 1.9 kg)', firstName: '\n' +
                'Light Laptop without Optical Disk Drive\n' +
                '15.6 inch Full HD LED Backlit Anti-glare Display (200 nits Brightness, 16:9 Aspect Ratio, 45% NTSC)', lastName: '₹26,990', studentEmail: '₹26,990' },
        { studentId: 5, studentSchoolId: 'HP 15 Ryzen 3 Dual Core 3200U - (4 GB/1 TB HDD/Windows 10 Home) 15-db1069AU Laptop  (15.6 inch, Jet Black, 2.04 kg, With MS Office)', firstName: 'Pre-installed Genuine Windows 10 OS\n' +
                'Preloaded with MS Office\n' +
                'Light Laptop without Optical Disk Drive\n' +
                '15.6 inch HD WLED Backlit Brightview Display (220 nits Brightness, 101 ppi, 45% Color Gamut)', lastName: '₹28,990', studentEmail: '₹28,990' },{ studentId: 5, studentSchoolId: 'HP 15 Ryzen 3 Dual Core 3200U - (4 GB/1 TB HDD/Windows 10 Home) 15-db1069AU Laptop  (15.6 inch, Jet Black, 2.04 kg, With MS Office)', firstName: 'Pre-installed Genuine Windows 10 OS\n' +
                'Preloaded with MS Office\n' +
                'Light Laptop without Optical Disk Drive\n' +
                '15.6 inch HD WLED Backlit Brightview Display (220 nits Brightness, 101 ppi, 45% Color Gamut)', lastName: '₹28,990', studentEmail: '₹28,990' },{ studentId: 5, studentSchoolId: 'HP 15 Ryzen 3 Dual Core 3200U - (4 GB/1 TB HDD/Windows 10 Home) 15-db1069AU Laptop  (15.6 inch, Jet Black, 2.04 kg, With MS Office)', firstName: 'Pre-installed Genuine Windows 10 OS\n' +
                'Preloaded with MS Office\n' +
                'Light Laptop without Optical Disk Drive\n' +
                '15.6 inch HD WLED Backlit Brightview Display (220 nits Brightness, 101 ppi, 45% Color Gamut)', lastName: '₹28,990', studentEmail: '₹28,990' },
        { studentId: 6, studentSchoolId: 'Asus TUF Ryzen 5 Quad Core 3550H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/60 Hz) FX705DT-AU092T Gaming Laptop  (17.3 inch, Black Plastic, 2.70 kg)', firstName: '\n' +
                'NVIDIA GeForce GTX 1650\n' +
                '17.3 inch Full HD LED Backlit Anti-glare IPS Display (60 Hz Refresh Rate, 250 nits Brightness, 800:1 Contrast Ratio, 45% NTSC Color Gamut, 62.5% sRGB, 50% Adobe, 170/170 Viewing Angle)\n' +
                'Light Laptop without Optical Disk Drive\n' +
                'Pre-installed Genuine Windows 10 OS', lastName: '₹54,999', studentEmail: '₹54,999' },
        { studentId: 7, studentSchoolId: 'Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466  (13.3 inch, Silver, 1.35 kg)', firstName: 'Product Description\n' +
                'It is fun to use, it is powerful and it looks incredible, meet the Apple MacBook Air. This Sleek and Lightweight laptop is powered by Intel Core i5 5th Gen processor with 8 GB DDR3 RAM and 128 GB of SSD capacity to make multitasking smooth and easy. It is designed with a Backlit Keyboard and its Multi-Touch Trackpad will be an absolute pleasure to use.', lastName: '₹65,990', studentEmail: '₹65,990' },{ studentId: 7, studentSchoolId: 'Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466  (13.3 inch, Silver, 1.35 kg)', firstName: 'Product Description\n' +
                'It is fun to use, it is powerful and it looks incredible, meet the Apple MacBook Air. This Sleek and Lightweight laptop is powered by Intel Core i5 5th Gen processor with 8 GB DDR3 RAM and 128 GB of SSD capacity to make multitasking smooth and easy. It is designed with a Backlit Keyboard and its Multi-Touch Trackpad will be an absolute pleasure to use.', lastName: '₹65,990', studentEmail: '₹65,990' },{ studentId: 7, studentSchoolId: 'Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466  (13.3 inch, Silver, 1.35 kg)', firstName: 'Product Description\n' +
                'It is fun to use, it is powerful and it looks incredible, meet the Apple MacBook Air. This Sleek and Lightweight laptop is powered by Intel Core i5 5th Gen processor with 8 GB DDR3 RAM and 128 GB of SSD capacity to make multitasking smooth and easy. It is designed with a Backlit Keyboard and its Multi-Touch Trackpad will be an absolute pleasure to use.', lastName: '₹65,990', studentEmail: '₹65,990' },{ studentId: 7, studentSchoolId: 'Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466  (13.3 inch, Silver, 1.35 kg)', firstName: 'Product Description\n' +
                'It is fun to use, it is powerful and it looks incredible, meet the Apple MacBook Air. This Sleek and Lightweight laptop is powered by Intel Core i5 5th Gen processor with 8 GB DDR3 RAM and 128 GB of SSD capacity to make multitasking smooth and easy. It is designed with a Backlit Keyboard and its Multi-Touch Trackpad will be an absolute pleasure to use.', lastName: '₹65,990', studentEmail: '₹65,990' },
        { studentId: 8, studentSchoolId: 'Product A', firstName: 'Lorum ipsum', lastName: '44$', studentEmail: '34$' },
        { studentId: 9, studentSchoolId: 'Product B', firstName: 'Lorum ipsum', lastName: '44$', studentEmail: '34$' },
        { studentId: 10, studentSchoolId: 'Product C', firstName: 'Lorum ipsum', lastName: '44$', studentEmail: '34$' },
        { studentId: 11, studentSchoolId: 'Product D', firstName: 'Lorum ipsum', lastName: '44$', studentEmail: '34$' },
        { studentId: 12, studentSchoolId: 'Product E', firstName: 'Lorum ipsum', lastName: '44$', studentEmail: '34$' },
        { studentId: 13, studentSchoolId: 'Product F', firstName: 'Lorum ipsum', lastName: '44$', studentEmail: '34$' },
        { studentId: 14, studentSchoolId: 'Product G', firstName: 'Lorum ipsum', lastName: '44$', studentEmail: '34$' },

    ];

    static getStudents(sortColumn, sortDirection, pageIndex, pageSize, tableFilters) {

        // In a production application, the following logic would be replaced with a REST call!!!

        let studentsCopy;
        if ((sortDirection === 'desc') || (sortDirection === 'asc')) {
            // Return the students sorted by the specified column and direction
            studentsCopy = this.STUDENTS.slice();
            studentsCopy = studentsCopy.sort(this.compareValues(sortColumn, sortDirection));
        } else {
            // Return the students in no particular order
            studentsCopy = this.STUDENTS.slice();
        }

        // Filter the students
        studentsCopy = studentsCopy.filter(student => this.filterStudents(student, tableFilters));
        const total = studentsCopy.length;

        const start = pageIndex * pageSize;
        const end = start + pageSize;
        studentsCopy = studentsCopy.slice(start, end);

        const studentsList = new ProductsListResponse(studentsCopy, total);
        return new Promise((resolve, reject) => { setTimeout(function () { resolve(studentsList); }, 500) });
    }


    static getStudentDetail(studentId, sortColumn, sortDirection, pageIndex, pageSize) {

        // In a production application, the following logic would be replaced with a REST call!!!

        let studentDetailDeepCopy = JSON.parse(JSON.stringify(this.STUDENT_DETAILS));
        if ((sortDirection === 'desc') || (sortDirection === 'asc')) {
            // Return the students sorted by the specified column and direction
            studentDetailDeepCopy = studentDetailDeepCopy.sort(this.compareValues(sortColumn, sortDirection));
        }

        const start = pageIndex * pageSize;
        const end = start + pageSize;
        studentDetailDeepCopy = studentDetailDeepCopy.slice(start, end);

        studentDetailDeepCopy[0].loansTotalAmount = studentId * 1000;

        const studentDetailList = new ProductDetailResponse(studentDetailDeepCopy, this.STUDENT_DETAILS.length);
        return new Promise((resolve, reject) => { setTimeout(function () { resolve(studentDetailList); }, 500) });
    }

    static updateStudent(student) {

        let rsp;

        const studentIndex = this.STUDENTS.findIndex(s => s.studentId === student.studentId);

        if (studentIndex === 0) {
            rsp = new Response(false, 'Failed to update student, please try again!');
        } else {
            rsp = new Response(true);

            // Update the student
            this.STUDENTS[studentIndex] = student;
        }

        return new Promise((resolve, reject) => { setTimeout(function () { resolve(rsp); }, 500) });
    }

    static addStudent(student) {

        let rsp;

        if (student.studentSchoolId === 'BAD') {
            rsp = new Response(false, 'Failed to add student, please try again!');
        } else {
            rsp = new Response(true);

            student.studentId = this.getNextStudentId();

            // Add the student
            this.STUDENTS.push(student);
        }

        return new Promise((resolve, reject) => { setTimeout(function () { resolve(rsp); }, 500) });
    }

    static deleteStudent(studentId) {

        let rsp;
        const studentIndex = this.STUDENTS.findIndex(s => s.studentId === studentId);
        if (studentIndex === 0) {
            // Simulate an error for testing purposes
            rsp = new Response(false, 'Failed to delete student, please try again!');
        } else {
            rsp = new Response(true);

            // Delete the student
            this.STUDENTS.splice(studentIndex, 1);
        }

        return new Promise((resolve, reject) => { setTimeout(function () { resolve(rsp); }, 500) });
    }

    static deleteStudents(studentIds) {

        // In a production application, the following logic would be replaced with a REST call!!!

        const rsp = new Response(true);

        studentIds.forEach(studentId => {
            const studentIndex = this.STUDENTS.findIndex(s => s.studentId === studentId);

            // Delete the student
            this.STUDENTS.splice(studentIndex, 1);
        });

        return new Promise((resolve, reject) => { setTimeout(function () { resolve(rsp); }, 500) });
    }

    static validateStudentSchoolId(studentId, studentSchoolId) {
        let rsp;
        const studentIndex = this.STUDENTS.findIndex(s => s.studentId === studentId);

        // Get the index of any student that has the same student school id
        const studentMatchIndex = this.STUDENTS.findIndex(s => s.studentSchoolId === studentSchoolId);
        if ((studentMatchIndex !== -1) && (studentMatchIndex !== studentIndex)) {
            rsp = new Response(false, 'Student Id is already assigned');
        } else {
            rsp = new Response(true);
        }

        return new Promise((resolve, reject) => { setTimeout(function () { resolve(rsp); }, 500) });
    }

    static compareValues(sortColumn, sortDirection) {
        return function (a, b) {
            if (!a.hasOwnProperty(sortColumn) || !b.hasOwnProperty(sortColumn)) {
                return 0;
            }
            const comparison = a[sortColumn].localeCompare(b[sortColumn]);

            return (
                (sortDirection === 'desc') ? (comparison * -1) : comparison
            );
        };
    }


    static filterStudents(student, tableFilters) {
        const filters = Array.from(tableFilters.values());
        for (const filter of filters) {
            let testValue;
            switch (filter.field) {
                case 'studentSchoolId':
                    testValue = student.studentSchoolId;
                    break;
                case 'firstName':
                    testValue = student.firstName;
                    break;
                case 'lastName':
                    testValue = student.lastName;
                    break;
                case 'studentEmail':
                    testValue = student.studentEmail;
                    break;
                default:
                    return true;
            }

            switch (filter.operator) {
                case 'Is equal to':
                    if (testValue !== filter.value) {
                        return false;
                    }
                    break;
                case 'Is not equal to':
                    if (testValue === filter.value) {
                        return false;
                    }
                    break;
                case 'Starts with':
                    if (!testValue.startsWith(filter.value)) {
                        return false;
                    }
                    break;
                case 'Contains':
                    if (!testValue.includes(filter.value)) {
                        return false;
                    }
                    break;
                case 'Does not contain':
                    if (testValue.includes(filter.value)) {
                        return false;
                    }
                    break;
                case 'Ends with':
                    if (!testValue.endsWith(filter.value)) {
                        return false;
                    }
                    break;
                default:
                    return true;
            }
        }

        return true;
    }

    static getNextStudentId() {
        let maxStudentId = 0;
        for (let i = 0; i < this.STUDENTS.length; i++) {
            if (maxStudentId < this.STUDENTS[i].studentId) {
                maxStudentId = this.STUDENTS[i].studentId;
            }
        }

        return maxStudentId + 1;
    }
}