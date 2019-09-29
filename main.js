fetch('https://api.github.com/users/jimenezprogrammer')
   .then(function(response) { //tcreate a funciton to remove the data,
      return response.json(); // we tell the computer that this data is called .json
    })
    .then(function(data) { //creates new funciton to console log the data
      
