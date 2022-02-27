const isPaid = true;
const improvement = 90;

function enroll(callback) {
  if (isPaid) {
    setTimeout(() => {
      callback();
    }, 4000);
  } else {
    console.log("Need to pay first before accessing our course");
  }
}

function progress(callback) {
  if (improvement > 80) {
    setTimeout(() => {
      callback();
    }, 3000);
  } else {
    console.log(
      "You should focus on your course. Progress is not enough to get certificate."
    );
  }
}

function getCertificate() {
  setTimeout(() => {
    console.log("Your certificate is ready to print. Enjoy...");
  }, 2000);
}

enroll(() => {
  progress(getCertificate);
});
