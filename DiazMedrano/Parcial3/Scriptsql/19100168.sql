
create database NoControl_19100168;

use NoControl_19100168;

create table persona
(
    nombre varchar(30) not null,
    PrimerApellido varchar(30) not null,
    SegundoApellido varchar(30),
    Direccion varchar(60),
    Telefono int,
    ciudad varchar(30) not null,
    Estado varchar(30) not null,
    RFC varchar(30) not null,
    RazonSocial varchar(30) not null,
    TipoDocumento varchar(30) not null,
    IngresoMensual int not null,
    EgresoMensual int not null,
    Primary key(RFC)
);


insert into persona values('Alex', 'Diaz', 'Med', 'Padramo Juarez #1010', 19100168, 'Nuevo Laredo', 'Tamaulipas', 'DIMA1991',
'juridica', 'Venta de bienes', 3000, 2700);

insert into persona values('Alex', 'Marin', 'Rojas', 'Juarez #2010', 20100168, 'Nuevo Laredo', 'Tamaulipas', 'MARIN213',
'juridica', 'Adquisicion de materia', 3000, 2900);

insert into persona values('Ana', 'Sandobal', 'Jimenez', 'Azul carmen #1020', 21100938, 'Nuevo Laredo', 'Tamaulipas', 'SANA12',
'Notarial', 'Redaccion de testamento', 6000, 5700);

insert into persona values('Maria', 'Kalif', 'Gran', 'Penasco abasolo #192', 10183771, 'Nuevo Laredo', 'Tamaulipas', 'KALMAR120',
'Impuesto', 'Venta de bienes', 5000, 1700);