console.log("%c" + "CSTKEi ALERT", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
// keiAlert('Data Berhasil Ditambahkan')
// keiAlert('Data Gagal Ditambahkan', 'cancel', 'bg-red-600')

function keiAlert(messege, icon='done', color='bg-blue-dark'){
    var oldAlt = document.getElementById("p1");
    var alt2 = document.getElementById("p2");
    if(document.body.contains(alt2)){

    }else if(document.body.contains(oldAlt)){
        document.body.innerHTML += '<div id="p2" class="animated-up absolute py-3 px-5 left-[75%] top-40 flex justify-between w-72 h-12 bg-red-600 rounded "><p class="text-white">Mohon lihat Pesan Diatas!</p><span class="material-symbols-outlined text-white">warning</span></div>'
        var box1 = document.getElementById('p2')
        setTimeout(() => {
            box1.classList.add("animated-down");
        }, 4000)
        setTimeout(() => {
            box1.remove();
        }, 5000)
    }else{
        document.body.innerHTML += '<div id="p1" class="animated-up absolute py-3 px-5 left-[75%] top-20 flex justify-between w-72 h-12 '+color+' rounded "><p class="text-white">'+messege+'</p><span class="material-symbols-outlined text-white">'+icon+'</span></div>'
        var box2 = document.getElementById('p1')
        setTimeout(() => {
            box2.classList.add("animated-down");
        }, 4000)
        setTimeout(() => {
            box2.remove();
        }, 5000)
    }
    var box1 = document.getElementById('p2')
    var box2 = document.getElementById('p1')
        setTimeout(() => {
            box1.classList.add("animated-down");
            box2.classList.add("animated-down");
        }, 4000)
        setTimeout(() => {
            box1.remove();
            box2.remove();
        }, 5000)
}
