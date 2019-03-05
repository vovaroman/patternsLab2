import Main from './index';

window.onload = async function () {
    var x:any = document.getElementById('myCanvas');
    x.setAttribute('width',String(window.screen.width));
    x.setAttribute('height',String(window.screen.height));
    let main = new Main(x.getContext("2d"),window.screen.width, window.screen.height);
    await main.scene();
}

