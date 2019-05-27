$("#square").click(function () {
  if ($(this).attr("src") == "assets/images/icons/check_box_outline_blank_black_20dp.png") {
    $(this).attr("src", "assets/images/icons/mark-check.png");
    $(".square").attr("src", "assets/images/icons/mark-check.png").css("opacity", "1.2");
    $(".tr").css('background', '#c2dbff');
  } else {
    $(this).attr("src", "assets/images/icons/check_box_outline_blank_black_20dp.png");
    $(".square").attr("src", "assets/images/icons/check_box_outline_blank_black_20dp.png").css("opacity", "0.2");
    $(".tr").css('background', '#ffffff');
  }
});

let months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
let emails = [{
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  }
];

const emailPreview = document.getElementsByClassName("email-list");

$("a.write-email").click(function () {
  $("section.new-message").removeClass("invisible");
});

$("li.new-message-close").click(function () {
  $("section.new-message").addClass("invisible");
});

$("label.search-email-box").click(function () {
  $(this).addClass("search-email-click");
  $("input.search-email").css("background-color", "white");
});

$("body").click(function (event) {
  if (!$("label.search-email-box").is(event.target) && !$("input.search-email").is(event.target)) {
    $("label.search-email-box").removeClass("search-email-click");
    $("input.search-email").css("background-color", "#f1f3f4");
  }
});

const users = [{
    nome: 'Mauricio',
    foto: 'assets/images/users/mauricio.jpeg',
    ultimaMensagem: 'Você: Funfa sim!',

  },
  {
    nome: 'Tejada',
    foto: 'assets/images/users/tejada.png',
    ultimaMensagem: 'Você: Sou backend :P',

  },
  {
    nome: 'Bean',
    foto: 'assets/images/users/bean.jpeg',
    ultimaMensagem: 'Você: Hello XD',
  }
]

function setChat(user) {
  $(".talk-hangout-name").text(user.nome);
}

let html = '';

users.forEach(user => {
  html += `
      <div class="hangout-talk-profile" onClick='setChat(${JSON.stringify(user)})'>
        <img src=${user.foto} title="User" alt="User" class="profile-photo" />
        <div class="hangout-users-info">
          <p class="profile-name">${user.nome}</p>
          <span class="profile-message">${user.ultimaMensagem}</span>
        </div>
      </div>
  `
})

const divContatos = document.getElementById('hangout-talk');
divContatos.innerHTML = html;

$("a.write-email").click(function () {

  $("section.new-message").removeClass("invisible");
});

$("li.new-message-close").click(function () {
  $("section.new-message").addClass("invisible");
});

$("label.search-email-box").click(function () {
  $(this).addClass("search-email-click");
  $("input.search-email").css('background-color', 'white');
});

$(".hangout-talk-profile").click(function () {
  $(".talk-hangout").removeClass("invisible");
});

$("li.new-message-close").click(function () {
  $(".talk-hangout").addClass("invisible");
});

let intervalEmail = window.setInterval(getNewEmail, 15000);
let intervalNewEmail = window.setInterval(getNewEmailHtml, 15000);

function getNewEmail() {
  let newEmail = {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: new Date()
  };
  emails.push(newEmail);
}

function getNewEmailHtml() {
  let htmlEmails = "";

  emails.sort(function (email1, email2) {
    return new Date(email2.date) - new Date(email1.date);
  });

  emails.forEach(function (email) {
    htmlEmails += `
        <tr class="email-font-size tr">
            <td class="checkbox-column">
              <img src="assets/images/icons/check_box_outline_blank_black_20dp.png" class="square"
                title="Checkbox" alt="checkbox">
            </td> 
            <td class="star-column">
              <img  src="assets/images/icons/star_border_black.png" title="Star"
                alt="star">
            </td>
            <td class="info-column">
            <span class="email-item">${email.name}</span>
          </td>
          <td class="info-column">
            <span class="email-item">${email.subject} - </span>
            <span class="email-item-info">${email.preview} </span>
          </td>
          <td class="info-column">
            <span class="email-item-time">${defineDateString(email.date)}</span>
          </td>
        </tr>`
  });
  emailPreview[0].innerHTML = htmlEmails;
}

function defineDateString(date) {
  let dateNow = new Date();
  let dateParsed = date.getTime();
  const diffTime = Math.abs(dateNow - dateParsed);
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  if (diffDays < 1) {
    if (date.getMinutes() < 10)
      return `${date.getHours()}:0${date.getMinutes()}`;
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  if (dateNow.getFullYear() == date.getFullYear()) return `${date.getDate()} de ${months[date.getMonth()]}`;
  return `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()}`;
}

getNewEmail();
getNewEmailHtml();

$("li.new-message-minimize").click(function(){
  $("section.new-message").addClass("invisible");
  $("section.minimize-new-message").removeClass("invisible");  
})

$("section.minimize-new-message").click(function(event) {

  if($("li.close-icon").is(event.target)) {
    $("section.minimize-new-message").addClass("invisible");
    $("section.new-message").addClass("invisible");
  }
  else{
    $("section.minimize-new-message").addClass("invisible");
    $("section.new-message").removeClass("invisible");
  }


});
