var combinacion= function(id1,id2,resultadoid)
{
	this.id1=id1;
	this.id2=id2;
	this.R=resultadoid;
}
var elemento= function(name,type,img)
{
	this.name=name;
	this.type=type;
	this.img=img;
}

var elementos=new Array();
var eR="relleno.png";
var combinaciones=new Array();

elementos.push(new elemento("Fuego","fuego","fuego.png"));////id=0
elementos.push(new elemento("Agua","agua","agua.png"));//id=1
elementos.push(new elemento("Tierra","tierra","tierra.png"));//id=2
elementos.push(new elemento("Aire","aire","aire.png"));//id=3
elementos.push(new elemento("Lava","fuego","lava.png"));//id=4
elementos.push(new elemento("Piedra","tierra","Piedra.png"));//id=5
elementos.push(new elemento("Arena","tierra","arena.png"));//id=6
elementos.push(new elemento("Pantano","agua","Pantano.png"));//id=7
elementos.push(new elemento("Metal","metal","Metal.png"));//id=8
elementos.push(new elemento("Energia","energia","Energia.png"));//id=7
elementos.push(new elemento("Escoria","metal","Escoria.png"));//id=10
elementos.push(new elemento("Vida","vida","Vida.png"));//id=11
elementos.push(new elemento("Pasto","planta","Pasto.png"));//id=12
elementos.push(new elemento("Bacteria","vida","Bacteria.png"));//id=13
elementos.push(new elemento("Planckton","planta","plankton.png"));//id=14
elementos.push(new elemento("Alphons Elric","metal","Alphonse.png"));//id=15
elementos.push(new elemento("Hombre","vida","Hombre.png"));//id=16
elementos.push(new elemento("Herramienta","metal","Herramienta.png"));//id=17
elementos.push(new elemento("Campo de cultivo","tierra","campoDeCultivo.png"));//id=18
elementos.push(new elemento("Trigo","planta","Trigo.png"));//id=19
elementos.push(new elemento("Harina","planta","Harina.png"));//id=20
elementos.push(new elemento("Pan","comida","Pan.png"));//id=21
elementos.push(new elemento("Tostada","comida","Tostada.png"));//id=22
elementos.push(new elemento("Semilla","planta","Semilla.png"));//id=23
elementos.push(new elemento("Arbol","planta","Arbol.png"));//id=24
elementos.push(new elemento("Agricultor","vida","Agricultor.png"));//id=25
elementos.push(new elemento("Fruta","planta","Fruta.png"));//id=26
elementos.push(new elemento("Mermelada","comida","Mermelada.png"));//id=27
elementos.push(new elemento("Pop Tart","comida","PopTart.png"));//id=28
elementos.push(new elemento("Nyan Cat","dios","NyanCat.gif"));//id=29
elementos.push(new elemento("Madera","planta","Madera.png"));//id=30
elementos.push(new elemento("Presion","aire","Presion.png"));//id=31
elementos.push(new elemento("Papel","planta","Papel.png"));//id=32
elementos.push(new elemento("Lija","metal","Lija.png"));//id=33
elementos.push(new elemento("Espejo","metal","Espejo.png"));//id=34
elementos.push(new elemento("Fierrito de piaggio","metal","Piaggio.png"));//id=35
elementos.push(new elemento("Tac Nayn","dios","TacNayn.gif"));//id=36
elementos.push(new elemento("Big Bang","energia","BigBang.png"));//id=37
elementos.push(new elemento("Sheldon Cooper","dios","Sheldon.png"));//id=38
elementos.push(new elemento("Muse","Musica","Muse.png"));//id=39
elementos.push(new elemento("Muerte","no-vida","Muerte.png"));//id=40
elementos.push(new elemento("Cadaver","no-vida","Cadaver.png"));//id=41
elementos.push(new elemento("Zombie","no-vida","Zombie.png"));//id=42
elementos.push(new elemento("The Walking Dead","no-vida","TheWalkingDead.gif"));//id=43
elementos.push(new elemento("Vidrio","aire","Vidrio.png"));//id=44
elementos.push(new elemento("Silicio","metal","Silicio.png"));//id=45
elementos.push(new elemento("Electricidad","energia","Electricidad.png"));//id=46
elementos.push(new elemento("Transistor","metal","Transistor.png"));//id=47
elementos.push(new elemento("Microchip","metal","Microchip.png"));//id=48
elementos.push(new elemento("Foco","aire","Foco.png"));//id=49
elementos.push(new elemento("Luz","energia","Luz.jpg"));//id=50
elementos.push(new elemento("Mujer","vida","Mujer.png"));//id=51
elementos.push(new elemento("Sexo","amor","Sexo.png"));//id=52
elementos.push(new elemento("Universo","energia","Universo.png"));//id=53
elementos.push(new elemento("Atomo","energia","Atomo.png"));//id=54
elementos.push(new elemento("Flaco","vida","Flaco.png"));//id=55
elementos.push(new elemento("Gordo","vida","Gordo.png"));//id=56
elementos.push(new elemento("Cubito","vida","Cubo.png"));//id=57
elementos.push(new elemento("TV","metal","TV.png"));//id=58
elementos.push(new elemento("Computadora","metal","pc.png"));//id=59
elementos.push(new elemento("@hdf1986","no-vida","hdf1986.png"));//id=60
elementos.push(new elemento("Sonido","musica","Sonido.png"));//id=61
elementos.push(new elemento("Idea","vida","Idea.png"));//id=62
elementos.push(new elemento("Musica","musica","Musica.png"));//id=63
elementos.push(new elemento("Tortura","no-vida","Tortura.png"));//id=64
elementos.push(new elemento("Explosion","Explosion","Explosion.png"));
elementos.push(new elemento("Bala","Bala","Bala.png"));
elementos.push(new elemento("Arma","Arma","Arma.png"));
elementos.push(new elemento("Asesino","Asesino","asesino.png"));
elementos.push(new elemento("Assassins Creed","Assassins Creed","Assassins.png"));
elementos.push(new elemento("Quito","Quito","Quito.png"));
elementos.push(new elemento("Concha","Concha","Concha.png"));
elementos.push(new elemento("Caliza","Caliza","Caliza.png"));
elementos.push(new elemento("Arcilla","Arcilla","Arcilla.png"));
elementos.push(new elemento("Ladrillo","Ladrillo","Ladrillo.png"));
elementos.push(new elemento("Cemento","Cemento","Cemento.png"));
elementos.push(new elemento("Casa","Casa","Casa.png"));
elementos.push(new elemento("Edificio","Edificio","Edificio.png"));
elementos.push(new elemento("Ciudad","Ciudad","Ciudad.png"));
elementos.push(new elemento("Pais","Pais","Pais.png"));
elementos.push(new elemento("Cerveza","Cerveza","Cerveza.png"));
elementos.push(new elemento("Alemania","Alemania","Alemania.png"));
elementos.push(new elemento("Huevo","Huevo","Huevo.png"));
elementos.push(new elemento("Pajaro","Pajaro","Pajaro.png"));
elementos.push(new elemento("Pluma","Pluma","Plumas.png"));
elementos.push(new elemento("Libro","Libro","Libro.png"));
elementos.push(new elemento("Estudiante","Estudiante","Estudiante.png"));
elementos.push(new elemento("Colegio","Colegio","Colegio.png"));
elementos.push(new elemento("ETAM","ETAM","Etam.png"));
elementos.push(new elemento("Guitarra","Guitarra","Guitarra.png"));
elementos.push(new elemento("Guitarrista","Guitarrista","Guitarrista.png"));
elementos.push(new elemento("Matias Faggiano","Faggiano","Faggiano.png"));
elementos.push(new elemento("Benito Grande","Benito","Benito.png"));
elementos.push(new elemento("Guitar Hero","Guitar Hero","GuitarHero.png"));
elementos.push(new elemento("Continente","Continente",eR));
elementos.push(new elemento("Mundo","Mundo",eR));
elementos.push(new elemento("Sistema solar","Sistema solar",eR));
elementos.push(new elemento("Mar","Mar",eR));
combinaciones.push(new combinacion(1,1,[97]));//Mar
combinaciones.push(new combinacion(96,96,[53]));//Universo
combinaciones.push(new combinacion(95,95,[96]));//Sistema solar
combinaciones.push(new combinacion(94,94,[95]));//mundo
combinaciones.push(new combinacion(79,79,[94]));//Continente
combinaciones.push(new combinacion(91,92,[93]));//Guitar Hero
combinaciones.push(new combinacion(90,88,[91,92]));//Faggiano + Benito
combinaciones.push(new combinacion(89,16,[90]));//Guitarrista
combinaciones.push(new combinacion(30,63,[89]));//Guitarra
combinaciones.push(new combinacion(87,81,[88]));//ETAM
combinaciones.push(new combinacion(86,76,[87]));//Colegio
combinaciones.push(new combinacion(16,85,[86]));//Estudiante
combinaciones.push(new combinacion(84,32,[85]));//Libro
combinaciones.push(new combinacion(83,40,[84,41]));//Pluma
combinaciones.push(new combinacion(3,82,[83]));//Pajaro
combinaciones.push(new combinacion(11,5,[82]));//Huevo
combinaciones.push(new combinacion(79,80,[81]));//Alemania
combinaciones.push(new combinacion(1,19,[80]));//Cerveza
combinaciones.push(new combinacion(78,78,[79]));//Pais
combinaciones.push(new combinacion(77,77,[78]));//Ciudad
combinaciones.push(new combinacion(76,44,[77]));//Edificio
combinaciones.push(new combinacion(74,75,[76]));//Casa
combinaciones.push(new combinacion(72,73,[75]));//Cemento
combinaciones.push(new combinacion(73,0,[74]));//Ladrillo
combinaciones.push(new combinacion(6,7,[73]));//Arcilla
combinaciones.push(new combinacion(71,5,[72]));//Caliza
combinaciones.push(new combinacion(5,14,[71]));//Concha
combinaciones.push(new combinacion(0,2,[4]));//Lava
combinaciones.push(new combinacion(4,1,[5]));//Piedra
combinaciones.push(new combinacion(3,5,[6]));//Arena
combinaciones.push(new combinacion(2,1,[7]));//Pantano
combinaciones.push(new combinacion(5,0,[8,10]));//Escoria y Metal
combinaciones.push(new combinacion(0,0,[9]));//Energia
combinaciones.push(new combinacion(9,7,[11]));//Vida
combinaciones.push(new combinacion(11,2,[12]));//Pasto
combinaciones.push(new combinacion(11,7,[13]));//Bacteria
combinaciones.push(new combinacion(11,1,[14]));//Planckton
combinaciones.push(new combinacion(11,8,[15]));//Alphonse Elric
combinaciones.push(new combinacion(11,15,[16]));//Humano
combinaciones.push(new combinacion(16,8,[17]));//Herramienta
combinaciones.push(new combinacion(17,2,[18]));//Campo de cultivo
combinaciones.push(new combinacion(18,12,[19,23]));//Trigo y semilla
combinaciones.push(new combinacion(19,5,[20]));//Harina
combinaciones.push(new combinacion(20,0,[21]));//Pan
combinaciones.push(new combinacion(21,0,[22]));//Tostada
combinaciones.push(new combinacion(23,2,[24]));//Arbol
combinaciones.push(new combinacion(16,18,[25]));//Agricultor
combinaciones.push(new combinacion(25,24,[26]));//Fruta
combinaciones.push(new combinacion(26,1,[27]));//Mermelada
combinaciones.push(new combinacion(27,22,[28]));//PopTart
combinaciones.push(new combinacion(28,11,[29]));//Nyan cat
combinaciones.push(new combinacion(24,17,[30]));//Madera
combinaciones.push(new combinacion(3,0,[31]));//Presion
combinaciones.push(new combinacion(30,31,[32]));//Papel
combinaciones.push(new combinacion(32,5,[33]));//Lija
combinaciones.push(new combinacion(33,34,[35]));//fierrito de piaggio
combinaciones.push(new combinacion(33,8,[34]));//Espejo y fierrito de piaggio
combinaciones.push(new combinacion(34,29,[36]));//Tac Nayn
combinaciones.push(new combinacion(53,53,[37]));//Big bang
combinaciones.push(new combinacion(37,16,[38]));//Sheldon cooper
combinaciones.push(new combinacion(11,34,[40]));//Muerte
combinaciones.push(new combinacion(40,16,[41]));//Cadaver
combinaciones.push(new combinacion(41,11,[42]));//Zombie
combinaciones.push(new combinacion(42,42,[43]));//Invasion Zombie
combinaciones.push(new combinacion(6,0,[44]));//Vidrio
combinaciones.push(new combinacion(44,8,[45]));//Silicio
combinaciones.push(new combinacion(8,9,[46]));//Electricidad
combinaciones.push(new combinacion(45,46,[47]));//Transistor
combinaciones.push(new combinacion(47,47,[48]));//Microchip
combinaciones.push(new combinacion(44,8,[49]));//Foco
combinaciones.push(new combinacion(49,46,[50]));//Luz
combinaciones.push(new combinacion(16,34,[51]));//Mujer
combinaciones.push(new combinacion(16,51,[52]));//Sexo
combinaciones.push(new combinacion(9,9,[53]));//Universo
combinaciones.push(new combinacion(53,34,[54]));//Atomo
combinaciones.push(new combinacion(54,16,[55]));//Flaco
combinaciones.push(new combinacion(55,34,[56]));//Gordo
combinaciones.push(new combinacion(56,52,[57]));//Cubito
combinaciones.push(new combinacion(57,50,[58]));//Tv
combinaciones.push(new combinacion(58,48,[59]));//Computadora
combinaciones.push(new combinacion(59,42,[60]));//@HDF198
combinaciones.push(new combinacion(63,53,[39]));//Muse
combinaciones.push(new combinacion(8,3,[61]));//Sonido
combinaciones.push(new combinacion(16,49,[62]));//Idea
combinaciones.push(new combinacion(62,61,[63]));//Musica
combinaciones.push(new combinacion(63,29,[64]));//Tortura
combinaciones.push(new combinacion(29,36,[65]));//Explosion
combinaciones.push(new combinacion(65,8,[66]));//Bala
combinaciones.push(new combinacion(66,17,[67]));//Arma
combinaciones.push(new combinacion(16,67,[68]));//Asesino
combinaciones.push(new combinacion(68,68,[69]));//Assassins Creed
combinaciones.push(new combinacion(56,69,[70]));//Quito