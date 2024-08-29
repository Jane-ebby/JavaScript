// $("h1").text("Good Bye")
// $("a").attr("href", "https://www.bing.com")

$("h1").addClass("big-title")

// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "purple"
//     })

// }


// $("button").click(function () {
//     $("h1").css("color", "purple");
// });


// $("input").keypress(function (event) {
//     $("h1").text(event.key)
// })


$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

