// 1. what is context ?
// {obj} который владеет вызовом функции.
// расширяем возможности фу-и, в новых проектах редко используется.
// 2. when context is lost
// чаще всего теряются в коллбэках
// 3. how to fix context
// Fixed ()=> { } / bind( принудительно присваеваем контекст)

// console.log(this);

// function sayHi() {
//   console.log(`Hello ${this.userName}`);
// }

// const user = {
//   userName: 'Vlad',
// };

// task 1
// const sayHiBinded = sayHi.bind(user);

// sayHiBinded();

// timer task
// export
export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  // startTimer() {
  //   //========= old school ======
  //   // console.log(this.secondsPassed);
  //   // // input:callback,ms
  //   // // output: number(ID)
  //   // setInterval(
  //   //   function () {
  //   //     this.secondsPassed += 1;
  //   //     console.log(this.secondsPassed);
  //   //   }.bind(timer), // or  this
  //   //   1000,
  //   // );
  //   //==========================
  //
  // },

  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      console.log(this);
    }, 1000);
  },

  getTime() {
    const seconds = this.secondsPassed > 9 ? this.secondsPassed : `0${this.secondsPassed}`;
    if (seconds === 60) {
      return `${this.minsPassed}:00`;
    }
    return `${this.minsPassed}:${seconds}`;
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
    this.intervalId = null;
  },
};

// timer.startTimer();

// const func = timer.startTimer;
// func.call(timer);
