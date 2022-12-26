# MyLibrary
MyLibrary adalah aplikasi berbasis web untuk mempermudah transaksi peminjaman buku di perpustakaan dan bentuk digitalisasi data untuk perpustakaan


# Commands Sequelize:
> Script DB

> Books
>> npx sequelize-cli model:generate --name Books --attributes "author:string,title:string,price:integer,availability:boolean"

> Publisher
>> npx sequelize-cli model:generate --name Publisher --attributes "name:string,address:string"

> Member
>> npx sequelize-cli model:generate --name Member --attributes "name:string,address:string,booksId:integer"

> PublishedBy
>> npx sequelize-cli model:generate --name PublishedBy --attributes "publisherId:integer,booksId:integer,releaseDate:date"