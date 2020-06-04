$(document).ready(function () {
  $('img').click(handleImageClick);
});
function handleImageClick() {
  console.log(this);
  let projectName = $(this).attr('data-project');
  let desc = getProjectDescription(projectName);
  console.log(desc);
  bootbox.dialog({
    message: `<div class="mb-3 text-center "><img
            class="image-fluid"
            src="./assets/${projectName}.jpg"
            alt="left-floating-image"
          /> </div>
          <div class="text-center blackText"><p class="mt-2">${desc}</p> </div>`,
    closeButton: true,
    onEscape: true,
    size: 'large',
  });
}

function getProjectDescription(projectName) {
  let projectDesc = '';
  switch (projectName) {
    case 'crimeApi':
      projectDesc = `A project built upon FBI's huge historic  <a href="https://crime-data-explorer.fr.cloud.gov/">Crime Database.</a>
          It let's you expore various type of crimes, filter them by selected metrics and reperents the data in the form of Graph 
          which are are built using <code>Chart.js</code>`;
      break;

    case 'gamatachi':
      projectDesc = `A simple online game which is kind of mix of Tomagtachi and Pokemon. You can interact with you pet and battle other user's pet.
          The project is built using <code>express, express-session, handlebars and passport.js</code> for authentication. It uses <code>MySQl</code> as the database and
          <code> Sequqlize </code> as the ORM to interact with the database`;
      break;

    case 'burgers':
      projectDesc = `A burger devouring Web-app made using <code> node js, MySQL, handlebars</code> in MVC pattern. The project is deployed on Heroku.`;
      break;

    case 'simplecalendar':
      projectDesc = `Simple daily calendar is where you can keep track of your daily tasks during the business hours.
       It uses browser's local storage to store your`;

    case 'weather':
      projectDesc = `A weather dashboard which lets user search for a city and displays current weather using openWeather api. It remembers your previously 
            searched cities and stores them in browser's local storagr. Uses <a href='https://openweathermap.org/api'>Open Weather Api</a> to get weather forecasts.`;
      break;

    case 'quiz':
      projectDesc = `A timed quiz with questions related to Javascript. Built using <code> HTML5, CSS, Javascript, and JQuery</code>.`;
      break;
  }
  let x = 2;
  return projectDesc;
}
