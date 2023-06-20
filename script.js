window.addEventListener('scroll', function() {
  var div = document.getElementById('myDiv');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    div.classList.add('scrolled');
  } else {
    div.classList.remove('scrolled');
  }
});

function asagiKaydir1() {
  var iletişimBolgesi = document.getElementById("anaSayfa1");
  iletişimBolgesi.scrollIntoView({ behavior: "smooth" });
}


function asagiKaydir() {
  var iletişimBolgesi = document.getElementById("hakkimda1");
  iletişimBolgesi.scrollIntoView({ behavior: "smooth" });
}

function asagiKaydir2() {
  var iletişimBolgesi = document.getElementById("portfolio2");
  iletişimBolgesi.scrollIntoView({ behavior: "smooth" });
}

function asagiKaydir3() {
  var iletişimBolgesi = document.getElementById("iletisim3");
  iletişimBolgesi.scrollIntoView({ behavior: "smooth" });
}


var textArray = ["I'm Junior Software Developer", "I'm Designer", "I'm Student"]; // Metinlerinizi bir diziye ekleyin
var currentIndex = 0;

function changeText() {
  var myText = document.getElementById("myText");
  myText.innerHTML = ""; // Metni temizle

  var text = textArray[currentIndex];
  var charIndex = 0;
  var typingSpeed = 100; // Yazma hızı (ms)

  var typingInterval = setInterval(function() {
    myText.innerHTML += text.charAt(charIndex);
    charIndex++;
    if (charIndex >= text.length) {
      clearInterval(typingInterval);
      setTimeout(function() {
        currentIndex = (currentIndex + 1) % textArray.length;
        changeText();
      }, 2000); // 2 saniye bekleme süresi
    }
  }, typingSpeed);
}

changeText();





