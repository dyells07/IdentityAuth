(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/forms'), require('rxjs'), require('ngx-bootstrap/component-loader'), require('rxjs/operators'), require('@angular/common'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/typeahead', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/forms', 'rxjs', 'ngx-bootstrap/component-loader', 'rxjs/operators', '@angular/common', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].typeahead = {}),global.ng.core,global.utils,global.ng.forms,global.rxjs,global.componentLoader,global.rxjs.operators,global.ng.common,global.positioning));
}(this, (function (exports,core,utils,forms,rxjs,componentLoader,operators,common,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /* tslint:disable */
    var /** @type {?} */ latinMap = {
        'Á': 'A',
        'Ă': 'A',
        'Ắ': 'A',
        'Ặ': 'A',
        'Ằ': 'A',
        'Ẳ': 'A',
        'Ẵ': 'A',
        'Ǎ': 'A',
        'Â': 'A',
        'Ấ': 'A',
        'Ậ': 'A',
        'Ầ': 'A',
        'Ẩ': 'A',
        'Ẫ': 'A',
        'Ä': 'A',
        'Ǟ': 'A',
        'Ȧ': 'A',
        'Ǡ': 'A',
        'Ạ': 'A',
        'Ȁ': 'A',
        'À': 'A',
        'Ả': 'A',
        'Ȃ': 'A',
        'Ā': 'A',
        'Ą': 'A',
        'Å': 'A',
        'Ǻ': 'A',
        'Ḁ': 'A',
        'Ⱥ': 'A',
        'Ã': 'A',
        'Ꜳ': 'AA',
        'Æ': 'AE',
        'Ǽ': 'AE',
        'Ǣ': 'AE',
        'Ꜵ': 'AO',
        'Ꜷ': 'AU',
        'Ꜹ': 'AV',
        'Ꜻ': 'AV',
        'Ꜽ': 'AY',
        'Ḃ': 'B',
        'Ḅ': 'B',
        'Ɓ': 'B',
        'Ḇ': 'B',
        'Ƀ': 'B',
        'Ƃ': 'B',
        'Ć': 'C',
        'Č': 'C',
        'Ç': 'C',
        'Ḉ': 'C',
        'Ĉ': 'C',
        'Ċ': 'C',
        'Ƈ': 'C',
        'Ȼ': 'C',
        'Ď': 'D',
        'Ḑ': 'D',
        'Ḓ': 'D',
        'Ḋ': 'D',
        'Ḍ': 'D',
        'Ɗ': 'D',
        'Ḏ': 'D',
        'ǲ': 'D',
        'ǅ': 'D',
        'Đ': 'D',
        'Ƌ': 'D',
        'Ǳ': 'DZ',
        'Ǆ': 'DZ',
        'É': 'E',
        'Ĕ': 'E',
        'Ě': 'E',
        'Ȩ': 'E',
        'Ḝ': 'E',
        'Ê': 'E',
        'Ế': 'E',
        'Ệ': 'E',
        'Ề': 'E',
        'Ể': 'E',
        'Ễ': 'E',
        'Ḙ': 'E',
        'Ë': 'E',
        'Ė': 'E',
        'Ẹ': 'E',
        'Ȅ': 'E',
        'È': 'E',
        'Ẻ': 'E',
        'Ȇ': 'E',
        'Ē': 'E',
        'Ḗ': 'E',
        'Ḕ': 'E',
        'Ę': 'E',
        'Ɇ': 'E',
        'Ẽ': 'E',
        'Ḛ': 'E',
        'Ꝫ': 'ET',
        'Ḟ': 'F',
        'Ƒ': 'F',
        'Ǵ': 'G',
        'Ğ': 'G',
        'Ǧ': 'G',
        'Ģ': 'G',
        'Ĝ': 'G',
        'Ġ': 'G',
        'Ɠ': 'G',
        'Ḡ': 'G',
        'Ǥ': 'G',
        'Ḫ': 'H',
        'Ȟ': 'H',
        'Ḩ': 'H',
        'Ĥ': 'H',
        'Ⱨ': 'H',
        'Ḧ': 'H',
        'Ḣ': 'H',
        'Ḥ': 'H',
        'Ħ': 'H',
        'Í': 'I',
        'Ĭ': 'I',
        'Ǐ': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ḯ': 'I',
        'İ': 'I',
        'Ị': 'I',
        'Ȉ': 'I',
        'Ì': 'I',
        'Ỉ': 'I',
        'Ȋ': 'I',
        'Ī': 'I',
        'Į': 'I',
        'Ɨ': 'I',
        'Ĩ': 'I',
        'Ḭ': 'I',
        'Ꝺ': 'D',
        'Ꝼ': 'F',
        'Ᵹ': 'G',
        'Ꞃ': 'R',
        'Ꞅ': 'S',
        'Ꞇ': 'T',
        'Ꝭ': 'IS',
        'Ĵ': 'J',
        'Ɉ': 'J',
        'Ḱ': 'K',
        'Ǩ': 'K',
        'Ķ': 'K',
        'Ⱪ': 'K',
        'Ꝃ': 'K',
        'Ḳ': 'K',
        'Ƙ': 'K',
        'Ḵ': 'K',
        'Ꝁ': 'K',
        'Ꝅ': 'K',
        'Ĺ': 'L',
        'Ƚ': 'L',
        'Ľ': 'L',
        'Ļ': 'L',
        'Ḽ': 'L',
        'Ḷ': 'L',
        'Ḹ': 'L',
        'Ⱡ': 'L',
        'Ꝉ': 'L',
        'Ḻ': 'L',
        'Ŀ': 'L',
        'Ɫ': 'L',
        'ǈ': 'L',
        'Ł': 'L',
        'Ǉ': 'LJ',
        'Ḿ': 'M',
        'Ṁ': 'M',
        'Ṃ': 'M',
        'Ɱ': 'M',
        'Ń': 'N',
        'Ň': 'N',
        'Ņ': 'N',
        'Ṋ': 'N',
        'Ṅ': 'N',
        'Ṇ': 'N',
        'Ǹ': 'N',
        'Ɲ': 'N',
        'Ṉ': 'N',
        'Ƞ': 'N',
        'ǋ': 'N',
        'Ñ': 'N',
        'Ǌ': 'NJ',
        'Ó': 'O',
        'Ŏ': 'O',
        'Ǒ': 'O',
        'Ô': 'O',
        'Ố': 'O',
        'Ộ': 'O',
        'Ồ': 'O',
        'Ổ': 'O',
        'Ỗ': 'O',
        'Ö': 'O',
        'Ȫ': 'O',
        'Ȯ': 'O',
        'Ȱ': 'O',
        'Ọ': 'O',
        'Ő': 'O',
        'Ȍ': 'O',
        'Ò': 'O',
        'Ỏ': 'O',
        'Ơ': 'O',
        'Ớ': 'O',
        'Ợ': 'O',
        'Ờ': 'O',
        'Ở': 'O',
        'Ỡ': 'O',
        'Ȏ': 'O',
        'Ꝋ': 'O',
        'Ꝍ': 'O',
        'Ō': 'O',
        'Ṓ': 'O',
        'Ṑ': 'O',
        'Ɵ': 'O',
        'Ǫ': 'O',
        'Ǭ': 'O',
        'Ø': 'O',
        'Ǿ': 'O',
        'Õ': 'O',
        'Ṍ': 'O',
        'Ṏ': 'O',
        'Ȭ': 'O',
        'Ƣ': 'OI',
        'Ꝏ': 'OO',
        'Ɛ': 'E',
        'Ɔ': 'O',
        'Ȣ': 'OU',
        'Ṕ': 'P',
        'Ṗ': 'P',
        'Ꝓ': 'P',
        'Ƥ': 'P',
        'Ꝕ': 'P',
        'Ᵽ': 'P',
        'Ꝑ': 'P',
        'Ꝙ': 'Q',
        'Ꝗ': 'Q',
        'Ŕ': 'R',
        'Ř': 'R',
        'Ŗ': 'R',
        'Ṙ': 'R',
        'Ṛ': 'R',
        'Ṝ': 'R',
        'Ȑ': 'R',
        'Ȓ': 'R',
        'Ṟ': 'R',
        'Ɍ': 'R',
        'Ɽ': 'R',
        'Ꜿ': 'C',
        'Ǝ': 'E',
        'Ś': 'S',
        'Ṥ': 'S',
        'Š': 'S',
        'Ṧ': 'S',
        'Ş': 'S',
        'Ŝ': 'S',
        'Ș': 'S',
        'Ṡ': 'S',
        'Ṣ': 'S',
        'Ṩ': 'S',
        'Ť': 'T',
        'Ţ': 'T',
        'Ṱ': 'T',
        'Ț': 'T',
        'Ⱦ': 'T',
        'Ṫ': 'T',
        'Ṭ': 'T',
        'Ƭ': 'T',
        'Ṯ': 'T',
        'Ʈ': 'T',
        'Ŧ': 'T',
        'Ɐ': 'A',
        'Ꞁ': 'L',
        'Ɯ': 'M',
        'Ʌ': 'V',
        'Ꜩ': 'TZ',
        'Ú': 'U',
        'Ŭ': 'U',
        'Ǔ': 'U',
        'Û': 'U',
        'Ṷ': 'U',
        'Ü': 'U',
        'Ǘ': 'U',
        'Ǚ': 'U',
        'Ǜ': 'U',
        'Ǖ': 'U',
        'Ṳ': 'U',
        'Ụ': 'U',
        'Ű': 'U',
        'Ȕ': 'U',
        'Ù': 'U',
        'Ủ': 'U',
        'Ư': 'U',
        'Ứ': 'U',
        'Ự': 'U',
        'Ừ': 'U',
        'Ử': 'U',
        'Ữ': 'U',
        'Ȗ': 'U',
        'Ū': 'U',
        'Ṻ': 'U',
        'Ų': 'U',
        'Ů': 'U',
        'Ũ': 'U',
        'Ṹ': 'U',
        'Ṵ': 'U',
        'Ꝟ': 'V',
        'Ṿ': 'V',
        'Ʋ': 'V',
        'Ṽ': 'V',
        'Ꝡ': 'VY',
        'Ẃ': 'W',
        'Ŵ': 'W',
        'Ẅ': 'W',
        'Ẇ': 'W',
        'Ẉ': 'W',
        'Ẁ': 'W',
        'Ⱳ': 'W',
        'Ẍ': 'X',
        'Ẋ': 'X',
        'Ý': 'Y',
        'Ŷ': 'Y',
        'Ÿ': 'Y',
        'Ẏ': 'Y',
        'Ỵ': 'Y',
        'Ỳ': 'Y',
        'Ƴ': 'Y',
        'Ỷ': 'Y',
        'Ỿ': 'Y',
        'Ȳ': 'Y',
        'Ɏ': 'Y',
        'Ỹ': 'Y',
        'Ź': 'Z',
        'Ž': 'Z',
        'Ẑ': 'Z',
        'Ⱬ': 'Z',
        'Ż': 'Z',
        'Ẓ': 'Z',
        'Ȥ': 'Z',
        'Ẕ': 'Z',
        'Ƶ': 'Z',
        'Ĳ': 'IJ',
        'Œ': 'OE',
        'ᴀ': 'A',
        'ᴁ': 'AE',
        'ʙ': 'B',
        'ᴃ': 'B',
        'ᴄ': 'C',
        'ᴅ': 'D',
        'ᴇ': 'E',
        'ꜰ': 'F',
        'ɢ': 'G',
        'ʛ': 'G',
        'ʜ': 'H',
        'ɪ': 'I',
        'ʁ': 'R',
        'ᴊ': 'J',
        'ᴋ': 'K',
        'ʟ': 'L',
        'ᴌ': 'L',
        'ᴍ': 'M',
        'ɴ': 'N',
        'ᴏ': 'O',
        'ɶ': 'OE',
        'ᴐ': 'O',
        'ᴕ': 'OU',
        'ᴘ': 'P',
        'ʀ': 'R',
        'ᴎ': 'N',
        'ᴙ': 'R',
        'ꜱ': 'S',
        'ᴛ': 'T',
        'ⱻ': 'E',
        'ᴚ': 'R',
        'ᴜ': 'U',
        'ᴠ': 'V',
        'ᴡ': 'W',
        'ʏ': 'Y',
        'ᴢ': 'Z',
        'á': 'a',
        'ă': 'a',
        'ắ': 'a',
        'ặ': 'a',
        'ằ': 'a',
        'ẳ': 'a',
        'ẵ': 'a',
        'ǎ': 'a',
        'â': 'a',
        'ấ': 'a',
        'ậ': 'a',
        'ầ': 'a',
        'ẩ': 'a',
        'ẫ': 'a',
        'ä': 'a',
        'ǟ': 'a',
        'ȧ': 'a',
        'ǡ': 'a',
        'ạ': 'a',
        'ȁ': 'a',
        'à': 'a',
        'ả': 'a',
        'ȃ': 'a',
        'ā': 'a',
        'ą': 'a',
        'ᶏ': 'a',
        'ẚ': 'a',
        'å': 'a',
        'ǻ': 'a',
        'ḁ': 'a',
        'ⱥ': 'a',
        'ã': 'a',
        'ꜳ': 'aa',
        'æ': 'ae',
        'ǽ': 'ae',
        'ǣ': 'ae',
        'ꜵ': 'ao',
        'ꜷ': 'au',
        'ꜹ': 'av',
        'ꜻ': 'av',
        'ꜽ': 'ay',
        'ḃ': 'b',
        'ḅ': 'b',
        'ɓ': 'b',
        'ḇ': 'b',
        'ᵬ': 'b',
        'ᶀ': 'b',
        'ƀ': 'b',
        'ƃ': 'b',
        'ɵ': 'o',
        'ć': 'c',
        'č': 'c',
        'ç': 'c',
        'ḉ': 'c',
        'ĉ': 'c',
        'ɕ': 'c',
        'ċ': 'c',
        'ƈ': 'c',
        'ȼ': 'c',
        'ď': 'd',
        'ḑ': 'd',
        'ḓ': 'd',
        'ȡ': 'd',
        'ḋ': 'd',
        'ḍ': 'd',
        'ɗ': 'd',
        'ᶑ': 'd',
        'ḏ': 'd',
        'ᵭ': 'd',
        'ᶁ': 'd',
        'đ': 'd',
        'ɖ': 'd',
        'ƌ': 'd',
        'ı': 'i',
        'ȷ': 'j',
        'ɟ': 'j',
        'ʄ': 'j',
        'ǳ': 'dz',
        'ǆ': 'dz',
        'é': 'e',
        'ĕ': 'e',
        'ě': 'e',
        'ȩ': 'e',
        'ḝ': 'e',
        'ê': 'e',
        'ế': 'e',
        'ệ': 'e',
        'ề': 'e',
        'ể': 'e',
        'ễ': 'e',
        'ḙ': 'e',
        'ë': 'e',
        'ė': 'e',
        'ẹ': 'e',
        'ȅ': 'e',
        'è': 'e',
        'ẻ': 'e',
        'ȇ': 'e',
        'ē': 'e',
        'ḗ': 'e',
        'ḕ': 'e',
        'ⱸ': 'e',
        'ę': 'e',
        'ᶒ': 'e',
        'ɇ': 'e',
        'ẽ': 'e',
        'ḛ': 'e',
        'ꝫ': 'et',
        'ḟ': 'f',
        'ƒ': 'f',
        'ᵮ': 'f',
        'ᶂ': 'f',
        'ǵ': 'g',
        'ğ': 'g',
        'ǧ': 'g',
        'ģ': 'g',
        'ĝ': 'g',
        'ġ': 'g',
        'ɠ': 'g',
        'ḡ': 'g',
        'ᶃ': 'g',
        'ǥ': 'g',
        'ḫ': 'h',
        'ȟ': 'h',
        'ḩ': 'h',
        'ĥ': 'h',
        'ⱨ': 'h',
        'ḧ': 'h',
        'ḣ': 'h',
        'ḥ': 'h',
        'ɦ': 'h',
        'ẖ': 'h',
        'ħ': 'h',
        'ƕ': 'hv',
        'í': 'i',
        'ĭ': 'i',
        'ǐ': 'i',
        'î': 'i',
        'ï': 'i',
        'ḯ': 'i',
        'ị': 'i',
        'ȉ': 'i',
        'ì': 'i',
        'ỉ': 'i',
        'ȋ': 'i',
        'ī': 'i',
        'į': 'i',
        'ᶖ': 'i',
        'ɨ': 'i',
        'ĩ': 'i',
        'ḭ': 'i',
        'ꝺ': 'd',
        'ꝼ': 'f',
        'ᵹ': 'g',
        'ꞃ': 'r',
        'ꞅ': 's',
        'ꞇ': 't',
        'ꝭ': 'is',
        'ǰ': 'j',
        'ĵ': 'j',
        'ʝ': 'j',
        'ɉ': 'j',
        'ḱ': 'k',
        'ǩ': 'k',
        'ķ': 'k',
        'ⱪ': 'k',
        'ꝃ': 'k',
        'ḳ': 'k',
        'ƙ': 'k',
        'ḵ': 'k',
        'ᶄ': 'k',
        'ꝁ': 'k',
        'ꝅ': 'k',
        'ĺ': 'l',
        'ƚ': 'l',
        'ɬ': 'l',
        'ľ': 'l',
        'ļ': 'l',
        'ḽ': 'l',
        'ȴ': 'l',
        'ḷ': 'l',
        'ḹ': 'l',
        'ⱡ': 'l',
        'ꝉ': 'l',
        'ḻ': 'l',
        'ŀ': 'l',
        'ɫ': 'l',
        'ᶅ': 'l',
        'ɭ': 'l',
        'ł': 'l',
        'ǉ': 'lj',
        'ſ': 's',
        'ẜ': 's',
        'ẛ': 's',
        'ẝ': 's',
        'ḿ': 'm',
        'ṁ': 'm',
        'ṃ': 'm',
        'ɱ': 'm',
        'ᵯ': 'm',
        'ᶆ': 'm',
        'ń': 'n',
        'ň': 'n',
        'ņ': 'n',
        'ṋ': 'n',
        'ȵ': 'n',
        'ṅ': 'n',
        'ṇ': 'n',
        'ǹ': 'n',
        'ɲ': 'n',
        'ṉ': 'n',
        'ƞ': 'n',
        'ᵰ': 'n',
        'ᶇ': 'n',
        'ɳ': 'n',
        'ñ': 'n',
        'ǌ': 'nj',
        'ó': 'o',
        'ŏ': 'o',
        'ǒ': 'o',
        'ô': 'o',
        'ố': 'o',
        'ộ': 'o',
        'ồ': 'o',
        'ổ': 'o',
        'ỗ': 'o',
        'ö': 'o',
        'ȫ': 'o',
        'ȯ': 'o',
        'ȱ': 'o',
        'ọ': 'o',
        'ő': 'o',
        'ȍ': 'o',
        'ò': 'o',
        'ỏ': 'o',
        'ơ': 'o',
        'ớ': 'o',
        'ợ': 'o',
        'ờ': 'o',
        'ở': 'o',
        'ỡ': 'o',
        'ȏ': 'o',
        'ꝋ': 'o',
        'ꝍ': 'o',
        'ⱺ': 'o',
        'ō': 'o',
        'ṓ': 'o',
        'ṑ': 'o',
        'ǫ': 'o',
        'ǭ': 'o',
        'ø': 'o',
        'ǿ': 'o',
        'õ': 'o',
        'ṍ': 'o',
        'ṏ': 'o',
        'ȭ': 'o',
        'ƣ': 'oi',
        'ꝏ': 'oo',
        'ɛ': 'e',
        'ᶓ': 'e',
        'ɔ': 'o',
        'ᶗ': 'o',
        'ȣ': 'ou',
        'ṕ': 'p',
        'ṗ': 'p',
        'ꝓ': 'p',
        'ƥ': 'p',
        'ᵱ': 'p',
        'ᶈ': 'p',
        'ꝕ': 'p',
        'ᵽ': 'p',
        'ꝑ': 'p',
        'ꝙ': 'q',
        'ʠ': 'q',
        'ɋ': 'q',
        'ꝗ': 'q',
        'ŕ': 'r',
        'ř': 'r',
        'ŗ': 'r',
        'ṙ': 'r',
        'ṛ': 'r',
        'ṝ': 'r',
        'ȑ': 'r',
        'ɾ': 'r',
        'ᵳ': 'r',
        'ȓ': 'r',
        'ṟ': 'r',
        'ɼ': 'r',
        'ᵲ': 'r',
        'ᶉ': 'r',
        'ɍ': 'r',
        'ɽ': 'r',
        'ↄ': 'c',
        'ꜿ': 'c',
        'ɘ': 'e',
        'ɿ': 'r',
        'ś': 's',
        'ṥ': 's',
        'š': 's',
        'ṧ': 's',
        'ş': 's',
        'ŝ': 's',
        'ș': 's',
        'ṡ': 's',
        'ṣ': 's',
        'ṩ': 's',
        'ʂ': 's',
        'ᵴ': 's',
        'ᶊ': 's',
        'ȿ': 's',
        'ɡ': 'g',
        'ᴑ': 'o',
        'ᴓ': 'o',
        'ᴝ': 'u',
        'ť': 't',
        'ţ': 't',
        'ṱ': 't',
        'ț': 't',
        'ȶ': 't',
        'ẗ': 't',
        'ⱦ': 't',
        'ṫ': 't',
        'ṭ': 't',
        'ƭ': 't',
        'ṯ': 't',
        'ᵵ': 't',
        'ƫ': 't',
        'ʈ': 't',
        'ŧ': 't',
        'ᵺ': 'th',
        'ɐ': 'a',
        'ᴂ': 'ae',
        'ǝ': 'e',
        'ᵷ': 'g',
        'ɥ': 'h',
        'ʮ': 'h',
        'ʯ': 'h',
        'ᴉ': 'i',
        'ʞ': 'k',
        'ꞁ': 'l',
        'ɯ': 'm',
        'ɰ': 'm',
        'ᴔ': 'oe',
        'ɹ': 'r',
        'ɻ': 'r',
        'ɺ': 'r',
        'ⱹ': 'r',
        'ʇ': 't',
        'ʌ': 'v',
        'ʍ': 'w',
        'ʎ': 'y',
        'ꜩ': 'tz',
        'ú': 'u',
        'ŭ': 'u',
        'ǔ': 'u',
        'û': 'u',
        'ṷ': 'u',
        'ü': 'u',
        'ǘ': 'u',
        'ǚ': 'u',
        'ǜ': 'u',
        'ǖ': 'u',
        'ṳ': 'u',
        'ụ': 'u',
        'ű': 'u',
        'ȕ': 'u',
        'ù': 'u',
        'ủ': 'u',
        'ư': 'u',
        'ứ': 'u',
        'ự': 'u',
        'ừ': 'u',
        'ử': 'u',
        'ữ': 'u',
        'ȗ': 'u',
        'ū': 'u',
        'ṻ': 'u',
        'ų': 'u',
        'ᶙ': 'u',
        'ů': 'u',
        'ũ': 'u',
        'ṹ': 'u',
        'ṵ': 'u',
        'ᵫ': 'ue',
        'ꝸ': 'um',
        'ⱴ': 'v',
        'ꝟ': 'v',
        'ṿ': 'v',
        'ʋ': 'v',
        'ᶌ': 'v',
        'ⱱ': 'v',
        'ṽ': 'v',
        'ꝡ': 'vy',
        'ẃ': 'w',
        'ŵ': 'w',
        'ẅ': 'w',
        'ẇ': 'w',
        'ẉ': 'w',
        'ẁ': 'w',
        'ⱳ': 'w',
        'ẘ': 'w',
        'ẍ': 'x',
        'ẋ': 'x',
        'ᶍ': 'x',
        'ý': 'y',
        'ŷ': 'y',
        'ÿ': 'y',
        'ẏ': 'y',
        'ỵ': 'y',
        'ỳ': 'y',
        'ƴ': 'y',
        'ỷ': 'y',
        'ỿ': 'y',
        'ȳ': 'y',
        'ẙ': 'y',
        'ɏ': 'y',
        'ỹ': 'y',
        'ź': 'z',
        'ž': 'z',
        'ẑ': 'z',
        'ʑ': 'z',
        'ⱬ': 'z',
        'ż': 'z',
        'ẓ': 'z',
        'ȥ': 'z',
        'ẕ': 'z',
        'ᵶ': 'z',
        'ᶎ': 'z',
        'ʐ': 'z',
        'ƶ': 'z',
        'ɀ': 'z',
        'ﬀ': 'ff',
        'ﬃ': 'ffi',
        'ﬄ': 'ffl',
        'ﬁ': 'fi',
        'ﬂ': 'fl',
        'ĳ': 'ij',
        'œ': 'oe',
        'ﬆ': 'st',
        'ₐ': 'a',
        'ₑ': 'e',
        'ᵢ': 'i',
        'ⱼ': 'j',
        'ₒ': 'o',
        'ᵣ': 'r',
        'ᵤ': 'u',
        'ᵥ': 'v',
        'ₓ': 'x'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadOptions = (function () {
        function TypeaheadOptions(options) {
            Object.assign(this, options);
        }
        return TypeaheadOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadMatch = (function () {
        // tslint:disable-next-line:no-any
        function TypeaheadMatch(item, value, header) {
            if (value === void 0) {
                value = item;
            }
            if (header === void 0) {
                header = false;
            }
            this.item = item;
            this.value = value;
            this.header = header;
        }
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.isHeader = /**
         * @return {?}
         */
            function () {
                return this.header;
            };
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.toString = /**
         * @return {?}
         */
            function () {
                return this.value;
            };
        return TypeaheadMatch;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function latinize(str) {
        if (!str) {
            return '';
        }
        return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
            return latinMap[a] || a;
        });
    }
    /**
     * @param {?} queryToEscape
     * @return {?}
     */
    function escapeRegexp(queryToEscape) {
        // Regex: capture the whole query string and replace it with the string
        // that will be used to match the results, for example if the capture is
        // 'a' the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * @param {?} str
     * @param {?=} wordRegexDelimiters
     * @param {?=} phraseRegexDelimiters
     * @return {?}
     */
    function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
        if (wordRegexDelimiters === void 0) {
            wordRegexDelimiters = ' ';
        }
        if (phraseRegexDelimiters === void 0) {
            phraseRegexDelimiters = '';
        }
        /* tslint:enable */
        var /** @type {?} */ regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
            ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
        var /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
        var /** @type {?} */ result = [];
        var /** @type {?} */ preTokenizedLength = preTokenized.length;
        var /** @type {?} */ token;
        var /** @type {?} */ replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
        for (var /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
            token = preTokenized[i];
            if (token && token.length && token !== wordRegexDelimiters) {
                result.push(token.replace(replacePhraseDelimiters, ''));
            }
        }
        return result;
    }
    /**
     * @param {?} object
     * @param {?} option
     * @return {?}
     */
    function getValueFromObject(object, option) {
        if (!option || typeof object !== 'object') {
            return object.toString();
        }
        if (option.endsWith('()')) {
            var /** @type {?} */ functionName = option.slice(0, option.length - 2);
            return object[functionName]().toString();
        }
        var /** @type {?} */ properties = option
            .replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '');
        var /** @type {?} */ propertiesArray = properties.split('.');
        try {
            for (var propertiesArray_1 = __values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
                var property = propertiesArray_1_1.value;
                if (property in object) {
                    // tslint:disable-next-line
                    object = object[property];
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return))
                    _a.call(propertiesArray_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        if (!object) {
            return '';
        }
        return object.toString();
        var e_1, _a;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadContainerComponent = (function () {
        function TypeaheadContainerComponent(element, renderer) {
            this.renderer = renderer;
            this.isFocused = false;
            this._matches = [];
            this.isScrolledIntoView = function (elem) {
                var /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
                var /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
                var /** @type {?} */ elemTop = elem.offsetTop;
                var /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
                return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
            };
            this.element = element;
        }
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
            get: /**
             * @return {?}
             */ function () {
                return this._active;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
            get: /**
             * @return {?}
             */ function () {
                return this._matches;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var _this = this;
                this._matches = value;
                this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
                if (this.typeaheadScrollable) {
                    setTimeout(function () {
                        _this.setScrollableMode();
                    });
                }
                if (this._matches.length > 0) {
                    this._active = this._matches[0];
                    if (this._active.isHeader()) {
                        this.nextActiveMatch();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
            // tslint:disable-next-line:no-any
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.optionsListTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadScrollable : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
            // tslint:disable-next-line:no-any
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadItemTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActiveMatch = /**
         * @return {?}
         */
            function () {
                this.selectMatch(this._active);
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.prevActiveMatch = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ index = this.matches.indexOf(this._active);
                this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
                if (this._active.isHeader()) {
                    this.prevActiveMatch();
                }
                if (this.typeaheadScrollable) {
                    this.scrollPrevious(index);
                }
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.nextActiveMatch = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ index = this.matches.indexOf(this._active);
                this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
                if (this.typeaheadScrollable) {
                    this.scrollNext(index);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActive = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.isFocused = true;
                this._active = value;
            };
        /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.highlight = /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
            function (match, query) {
                var /** @type {?} */ itemStr = match.value;
                var /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
                    ? latinize(itemStr)
                    : itemStr).toLowerCase();
                var /** @type {?} */ startIdx;
                var /** @type {?} */ tokenLen;
                // Replaces the capture string with the same string inside of a "strong" tag
                if (typeof query === 'object') {
                    var /** @type {?} */ queryLen = query.length;
                    for (var /** @type {?} */ i = 0; i < queryLen; i += 1) {
                        // query[i] is already latinized and lower case
                        startIdx = itemStrHelper.indexOf(query[i]);
                        tokenLen = query[i].length;
                        if (startIdx >= 0 && tokenLen > 0) {
                            itemStr =
                                itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                    ("" + itemStr.substring(startIdx + tokenLen));
                            itemStrHelper =
                                itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                                    ("" + itemStrHelper.substring(startIdx + tokenLen));
                        }
                    }
                }
                else if (query) {
                    // query is already latinized and lower case
                    startIdx = itemStrHelper.indexOf(query);
                    tokenLen = query.length;
                    if (startIdx >= 0 && tokenLen > 0) {
                        itemStr =
                            itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                ("" + itemStr.substring(startIdx + tokenLen));
                    }
                }
                return itemStr;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.focusLost = /**
         * @return {?}
         */
            function () {
                this.isFocused = false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.isActive = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this._active === value;
            };
        /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectMatch = /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
            function (value, e) {
                var _this = this;
                if (e === void 0) {
                    e = void 0;
                }
                if (e) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                this.parent.changeModel(value);
                setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
                return false;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.setScrollableMode = /**
         * @return {?}
         */
            function () {
                if (!this.ulElement) {
                    this.ulElement = this.element;
                }
                if (this.liElements.first) {
                    var /** @type {?} */ ulStyles = utils.Utils.getStyles(this.ulElement.nativeElement);
                    var /** @type {?} */ liStyles = utils.Utils.getStyles(this.liElements.first.nativeElement);
                    var /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                        .replace('px', ''));
                    var /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                        .replace('px', ''));
                    var /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                        .replace('px', ''));
                    var /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
                    this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
                }
                this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollPrevious = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (index === 0) {
                    this.scrollToBottom();
                    return;
                }
                if (this.liElements) {
                    var /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
                    if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                        this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
                    }
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollNext = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (index + 1 > this.matches.length - 1) {
                    this.scrollToTop();
                    return;
                }
                if (this.liElements) {
                    var /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
                    if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                        this.ulElement.nativeElement.scrollTop =
                            liElement.nativeElement.offsetTop -
                                Number(this.ulElement.nativeElement.offsetHeight) +
                                Number(liElement.nativeElement.offsetHeight);
                    }
                }
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToBottom = /**
         * @return {?}
         */
            function () {
                this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToTop = /**
         * @return {?}
         */
            function () {
                this.ulElement.nativeElement.scrollTop = 0;
            };
        TypeaheadContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'typeahead-container',
                        // tslint:disable-next-line
                        template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                        host: {
                            class: 'dropdown open',
                            '[class.dropdown-menu]': 'isBs4',
                            '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                            '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                            '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                            '[class.dropup]': 'dropup',
                            style: 'position: absolute;display: block;'
                        }
                    }] }
        ];
        /** @nocollapse */
        TypeaheadContainerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        TypeaheadContainerComponent.propDecorators = {
            "ulElement": [{ type: core.ViewChild, args: ['ulElement',] },],
            "liElements": [{ type: core.ViewChildren, args: ['liElements',] },],
            "focusLost": [{ type: core.HostListener, args: ['mouseleave',] }, { type: core.HostListener, args: ['blur',] },],
        };
        return TypeaheadContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadDirective = (function () {
        function TypeaheadDirective(ngControl, element, viewContainerRef, renderer, cis, changeDetection) {
            this.ngControl = ngControl;
            this.element = element;
            this.renderer = renderer;
            this.changeDetection = changeDetection;
            /**
             * minimal no of characters that needs to be entered before
             * typeahead kicks-in. When set to 0, typeahead shows on focus with full
             * list of options (limited as normal by typeaheadOptionsLimit)
             */
            this.typeaheadMinLength = void 0;
            /**
             * should be used only in case of typeahead attribute is array.
             * If true - loading of options will be async, otherwise - sync.
             * true make sense if options array is large.
             */
            this.typeaheadAsync = void 0;
            /**
             * match latin symbols.
             * If true the word súper would match super and vice versa.
             */
            this.typeaheadLatinize = true;
            /**
             * Can be use to search words by inserting a single white space between each characters
             *  for example 'C a l i f o r n i a' will match 'California'.
             */
            this.typeaheadSingleWords = true;
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to break words. Defaults to space.
             */
            this.typeaheadWordDelimiters = ' ';
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to match exact phrase.
             * Defaults to simple and double quotes.
             */
            this.typeaheadPhraseDelimiters = '\'"';
            /**
             * specifies if typeahead is scrollable
             */
            this.typeaheadScrollable = false;
            /**
             * specifies number of options to show in scroll view
             */
            this.typeaheadOptionsInScrollableView = 5;
            /**
             * fired when 'busy' state of this component was changed,
             * fired on async mode only, returns boolean
             */
            this.typeaheadLoading = new core.EventEmitter();
            /**
             * fired on every key event and returns true
             * in case of matches are not detected
             */
            this.typeaheadNoResults = new core.EventEmitter();
            /**
             * fired when option was selected, return object with data of this option
             */
            this.typeaheadOnSelect = new core.EventEmitter();
            /**
             * fired when blur event occurres. returns the active item
             */
            this.typeaheadOnBlur = new core.EventEmitter();
            /**
             * This attribute indicates that the dropdown should be opened upwards
             */
            this.dropup = false;
            this.isTypeaheadOptionsListActive = false;
            // tslint:disable-next-line:no-any
            this.keyUpEventEmitter = new core.EventEmitter();
            this.placement = 'bottom-left';
            this._subscriptions = [];
            this._typeahead = cis.createLoader(element, viewContainerRef, renderer);
        }
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
                this.typeaheadMinLength =
                    this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
                this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
                // async should be false in case of array
                if (this.typeaheadAsync === undefined &&
                    !(this.typeahead instanceof rxjs.Observable)) {
                    this.typeaheadAsync = false;
                }
                if (this.typeahead instanceof rxjs.Observable) {
                    this.typeaheadAsync = true;
                }
                if (this.typeaheadAsync) {
                    this.asyncActions();
                }
                else {
                    this.syncActions();
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        TypeaheadDirective.prototype.onInput = /**
         * @param {?} e
         * @return {?}
         */
            // tslint:disable-next-line:no-any
            function (e) {
                // For `<input>`s, use the `value` property. For others that don't have a
                // `value` (such as `<span contenteditable="true">`), use either
                // `textContent` or `innerText` (depending on which one is supported, i.e.
                // Firefox or IE).
                var /** @type {?} */ value = e.target.value !== undefined
                    ? e.target.value
                    : e.target.textContent !== undefined
                        ? e.target.textContent
                        : e.target.innerText;
                if (value != null && value.trim().length >= this.typeaheadMinLength) {
                    this.typeaheadLoading.emit(true);
                    this.keyUpEventEmitter.emit(e.target.value);
                }
                else {
                    this.typeaheadLoading.emit(false);
                    this.typeaheadNoResults.emit(false);
                    this.hide();
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        TypeaheadDirective.prototype.onChange = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (this._container) {
                    // esc
                    if (e.keyCode === 27) {
                        this.hide();
                        return;
                    }
                    // up
                    if (e.keyCode === 38) {
                        this._container.prevActiveMatch();
                        return;
                    }
                    // down
                    if (e.keyCode === 40) {
                        this._container.nextActiveMatch();
                        return;
                    }
                    // enter, tab
                    if (e.keyCode === 13) {
                        this._container.selectActiveMatch();
                        return;
                    }
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onFocus = /**
         * @return {?}
         */
            function () {
                if (this.typeaheadMinLength === 0) {
                    this.typeaheadLoading.emit(true);
                    this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                if (this._container && !this._container.isFocused) {
                    this.typeaheadOnBlur.emit(this._container.active);
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        TypeaheadDirective.prototype.onKeydown = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                // no container - no problems
                if (!this._container) {
                    return;
                }
                // if an item is visible - prevent form submission
                if (e.keyCode === 13) {
                    e.preventDefault();
                    return;
                }
                // if an item is visible - don't change focus
                if (e.keyCode === 9) {
                    e.preventDefault();
                    this._container.selectActiveMatch();
                    return;
                }
            };
        /**
         * @param {?} match
         * @return {?}
         */
        TypeaheadDirective.prototype.changeModel = /**
         * @param {?} match
         * @return {?}
         */
            function (match) {
                var /** @type {?} */ valueStr = match.value;
                this.ngControl.viewToModelUpdate(valueStr);
                (this.ngControl.control).setValue(valueStr);
                this.changeDetection.markForCheck();
                this.hide();
            };
        Object.defineProperty(TypeaheadDirective.prototype, "matches", {
            get: /**
             * @return {?}
             */ function () {
                return this._matches;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.show = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._typeahead
                    .attach(TypeaheadContainerComponent)
                    .to(this.container)
                    .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
                    .show({
                    typeaheadRef: this,
                    placement: this.placement,
                    animation: false,
                    dropup: this.dropup
                });
                this._outsideClickListener = this.renderer.listen('document', 'click', function (e) {
                    if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                        return undefined;
                    }
                    _this.onOutsideClick();
                });
                this._container = this._typeahead.instance;
                this._container.parent = this;
                // This improves the speed as it won't have to be done for each list item
                var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
                    ? latinize(this.ngControl.control.value)
                    : this.ngControl.control.value)
                    .toString()
                    .toLowerCase();
                this._container.query = this.typeaheadSingleWords
                    ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                    : normalizedQuery;
                this._container.matches = this._matches;
                this.element.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.hide = /**
         * @return {?}
         */
            function () {
                if (this._typeahead.isShown) {
                    this._typeahead.hide();
                    this._outsideClickListener();
                    this._container = null;
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onOutsideClick = /**
         * @return {?}
         */
            function () {
                if (this._container && !this._container.isFocused) {
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    // clean up subscriptions
                    for (var _a = __values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._typeahead.dispose();
                var e_1, _c;
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.asyncActions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscriptions.push(this.keyUpEventEmitter
                    .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.switchMap(function () { return _this.typeahead; }))
                    .subscribe(function (matches) {
                    _this.finalizeAsyncCall(matches);
                }));
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.syncActions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscriptions.push(this.keyUpEventEmitter
                    .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.mergeMap(function (value) {
                    var /** @type {?} */ normalizedQuery = _this.normalizeQuery(value);
                    return rxjs.from(_this.typeahead)
                        .pipe(operators.filter(function (option) {
                        return (option &&
                            _this.testMatch(_this.normalizeOption(option), normalizedQuery));
                    }), operators.toArray());
                }))
                    .subscribe(function (matches) {
                    _this.finalizeAsyncCall(matches);
                }));
            };
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeOption = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                var /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
                var /** @type {?} */ normalizedOption = this.typeaheadLatinize
                    ? latinize(optionValue)
                    : optionValue;
                return normalizedOption.toLowerCase();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeQuery = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                // If singleWords, break model here to not be doing extra work on each
                // iteration
                var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
                    ? latinize(value)
                    : value)
                    .toString()
                    .toLowerCase();
                normalizedQuery = this.typeaheadSingleWords
                    ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                    : normalizedQuery;
                return normalizedQuery;
            };
        /**
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
        TypeaheadDirective.prototype.testMatch = /**
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
            function (match, test) {
                var /** @type {?} */ spaceLength;
                if (typeof test === 'object') {
                    spaceLength = test.length;
                    for (var /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                        if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                            return false;
                        }
                    }
                    return true;
                }
                return match.indexOf(test) >= 0;
            };
        /**
         * @param {?} matches
         * @return {?}
         */
        TypeaheadDirective.prototype.finalizeAsyncCall = /**
         * @param {?} matches
         * @return {?}
         */
            function (matches) {
                this.prepareMatches(matches);
                this.typeaheadLoading.emit(false);
                this.typeaheadNoResults.emit(!this.hasMatches());
                if (!this.hasMatches()) {
                    this.hide();
                    return;
                }
                if (this._container) {
                    // fix: remove usage of ngControl internals
                    var /** @type {?} */ _controlValue = (this.typeaheadLatinize
                        ? latinize(this.ngControl.control.value)
                        : this.ngControl.control.value) || '';
                    // This improves the speed as it won't have to be done for each list item
                    var /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
                    this._container.query = this.typeaheadSingleWords
                        ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                        : normalizedQuery;
                    this._container.matches = this._matches;
                }
                else {
                    this.show();
                }
            };
        /**
         * @param {?} options
         * @return {?}
         */
        TypeaheadDirective.prototype.prepareMatches = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                var /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
                if (this.typeaheadGroupField) {
                    var /** @type {?} */ matches_1 = [];
                    // extract all group names
                    var /** @type {?} */ groups = limited
                        .map(function (option) {
                        return getValueFromObject(option, _this.typeaheadGroupField);
                    })
                        .filter(function (v, i, a) { return a.indexOf(v) === i; });
                    groups.forEach(function (group) {
                        // add group header to array of matches
                        // add group header to array of matches
                        matches_1.push(new TypeaheadMatch(group, group, true));
                        // add each item of group to array of matches
                        // add each item of group to array of matches
                        matches_1 = matches_1.concat(limited
                            .filter(
                        // tslint:disable-next-line:no-any
                        // tslint:disable-next-line:no-any
                        function (option) {
                            return getValueFromObject(option, _this.typeaheadGroupField) === group;
                        })
                            .map(
                        // tslint:disable-next-line:no-any
                        // tslint:disable-next-line:no-any
                        function (option) {
                            return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                        }));
                    });
                    this._matches = matches_1;
                }
                else {
                    this._matches = limited.map(
                    // tslint:disable-next-line:no-any
                    // tslint:disable-next-line:no-any
                    function (option) {
                        return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                    });
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.hasMatches = /**
         * @return {?}
         */
            function () {
                return this._matches.length > 0;
            };
        TypeaheadDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
        ];
        /** @nocollapse */
        TypeaheadDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl, },
                { type: core.ElementRef, },
                { type: core.ViewContainerRef, },
                { type: core.Renderer2, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        TypeaheadDirective.propDecorators = {
            "typeahead": [{ type: core.Input },],
            "typeaheadMinLength": [{ type: core.Input },],
            "typeaheadWaitMs": [{ type: core.Input },],
            "typeaheadOptionsLimit": [{ type: core.Input },],
            "typeaheadOptionField": [{ type: core.Input },],
            "typeaheadGroupField": [{ type: core.Input },],
            "typeaheadAsync": [{ type: core.Input },],
            "typeaheadLatinize": [{ type: core.Input },],
            "typeaheadSingleWords": [{ type: core.Input },],
            "typeaheadWordDelimiters": [{ type: core.Input },],
            "typeaheadPhraseDelimiters": [{ type: core.Input },],
            "typeaheadItemTemplate": [{ type: core.Input },],
            "optionsListTemplate": [{ type: core.Input },],
            "typeaheadScrollable": [{ type: core.Input },],
            "typeaheadOptionsInScrollableView": [{ type: core.Input },],
            "typeaheadLoading": [{ type: core.Output },],
            "typeaheadNoResults": [{ type: core.Output },],
            "typeaheadOnSelect": [{ type: core.Output },],
            "typeaheadOnBlur": [{ type: core.Output },],
            "container": [{ type: core.Input },],
            "dropup": [{ type: core.Input },],
            "onInput": [{ type: core.HostListener, args: ['input', ['$event'],] },],
            "onChange": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
            "onFocus": [{ type: core.HostListener, args: ['click',] }, { type: core.HostListener, args: ['focus',] },],
            "onBlur": [{ type: core.HostListener, args: ['blur',] },],
            "onKeydown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
        };
        return TypeaheadDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadModule = (function () {
        function TypeaheadModule() {
        }
        /**
         * @return {?}
         */
        TypeaheadModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TypeaheadModule,
                    providers: [componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        TypeaheadModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                        exports: [TypeaheadContainerComponent, TypeaheadDirective],
                        entryComponents: [TypeaheadContainerComponent]
                    },] }
        ];
        return TypeaheadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.latinMap = latinMap;
    exports.TypeaheadOptions = TypeaheadOptions;
    exports.TypeaheadMatch = TypeaheadMatch;
    exports.escapeRegexp = escapeRegexp;
    exports.getValueFromObject = getValueFromObject;
    exports.tokenize = tokenize;
    exports.latinize = latinize;
    exports.TypeaheadContainerComponent = TypeaheadContainerComponent;
    exports.TypeaheadDirective = TypeaheadDirective;
    exports.TypeaheadModule = TypeaheadModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10eXBlYWhlYWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC9sYXRpbi1tYXAudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1vcHRpb25zLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guY2xhc3MudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtdXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG5leHBvcnQgY29uc3QgbGF0aW5NYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgJ8ODwoEnOiAnQScsXG4gICAgJ8OEwoInOiAnQScsXG4gICAgJ8OhwrrCric6ICdBJyxcbiAgICAnw6HCusK2JzogJ0EnLFxuICAgICfDocK6wrAnOiAnQScsXG4gICAgJ8OhwrrCsic6ICdBJyxcbiAgICAnw6HCusK0JzogJ0EnLFxuICAgICfDh8KNJzogJ0EnLFxuICAgICfDg8KCJzogJ0EnLFxuICAgICfDocK6wqQnOiAnQScsXG4gICAgJ8OhwrrCrCc6ICdBJyxcbiAgICAnw6HCusKmJzogJ0EnLFxuICAgICfDocK6wqgnOiAnQScsXG4gICAgJ8OhwrrCqic6ICdBJyxcbiAgICAnw4PChCc6ICdBJyxcbiAgICAnw4fCnic6ICdBJyxcbiAgICAnw4jCpic6ICdBJyxcbiAgICAnw4fCoCc6ICdBJyxcbiAgICAnw6HCusKgJzogJ0EnLFxuICAgICfDiMKAJzogJ0EnLFxuICAgICfDg8KAJzogJ0EnLFxuICAgICfDocK6wqInOiAnQScsXG4gICAgJ8OIwoInOiAnQScsXG4gICAgJ8OEwoAnOiAnQScsXG4gICAgJ8OEwoQnOiAnQScsXG4gICAgJ8ODwoUnOiAnQScsXG4gICAgJ8OHwronOiAnQScsXG4gICAgJ8OhwrjCgCc6ICdBJyxcbiAgICAnw4jCuic6ICdBJyxcbiAgICAnw4PCgyc6ICdBJyxcbiAgICAnw6rCnMKyJzogJ0FBJyxcbiAgICAnw4PChic6ICdBRScsXG4gICAgJ8OHwrwnOiAnQUUnLFxuICAgICfDh8KiJzogJ0FFJyxcbiAgICAnw6rCnMK0JzogJ0FPJyxcbiAgICAnw6rCnMK2JzogJ0FVJyxcbiAgICAnw6rCnMK4JzogJ0FWJyxcbiAgICAnw6rCnMK6JzogJ0FWJyxcbiAgICAnw6rCnMK8JzogJ0FZJyxcbiAgICAnw6HCuMKCJzogJ0InLFxuICAgICfDocK4woQnOiAnQicsXG4gICAgJ8OGwoEnOiAnQicsXG4gICAgJ8OhwrjChic6ICdCJyxcbiAgICAnw4nCgyc6ICdCJyxcbiAgICAnw4bCgic6ICdCJyxcbiAgICAnw4TChic6ICdDJyxcbiAgICAnw4TCjCc6ICdDJyxcbiAgICAnw4PChyc6ICdDJyxcbiAgICAnw6HCuMKIJzogJ0MnLFxuICAgICfDhMKIJzogJ0MnLFxuICAgICfDhMKKJzogJ0MnLFxuICAgICfDhsKHJzogJ0MnLFxuICAgICfDiMK7JzogJ0MnLFxuICAgICfDhMKOJzogJ0QnLFxuICAgICfDocK4wpAnOiAnRCcsXG4gICAgJ8OhwrjCkic6ICdEJyxcbiAgICAnw6HCuMKKJzogJ0QnLFxuICAgICfDocK4wownOiAnRCcsXG4gICAgJ8OGwoonOiAnRCcsXG4gICAgJ8OhwrjCjic6ICdEJyxcbiAgICAnw4fCsic6ICdEJyxcbiAgICAnw4fChSc6ICdEJyxcbiAgICAnw4TCkCc6ICdEJyxcbiAgICAnw4bCiyc6ICdEJyxcbiAgICAnw4fCsSc6ICdEWicsXG4gICAgJ8OHwoQnOiAnRFonLFxuICAgICfDg8KJJzogJ0UnLFxuICAgICfDhMKUJzogJ0UnLFxuICAgICfDhMKaJzogJ0UnLFxuICAgICfDiMKoJzogJ0UnLFxuICAgICfDocK4wpwnOiAnRScsXG4gICAgJ8ODwoonOiAnRScsXG4gICAgJ8OhwrrCvic6ICdFJyxcbiAgICAnw6HCu8KGJzogJ0UnLFxuICAgICfDocK7woAnOiAnRScsXG4gICAgJ8OhwrvCgic6ICdFJyxcbiAgICAnw6HCu8KEJzogJ0UnLFxuICAgICfDocK4wpgnOiAnRScsXG4gICAgJ8ODwosnOiAnRScsXG4gICAgJ8OEwpYnOiAnRScsXG4gICAgJ8OhwrrCuCc6ICdFJyxcbiAgICAnw4jChCc6ICdFJyxcbiAgICAnw4PCiCc6ICdFJyxcbiAgICAnw6HCusK6JzogJ0UnLFxuICAgICfDiMKGJzogJ0UnLFxuICAgICfDhMKSJzogJ0UnLFxuICAgICfDocK4wpYnOiAnRScsXG4gICAgJ8OhwrjClCc6ICdFJyxcbiAgICAnw4TCmCc6ICdFJyxcbiAgICAnw4nChic6ICdFJyxcbiAgICAnw6HCusK8JzogJ0UnLFxuICAgICfDocK4wponOiAnRScsXG4gICAgJ8Oqwp3Cqic6ICdFVCcsXG4gICAgJ8OhwrjCnic6ICdGJyxcbiAgICAnw4bCkSc6ICdGJyxcbiAgICAnw4fCtCc6ICdHJyxcbiAgICAnw4TCnic6ICdHJyxcbiAgICAnw4fCpic6ICdHJyxcbiAgICAnw4TCoic6ICdHJyxcbiAgICAnw4TCnCc6ICdHJyxcbiAgICAnw4TCoCc6ICdHJyxcbiAgICAnw4bCkyc6ICdHJyxcbiAgICAnw6HCuMKgJzogJ0cnLFxuICAgICfDh8KkJzogJ0cnLFxuICAgICfDocK4wqonOiAnSCcsXG4gICAgJ8OIwp4nOiAnSCcsXG4gICAgJ8OhwrjCqCc6ICdIJyxcbiAgICAnw4TCpCc6ICdIJyxcbiAgICAnw6LCscKnJzogJ0gnLFxuICAgICfDocK4wqYnOiAnSCcsXG4gICAgJ8OhwrjCoic6ICdIJyxcbiAgICAnw6HCuMKkJzogJ0gnLFxuICAgICfDhMKmJzogJ0gnLFxuICAgICfDg8KNJzogJ0knLFxuICAgICfDhMKsJzogJ0knLFxuICAgICfDh8KPJzogJ0knLFxuICAgICfDg8KOJzogJ0knLFxuICAgICfDg8KPJzogJ0knLFxuICAgICfDocK4wq4nOiAnSScsXG4gICAgJ8OEwrAnOiAnSScsXG4gICAgJ8OhwrvCiic6ICdJJyxcbiAgICAnw4jCiCc6ICdJJyxcbiAgICAnw4PCjCc6ICdJJyxcbiAgICAnw6HCu8KIJzogJ0knLFxuICAgICfDiMKKJzogJ0knLFxuICAgICfDhMKqJzogJ0knLFxuICAgICfDhMKuJzogJ0knLFxuICAgICfDhsKXJzogJ0knLFxuICAgICfDhMKoJzogJ0knLFxuICAgICfDocK4wqwnOiAnSScsXG4gICAgJ8Oqwp3CuSc6ICdEJyxcbiAgICAnw6rCncK7JzogJ0YnLFxuICAgICfDqsKdwr0nOiAnRycsXG4gICAgJ8Oqwp7Cgic6ICdSJyxcbiAgICAnw6rCnsKEJzogJ1MnLFxuICAgICfDqsKewoYnOiAnVCcsXG4gICAgJ8Oqwp3CrCc6ICdJUycsXG4gICAgJ8OEwrQnOiAnSicsXG4gICAgJ8OJwognOiAnSicsXG4gICAgJ8OhwrjCsCc6ICdLJyxcbiAgICAnw4fCqCc6ICdLJyxcbiAgICAnw4TCtic6ICdLJyxcbiAgICAnw6LCscKpJzogJ0snLFxuICAgICfDqsKdwoInOiAnSycsXG4gICAgJ8OhwrjCsic6ICdLJyxcbiAgICAnw4bCmCc6ICdLJyxcbiAgICAnw6HCuMK0JzogJ0snLFxuICAgICfDqsKdwoAnOiAnSycsXG4gICAgJ8Oqwp3ChCc6ICdLJyxcbiAgICAnw4TCuSc6ICdMJyxcbiAgICAnw4jCvSc6ICdMJyxcbiAgICAnw4TCvSc6ICdMJyxcbiAgICAnw4TCuyc6ICdMJyxcbiAgICAnw6HCuMK8JzogJ0wnLFxuICAgICfDocK4wrYnOiAnTCcsXG4gICAgJ8OhwrjCuCc6ICdMJyxcbiAgICAnw6LCscKgJzogJ0wnLFxuICAgICfDqsKdwognOiAnTCcsXG4gICAgJ8OhwrjCuic6ICdMJyxcbiAgICAnw4TCvyc6ICdMJyxcbiAgICAnw6LCscKiJzogJ0wnLFxuICAgICfDh8KIJzogJ0wnLFxuICAgICfDhcKBJzogJ0wnLFxuICAgICfDh8KHJzogJ0xKJyxcbiAgICAnw6HCuMK+JzogJ00nLFxuICAgICfDocK5woAnOiAnTScsXG4gICAgJ8OhwrnCgic6ICdNJyxcbiAgICAnw6LCscKuJzogJ00nLFxuICAgICfDhcKDJzogJ04nLFxuICAgICfDhcKHJzogJ04nLFxuICAgICfDhcKFJzogJ04nLFxuICAgICfDocK5woonOiAnTicsXG4gICAgJ8OhwrnChCc6ICdOJyxcbiAgICAnw6HCucKGJzogJ04nLFxuICAgICfDh8K4JzogJ04nLFxuICAgICfDhsKdJzogJ04nLFxuICAgICfDocK5wognOiAnTicsXG4gICAgJ8OIwqAnOiAnTicsXG4gICAgJ8OHwosnOiAnTicsXG4gICAgJ8ODwpEnOiAnTicsXG4gICAgJ8OHwoonOiAnTkonLFxuICAgICfDg8KTJzogJ08nLFxuICAgICfDhcKOJzogJ08nLFxuICAgICfDh8KRJzogJ08nLFxuICAgICfDg8KUJzogJ08nLFxuICAgICfDocK7wpAnOiAnTycsXG4gICAgJ8OhwrvCmCc6ICdPJyxcbiAgICAnw6HCu8KSJzogJ08nLFxuICAgICfDocK7wpQnOiAnTycsXG4gICAgJ8OhwrvClic6ICdPJyxcbiAgICAnw4PClic6ICdPJyxcbiAgICAnw4jCqic6ICdPJyxcbiAgICAnw4jCric6ICdPJyxcbiAgICAnw4jCsCc6ICdPJyxcbiAgICAnw6HCu8KMJzogJ08nLFxuICAgICfDhcKQJzogJ08nLFxuICAgICfDiMKMJzogJ08nLFxuICAgICfDg8KSJzogJ08nLFxuICAgICfDocK7wo4nOiAnTycsXG4gICAgJ8OGwqAnOiAnTycsXG4gICAgJ8OhwrvCmic6ICdPJyxcbiAgICAnw6HCu8KiJzogJ08nLFxuICAgICfDocK7wpwnOiAnTycsXG4gICAgJ8OhwrvCnic6ICdPJyxcbiAgICAnw6HCu8KgJzogJ08nLFxuICAgICfDiMKOJzogJ08nLFxuICAgICfDqsKdwoonOiAnTycsXG4gICAgJ8Oqwp3CjCc6ICdPJyxcbiAgICAnw4XCjCc6ICdPJyxcbiAgICAnw6HCucKSJzogJ08nLFxuICAgICfDocK5wpAnOiAnTycsXG4gICAgJ8OGwp8nOiAnTycsXG4gICAgJ8OHwqonOiAnTycsXG4gICAgJ8OHwqwnOiAnTycsXG4gICAgJ8ODwpgnOiAnTycsXG4gICAgJ8OHwr4nOiAnTycsXG4gICAgJ8ODwpUnOiAnTycsXG4gICAgJ8OhwrnCjCc6ICdPJyxcbiAgICAnw6HCucKOJzogJ08nLFxuICAgICfDiMKsJzogJ08nLFxuICAgICfDhsKiJzogJ09JJyxcbiAgICAnw6rCncKOJzogJ09PJyxcbiAgICAnw4bCkCc6ICdFJyxcbiAgICAnw4bChic6ICdPJyxcbiAgICAnw4jCoic6ICdPVScsXG4gICAgJ8OhwrnClCc6ICdQJyxcbiAgICAnw6HCucKWJzogJ1AnLFxuICAgICfDqsKdwpInOiAnUCcsXG4gICAgJ8OGwqQnOiAnUCcsXG4gICAgJ8Oqwp3ClCc6ICdQJyxcbiAgICAnw6LCscKjJzogJ1AnLFxuICAgICfDqsKdwpAnOiAnUCcsXG4gICAgJ8Oqwp3CmCc6ICdRJyxcbiAgICAnw6rCncKWJzogJ1EnLFxuICAgICfDhcKUJzogJ1InLFxuICAgICfDhcKYJzogJ1InLFxuICAgICfDhcKWJzogJ1InLFxuICAgICfDocK5wpgnOiAnUicsXG4gICAgJ8OhwrnCmic6ICdSJyxcbiAgICAnw6HCucKcJzogJ1InLFxuICAgICfDiMKQJzogJ1InLFxuICAgICfDiMKSJzogJ1InLFxuICAgICfDocK5wp4nOiAnUicsXG4gICAgJ8OJwownOiAnUicsXG4gICAgJ8OiwrHCpCc6ICdSJyxcbiAgICAnw6rCnMK+JzogJ0MnLFxuICAgICfDhsKOJzogJ0UnLFxuICAgICfDhcKaJzogJ1MnLFxuICAgICfDocK5wqQnOiAnUycsXG4gICAgJ8OFwqAnOiAnUycsXG4gICAgJ8OhwrnCpic6ICdTJyxcbiAgICAnw4XCnic6ICdTJyxcbiAgICAnw4XCnCc6ICdTJyxcbiAgICAnw4jCmCc6ICdTJyxcbiAgICAnw6HCucKgJzogJ1MnLFxuICAgICfDocK5wqInOiAnUycsXG4gICAgJ8OhwrnCqCc6ICdTJyxcbiAgICAnw4XCpCc6ICdUJyxcbiAgICAnw4XCoic6ICdUJyxcbiAgICAnw6HCucKwJzogJ1QnLFxuICAgICfDiMKaJzogJ1QnLFxuICAgICfDiMK+JzogJ1QnLFxuICAgICfDocK5wqonOiAnVCcsXG4gICAgJ8OhwrnCrCc6ICdUJyxcbiAgICAnw4bCrCc6ICdUJyxcbiAgICAnw6HCucKuJzogJ1QnLFxuICAgICfDhsKuJzogJ1QnLFxuICAgICfDhcKmJzogJ1QnLFxuICAgICfDosKxwq8nOiAnQScsXG4gICAgJ8Oqwp7CgCc6ICdMJyxcbiAgICAnw4bCnCc6ICdNJyxcbiAgICAnw4nChSc6ICdWJyxcbiAgICAnw6rCnMKoJzogJ1RaJyxcbiAgICAnw4PCmic6ICdVJyxcbiAgICAnw4XCrCc6ICdVJyxcbiAgICAnw4fCkyc6ICdVJyxcbiAgICAnw4PCmyc6ICdVJyxcbiAgICAnw6HCucK2JzogJ1UnLFxuICAgICfDg8KcJzogJ1UnLFxuICAgICfDh8KXJzogJ1UnLFxuICAgICfDh8KZJzogJ1UnLFxuICAgICfDh8KbJzogJ1UnLFxuICAgICfDh8KVJzogJ1UnLFxuICAgICfDocK5wrInOiAnVScsXG4gICAgJ8OhwrvCpCc6ICdVJyxcbiAgICAnw4XCsCc6ICdVJyxcbiAgICAnw4jClCc6ICdVJyxcbiAgICAnw4PCmSc6ICdVJyxcbiAgICAnw6HCu8KmJzogJ1UnLFxuICAgICfDhsKvJzogJ1UnLFxuICAgICfDocK7wqgnOiAnVScsXG4gICAgJ8OhwrvCsCc6ICdVJyxcbiAgICAnw6HCu8KqJzogJ1UnLFxuICAgICfDocK7wqwnOiAnVScsXG4gICAgJ8OhwrvCric6ICdVJyxcbiAgICAnw4jClic6ICdVJyxcbiAgICAnw4XCqic6ICdVJyxcbiAgICAnw6HCucK6JzogJ1UnLFxuICAgICfDhcKyJzogJ1UnLFxuICAgICfDhcKuJzogJ1UnLFxuICAgICfDhcKoJzogJ1UnLFxuICAgICfDocK5wrgnOiAnVScsXG4gICAgJ8OhwrnCtCc6ICdVJyxcbiAgICAnw6rCncKeJzogJ1YnLFxuICAgICfDocK5wr4nOiAnVicsXG4gICAgJ8OGwrInOiAnVicsXG4gICAgJ8OhwrnCvCc6ICdWJyxcbiAgICAnw6rCncKgJzogJ1ZZJyxcbiAgICAnw6HCusKCJzogJ1cnLFxuICAgICfDhcK0JzogJ1cnLFxuICAgICfDocK6woQnOiAnVycsXG4gICAgJ8OhwrrChic6ICdXJyxcbiAgICAnw6HCusKIJzogJ1cnLFxuICAgICfDocK6woAnOiAnVycsXG4gICAgJ8OiwrHCsic6ICdXJyxcbiAgICAnw6HCusKMJzogJ1gnLFxuICAgICfDocK6woonOiAnWCcsXG4gICAgJ8ODwp0nOiAnWScsXG4gICAgJ8OFwrYnOiAnWScsXG4gICAgJ8OFwrgnOiAnWScsXG4gICAgJ8OhwrrCjic6ICdZJyxcbiAgICAnw6HCu8K0JzogJ1knLFxuICAgICfDocK7wrInOiAnWScsXG4gICAgJ8OGwrMnOiAnWScsXG4gICAgJ8OhwrvCtic6ICdZJyxcbiAgICAnw6HCu8K+JzogJ1knLFxuICAgICfDiMKyJzogJ1knLFxuICAgICfDicKOJzogJ1knLFxuICAgICfDocK7wrgnOiAnWScsXG4gICAgJ8OFwrknOiAnWicsXG4gICAgJ8OFwr0nOiAnWicsXG4gICAgJ8OhwrrCkCc6ICdaJyxcbiAgICAnw6LCscKrJzogJ1onLFxuICAgICfDhcK7JzogJ1onLFxuICAgICfDocK6wpInOiAnWicsXG4gICAgJ8OIwqQnOiAnWicsXG4gICAgJ8OhwrrClCc6ICdaJyxcbiAgICAnw4bCtSc6ICdaJyxcbiAgICAnw4TCsic6ICdJSicsXG4gICAgJ8OFwpInOiAnT0UnLFxuICAgICfDocK0woAnOiAnQScsXG4gICAgJ8OhwrTCgSc6ICdBRScsXG4gICAgJ8OKwpknOiAnQicsXG4gICAgJ8OhwrTCgyc6ICdCJyxcbiAgICAnw6HCtMKEJzogJ0MnLFxuICAgICfDocK0woUnOiAnRCcsXG4gICAgJ8OhwrTChyc6ICdFJyxcbiAgICAnw6rCnMKwJzogJ0YnLFxuICAgICfDicKiJzogJ0cnLFxuICAgICfDisKbJzogJ0cnLFxuICAgICfDisKcJzogJ0gnLFxuICAgICfDicKqJzogJ0knLFxuICAgICfDisKBJzogJ1InLFxuICAgICfDocK0woonOiAnSicsXG4gICAgJ8OhwrTCiyc6ICdLJyxcbiAgICAnw4rCnyc6ICdMJyxcbiAgICAnw6HCtMKMJzogJ0wnLFxuICAgICfDocK0wo0nOiAnTScsXG4gICAgJ8OJwrQnOiAnTicsXG4gICAgJ8OhwrTCjyc6ICdPJyxcbiAgICAnw4nCtic6ICdPRScsXG4gICAgJ8OhwrTCkCc6ICdPJyxcbiAgICAnw6HCtMKVJzogJ09VJyxcbiAgICAnw6HCtMKYJzogJ1AnLFxuICAgICfDisKAJzogJ1InLFxuICAgICfDocK0wo4nOiAnTicsXG4gICAgJ8OhwrTCmSc6ICdSJyxcbiAgICAnw6rCnMKxJzogJ1MnLFxuICAgICfDocK0wpsnOiAnVCcsXG4gICAgJ8OiwrHCuyc6ICdFJyxcbiAgICAnw6HCtMKaJzogJ1InLFxuICAgICfDocK0wpwnOiAnVScsXG4gICAgJ8OhwrTCoCc6ICdWJyxcbiAgICAnw6HCtMKhJzogJ1cnLFxuICAgICfDisKPJzogJ1knLFxuICAgICfDocK0wqInOiAnWicsXG4gICAgJ8ODwqEnOiAnYScsXG4gICAgJ8OEwoMnOiAnYScsXG4gICAgJ8OhwrrCryc6ICdhJyxcbiAgICAnw6HCusK3JzogJ2EnLFxuICAgICfDocK6wrEnOiAnYScsXG4gICAgJ8OhwrrCsyc6ICdhJyxcbiAgICAnw6HCusK1JzogJ2EnLFxuICAgICfDh8KOJzogJ2EnLFxuICAgICfDg8KiJzogJ2EnLFxuICAgICfDocK6wqUnOiAnYScsXG4gICAgJ8OhwrrCrSc6ICdhJyxcbiAgICAnw6HCusKnJzogJ2EnLFxuICAgICfDocK6wqknOiAnYScsXG4gICAgJ8OhwrrCqyc6ICdhJyxcbiAgICAnw4PCpCc6ICdhJyxcbiAgICAnw4fCnyc6ICdhJyxcbiAgICAnw4jCpyc6ICdhJyxcbiAgICAnw4fCoSc6ICdhJyxcbiAgICAnw6HCusKhJzogJ2EnLFxuICAgICfDiMKBJzogJ2EnLFxuICAgICfDg8KgJzogJ2EnLFxuICAgICfDocK6wqMnOiAnYScsXG4gICAgJ8OIwoMnOiAnYScsXG4gICAgJ8OEwoEnOiAnYScsXG4gICAgJ8OEwoUnOiAnYScsXG4gICAgJ8OhwrbCjyc6ICdhJyxcbiAgICAnw6HCusKaJzogJ2EnLFxuICAgICfDg8KlJzogJ2EnLFxuICAgICfDh8K7JzogJ2EnLFxuICAgICfDocK4woEnOiAnYScsXG4gICAgJ8OiwrHCpSc6ICdhJyxcbiAgICAnw4PCoyc6ICdhJyxcbiAgICAnw6rCnMKzJzogJ2FhJyxcbiAgICAnw4PCpic6ICdhZScsXG4gICAgJ8OHwr0nOiAnYWUnLFxuICAgICfDh8KjJzogJ2FlJyxcbiAgICAnw6rCnMK1JzogJ2FvJyxcbiAgICAnw6rCnMK3JzogJ2F1JyxcbiAgICAnw6rCnMK5JzogJ2F2JyxcbiAgICAnw6rCnMK7JzogJ2F2JyxcbiAgICAnw6rCnMK9JzogJ2F5JyxcbiAgICAnw6HCuMKDJzogJ2InLFxuICAgICfDocK4woUnOiAnYicsXG4gICAgJ8OJwpMnOiAnYicsXG4gICAgJ8OhwrjChyc6ICdiJyxcbiAgICAnw6HCtcKsJzogJ2InLFxuICAgICfDocK2woAnOiAnYicsXG4gICAgJ8OGwoAnOiAnYicsXG4gICAgJ8OGwoMnOiAnYicsXG4gICAgJ8OJwrUnOiAnbycsXG4gICAgJ8OEwocnOiAnYycsXG4gICAgJ8OEwo0nOiAnYycsXG4gICAgJ8ODwqcnOiAnYycsXG4gICAgJ8OhwrjCiSc6ICdjJyxcbiAgICAnw4TCiSc6ICdjJyxcbiAgICAnw4nClSc6ICdjJyxcbiAgICAnw4TCiyc6ICdjJyxcbiAgICAnw4bCiCc6ICdjJyxcbiAgICAnw4jCvCc6ICdjJyxcbiAgICAnw4TCjyc6ICdkJyxcbiAgICAnw6HCuMKRJzogJ2QnLFxuICAgICfDocK4wpMnOiAnZCcsXG4gICAgJ8OIwqEnOiAnZCcsXG4gICAgJ8OhwrjCiyc6ICdkJyxcbiAgICAnw6HCuMKNJzogJ2QnLFxuICAgICfDicKXJzogJ2QnLFxuICAgICfDocK2wpEnOiAnZCcsXG4gICAgJ8OhwrjCjyc6ICdkJyxcbiAgICAnw6HCtcKtJzogJ2QnLFxuICAgICfDocK2woEnOiAnZCcsXG4gICAgJ8OEwpEnOiAnZCcsXG4gICAgJ8OJwpYnOiAnZCcsXG4gICAgJ8OGwownOiAnZCcsXG4gICAgJ8OEwrEnOiAnaScsXG4gICAgJ8OIwrcnOiAnaicsXG4gICAgJ8OJwp8nOiAnaicsXG4gICAgJ8OKwoQnOiAnaicsXG4gICAgJ8OHwrMnOiAnZHonLFxuICAgICfDh8KGJzogJ2R6JyxcbiAgICAnw4PCqSc6ICdlJyxcbiAgICAnw4TClSc6ICdlJyxcbiAgICAnw4TCmyc6ICdlJyxcbiAgICAnw4jCqSc6ICdlJyxcbiAgICAnw6HCuMKdJzogJ2UnLFxuICAgICfDg8KqJzogJ2UnLFxuICAgICfDocK6wr8nOiAnZScsXG4gICAgJ8OhwrvChyc6ICdlJyxcbiAgICAnw6HCu8KBJzogJ2UnLFxuICAgICfDocK7woMnOiAnZScsXG4gICAgJ8OhwrvChSc6ICdlJyxcbiAgICAnw6HCuMKZJzogJ2UnLFxuICAgICfDg8KrJzogJ2UnLFxuICAgICfDhMKXJzogJ2UnLFxuICAgICfDocK6wrknOiAnZScsXG4gICAgJ8OIwoUnOiAnZScsXG4gICAgJ8ODwqgnOiAnZScsXG4gICAgJ8OhwrrCuyc6ICdlJyxcbiAgICAnw4jChyc6ICdlJyxcbiAgICAnw4TCkyc6ICdlJyxcbiAgICAnw6HCuMKXJzogJ2UnLFxuICAgICfDocK4wpUnOiAnZScsXG4gICAgJ8OiwrHCuCc6ICdlJyxcbiAgICAnw4TCmSc6ICdlJyxcbiAgICAnw6HCtsKSJzogJ2UnLFxuICAgICfDicKHJzogJ2UnLFxuICAgICfDocK6wr0nOiAnZScsXG4gICAgJ8OhwrjCmyc6ICdlJyxcbiAgICAnw6rCncKrJzogJ2V0JyxcbiAgICAnw6HCuMKfJzogJ2YnLFxuICAgICfDhsKSJzogJ2YnLFxuICAgICfDocK1wq4nOiAnZicsXG4gICAgJ8OhwrbCgic6ICdmJyxcbiAgICAnw4fCtSc6ICdnJyxcbiAgICAnw4TCnyc6ICdnJyxcbiAgICAnw4fCpyc6ICdnJyxcbiAgICAnw4TCoyc6ICdnJyxcbiAgICAnw4TCnSc6ICdnJyxcbiAgICAnw4TCoSc6ICdnJyxcbiAgICAnw4nCoCc6ICdnJyxcbiAgICAnw6HCuMKhJzogJ2cnLFxuICAgICfDocK2woMnOiAnZycsXG4gICAgJ8OHwqUnOiAnZycsXG4gICAgJ8OhwrjCqyc6ICdoJyxcbiAgICAnw4jCnyc6ICdoJyxcbiAgICAnw6HCuMKpJzogJ2gnLFxuICAgICfDhMKlJzogJ2gnLFxuICAgICfDosKxwqgnOiAnaCcsXG4gICAgJ8OhwrjCpyc6ICdoJyxcbiAgICAnw6HCuMKjJzogJ2gnLFxuICAgICfDocK4wqUnOiAnaCcsXG4gICAgJ8OJwqYnOiAnaCcsXG4gICAgJ8OhwrrClic6ICdoJyxcbiAgICAnw4TCpyc6ICdoJyxcbiAgICAnw4bClSc6ICdodicsXG4gICAgJ8ODwq0nOiAnaScsXG4gICAgJ8OEwq0nOiAnaScsXG4gICAgJ8OHwpAnOiAnaScsXG4gICAgJ8ODwq4nOiAnaScsXG4gICAgJ8ODwq8nOiAnaScsXG4gICAgJ8OhwrjCryc6ICdpJyxcbiAgICAnw6HCu8KLJzogJ2knLFxuICAgICfDiMKJJzogJ2knLFxuICAgICfDg8KsJzogJ2knLFxuICAgICfDocK7woknOiAnaScsXG4gICAgJ8OIwosnOiAnaScsXG4gICAgJ8OEwqsnOiAnaScsXG4gICAgJ8OEwq8nOiAnaScsXG4gICAgJ8OhwrbClic6ICdpJyxcbiAgICAnw4nCqCc6ICdpJyxcbiAgICAnw4TCqSc6ICdpJyxcbiAgICAnw6HCuMKtJzogJ2knLFxuICAgICfDqsKdwronOiAnZCcsXG4gICAgJ8Oqwp3CvCc6ICdmJyxcbiAgICAnw6HCtcK5JzogJ2cnLFxuICAgICfDqsKewoMnOiAncicsXG4gICAgJ8Oqwp7ChSc6ICdzJyxcbiAgICAnw6rCnsKHJzogJ3QnLFxuICAgICfDqsKdwq0nOiAnaXMnLFxuICAgICfDh8KwJzogJ2onLFxuICAgICfDhMK1JzogJ2onLFxuICAgICfDisKdJzogJ2onLFxuICAgICfDicKJJzogJ2onLFxuICAgICfDocK4wrEnOiAnaycsXG4gICAgJ8OHwqknOiAnaycsXG4gICAgJ8OEwrcnOiAnaycsXG4gICAgJ8OiwrHCqic6ICdrJyxcbiAgICAnw6rCncKDJzogJ2snLFxuICAgICfDocK4wrMnOiAnaycsXG4gICAgJ8OGwpknOiAnaycsXG4gICAgJ8OhwrjCtSc6ICdrJyxcbiAgICAnw6HCtsKEJzogJ2snLFxuICAgICfDqsKdwoEnOiAnaycsXG4gICAgJ8Oqwp3ChSc6ICdrJyxcbiAgICAnw4TCuic6ICdsJyxcbiAgICAnw4bCmic6ICdsJyxcbiAgICAnw4nCrCc6ICdsJyxcbiAgICAnw4TCvic6ICdsJyxcbiAgICAnw4TCvCc6ICdsJyxcbiAgICAnw6HCuMK9JzogJ2wnLFxuICAgICfDiMK0JzogJ2wnLFxuICAgICfDocK4wrcnOiAnbCcsXG4gICAgJ8OhwrjCuSc6ICdsJyxcbiAgICAnw6LCscKhJzogJ2wnLFxuICAgICfDqsKdwoknOiAnbCcsXG4gICAgJ8OhwrjCuyc6ICdsJyxcbiAgICAnw4XCgCc6ICdsJyxcbiAgICAnw4nCqyc6ICdsJyxcbiAgICAnw6HCtsKFJzogJ2wnLFxuICAgICfDicKtJzogJ2wnLFxuICAgICfDhcKCJzogJ2wnLFxuICAgICfDh8KJJzogJ2xqJyxcbiAgICAnw4XCvyc6ICdzJyxcbiAgICAnw6HCusKcJzogJ3MnLFxuICAgICfDocK6wpsnOiAncycsXG4gICAgJ8OhwrrCnSc6ICdzJyxcbiAgICAnw6HCuMK/JzogJ20nLFxuICAgICfDocK5woEnOiAnbScsXG4gICAgJ8OhwrnCgyc6ICdtJyxcbiAgICAnw4nCsSc6ICdtJyxcbiAgICAnw6HCtcKvJzogJ20nLFxuICAgICfDocK2woYnOiAnbScsXG4gICAgJ8OFwoQnOiAnbicsXG4gICAgJ8OFwognOiAnbicsXG4gICAgJ8OFwoYnOiAnbicsXG4gICAgJ8OhwrnCiyc6ICduJyxcbiAgICAnw4jCtSc6ICduJyxcbiAgICAnw6HCucKFJzogJ24nLFxuICAgICfDocK5wocnOiAnbicsXG4gICAgJ8OHwrknOiAnbicsXG4gICAgJ8OJwrInOiAnbicsXG4gICAgJ8OhwrnCiSc6ICduJyxcbiAgICAnw4bCnic6ICduJyxcbiAgICAnw6HCtcKwJzogJ24nLFxuICAgICfDocK2wocnOiAnbicsXG4gICAgJ8OJwrMnOiAnbicsXG4gICAgJ8ODwrEnOiAnbicsXG4gICAgJ8OHwownOiAnbmonLFxuICAgICfDg8KzJzogJ28nLFxuICAgICfDhcKPJzogJ28nLFxuICAgICfDh8KSJzogJ28nLFxuICAgICfDg8K0JzogJ28nLFxuICAgICfDocK7wpEnOiAnbycsXG4gICAgJ8OhwrvCmSc6ICdvJyxcbiAgICAnw6HCu8KTJzogJ28nLFxuICAgICfDocK7wpUnOiAnbycsXG4gICAgJ8OhwrvClyc6ICdvJyxcbiAgICAnw4PCtic6ICdvJyxcbiAgICAnw4jCqyc6ICdvJyxcbiAgICAnw4jCryc6ICdvJyxcbiAgICAnw4jCsSc6ICdvJyxcbiAgICAnw6HCu8KNJzogJ28nLFxuICAgICfDhcKRJzogJ28nLFxuICAgICfDiMKNJzogJ28nLFxuICAgICfDg8KyJzogJ28nLFxuICAgICfDocK7wo8nOiAnbycsXG4gICAgJ8OGwqEnOiAnbycsXG4gICAgJ8OhwrvCmyc6ICdvJyxcbiAgICAnw6HCu8KjJzogJ28nLFxuICAgICfDocK7wp0nOiAnbycsXG4gICAgJ8OhwrvCnyc6ICdvJyxcbiAgICAnw6HCu8KhJzogJ28nLFxuICAgICfDiMKPJzogJ28nLFxuICAgICfDqsKdwosnOiAnbycsXG4gICAgJ8Oqwp3CjSc6ICdvJyxcbiAgICAnw6LCscK6JzogJ28nLFxuICAgICfDhcKNJzogJ28nLFxuICAgICfDocK5wpMnOiAnbycsXG4gICAgJ8OhwrnCkSc6ICdvJyxcbiAgICAnw4fCqyc6ICdvJyxcbiAgICAnw4fCrSc6ICdvJyxcbiAgICAnw4PCuCc6ICdvJyxcbiAgICAnw4fCvyc6ICdvJyxcbiAgICAnw4PCtSc6ICdvJyxcbiAgICAnw6HCucKNJzogJ28nLFxuICAgICfDocK5wo8nOiAnbycsXG4gICAgJ8OIwq0nOiAnbycsXG4gICAgJ8OGwqMnOiAnb2knLFxuICAgICfDqsKdwo8nOiAnb28nLFxuICAgICfDicKbJzogJ2UnLFxuICAgICfDocK2wpMnOiAnZScsXG4gICAgJ8OJwpQnOiAnbycsXG4gICAgJ8OhwrbClyc6ICdvJyxcbiAgICAnw4jCoyc6ICdvdScsXG4gICAgJ8OhwrnClSc6ICdwJyxcbiAgICAnw6HCucKXJzogJ3AnLFxuICAgICfDqsKdwpMnOiAncCcsXG4gICAgJ8OGwqUnOiAncCcsXG4gICAgJ8OhwrXCsSc6ICdwJyxcbiAgICAnw6HCtsKIJzogJ3AnLFxuICAgICfDqsKdwpUnOiAncCcsXG4gICAgJ8OhwrXCvSc6ICdwJyxcbiAgICAnw6rCncKRJzogJ3AnLFxuICAgICfDqsKdwpknOiAncScsXG4gICAgJ8OKwqAnOiAncScsXG4gICAgJ8OJwosnOiAncScsXG4gICAgJ8Oqwp3Clyc6ICdxJyxcbiAgICAnw4XClSc6ICdyJyxcbiAgICAnw4XCmSc6ICdyJyxcbiAgICAnw4XClyc6ICdyJyxcbiAgICAnw6HCucKZJzogJ3InLFxuICAgICfDocK5wpsnOiAncicsXG4gICAgJ8OhwrnCnSc6ICdyJyxcbiAgICAnw4jCkSc6ICdyJyxcbiAgICAnw4nCvic6ICdyJyxcbiAgICAnw6HCtcKzJzogJ3InLFxuICAgICfDiMKTJzogJ3InLFxuICAgICfDocK5wp8nOiAncicsXG4gICAgJ8OJwrwnOiAncicsXG4gICAgJ8OhwrXCsic6ICdyJyxcbiAgICAnw6HCtsKJJzogJ3InLFxuICAgICfDicKNJzogJ3InLFxuICAgICfDicK9JzogJ3InLFxuICAgICfDosKGwoQnOiAnYycsXG4gICAgJ8OqwpzCvyc6ICdjJyxcbiAgICAnw4nCmCc6ICdlJyxcbiAgICAnw4nCvyc6ICdyJyxcbiAgICAnw4XCmyc6ICdzJyxcbiAgICAnw6HCucKlJzogJ3MnLFxuICAgICfDhcKhJzogJ3MnLFxuICAgICfDocK5wqcnOiAncycsXG4gICAgJ8OFwp8nOiAncycsXG4gICAgJ8OFwp0nOiAncycsXG4gICAgJ8OIwpknOiAncycsXG4gICAgJ8OhwrnCoSc6ICdzJyxcbiAgICAnw6HCucKjJzogJ3MnLFxuICAgICfDocK5wqknOiAncycsXG4gICAgJ8OKwoInOiAncycsXG4gICAgJ8OhwrXCtCc6ICdzJyxcbiAgICAnw6HCtsKKJzogJ3MnLFxuICAgICfDiMK/JzogJ3MnLFxuICAgICfDicKhJzogJ2cnLFxuICAgICfDocK0wpEnOiAnbycsXG4gICAgJ8OhwrTCkyc6ICdvJyxcbiAgICAnw6HCtMKdJzogJ3UnLFxuICAgICfDhcKlJzogJ3QnLFxuICAgICfDhcKjJzogJ3QnLFxuICAgICfDocK5wrEnOiAndCcsXG4gICAgJ8OIwpsnOiAndCcsXG4gICAgJ8OIwrYnOiAndCcsXG4gICAgJ8OhwrrClyc6ICd0JyxcbiAgICAnw6LCscKmJzogJ3QnLFxuICAgICfDocK5wqsnOiAndCcsXG4gICAgJ8OhwrnCrSc6ICd0JyxcbiAgICAnw4bCrSc6ICd0JyxcbiAgICAnw6HCucKvJzogJ3QnLFxuICAgICfDocK1wrUnOiAndCcsXG4gICAgJ8OGwqsnOiAndCcsXG4gICAgJ8OKwognOiAndCcsXG4gICAgJ8OFwqcnOiAndCcsXG4gICAgJ8OhwrXCuic6ICd0aCcsXG4gICAgJ8OJwpAnOiAnYScsXG4gICAgJ8OhwrTCgic6ICdhZScsXG4gICAgJ8OHwp0nOiAnZScsXG4gICAgJ8OhwrXCtyc6ICdnJyxcbiAgICAnw4nCpSc6ICdoJyxcbiAgICAnw4rCric6ICdoJyxcbiAgICAnw4rCryc6ICdoJyxcbiAgICAnw6HCtMKJJzogJ2knLFxuICAgICfDisKeJzogJ2snLFxuICAgICfDqsKewoEnOiAnbCcsXG4gICAgJ8OJwq8nOiAnbScsXG4gICAgJ8OJwrAnOiAnbScsXG4gICAgJ8OhwrTClCc6ICdvZScsXG4gICAgJ8OJwrknOiAncicsXG4gICAgJ8OJwrsnOiAncicsXG4gICAgJ8OJwronOiAncicsXG4gICAgJ8OiwrHCuSc6ICdyJyxcbiAgICAnw4rChyc6ICd0JyxcbiAgICAnw4rCjCc6ICd2JyxcbiAgICAnw4rCjSc6ICd3JyxcbiAgICAnw4rCjic6ICd5JyxcbiAgICAnw6rCnMKpJzogJ3R6JyxcbiAgICAnw4PCuic6ICd1JyxcbiAgICAnw4XCrSc6ICd1JyxcbiAgICAnw4fClCc6ICd1JyxcbiAgICAnw4PCuyc6ICd1JyxcbiAgICAnw6HCucK3JzogJ3UnLFxuICAgICfDg8K8JzogJ3UnLFxuICAgICfDh8KYJzogJ3UnLFxuICAgICfDh8KaJzogJ3UnLFxuICAgICfDh8KcJzogJ3UnLFxuICAgICfDh8KWJzogJ3UnLFxuICAgICfDocK5wrMnOiAndScsXG4gICAgJ8OhwrvCpSc6ICd1JyxcbiAgICAnw4XCsSc6ICd1JyxcbiAgICAnw4jClSc6ICd1JyxcbiAgICAnw4PCuSc6ICd1JyxcbiAgICAnw6HCu8KnJzogJ3UnLFxuICAgICfDhsKwJzogJ3UnLFxuICAgICfDocK7wqknOiAndScsXG4gICAgJ8OhwrvCsSc6ICd1JyxcbiAgICAnw6HCu8KrJzogJ3UnLFxuICAgICfDocK7wq0nOiAndScsXG4gICAgJ8OhwrvCryc6ICd1JyxcbiAgICAnw4jClyc6ICd1JyxcbiAgICAnw4XCqyc6ICd1JyxcbiAgICAnw6HCucK7JzogJ3UnLFxuICAgICfDhcKzJzogJ3UnLFxuICAgICfDocK2wpknOiAndScsXG4gICAgJ8OFwq8nOiAndScsXG4gICAgJ8OFwqknOiAndScsXG4gICAgJ8OhwrnCuSc6ICd1JyxcbiAgICAnw6HCucK1JzogJ3UnLFxuICAgICfDocK1wqsnOiAndWUnLFxuICAgICfDqsKdwrgnOiAndW0nLFxuICAgICfDosKxwrQnOiAndicsXG4gICAgJ8Oqwp3Cnyc6ICd2JyxcbiAgICAnw6HCucK/JzogJ3YnLFxuICAgICfDisKLJzogJ3YnLFxuICAgICfDocK2wownOiAndicsXG4gICAgJ8OiwrHCsSc6ICd2JyxcbiAgICAnw6HCucK9JzogJ3YnLFxuICAgICfDqsKdwqEnOiAndnknLFxuICAgICfDocK6woMnOiAndycsXG4gICAgJ8OFwrUnOiAndycsXG4gICAgJ8OhwrrChSc6ICd3JyxcbiAgICAnw6HCusKHJzogJ3cnLFxuICAgICfDocK6woknOiAndycsXG4gICAgJ8OhwrrCgSc6ICd3JyxcbiAgICAnw6LCscKzJzogJ3cnLFxuICAgICfDocK6wpgnOiAndycsXG4gICAgJ8OhwrrCjSc6ICd4JyxcbiAgICAnw6HCusKLJzogJ3gnLFxuICAgICfDocK2wo0nOiAneCcsXG4gICAgJ8ODwr0nOiAneScsXG4gICAgJ8OFwrcnOiAneScsXG4gICAgJ8ODwr8nOiAneScsXG4gICAgJ8OhwrrCjyc6ICd5JyxcbiAgICAnw6HCu8K1JzogJ3knLFxuICAgICfDocK7wrMnOiAneScsXG4gICAgJ8OGwrQnOiAneScsXG4gICAgJ8OhwrvCtyc6ICd5JyxcbiAgICAnw6HCu8K/JzogJ3knLFxuICAgICfDiMKzJzogJ3knLFxuICAgICfDocK6wpknOiAneScsXG4gICAgJ8OJwo8nOiAneScsXG4gICAgJ8OhwrvCuSc6ICd5JyxcbiAgICAnw4XCuic6ICd6JyxcbiAgICAnw4XCvic6ICd6JyxcbiAgICAnw6HCusKRJzogJ3onLFxuICAgICfDisKRJzogJ3onLFxuICAgICfDosKxwqwnOiAneicsXG4gICAgJ8OFwrwnOiAneicsXG4gICAgJ8OhwrrCkyc6ICd6JyxcbiAgICAnw4jCpSc6ICd6JyxcbiAgICAnw6HCusKVJzogJ3onLFxuICAgICfDocK1wrYnOiAneicsXG4gICAgJ8OhwrbCjic6ICd6JyxcbiAgICAnw4rCkCc6ICd6JyxcbiAgICAnw4bCtic6ICd6JyxcbiAgICAnw4nCgCc6ICd6JyxcbiAgICAnw6/CrMKAJzogJ2ZmJyxcbiAgICAnw6/CrMKDJzogJ2ZmaScsXG4gICAgJ8OvwqzChCc6ICdmZmwnLFxuICAgICfDr8KswoEnOiAnZmknLFxuICAgICfDr8KswoInOiAnZmwnLFxuICAgICfDhMKzJzogJ2lqJyxcbiAgICAnw4XCkyc6ICdvZScsXG4gICAgJ8OvwqzChic6ICdzdCcsXG4gICAgJ8OiwoLCkCc6ICdhJyxcbiAgICAnw6LCgsKRJzogJ2UnLFxuICAgICfDocK1wqInOiAnaScsXG4gICAgJ8OiwrHCvCc6ICdqJyxcbiAgICAnw6LCgsKSJzogJ28nLFxuICAgICfDocK1wqMnOiAncicsXG4gICAgJ8OhwrXCpCc6ICd1JyxcbiAgICAnw6HCtcKlJzogJ3YnLFxuICAgICfDosKCwpMnOiAneCdcbn07XG4iLCJpbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkT3B0aW9ucyB7XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBhbmltYXRpb246IGJvb2xlYW47XG4gIHR5cGVhaGVhZFJlZjogVHlwZWFoZWFkRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR5cGVhaGVhZE9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVHlwZWFoZWFkTWF0Y2gge1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHJlYWRvbmx5IGl0ZW06IGFueTtcbiAgcHJvdGVjdGVkIGhlYWRlcjogYm9vbGVhbjtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3RvcihpdGVtOiBhbnksIHZhbHVlOiBzdHJpbmcgPSBpdGVtLCBoZWFkZXIgPSBmYWxzZSkge1xuICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICB9XG5cbiAgaXNIZWFkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBsYXRpbk1hcCB9IGZyb20gJy4vbGF0aW4tbWFwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxhdGluaXplKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teQS1aYS16MC05XFxbXFxdIF0vZywgZnVuY3Rpb24gKGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxhdGluTWFwW2FdIHx8IGE7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFJlZ2V4OiBjYXB0dXJlIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nXG4gIC8vIHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIHRoZSByZXN1bHRzLCBmb3IgZXhhbXBsZSBpZiB0aGUgY2FwdHVyZSBpc1xuICAvLyAnYScgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHN0cjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRSZWdleERlbGltaXRlcnMgPSAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGhyYXNlUmVnZXhEZWxpbWl0ZXJzID0gJycpOiBBcnJheTxzdHJpbmc+IHtcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xuICBjb25zdCByZWdleFN0ciA9IGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSkoW14ke3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKylgICtcbiAgICBgKD86WyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0pfChbXiR7d29yZFJlZ2V4RGVsaW1pdGVyc31dKylgO1xuICBjb25zdCBwcmVUb2tlbml6ZWQ6IHN0cmluZ1tdID0gc3RyLnNwbGl0KG5ldyBSZWdFeHAocmVnZXhTdHIsICdnJykpO1xuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHByZVRva2VuaXplZExlbmd0aDogbnVtYmVyID0gcHJlVG9rZW5pemVkLmxlbmd0aDtcbiAgbGV0IHRva2VuOiBzdHJpbmc7XG4gIGNvbnN0IHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzID0gbmV3IFJlZ0V4cChgWyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rYCwgJ2cnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZVRva2VuaXplZExlbmd0aDsgaSArPSAxKSB7XG4gICAgdG9rZW4gPSBwcmVUb2tlbml6ZWRbaV07XG4gICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCAmJiB0b2tlbiAhPT0gd29yZFJlZ2V4RGVsaW1pdGVycykge1xuICAgICAgcmVzdWx0LnB1c2godG9rZW4ucmVwbGFjZShyZXBsYWNlUGhyYXNlRGVsaW1pdGVycywgJycpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGcm9tT2JqZWN0KG9iamVjdDogYW55LCBvcHRpb246IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghb3B0aW9uIHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdGlvbi5lbmRzV2l0aCgnKCknKSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IG9wdGlvbi5zbGljZSgwLCBvcHRpb24ubGVuZ3RoIC0gMik7XG5cbiAgICByZXR1cm4gb2JqZWN0W2Z1bmN0aW9uTmFtZV0oKS50b1N0cmluZygpO1xuICB9XG5cbiAgY29uc3QgcHJvcGVydGllczogc3RyaW5nID0gb3B0aW9uXG4gICAgLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJylcbiAgICAucmVwbGFjZSgvXlxcLi8sICcnKTtcbiAgY29uc3QgcHJvcGVydGllc0FycmF5OiBzdHJpbmdbXSA9IHByb3BlcnRpZXMuc3BsaXQoJy4nKTtcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXNBcnJheSkge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgb2JqZWN0ID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgaWYgKCFvYmplY3QpIHtyZXR1cm4gJyc7IH1cblxuICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNCczMsIFV0aWxzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBsYXRpbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcbmltcG9ydCB7IFR5cGVhaGVhZE1hdGNoIH0gZnJvbSAnLi90eXBlYWhlYWQtbWF0Y2guY2xhc3MnO1xuaW1wb3J0IHsgVHlwZWFoZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHlwZWFoZWFkLWNvbnRhaW5lcicsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2Ryb3Bkb3duIG9wZW4nLFxuICAgICdbY2xhc3MuZHJvcGRvd24tbWVudV0nOiAnaXNCczQnLFxuICAgICdbc3R5bGUub3ZlcmZsb3cteV0nIDogYGlzQnM0ICYmIG5lZWRTY3JvbGxiYXIgPyAnc2Nyb2xsJzogJ3Zpc2libGUnYCxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/IGd1aUhlaWdodDogJ2F1dG8nYCxcbiAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogYHR5cGVhaGVhZFNjcm9sbGFibGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ2AsXG4gICAgJ1tjbGFzcy5kcm9wdXBdJzogJ2Ryb3B1cCcsXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7ZGlzcGxheTogYmxvY2s7J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB7XG4gIHBhcmVudDogVHlwZWFoZWFkRGlyZWN0aXZlO1xuICBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmc7XG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICB0b3A6IHN0cmluZztcbiAgbGVmdDogc3RyaW5nO1xuICBkaXNwbGF5OiBzdHJpbmc7XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBkcm9wdXA6IGJvb2xlYW47XG4gIGd1aUhlaWdodDogc3RyaW5nO1xuICBuZWVkU2Nyb2xsYmFyOiBib29sZWFuO1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2FjdGl2ZTogVHlwZWFoZWFkTWF0Y2g7XG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcpXG4gIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2xpRWxlbWVudHMnKVxuICBwcml2YXRlIGxpRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpOiBUeXBlYWhlYWRNYXRjaCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2V0IG1hdGNoZXModmFsdWU6IFR5cGVhaGVhZE1hdGNoW10pIHtcbiAgICB0aGlzLl9tYXRjaGVzID0gdmFsdWU7XG4gICAgdGhpcy5uZWVkU2Nyb2xsYmFyID0gdGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlICYmIHRoaXMudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPCB0aGlzLm1hdGNoZXMubGVuZ3RoO1xuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFNjcm9sbGFibGVNb2RlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9tYXRjaGVzWzBdO1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBvcHRpb25zTGlzdFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9wdGlvbnNMaXN0VGVtcGxhdGUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgdHlwZWFoZWFkU2Nyb2xsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRTY3JvbGxhYmxlIDogZmFsc2U7XG4gIH1cblxuXG4gIGdldCB0eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3IDogNTtcbiAgfVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgaXRlbVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZEl0ZW1UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5fYWN0aXZlKTtcbiAgfVxuXG4gIHByZXZBY3RpdmVNYXRjaCgpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuX2FjdGl2ZSk7XG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5tYXRjaGVzW1xuICAgICAgaW5kZXggLSAxIDwgMCA/IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXG4gICAgICBdO1xuICAgIGlmICh0aGlzLl9hY3RpdmUuaXNIZWFkZXIoKSkge1xuICAgICAgdGhpcy5wcmV2QWN0aXZlTWF0Y2goKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGxQcmV2aW91cyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dEFjdGl2ZU1hdGNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5fYWN0aXZlKTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXG4gICAgICBpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFcbiAgICAgIF07XG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbE5leHQoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFjdGl2ZSh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cblxuICBoaWdobGlnaHQobWF0Y2g6IFR5cGVhaGVhZE1hdGNoLCBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBpdGVtU3RyOiBzdHJpbmcgPSBtYXRjaC52YWx1ZTtcbiAgICBsZXQgaXRlbVN0ckhlbHBlcjogc3RyaW5nID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKGl0ZW1TdHIpXG4gICAgICA6IGl0ZW1TdHIpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHN0YXJ0SWR4OiBudW1iZXI7XG4gICAgbGV0IHRva2VuTGVuOiBudW1iZXI7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5TGVuOiBudW1iZXIgPSBxdWVyeS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5TGVuOyBpICs9IDEpIHtcbiAgICAgICAgLy8gcXVlcnlbaV0gaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcbiAgICAgICAgc3RhcnRJZHggPSBpdGVtU3RySGVscGVyLmluZGV4T2YocXVlcnlbaV0pO1xuICAgICAgICB0b2tlbkxlbiA9IHF1ZXJ5W2ldLmxlbmd0aDtcbiAgICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XG4gICAgICAgICAgaXRlbVN0ciA9XG4gICAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZygwLCBzdGFydElkeCl9PHN0cm9uZz4ke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4LCBzdGFydElkeCArIHRva2VuTGVuKX08L3N0cm9uZz5gICtcbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XG4gICAgICAgICAgaXRlbVN0ckhlbHBlciA9XG4gICAgICAgICAgICBgJHtpdGVtU3RySGVscGVyLnN1YnN0cmluZygwLCBzdGFydElkeCl9ICAgICAgICAkeycgJy5yZXBlYXQodG9rZW5MZW4pfSAgICAgICAgIGAgK1xuICAgICAgICAgICAgYCR7aXRlbVN0ckhlbHBlci5zdWJzdHJpbmcoc3RhcnRJZHggKyB0b2tlbkxlbil9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocXVlcnkpIHtcbiAgICAgIC8vIHF1ZXJ5IGlzIGFscmVhZHkgbGF0aW5pemVkIGFuZCBsb3dlciBjYXNlXG4gICAgICBzdGFydElkeCA9IGl0ZW1TdHJIZWxwZXIuaW5kZXhPZihxdWVyeSk7XG4gICAgICB0b2tlbkxlbiA9IHF1ZXJ5Lmxlbmd0aDtcbiAgICAgIGlmIChzdGFydElkeCA+PSAwICYmIHRva2VuTGVuID4gMCkge1xuICAgICAgICBpdGVtU3RyID1cbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZygwLCBzdGFydElkeCl9PHN0cm9uZz4ke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4LCBzdGFydElkeCArIHRva2VuTGVuKX08L3N0cm9uZz5gICtcbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtU3RyO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBmb2N1c0xvc3QoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlzQWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmUgPT09IHZhbHVlO1xuICB9XG5cbiAgc2VsZWN0TWF0Y2godmFsdWU6IFR5cGVhaGVhZE1hdGNoLCBlOiBFdmVudCA9IHZvaWQgMCk6IGJvb2xlYW4ge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudC5jaGFuZ2VNb2RlbCh2YWx1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhcmVudC50eXBlYWhlYWRPblNlbGVjdC5lbWl0KHZhbHVlKSwgMCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRTY3JvbGxhYmxlTW9kZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudWxFbGVtZW50KSB7XG4gICAgICB0aGlzLnVsRWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlFbGVtZW50cy5maXJzdCkge1xuICAgICAgY29uc3QgdWxTdHlsZXMgPSBVdGlscy5nZXRTdHlsZXModGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCBsaVN0eWxlcyA9IFV0aWxzLmdldFN0eWxlcyh0aGlzLmxpRWxlbWVudHMuZmlyc3QubmF0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCB1bFBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KCh1bFN0eWxlc1sncGFkZGluZy1ib3R0b20nXSA/IHVsU3R5bGVzWydwYWRkaW5nLWJvdHRvbSddIDogJycpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCB1bFBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KCh1bFN0eWxlc1sncGFkZGluZy10b3AnXSA/IHVsU3R5bGVzWydwYWRkaW5nLXRvcCddIDogJzAnKVxuICAgICAgICAucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgY29uc3Qgb3B0aW9uSGVpZ2h0ID0gcGFyc2VGbG9hdCgobGlTdHlsZXMuaGVpZ2h0ID8gbGlTdHlsZXMuaGVpZ2h0IDogJzAnKVxuICAgICAgICAucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyAqIG9wdGlvbkhlaWdodDtcbiAgICAgIHRoaXMuZ3VpSGVpZ2h0ID0gYCR7aGVpZ2h0ICsgdWxQYWRkaW5nVG9wICsgdWxQYWRkaW5nQm90dG9tfXB4YDtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICB9XG5cbiAgc2Nyb2xsUHJldmlvdXMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGxpRWxlbWVudCA9IHRoaXMubGlFbGVtZW50cy50b0FycmF5KClbaW5kZXggLSAxXTtcbiAgICAgIGlmIChsaUVsZW1lbnQgJiYgIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGxpRWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzY3JvbGxOZXh0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5saUVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBsaUVsZW1lbnQgPSB0aGlzLmxpRWxlbWVudHMudG9BcnJheSgpW2luZGV4ICsgMV07XG4gICAgICBpZiAobGlFbGVtZW50ICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhsaUVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPVxuICAgICAgICAgIGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtXG4gICAgICAgICAgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArXG4gICAgICAgICAgTnVtYmVyKGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBwcml2YXRlIGlzU2Nyb2xsZWRJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdUb3A6IG51bWJlciA9IHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdCb3R0b20gPSBjb250YWluZXJWaWV3VG9wICsgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICBjb25zdCBlbGVtVG9wID0gZWxlbS5vZmZzZXRUb3A7XG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgIHJldHVybiAoKGVsZW1Cb3R0b20gPD0gY29udGFpbmVyVmlld0JvdHRvbSkgJiYgKGVsZW1Ub3AgPj0gY29udGFpbmVyVmlld1RvcCkpO1xuICB9O1xuXG4gIHByaXZhdGUgc2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21PYmplY3QsIGxhdGluaXplLCB0b2tlbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1t0eXBlYWhlYWRdJywgZXhwb3J0QXM6ICdicy10eXBlYWhlYWQnfSlcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBvcHRpb25zIHNvdXJjZSwgY2FuIGJlIEFycmF5IG9mIHN0cmluZ3MsIG9iamVjdHMgb3JcbiAgICogYW4gT2JzZXJ2YWJsZSBmb3IgZXh0ZXJuYWwgbWF0Y2hpbmcgcHJvY2Vzc1xuICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIHR5cGVhaGVhZDogYW55O1xuICAvKiogbWluaW1hbCBubyBvZiBjaGFyYWN0ZXJzIHRoYXQgbmVlZHMgdG8gYmUgZW50ZXJlZCBiZWZvcmVcbiAgICogdHlwZWFoZWFkIGtpY2tzLWluLiBXaGVuIHNldCB0byAwLCB0eXBlYWhlYWQgc2hvd3Mgb24gZm9jdXMgd2l0aCBmdWxsXG4gICAqIGxpc3Qgb2Ygb3B0aW9ucyAobGltaXRlZCBhcyBub3JtYWwgYnkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0KVxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkTWluTGVuZ3RoOiBudW1iZXIgPSB2b2lkIDA7XG4gIC8qKiBtaW5pbWFsIHdhaXQgdGltZSBhZnRlciBsYXN0IGNoYXJhY3RlciB0eXBlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdhaXRNczogbnVtYmVyO1xuICAvKiogbWF4aW11bSBsZW5ndGggb2Ygb3B0aW9ucyBpdGVtcyBsaXN0ICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbnNMaW1pdDogbnVtYmVyO1xuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZFxuICAgKiB0aGF0IGNvbnRhaW5zIHRoZSBvcHRpb25zIHZhbHVlLCB3ZSB1c2UgYXJyYXkgaXRlbSBhcyBvcHRpb24gaW4gY2FzZVxuICAgKiBvZiB0aGlzIGZpZWxkIGlzIG1pc3NpbmcuIFN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uRmllbGQ6IHN0cmluZztcbiAgLyoqIHdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlIG5hbWUgb2YgZmllbGQgdGhhdFxuICAgKiBjb250YWlucyB0aGUgZ3JvdXAgdmFsdWUsIG1hdGNoZXMgYXJlIGdyb3VwZWQgYnkgdGhpcyBmaWVsZCB3aGVuIHNldC5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEdyb3VwRmllbGQ6IHN0cmluZztcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSBvZiB0eXBlYWhlYWQgYXR0cmlidXRlIGlzIGFycmF5LlxuICAgKiBJZiB0cnVlIC0gbG9hZGluZyBvZiBvcHRpb25zIHdpbGwgYmUgYXN5bmMsIG90aGVyd2lzZSAtIHN5bmMuXG4gICAqIHRydWUgbWFrZSBzZW5zZSBpZiBvcHRpb25zIGFycmF5IGlzIGxhcmdlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkQXN5bmM6IGJvb2xlYW4gPSB2b2lkIDA7XG4gIC8qKiBtYXRjaCBsYXRpbiBzeW1ib2xzLlxuICAgKiBJZiB0cnVlIHRoZSB3b3JkIHPDg8K6cGVyIHdvdWxkIG1hdGNoIHN1cGVyIGFuZCB2aWNlIHZlcnNhLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkTGF0aW5pemUgPSB0cnVlO1xuICAvKiogQ2FuIGJlIHVzZSB0byBzZWFyY2ggd29yZHMgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJzXG4gICAqICBmb3IgZXhhbXBsZSAnQyBhIGwgaSBmIG8gciBuIGkgYScgd2lsbCBtYXRjaCAnQ2FsaWZvcm5pYScuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTaW5nbGVXb3JkcyA9IHRydWU7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2UgdHlwZWFoZWFkU2luZ2xlV29yZHMgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIGJyZWFrIHdvcmRzLiBEZWZhdWx0cyB0byBzcGFjZS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzID0gJyAnO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBtYXRjaCBleGFjdCBwaHJhc2UuXG4gICAqIERlZmF1bHRzIHRvIHNpbXBsZSBhbmQgZG91YmxlIHF1b3Rlcy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFBocmFzZURlbGltaXRlcnMgPSAnXFwnXCInO1xuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlcyBleHBvc2VkIGFyZSBjYWxsZWQgaXRlbSBhbmQgaW5kZXg7XG4gICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgdHlwZWFoZWFkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIG9wdGlvbnMgbGlzdCB0ZW1wbGF0ZS5cbiAgICogVGVtcGxhdGUgdmFyaWFibGVzOiBtYXRjaGVzLCBpdGVtVGVtcGxhdGUsIHF1ZXJ5XG4gICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgb3B0aW9uc0xpc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIHNwZWNpZmllcyBpZiB0eXBlYWhlYWQgaXMgc2Nyb2xsYWJsZSAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAvKiogc3BlY2lmaWVzIG51bWJlciBvZiBvcHRpb25zIHRvIHNob3cgaW4gc2Nyb2xsIHZpZXcgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3ID0gNTtcbiAgLyoqIGZpcmVkIHdoZW4gJ2J1c3knIHN0YXRlIG9mIHRoaXMgY29tcG9uZW50IHdhcyBjaGFuZ2VkLFxuICAgKiBmaXJlZCBvbiBhc3luYyBtb2RlIG9ubHksIHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZExvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qKiBmaXJlZCBvbiBldmVyeSBrZXkgZXZlbnQgYW5kIHJldHVybnMgdHJ1ZVxuICAgKiBpbiBjYXNlIG9mIG1hdGNoZXMgYXJlIG5vdCBkZXRlY3RlZFxuICAgKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZE5vUmVzdWx0cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gb3B0aW9uIHdhcyBzZWxlY3RlZCwgcmV0dXJuIG9iamVjdCB3aXRoIGRhdGEgb2YgdGhpcyBvcHRpb24gKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZE9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxUeXBlYWhlYWRNYXRjaD4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gYmx1ciBldmVudCBvY2N1cnJlcy4gcmV0dXJucyB0aGUgYWN0aXZlIGl0ZW0gKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0eXBlYWhlYWQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzICovXG4gIEBJbnB1dCgpIGRyb3B1cCA9IGZhbHNlO1xuXG4gIC8vIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgLyoqIGlmIGZhbHNlIHJlc3RyaWN0IG1vZGVsIHZhbHVlcyB0byB0aGUgb25lcyBzZWxlY3RlZCBmcm9tIHRoZSBwb3B1cCBvbmx5IHdpbGwgYmUgcHJvdmlkZWQgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEVkaXRhYmxlOmJvb2xlYW47XG4gIC8qKiBpZiBmYWxzZSB0aGUgZmlyc3QgbWF0Y2ggYXV0b21hdGljYWxseSB3aWxsIG5vdCBiZSBmb2N1c2VkIGFzIHlvdSB0eXBlICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c0ZpcnN0OmJvb2xlYW47XG4gIC8qKiBmb3JtYXQgdGhlIG5nLW1vZGVsIHJlc3VsdCBhZnRlciBzZWxlY3Rpb24gKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZElucHV0Rm9ybWF0dGVyOmFueTtcbiAgLyoqIGlmIHRydWUgYXV0b21hdGljYWxseSBzZWxlY3QgYW4gaXRlbSB3aGVuIHRoZXJlIGlzIG9uZSBvcHRpb24gdGhhdCBleGFjdGx5IG1hdGNoZXMgdGhlIHVzZXIgaW5wdXQgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uRXhhY3Q6Ym9vbGVhbjtcbiAgLyoqICBpZiB0cnVlIHNlbGVjdCB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIG1hdGNoIG9uIGJsdXIgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uQmx1cjpib29sZWFuO1xuICAvKiogIGlmIGZhbHNlIGRvbid0IGZvY3VzIHRoZSBpbnB1dCBlbGVtZW50IHRoZSB0eXBlYWhlYWQgZGlyZWN0aXZlIGlzIGFzc29jaWF0ZWQgd2l0aCBvbiBzZWxlY3Rpb24gKi9cbiAgICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRm9jdXNPblNlbGVjdDpib29sZWFuO1xuXG4gIF9jb250YWluZXI6IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudDtcbiAgaXNUeXBlYWhlYWRPcHRpb25zTGlzdEFjdGl2ZSA9IGZhbHNlO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJvdGVjdGVkIGtleVVwRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJvdGVjdGVkIF9tYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdO1xuICBwcm90ZWN0ZWQgcGxhY2VtZW50ID0gJ2JvdHRvbS1sZWZ0JztcbiAgLy8gcHJvdGVjdGVkIHBvcHVwOkNvbXBvbmVudFJlZjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgX3R5cGVhaGVhZDogQ29tcG9uZW50TG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX291dHNpZGVDbGlja0xpc3RlbmVyOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLl90eXBlYWhlYWQgPSBjaXMuY3JlYXRlTG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBlbGVtZW50LFxuICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgIHJlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgfHwgMjA7XG4gICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPVxuICAgICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IHZvaWQgMCA/IDEgOiB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aDtcbiAgICB0aGlzLnR5cGVhaGVhZFdhaXRNcyA9IHRoaXMudHlwZWFoZWFkV2FpdE1zIHx8IDA7XG5cbiAgICAvLyBhc3luYyBzaG91bGQgYmUgZmFsc2UgaW4gY2FzZSBvZiBhcnJheVxuICAgIGlmIChcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgISh0aGlzLnR5cGVhaGVhZCBpbnN0YW5jZW9mIE9ic2VydmFibGUpXG4gICAgKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkQXN5bmMpIHtcbiAgICAgIHRoaXMuYXN5bmNBY3Rpb25zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3luY0FjdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25JbnB1dChlOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBGb3IgYDxpbnB1dD5gcywgdXNlIHRoZSBgdmFsdWVgIHByb3BlcnR5LiBGb3Igb3RoZXJzIHRoYXQgZG9uJ3QgaGF2ZSBhXG4gICAgLy8gYHZhbHVlYCAoc3VjaCBhcyBgPHNwYW4gY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPmApLCB1c2UgZWl0aGVyXG4gICAgLy8gYHRleHRDb250ZW50YCBvciBgaW5uZXJUZXh0YCAoZGVwZW5kaW5nIG9uIHdoaWNoIG9uZSBpcyBzdXBwb3J0ZWQsIGkuZS5cbiAgICAvLyBGaXJlZm94IG9yIElFKS5cbiAgICBjb25zdCB2YWx1ZSA9XG4gICAgICBlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZS50YXJnZXQudmFsdWVcbiAgICAgICAgOiBlLnRhcmdldC50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICAgOiBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA+PSB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCkge1xuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyLmVtaXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgb25DaGFuZ2UoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIC8vIGVzY1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB1cFxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXZBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZG93blxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLm5leHRBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZW50ZXIsIHRhYlxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyLmVtaXQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJycpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy50eXBlYWhlYWRPbkJsdXIuZW1pdCh0aGlzLl9jb250YWluZXIuYWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBubyBjb250YWluZXIgLSBubyBwcm9ibGVtc1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgYW4gaXRlbSBpcyB2aXNpYmxlIC0gcHJldmVudCBmb3JtIHN1Ym1pc3Npb25cbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgYW4gaXRlbSBpcyB2aXNpYmxlIC0gZG9uJ3QgY2hhbmdlIGZvY3VzXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb2RlbChtYXRjaDogVHlwZWFoZWFkTWF0Y2gpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZVN0cjogc3RyaW5nID0gbWF0Y2gudmFsdWU7XG4gICAgdGhpcy5uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodmFsdWVTdHIpO1xuICAgICh0aGlzLm5nQ29udHJvbC5jb250cm9sKS5zZXRWYWx1ZSh2YWx1ZVN0cik7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBnZXQgbWF0Y2hlcygpOiBUeXBlYWhlYWRNYXRjaFtdIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcztcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fdHlwZWFoZWFkXG4gICAgICAuYXR0YWNoKFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC8vIHRvZG86IGFkZCBhcHBlbmQgdG8gYm9keSwgYWZ0ZXIgdXBkYXRpbmcgcG9zaXRpb25pbmcgc2VydmljZVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiBgJHt0aGlzLmRyb3B1cCA/ICd0b3AnIDogJ2JvdHRvbSd9IGxlZnRgfSlcbiAgICAgIC5zaG93KHtcbiAgICAgICAgdHlwZWFoZWFkUmVmOiB0aGlzLFxuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICBkcm9wdXA6IHRoaXMuZHJvcHVwXG4gICAgICB9KTtcblxuICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMub25PdXRzaWRlQ2xpY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX3R5cGVhaGVhZC5pbnN0YW5jZTtcbiAgICB0aGlzLl9jb250YWluZXIucGFyZW50ID0gdGhpcztcbiAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXG4gICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgIDogdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLl9jb250YWluZXIucXVlcnkgPSB0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzXG4gICAgICA/IHRva2VuaXplKFxuICAgICAgICBub3JtYWxpemVkUXVlcnksXG4gICAgICAgIHRoaXMudHlwZWFoZWFkV29yZERlbGltaXRlcnMsXG4gICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVyc1xuICAgICAgKVxuICAgICAgOiBub3JtYWxpemVkUXVlcnk7XG4gICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90eXBlYWhlYWQuaXNTaG93bikge1xuICAgICAgdGhpcy5fdHlwZWFoZWFkLmhpZGUoKTtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyKCk7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgIXRoaXMuX2NvbnRhaW5lci5pc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnNcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fdHlwZWFoZWFkLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luY0FjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy50eXBlYWhlYWRXYWl0TXMpLFxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnR5cGVhaGVhZClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bmNBY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXJcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudHlwZWFoZWFkV2FpdE1zKSxcbiAgICAgICAgICBtZXJnZU1hcCgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gdGhpcy5ub3JtYWxpemVRdWVyeSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmcm9tKHRoaXMudHlwZWFoZWFkKVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKG9wdGlvbjogVHlwZWFoZWFkTWF0Y2gpID0+IHtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdE1hdGNoKHRoaXMubm9ybWFsaXplT3B0aW9uKG9wdGlvbiksIG5vcm1hbGl6ZWRRdWVyeSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdG9BcnJheSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcm90ZWN0ZWQgbm9ybWFsaXplT3B0aW9uKG9wdGlvbjogYW55KTogYW55IHtcbiAgICBjb25zdCBvcHRpb25WYWx1ZTogc3RyaW5nID0gZ2V0VmFsdWVGcm9tT2JqZWN0KFxuICAgICAgb3B0aW9uLFxuICAgICAgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZFxuICAgICk7XG4gICAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbiA9IHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUob3B0aW9uVmFsdWUpXG4gICAgICA6IG9wdGlvblZhbHVlO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRPcHRpb24udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBub3JtYWxpemVRdWVyeSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIC8vIElmIHNpbmdsZVdvcmRzLCBicmVhayBtb2RlbCBoZXJlIHRvIG5vdCBiZSBkb2luZyBleHRyYSB3b3JrIG9uIGVhY2hcbiAgICAvLyBpdGVyYXRpb25cbiAgICBsZXQgbm9ybWFsaXplZFF1ZXJ5OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKHZhbHVlKVxuICAgICAgOiB2YWx1ZSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICBub3JtYWxpemVkUXVlcnkgPSB0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzXG4gICAgICA/IHRva2VuaXplKFxuICAgICAgICBub3JtYWxpemVkUXVlcnksXG4gICAgICAgIHRoaXMudHlwZWFoZWFkV29yZERlbGltaXRlcnMsXG4gICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVyc1xuICAgICAgKVxuICAgICAgOiBub3JtYWxpemVkUXVlcnk7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZFF1ZXJ5O1xuICB9XG5cbiAgcHJvdGVjdGVkIHRlc3RNYXRjaChtYXRjaDogc3RyaW5nLCB0ZXN0OiBzdHJpbmdbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCBzcGFjZUxlbmd0aDogbnVtYmVyO1xuXG4gICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgc3BhY2VMZW5ndGggPSB0ZXN0Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BhY2VMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGVzdFtpXS5sZW5ndGggPiAwICYmIG1hdGNoLmluZGV4T2YodGVzdFtpXSkgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaC5pbmRleE9mKHRlc3QpID49IDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmluYWxpemVBc3luY0NhbGwobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSk6IHZvaWQge1xuICAgIHRoaXMucHJlcGFyZU1hdGNoZXMobWF0Y2hlcyk7XG5cbiAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XG4gICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdCghdGhpcy5oYXNNYXRjaGVzKCkpO1xuXG4gICAgaWYgKCF0aGlzLmhhc01hdGNoZXMoKSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAvLyBmaXg6IHJlbW92ZSB1c2FnZSBvZiBuZ0NvbnRyb2wgaW50ZXJuYWxzXG4gICAgICBjb25zdCBfY29udHJvbFZhbHVlID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgICA6IHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpIHx8ICcnO1xuICAgICAgLy8gVGhpcyBpbXByb3ZlcyB0aGUgc3BlZWQgYXMgaXQgd29uJ3QgaGF2ZSB0byBiZSBkb25lIGZvciBlYWNoIGxpc3QgaXRlbVxuICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gX2NvbnRyb2xWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLl9jb250YWluZXIucXVlcnkgPSB0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzXG4gICAgICAgID8gdG9rZW5pemUoXG4gICAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkV29yZERlbGltaXRlcnMsXG4gICAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICAgIClcbiAgICAgICAgOiBub3JtYWxpemVkUXVlcnk7XG4gICAgICB0aGlzLl9jb250YWluZXIubWF0Y2hlcyA9IHRoaXMuX21hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBwcmVwYXJlTWF0Y2hlcyhvcHRpb25zOiBUeXBlYWhlYWRNYXRjaFtdKTogdm9pZCB7XG4gICAgY29uc3QgbGltaXRlZDogVHlwZWFoZWFkTWF0Y2hbXSA9IG9wdGlvbnMuc2xpY2UoMCwgdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQpO1xuXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZCkge1xuICAgICAgbGV0IG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10gPSBbXTtcblxuICAgICAgLy8gZXh0cmFjdCBhbGwgZ3JvdXAgbmFtZXNcbiAgICAgIGNvbnN0IGdyb3VwcyA9IGxpbWl0ZWRcbiAgICAgICAgLm1hcCgob3B0aW9uOiBUeXBlYWhlYWRNYXRjaCkgPT5cbiAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcigodjogc3RyaW5nLCBpOiBudW1iZXIsIGE6IHN0cmluZ1tdKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG4gICAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXA6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBhZGQgZ3JvdXAgaGVhZGVyIHRvIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgbWF0Y2hlcy5wdXNoKG5ldyBUeXBlYWhlYWRNYXRjaChncm91cCwgZ3JvdXAsIHRydWUpKTtcblxuICAgICAgICAvLyBhZGQgZWFjaCBpdGVtIG9mIGdyb3VwIHRvIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuY29uY2F0KFxuICAgICAgICAgIGxpbWl0ZWRcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgKG9wdGlvbjogYW55KSA9PlxuICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZCkgPT09IGdyb3VwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgIChvcHRpb246IGFueSkgPT5cbiAgICAgICAgICAgICAgICBuZXcgVHlwZWFoZWFkTWF0Y2goXG4gICAgICAgICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9tYXRjaGVzID0gbWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWF0Y2hlcyA9IGxpbWl0ZWQubWFwKFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIChvcHRpb246IGFueSkgPT5cbiAgICAgICAgICBuZXcgVHlwZWFoZWFkTWF0Y2goXG4gICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkKVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGhhc01hdGNoZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXMubGVuZ3RoID4gMDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQsIFR5cGVhaGVhZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQsIFR5cGVhaGVhZERpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUeXBlYWhlYWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJpc0JzMyIsIlV0aWxzIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIlZpZXdDaGlsZCIsIlZpZXdDaGlsZHJlbiIsIkhvc3RMaXN0ZW5lciIsIkV2ZW50RW1pdHRlciIsIk9ic2VydmFibGUiLCJkZWJvdW5jZVRpbWUiLCJzd2l0Y2hNYXAiLCJtZXJnZU1hcCIsImZyb20iLCJmaWx0ZXIiLCJ0b0FycmF5IiwiRGlyZWN0aXZlIiwiTmdDb250cm9sIiwiVmlld0NvbnRhaW5lclJlZiIsIkNvbXBvbmVudExvYWRlckZhY3RvcnkiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiT3V0cHV0IiwiUG9zaXRpb25pbmdTZXJ2aWNlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EseUJBQWEsUUFBUSxHQUE4QjtRQUMvQyxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxLQUFLO1FBQ1YsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVB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