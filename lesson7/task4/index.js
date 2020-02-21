const getMessagesForBestStudents = (students, failedStudens) =>
    students
    .filter(name => !failedStudens.includes(name))
    .map(name => 'Good job ' + name);