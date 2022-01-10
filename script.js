var learnersList = document.getElementById("learners");
let learners = [
  "Amanda",
  "Emihle",
  "Ashton",
  "Lilitha",
  "Manicia",
  "Coco",
  "Jack",
  "Simthembile",
  "Kagiso",
  "Fatima",
  "Nande",
  "Siyanda",
  "Onesimo",
  "Sive",
  "Aza",
];

// count length of learners//
countLearners = (data) => {
  var count = document.getElementById("counter");

  if (data) {
    count.innerHTML = "There are a total of " + data + " learners";
  } else {
    count.innerHTML = "No learner";
    document.getElementById("name").style.display = "none";
  }
};

getLearners = () => {
  var data = "";
  if (learners.length > 0) {
    for (i = 0; i < learners.length; i++) {
      data += "<tr>";
      data += "<td>" + learners[i] + "</td>";
      data += '<td><button onclick="editlearners(' + i + ')">Edit</button></td>';
      data +=
        '<td><button onclick="deletelearners(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
  }

  countLearners(learners.length);
  return (learnersList.innerHTML = data);
};

addLearners = () =>{
    var learnerAdded = document.getElementById("add-name");
    var learners = learnerAdded.value;
    if (learners){
        learners.push(learners.trim());
        // Reset input value
        learnersAdded.value = "";
        // Dislay the new list
        getlearners();
    }
};



// Update: PUT
editlearners = (item) => {
    var editLearner = document.getElementById("edit-name");
    // Display value in the field
    editlearners.value = learners[item];
    // Display fields
    document.getElementById("editList").style.display = "block";
  
    document.getElementById("saveEdit").onsubmit = () => {
      // Get value
      var learner = editLearners.value;
      if (learners) {
        // editlearners value
        learners.splice(item, 1, learners.trim());
        // Display the new list
        getlearners();
        // Hide fields
        closeInput();
      }
    };
  };
  // Delete: Delete
  deleteLearners = (item) => {
    // deletelearners the current row
    learners.splice(item, 1);
    // Display the new list
    getLearners();
  };
  
  getLearners();
  
  closeInput = () => {
    document.getElementById("editList").style.display = "none";
  };
  
  console.log(learners);