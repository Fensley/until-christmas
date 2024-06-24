function Thetime() {
  const seconds = document.getElementById("seconds");
  const minutes = document.getElementById("minutes");
  const hours = document.getElementById("hours");
  const days = document.getElementById("days");

  const exp = setInterval(() => {
    const time = new Date("Dec 25, 2024").getTime();
    const now = new Date().getTime();
    const distance = time - now;

    const jour = Math.floor(distance / (1000 * 60 * 60 * 24));
    const le = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = jour;
    hours.innerHTML = le;
    seconds.innerHTML = sec;
    minutes.innerHTML = minit;

    if (distance < 1) {
      clearInterval(exp);
      days.innerHTML = "00";
      hours.innerHTML = "00";
      seconds.innerHTML = "00";
      minutes.innerHTML = "00";
      document.getElementById("passed").style.visibility = "visible";
    }
  }, 1000);
}
Thetime();
