const body = document.body
const kotak = document.getElementById('kotak')
const konten = document.getElementById('konten')
const isiSurat = document.getElementById('isi-surat')
const btn = document.getElementById('tombol')
const atas = document.getElementById('top')
const cover = document.getElementById('cover')
const btn2 = document.getElementById('tombol2')

const img = document.createElement('img')
img.src = 'img/monyet.jpeg'

btn.addEventListener('click', () => {
    konten.classList.toggle('active')
    isiSurat.classList.toggle('active')
    atas.classList.toggle('active'); 
    cover.classList.toggle('active');
})

btn2.addEventListener('click', () => {
    body.classList.toggle('active')
    kotak.classList.toggle('active') 

    setTimeout(() => {
        body.appendChild(img)
    }, 1000)
})