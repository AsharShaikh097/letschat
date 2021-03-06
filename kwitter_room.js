var firebaseConfig = {
      apiKey: "AIzaSyDWbw2mzYFUy0WQjRD85Ik-gZY4w5qHUXw",
      authDomain: "kwitter-34c14.firebaseapp.com",
      databaseURL: "https://kwitter-34c14-default-rtdb.firebaseio.com",
      projectId: "kwitter-34c14",
      storageBucket: "kwitter-34c14.appspot.com",
      messagingSenderId: "16290637993",
      appId: "1:16290637993:web:27f8a18e028cea2715a1b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirect(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}