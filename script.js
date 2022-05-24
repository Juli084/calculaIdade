const input = require("fs").readFileSync("stdin", "utf8");

let qtdDias = parseInt(input);

let qtdAnos, qtdMeses;

qtdAnos = parseInt(qtdDias / 365 );
qtdDias = qtdDias % 365;

qtdMeses = parseInt(qtdDias / 30);
qtdDias = qtdDias % 30;

let resultado = `${qtdAnos} Ano(s)
${qtdMeses} Mes(es)
${qtdDias} Dia(s)`;

console.log(resultado);
