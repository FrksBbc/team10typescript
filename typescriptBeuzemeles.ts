var szam = 2;
szam = 4.4;
var szoveg: string = "2";
szoveg = "4.4";//Karakterláncként megadva fogadja el csak a szám értékeket a string típusú mező!
var logikai: boolean = true;
logikai = false;

//veszélyes!!! Ha JS szintaxissal akarunk dolgozni
var barmi: any = false;
barmi = "alma";
barmi = 5;
console.log(barmi + szam);
//Helyette használjuk az "unknown" ismeretlen típusú változót!
var ismeretlen: unknown = false;
ismeretlen = "alma";
ismeretlen = 5;
console.log(Number(ismeretlen) + szam);

//Tömbök létrehozása
var tombNeve: string[] = ["alma", "körte", "szilva", "barack"];
var szamok: number[] = [1, 5, 12, 21, 42, 13, 69, 99, 3];

//másik megoldási lehetőség
var jatekTipusok: Array<string> = ["fps", "tps", "startégia", "szimulátor", "túlélő", "sport"];
var szamok: number[] = [1, 5, 12, 21, 42, 13, 69, 99, 3];
var barmilyenAdatok: any[] = ["alma", 5, true];

//másik megoldási lehetőség:
var jatekTipusok: Array<string> = ["fps", "tps", "startégia", "szimulátor", "túlélő", "sport"];