(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.index={exports:{}}.exports}})(this,function(){"use strict";function a(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function b(b){return function(){var c=this,d=arguments;return new Promise(function(e,f){function g(b){a(i,e,f,g,h,"next",b)}function h(b){a(i,e,f,g,h,"throw",b)}var i=b.apply(c,d);g(void 0)})}}function c(a){return a.replace(/\B(?=(\d{2})+(?!\d))/g,",")}function d(){return e.apply(this,arguments)}// eslint-disable-next-line func-names
function e(){return e=b(function*(a,b){// eslint-disable-next-line prefer-const
let d,e,g=f.load(a);if(4>g("body").text().split("|").length)return Promise.resolve(JSON.stringify({err:"Resultado n\xE3o disponivel!",errCode:1}));if("megasena"===b)try{d=g("body").text().split("|"),e={numberRaffle:d[0],locationRaffle:`${d[14]},${d[12]},${d[13]}`,unorNumbers:c(d[2]),orderedNumbers:c(d[20]),date:d[11],totalCollection:d[24],// eslint-disable-next-line radix
isAccumulated:0<parseInt(d[3]),sena:{winers:d[3],prizeByWinner:d[4]},quina:{winers:d[5],prizeByWinner:d[6]},quadra:{winers:d[7],prizeByWinner:d[8]},nextRaffle:{date:d[22],estimatedPrize:d[21],accumulated:d[1]},accumulatedMegavirada:d[23]// eslint-disable-next-line semi
}}catch(a){return Promise.reject(JSON.stringify(a))}return Promise.resolve(JSON.stringify(e));// )
}),e.apply(this,arguments)}const f=require("cheerio"),g=require("request-promise");Object.defineProperty(exports,"__esModule",{value:!0}),exports.resultByNumber=/*#__PURE__*/function(){var a=b(function*(a,b){let c;if(b===void 0)try{return c=yield g(`http://www1.caixa.gov.br/loterias/loterias/${a}/${a}_pesquisa_new.asp`,{jar:!0,encoding:"utf8"}),yield d(c,a)}catch(a){return Promise.reject(JSON.stringify(a.error))}else try{return c=yield g(`http://www1.caixa.gov.br/loterias/loterias/${a}/${a}_pesquisa_new.asp?submeteu=sim&opcao=concurso&txtConcurso=${b}`,{jar:!0,encoding:"utf8"}),yield d(c,a)}catch(a){return Promise.reject(JSON.stringify(a.error))}// eslint-disable-next-line semi
});return function(){return a.apply(this,arguments)}}()});
//# sourceMappingURL=index.js.map