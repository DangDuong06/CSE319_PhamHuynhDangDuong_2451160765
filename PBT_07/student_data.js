const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function getAverage(student) {
    return student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
}

function getRank(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

function padRight(value, length) {
    let str = String(value);
    while (str.length < length) {
        str = str + " ";
    }
    return str;
}

function padLeft(value, length) {
    let str = String(value);
    while (str.length < length) {
        str = " " + str;
    }
    return str;
}

let countGioi = 0;
let countKha = 0;
let countTrungBinh = 0;
let countYeu = 0;

let highestStudent = null;
let lowestStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;

let totalAvgMale = 0;
let countMale = 0;
let totalAvgFemale = 0;
let countFemale = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const avg = getAverage(student);
    const rank = getRank(avg);

    student.average = avg;
    student.rank = rank;

    if (rank === "Giỏi") {
        countGioi++;
    } else if (rank === "Khá") {
        countKha++;
    } else if (rank === "Trung bình") {
        countTrungBinh++;
    } else {
        countYeu++;
    }

    if (highestStudent === null || avg > highestStudent.average) {
        highestStudent = student;
    }

    if (lowestStudent === null || avg < lowestStudent.average) {
        lowestStudent = student;
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCs += student.cs;

    if (student.gender === "M") {
        totalAvgMale += avg;
        countMale++;
    } else if (student.gender === "F") {
        totalAvgFemale += avg;
        countFemale++;
    }

    console.log(
        "| " + padRight(i + 1, 3) +
        " | " + padRight(student.name, 6) +
        " | " + padRight(avg.toFixed(1), 4) +
        " | " + padRight(rank, 11) + " |"
    );
}

console.log("\n===== Thống kê xếp loại =====");
console.log("Giỏi:", countGioi);
console.log("Khá:", countKha);
console.log("Trung bình:", countTrungBinh);
console.log("Yếu:", countYeu);

console.log("\n===== Sinh viên cao nhất / thấp nhất =====");
console.log("Cao nhất:", highestStudent.name, "- TB:", highestStudent.average.toFixed(1));
console.log("Thấp nhất:", lowestStudent.name, "- TB:", lowestStudent.average.toFixed(1));

console.log("\n===== Điểm TB toàn lớp theo từng môn =====");
console.log("Toán:", (totalMath / students.length).toFixed(2));
console.log("Vật lý:", (totalPhysics / students.length).toFixed(2));
console.log("Tin học:", (totalCs / students.length).toFixed(2));

console.log("\n===== Bonus: Điểm TB theo giới tính =====");
if (countMale > 0) {
    console.log("Nam:", (totalAvgMale / countMale).toFixed(2));
}
if (countFemale > 0) {
    console.log("Nữ:", (totalAvgFemale / countFemale).toFixed(2));
}
