const btn = document.getElementById('btn');
const container = document.getElementById('notification')
btn.addEventListener('click',()=>{
    createNotification();
})

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
        notif.innerText = "this is creazy challenge !!"
        notification.appendChild(notif);
    setTimeout(() => {
        notif.remove();
        }, 3000)
}

