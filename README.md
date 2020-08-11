# cocktail
Coba lakukan beberapa perbaikan berikut,

1. Di file <b>webpack.common.js</b> pada penulisan property <i>entry point</i> coba diperbaiki juga menjadi  <code>entry: "./src/index.js"</code>
2. Di file <b>index.js</b> pada <i>line 27</i> dihapus saja
3. Di file <b>index.js</b> pada <i>line 121</i> coba dirubah seperti ini  <code>this.innerHTML = `<h3>Jl. Raya Desa Sudimampir Blok Letok</h3>`</code>
4. Di file <b>index.js</b> pada <i>line 3</i> untuk mengimport cssnya coba diperbaiki seperti ini  <code>import './style.css</code>
5. Lakukan beberapa perubahan pada <b>index.html</b> dan <b>style.css</b> seperti pada contoh link di bawah
6. Lakukan juga perbaikan pada configurasi webpack di file <b>webpack.common.js</b> dan <b>webpack.prod.js</b> seperti pada link di bawah
7. Pindahkan folder <b>image</b> ke dalam folder <b>src</b>
8. Gunakan plugin <b>copy-webpack-plugin</b> supaya saat di build file image juga ikut terbuild ke folder <b>dist</b>
