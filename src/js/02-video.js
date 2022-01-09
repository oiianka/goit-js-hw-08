const iframe = document.querySelector('iframe');
const vimeoPlayer = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';


vimeoPlayer.on(
  'timeupdate',
  throttle(() => {
    vimeoPlayer.getCurrentTime().then(function (timeRemember) {
      localStorage.setItem('videoplayer-current-time', timeRemember);
    });
  }, 1000),
);

vimeoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);


// Ознакомься с документацией библиотеки Vimeo плеера.
// Добавь библиотеку как зависимость проекта через npm.
// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но 
// учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление 
// времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет 
// строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить 
// воспроизведение с сохраненной позиции.
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения 
// обновлялось в хранилище не чаще чем раз в секунду.