function processEnrollments(enrollments, courseStartDate) {

    function calculateFee(course) {
        let fee;
        switch (course.toLowerCase()) {
            case 'web development':
                fee = 200;
                break;
            case 'data science':
                fee = 250;
                break;
            case 'graphic design':
                fee = 150;
                break;
            default:
                fee = 0;
        }
        return fee;
    }

    function applyEarlyBirdDiscount(enrollmentDate, courseStartDate, fee) {
        const thirtyDaysBeforeStartDate = new Date(courseStartDate.getTime() - 30 * 24 * 60 * 60 * 1000);
        if (enrollmentDate < thirtyDaysBeforeStartDate) {
            return fee * 0.9;
        } else {
            return fee;
        }
    }

    const processedEnrollments = enrollments.map(enrollment => {
        const course = enrollment.course.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        const studentName = enrollment.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        const enrollmentDate = new Date(enrollment.enrollmentDate);
        const fee = calculateFee(enrollment.course);
        const finalFee = applyEarlyBirdDiscount(enrollmentDate, courseStartDate, fee);
        const durationSinceEnrollment = Math.floor((new Date() - enrollmentDate) / (1000 * 3600 * 24));

        return {
            studentName,
            course,
            enrollmentDate: enrollmentDate.toISOString().split('T')[0],
            fee: finalFee.toFixed(2),
            durationSinceEnrollment: `${durationSinceEnrollment} days`
        };
    });

    const summary = {
        totalEnrollments: processedEnrollments.length,
        totalFees: processedEnrollments.reduce((acc, curr) => acc + parseFloat(curr.fee), 0).toFixed(2)
    };

    return { processedEnrollments, summary };
}


const enrollments = [
    { name: 'john doe', course: 'web development', enrollmentDate: '2024-01-01' },
    { name: 'jane smith', course: 'data science', enrollmentDate: '2024-02-15' },
    { name: 'bob johnson', course: 'graphic design', enrollmentDate: '2024-03-20' }
];

const courseStartDate = new Date('2024-04-15');
const result = processEnrollments(enrollments, courseStartDate);
console.log(result.processedEnrollments);
console.log(result.summary);