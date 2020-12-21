$(document).ready(function () {
  if (localStorage.getItem("theme") !== null) {
    switch (localStorage.getItem("theme")) {
      case "blue":
        $("body").get(0).style.setProperty("--main", "var(--blue)");
        break;

      case "green":
        $("body").get(0).style.setProperty("--main", "var(--green)");
        break;

      case "red":
        $("body").get(0).style.setProperty("--main", "var(--red)");
        break;

      default:
        break;
    }
  } else {
    console.log("empty");
  }

  // slider
  $(".bxslider").bxSlider({
    mode: "horizontal",
    captions: true,
    slideWidth: 1200,
    responsive: true,
    infiniteLoop: true,
    touchEnabled: true,
    speed: 500,
    pager: false,
    auto: true,
  });

  if (window.location.href.indexOf("index") > -1) {
    let posts = [
      {
        title: "Prueba",
        date: moment().format("dddd, MMMM Do YYYY"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officia fuga quaerat labore aut neque natus itaque accusantium, eum necessitatibus quia laudantium eligendi quas minima saepe distinctio delectus consequatur.Ad, sequi, quisquam possimus magni culpa nostrum deleniti consequuntur, iusto obcaecati molestiae nobis? A eligendi perspiciatis itaque blanditiis repudiandae perferendis quis nesciunt saepe, tenetur voluptatum similique aspernatur pariatur quo veritatis!",
      },
      {
        title: "Prueba 2",
        date: moment().format("dddd, MMMM Do YYYY"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officia fuga quaerat labore aut neque natus itaque accusantium, eum necessitatibus quia laudantium eligendi quas minima saepe distinctio delectus consequatur.Ad, sequi, quisquam possimus magni culpa nostrum deleniti consequuntur, iusto obcaecati molestiae nobis? A eligendi perspiciatis itaque blanditiis repudiandae perferendis quis nesciunt saepe, tenetur voluptatum similique aspernatur pariatur quo veritatis!",
      },
      {
        title: "Prueba 3",
        date: moment().format("dddd, MMMM Do YYYY"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officia fuga quaerat labore aut neque natus itaque accusantium, eum necessitatibus quia laudantium eligendi quas minima saepe distinctio delectus consequatur.Ad, sequi, quisquam possimus magni culpa nostrum deleniti consequuntur, iusto obcaecati molestiae nobis? A eligendi perspiciatis itaque blanditiis repudiandae perferendis quis nesciunt saepe, tenetur voluptatum similique aspernatur pariatur quo veritatis!",
      },
      {
        title: "Prueba 4",
        date: moment().format("dddd, MMMM Do YYYY"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officia fuga quaerat labore aut neque natus itaque accusantium, eum necessitatibus quia laudantium eligendi quas minima saepe distinctio delectus consequatur.Ad, sequi, quisquam possimus magni culpa nostrum deleniti consequuntur, iusto obcaecati molestiae nobis? A eligendi perspiciatis itaque blanditiis repudiandae perferendis quis nesciunt saepe, tenetur voluptatum similique aspernatur pariatur quo veritatis!",
      },
    ];

    posts.forEach((item, index) => {
      let post = `
              <article class="post">
                  <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>
                  <p>${item.content}</p>
                  <a href="#" class="btn-more">Read More</a>
              </article>
          `;

      $("#posts").append(post);
    });
  }

  $("#green").click(function () {
    $("body").get(0).style.setProperty("--main", "var(--green)");
    localStorage.setItem("theme", "green");
  });

  $("#blue").click(function () {
    $("body").get(0).style.setProperty("--main", "var(--blue)");
    localStorage.setItem("theme", "blue");
  });

  $("#red").click(function () {
    $("body").get(0).style.setProperty("--main", "var(--red)");
    localStorage.setItem("theme", "red");
  });

  // Go to top

  $("go-up").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $("#login form").submit(function (e) {
    e.preventDefault();
    let name = $("#form__name").val();
    localStorage.setItem("form__name", name);
    $("#form__name").val("");
    $("#form__email").val("");
    $("#form__psw").val("");
    let form__name = localStorage.getItem("form__name");
    let paragraphElement = $("#about p");
    paragraphElement.html("<strong>Welcome, " + form__name + "</strong><br>");
    paragraphElement.append('<p id="logout">Log Out</p>');
    $("#login").hide();
  });

  let form__name = localStorage.getItem("form__name");

  if (form__name != undefined || form__name != null) {
    let paragraphElement = $("#about p");
    paragraphElement.html("<strong>Welcome, " + form__name + "</strong><br>");
    paragraphElement.append('<p id="logout">Log Out</p>');
    $("#login").hide();
  }

  $("#logout").click(function () {
    localStorage.clear();
    document.location.reload(true);
  });

  if (window.location.href.indexOf("about") > -1) {
    $("#accordeon").accordion();
  }

  if (window.location.href.indexOf("clock") > -1) {
    setInterval(function() {
      let clock = moment().format("hh:mm:ss");
      $("#clock").html('<p>' + clock + '</p>');
    }, 1000)
  }

  if (window.location.href.indexOf("contact") > -1) {
    $('form input[name="birthdate"]').datepicker({
      dateFormat: 'dd/mm/yy'
    })
    $.validate({
      lang: 'en',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
    })
  }
});