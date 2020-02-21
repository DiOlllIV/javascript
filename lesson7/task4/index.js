const getMessagesForBestStudents = (students, failedStudens) =>
    students
    .filter(name => bestStudens.includes(name))
    .map(name => 'Good job ' + name);