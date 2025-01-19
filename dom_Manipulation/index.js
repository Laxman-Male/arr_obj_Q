const students = [
  {
    id: 1,
    name: "Aarav",
    age: 14,
    sex: "M",
    address: "Mumbai",
    marks: 85,
    classes: ["Math", "Science"],
  },
  {
    id: 2,
    name: "Anaya",
    age: 13,
    sex: "F",
    address: "Delhi",
    marks: 92,
    classes: ["English", "History"],
  },
  {
    id: 3,
    name: "Ishaan",
    age: 15,
    sex: "M",
    address: "Chennai",
    marks: 76,
    classes: ["Math", "Geography"],
  },
  {
    id: 4,
    name: "Meera",
    age: 14,
    sex: "F",
    address: "Bangalore",
    marks: 88,
    classes: ["Science", "History"],
  },
  {
    id: 5,
    name: "Arjun",
    age: 16,
    sex: "M",
    address: "Kolkata",
    marks: 65,
    classes: ["Math", "English"],
  },
  {
    id: 6,
    name: "Nisha",
    age: 15,
    sex: "F",
    address: "Pune",
    marks: 90,
    classes: ["Science", "Math"],
  },
  {
    id: 7,
    name: "Rohit",
    age: 13,
    sex: "M",
    address: "Mumbai",
    marks: 79,
    classes: ["Geography", "English"],
  },
  {
    id: 8,
    name: "Sara",
    age: 14,
    sex: "F",
    address: "Delhi",
    marks: 95,
    classes: ["History", "English"],
  },
  {
    id: 9,
    name: "Kabir",
    age: 15,
    sex: "M",
    address: "Chennai",
    marks: 82,
    classes: ["Math", "Science"],
  },
  {
    id: 10,
    name: "Priya",
    age: 16,
    sex: "F",
    address: "Bangalore",
    marks: 89,
    classes: ["Math", "History"],
  },
];

//   Easy

//  1.Print all the student names.
const stdName = students.map((stu) => stu.name);

//   2.Find all students aged 15 or older.
const olderAge = students.filter((stu) => stu.age > 15).map((stu) => stu.name);

//   3.Find all students taking the "Math" class.
const mathClass = students
  .filter((stu) => stu.classes[0] === "Math" || stu.classes[1] === "Math")
  .map((stu) => stu.name);

//   4.Create an array of students living in Mumbai or Delhi.
const homePlace = students
  .filter((stu) => stu.address === "Mumbai" || stu.address === "Delhi")
  .map((stu) => stu.name);

//   5.List students who scored more than 80 marks.
const stdMarks = students
  .filter((stu) => stu.marks > 85)
  .map((stu) => stu.name);

//   Medium
//   6. Identify all female students scoring above 85.
const femaleMarks = students
  .filter((stu) => stu.marks > 85 && stu.sex === "F")
  .map((stu) => stu.name);

//   7. Create a new array with student names and their marks.
const stdNameMarks = students.map((stu) => ({
  name: stu.name,
  p: stu.marks,
}));
//   8. Find all students whose names start with the letter "A."
const nameWithA = students
  .filter((stu) => stu.name.startsWith("A"))
  .map((stu) => stu.name);

//   9. List students taking both "Math" and "Science" classes.
const stdSubject = students
  .filter(
    (stu) =>
      (stu.classes[0] === "Math" && stu.classes[1] === "Science") ||
      (stu.classes[0] === "Science" && stu.classes[1] === "Math")
  )
  .map((stu) => stu.name);
//   10. Find all students living in Pune with marks over 75.
const stuCity = students
  .filter((stu) => stu.address === "Pune" && stu.marks > 75)
  .map((stu) => stu.name);

//   Hard
//   11. Find students aged 14 and above who are taking "History" class.
const subHistory = students
  .filter(
    (stu) =>
      (stu.classes[0] === "History" || stu.classes[1] === "History") &&
      stu.age > 14
  )
  .map((stu) => stu.name);
//   12. List all male students with marks below 80, displaying only their names and addresses.
const marksBelow80 = students
  .filter((stu) => stu.sex === "M" && stu.marks < 80)
  .map((stu) => ({
    name: stu.name,
    p: stu.address,
  }));

//   13. Identify students scoring above 90 and living in Delhi or Chennai.
const marksAbove90 = students
  .filter(
    (stu) =>
      stu.marks > 90 && (stu.address === "Delhi" || stu.address === "Chennai")
  )
  .map((stu) => stu.name);

//   14. Generate an array of names of students in "Science" class with marks above 85.
const sciClass = students
  .filter(
    (stu) =>
      (stu.classes[0] === "Science" || stu.classes[1] === "Science") &&
      stu.marks > 85
  )
  .map((stu) => stu.name);

//   15. Find all students who are 16 years old and taking "Math," showing their name, address, and classes.
const info = students
  .filter(
    (stu) =>
      stu.age === 16 &&
      (stu.classes[0] === "Math" || stu.classes[1] === "Maths")
  )
  .map((stu) => ({ a: stu.name, b: stu.address, c: stu.classes }));
console.log(info);

const container = document.createElement("div");
const mainHeading = document.createElement("h1");
mainHeading.innerText = "Student Questions";
const orderList = document.createElement("ol");
const mainFirstLi = document.createElement("li");
const firstLi = document.createElement("li");
const insideOl = document.createElement("ol");

const ques_Div = document.createElement("div");
const levelHeading = document.createElement("h3");
levelHeading.innerText = "Easy Level";
const para1 = document.createElement("p");
para1.innerText = "Print all the student names.";
para1.style.fontWeight = "normal";
const subPara1 = document.createElement("p");
subPara1.innerText = stdName;
subPara1.style.fontWeight = "normal";

document.body.appendChild(container);
container.appendChild(mainHeading);
container.appendChild(orderList);
orderList.appendChild(mainFirstLi);
mainFirstLi.appendChild(ques_Div);
ques_Div.appendChild(levelHeading);
levelHeading.appendChild(insideOl);
insideOl.appendChild(firstLi);
firstLi.appendChild(para1);
firstLi.appendChild(subPara1);

const secondLi = document.createElement("li");

const para2 = document.createElement("p");
const subPara2 = document.createElement("p");
para2.innerText = "Find all students aged 15 or older.";
para2.style.fontWeight = "normal";
subPara2.innerText = olderAge;
subPara2.style.fontWeight = "normal";
insideOl.appendChild(secondLi);
secondLi.appendChild(para2);
secondLi.appendChild(subPara2);

const thirdLi = document.createElement("li");
const para3 = document.createElement("p");
const subPara3 = document.createElement("p");
para3.innerText = "Find all students taking the Math class.";
para3.style.fontWeight = "normal";
subPara3.innerText = mathClass;
subPara3.style.fontWeight = "normal";
insideOl.appendChild(thirdLi);
thirdLi.appendChild(para3);
thirdLi.appendChild(subPara3);

const forthLi = document.createElement("li");
const para4 = document.createElement("p");
para4.innerText = "Create an array of students living in Mumbai or Delhi.";
para4.style.fontWeight = "normal";
const subPara4 = document.createElement("p");
subPara4.style.fontWeight = "normal";
subPara4.innerText = homePlace;
insideOl.appendChild(forthLi);
forthLi.appendChild(para4);
forthLi.appendChild(subPara4);

const fifthLi = document.createElement("li");
const para5 = document.createElement("p");
para5.innerText = "List students who scored more than 80 marks.";
para5.style.fontWeight = "normal";
const subPara5 = document.createElement("p");
subPara5.innerText = stdMarks;
subPara5.style.fontWeight = "normal";
insideOl.appendChild(fifthLi);
fifthLi.appendChild(para5);
fifthLi.appendChild(subPara5);

const mainSecondLi = document.createElement("li");
orderList.appendChild(mainSecondLi);
const mediumDiv = document.createElement("div");
const mediumHeading = document.createElement("h3");
mediumHeading.innerText = "Medium Level";
mainSecondLi.appendChild(mediumDiv);
mediumDiv.appendChild(mediumHeading);
const insideOl_2 = document.createElement("ol");
const sixthLi = document.createElement("li");
mediumDiv.appendChild(insideOl_2);
insideOl_2.appendChild(sixthLi);

const para6 = document.createElement("p");
para6.innerText = " Identify all female students scoring above 85";
const subPara6 = document.createElement("p");
subPara6.innerText = "Ans:- " + femaleMarks;
sixthLi.appendChild(para6);
sixthLi.appendChild(subPara6);

const seventhLi = document.createElement("li");
insideOl_2.appendChild(seventhLi);
const para7 = document.createElement("p");
const subPara7 = document.createElement("P");
para7.innerText = "Create a new array with student names and their marks.";
// subPara7.innerText = stdNameMarks;
subPara7.innerText = stdNameMarks;
seventhLi.appendChild(para7);
seventhLi.appendChild(subPara7);

const eightLi = document.createElement("li");
insideOl_2.appendChild(eightLi);
const para8 = document.createElement("p");
para8.innerText = "Find all students whose names start with the letter 'A' ";
const subPara8 = document.createElement("p");
subPara8.innerText = "Ans:- " + nameWithA;
eightLi.appendChild(para8);
eightLi.appendChild(subPara8);

const ninethLi = document.createElement("li");
insideOl_2.appendChild(ninethLi);
const para9 = document.createElement("p");
para9.innerText = " List students taking both 'Math' and 'Science' classes.";
const subPara9 = document.createElement("p");
subPara9.innerText = "Ans:- " + stdSubject;
ninethLi.appendChild(para9);
ninethLi.appendChild(subPara9);

const tenthLi = document.createElement("li");
insideOl_2.appendChild(tenthLi);
const para10 = document.createElement("p");
para10.innerText = " Find all students living in Pune with marks over 75.";
const subPara10 = document.createElement("p");
subPara10.innerText = stuCity;
tenthLi.appendChild(para10);
tenthLi.appendChild(subPara10);

const mainThirdLi = document.createElement("li");
orderList.appendChild(mainThirdLi);
const hardDiv = document.createElement("div");
const hardHeading = document.createElement("h3");
hardHeading.innerText = "Hard Level";
mainThirdLi.appendChild(hardDiv);
hardDiv.appendChild(hardHeading);
const insideOl_3 = document.createElement("ol");
hardDiv.appendChild(insideOl_3);
const eleventhLi = document.createElement("li");
insideOl_3.appendChild(eleventhLi);
const para11 = document.createElement("p");
const subPara11 = document.createElement("p");
para11.innerText =
  "Find students aged 14 and above who are taking 'History' class.";
subPara11.innerText = "Ans:- " + subHistory;
eleventhLi.appendChild(para11);
eleventhLi.appendChild(subPara11);

const twelveLi = document.createElement("li");
insideOl_3.appendChild(twelveLi);
const para12 = document.createElement("p");
para12.innerText =
  "List all male students with marks below 80, displaying only their names and addresses.";
twelveLi.appendChild(para12);
students.map((stu) => {
  if (stu.sex === "M" && stu.marks < 80) {
    const result = `${stu.name} ${stu.address} " `;
    const subPara12 = document.createElement("span");
    subPara12.innerText = result;
    twelveLi.appendChild(subPara12);
  }
});

const thirteenLi = document.createElement("li");
insideOl_3.appendChild(thirteenLi);
const para13 = document.createElement("p");
para13.innerText =
  "Identify students scoring above 90 and living in Delhi or Chennai.";
const subPara13 = document.createElement("p");
subPara13.innerText = marksAbove90;
thirteenLi.appendChild(para13);
thirteenLi.appendChild(subPara13);

const fourtheenLi = document.createElement("li");
insideOl_3.appendChild(fourtheenLi);
const para14 = document.createElement("p");
para14.innerText =
  "Generate an array of names of students in 'Science' class with marks above 85.";
const subPara14 = document.createElement("p");
subPara14.innerText = sciClass;
fourtheenLi.appendChild(para14);
fourtheenLi.appendChild(subPara14);

const fiftheenLi = document.createElement("li");
insideOl_3.appendChild(fiftheenLi);
const para15 = document.createElement("p");
para15.innerText =
  "Find all students who are 16 years old and taking 'Math,'' showing their name, address, and classes.";

fiftheenLi.appendChild(para15);
students.map((stu) => {
  if (
    stu.age === 16 &&
    (stu.classes[0] === "Math" || stu.classes[1] === "Maths")
  ) {
    const result = `${stu.name + "-"} ${stu.address + "-"} ${stu.classes}"  " `;
    const subPara15 = document.createElement("span");
    subPara15.innerText = result;
    fiftheenLi.appendChild(subPara15);
  }
});
// fiftheenLi.appendChild(subPara15);
