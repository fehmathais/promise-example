const isMomHappy = true;

const willGetNewPhone = new Promise(
  (resolve, reject) => {
    if (isMomHappy) {
      var phone = {
        brand: 'Samsung',
        color: 'black'
      };
      resolve(phone);
    } else {
      var reason = new Error('mom is not happy');
      reject(reason);
    }
  }
)

const showOff = function (phone) {
  return new Promise(
    (resolve, reject) => {
      var message = 'Hey friend, I have a new ' + phone.color + ' phone.';
      resolve(message);
    }
  )
}

async function askMom () {
  try {
    console.log('before asking Mom');

    let phone = await willGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
  } catch (err) {
    console.log(err)
  }
}

(async () => {
  await askMom();
})();
