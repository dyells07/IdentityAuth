import { Component, ElementRef, HostListener, ViewChild, ViewChildren, Renderer2, ChangeDetectorRef, Directive, EventEmitter, Input, Output, ViewContainerRef, NgModule } from '@angular/core';
import { isBs3, Utils } from 'ngx-bootstrap/utils';
import { NgControl } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { debounceTime, filter, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable */
const /** @type {?} */ latinMap = {
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
class TypeaheadOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        Object.assign(this, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadMatch {
    /**
     * @param {?} item
     * @param {?=} value
     * @param {?=} header
     */
    constructor(item, value = item, header = false) {
        this.item = item;
        this.value = value;
        this.header = header;
    }
    /**
     * @return {?}
     */
    isHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.value;
    }
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
function tokenize(str, wordRegexDelimiters = ' ', phraseRegexDelimiters = '') {
    /* tslint:enable */
    const /** @type {?} */ regexStr = `(?:[${phraseRegexDelimiters}])([^${phraseRegexDelimiters}]+)` +
        `(?:[${phraseRegexDelimiters}])|([^${wordRegexDelimiters}]+)`;
    const /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
    const /** @type {?} */ result = [];
    const /** @type {?} */ preTokenizedLength = preTokenized.length;
    let /** @type {?} */ token;
    const /** @type {?} */ replacePhraseDelimiters = new RegExp(`[${phraseRegexDelimiters}]+`, 'g');
    for (let /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
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
        const /** @type {?} */ functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    const /** @type {?} */ properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    const /** @type {?} */ propertiesArray = properties.split('.');
    for (const /** @type {?} */ property of propertiesArray) {
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadContainerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            const /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
            const /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            const /** @type {?} */ elemTop = elem.offsetTop;
            const /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set matches(value) {
        this._matches = value;
        this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
        if (this.typeaheadScrollable) {
            setTimeout(() => {
                this.setScrollableMode();
            });
        }
        if (this._matches.length > 0) {
            this._active = this._matches[0];
            if (this._active.isHeader()) {
                this.nextActiveMatch();
            }
        }
    }
    /**
     * @return {?}
     */
    get optionsListTemplate() {
        return this.parent ? this.parent.optionsListTemplate : undefined;
    }
    /**
     * @return {?}
     */
    get typeaheadScrollable() {
        return this.parent ? this.parent.typeaheadScrollable : false;
    }
    /**
     * @return {?}
     */
    get typeaheadOptionsInScrollableView() {
        return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
    }
    /**
     * @return {?}
     */
    get itemTemplate() {
        return this.parent ? this.parent.typeaheadItemTemplate : undefined;
    }
    /**
     * @return {?}
     */
    selectActiveMatch() {
        this.selectMatch(this._active);
    }
    /**
     * @return {?}
     */
    prevActiveMatch() {
        const /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    }
    /**
     * @return {?}
     */
    nextActiveMatch() {
        const /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectActive(value) {
        this.isFocused = true;
        this._active = value;
    }
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    highlight(match, query) {
        let /** @type {?} */ itemStr = match.value;
        let /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        let /** @type {?} */ startIdx;
        let /** @type {?} */ tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            const /** @type {?} */ queryLen = query.length;
            for (let /** @type {?} */ i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                            `${itemStr.substring(startIdx + tokenLen)}`;
                    itemStrHelper =
                        `${itemStrHelper.substring(0, startIdx)}        ${' '.repeat(tokenLen)}         ` +
                            `${itemStrHelper.substring(startIdx + tokenLen)}`;
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                        `${itemStr.substring(startIdx + tokenLen)}`;
            }
        }
        return itemStr;
    }
    /**
     * @return {?}
     */
    focusLost() {
        this.isFocused = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isActive(value) {
        return this._active === value;
    }
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    selectMatch(value, e = void 0) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(() => this.parent.typeaheadOnSelect.emit(value), 0);
        return false;
    }
    /**
     * @return {?}
     */
    setScrollableMode() {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            const /** @type {?} */ ulStyles = Utils.getStyles(this.ulElement.nativeElement);
            const /** @type {?} */ liStyles = Utils.getStyles(this.liElements.first.nativeElement);
            const /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            const /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            const /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            const /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = `${height + ulPaddingTop + ulPaddingBottom}px`;
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollPrevious(index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            const /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollNext(index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            const /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    }
    /**
     * @return {?}
     */
    scrollToTop() {
        this.ulElement.nativeElement.scrollTop = 0;
    }
}
TypeaheadContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'typeahead-container',
                // tslint:disable-next-line
                template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                host: {
                    class: 'dropdown open',
                    '[class.dropdown-menu]': 'isBs4',
                    '[style.overflow-y]': `isBs4 && needScrollbar ? 'scroll': 'visible'`,
                    '[style.height]': `isBs4 && needScrollbar ? guiHeight: 'auto'`,
                    '[style.visibility]': `typeaheadScrollable ? 'hidden' : 'visible'`,
                    '[class.dropup]': 'dropup',
                    style: 'position: absolute;display: block;'
                }
            }] }
];
/** @nocollapse */
TypeaheadContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TypeaheadContainerComponent.propDecorators = {
    "ulElement": [{ type: ViewChild, args: ['ulElement',] },],
    "liElements": [{ type: ViewChildren, args: ['liElements',] },],
    "focusLost": [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadDirective {
    /**
     * @param {?} ngControl
     * @param {?} element
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} cis
     * @param {?} changeDetection
     */
    constructor(ngControl, element, viewContainerRef, renderer, cis, changeDetection) {
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
        this.typeaheadLoading = new EventEmitter();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new EventEmitter();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new EventEmitter();
        /**
         * fired when blur event occurres. returns the active item
         */
        this.typeaheadOnBlur = new EventEmitter();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isTypeaheadOptionsListActive = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new EventEmitter();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(this.typeahead instanceof Observable)) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof Observable) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    onInput(e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        const /** @type {?} */ value = e.target.value !== undefined
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
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
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeydown(e) {
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
    }
    /**
     * @param {?} match
     * @return {?}
     */
    changeModel(match) {
        const /** @type {?} */ valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @return {?}
     */
    show() {
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: `${this.dropup ? 'top' : 'bottom'} left` })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (e) => {
            if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        const /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hide() {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    }
    /**
     * @return {?}
     */
    onOutsideClick() {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions
        for (const /** @type {?} */ sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    }
    /**
     * @return {?}
     */
    asyncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), switchMap(() => this.typeahead))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @return {?}
     */
    syncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((value) => {
            const /** @type {?} */ normalizedQuery = this.normalizeQuery(value);
            return from(this.typeahead)
                .pipe(filter((option) => {
                return (option &&
                    this.testMatch(this.normalizeOption(option), normalizedQuery));
            }), toArray());
        }))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    normalizeOption(option) {
        const /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
        const /** @type {?} */ normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    normalizeQuery(value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        let /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    }
    /**
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    testMatch(match, test) {
        let /** @type {?} */ spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (let /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    finalizeAsyncCall(matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            const /** @type {?} */ _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            const /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    prepareMatches(options) {
        const /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            let /** @type {?} */ matches = [];
            // extract all group names
            const /** @type {?} */ groups = limited
                .map((option) => getValueFromObject(option, this.typeaheadGroupField))
                .filter((v, i, a) => a.indexOf(v) === i);
            groups.forEach((group) => {
                // add group header to array of matches
                matches.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches = matches.concat(limited
                    .filter(
                // tslint:disable-next-line:no-any
                (option) => getValueFromObject(option, this.typeaheadGroupField) === group)
                    .map(
                // tslint:disable-next-line:no-any
                (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
            });
            this._matches = matches;
        }
        else {
            this._matches = limited.map(
            // tslint:disable-next-line:no-any
            (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)));
        }
    }
    /**
     * @return {?}
     */
    hasMatches() {
        return this._matches.length > 0;
    }
}
TypeaheadDirective.decorators = [
    { type: Directive, args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
];
/** @nocollapse */
TypeaheadDirective.ctorParameters = () => [
    { type: NgControl, },
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer2, },
    { type: ComponentLoaderFactory, },
    { type: ChangeDetectorRef, },
];
TypeaheadDirective.propDecorators = {
    "typeahead": [{ type: Input },],
    "typeaheadMinLength": [{ type: Input },],
    "typeaheadWaitMs": [{ type: Input },],
    "typeaheadOptionsLimit": [{ type: Input },],
    "typeaheadOptionField": [{ type: Input },],
    "typeaheadGroupField": [{ type: Input },],
    "typeaheadAsync": [{ type: Input },],
    "typeaheadLatinize": [{ type: Input },],
    "typeaheadSingleWords": [{ type: Input },],
    "typeaheadWordDelimiters": [{ type: Input },],
    "typeaheadPhraseDelimiters": [{ type: Input },],
    "typeaheadItemTemplate": [{ type: Input },],
    "optionsListTemplate": [{ type: Input },],
    "typeaheadScrollable": [{ type: Input },],
    "typeaheadOptionsInScrollableView": [{ type: Input },],
    "typeaheadLoading": [{ type: Output },],
    "typeaheadNoResults": [{ type: Output },],
    "typeaheadOnSelect": [{ type: Output },],
    "typeaheadOnBlur": [{ type: Output },],
    "container": [{ type: Input },],
    "dropup": [{ type: Input },],
    "onInput": [{ type: HostListener, args: ['input', ['$event'],] },],
    "onChange": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    "onFocus": [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['focus',] },],
    "onBlur": [{ type: HostListener, args: ['blur',] },],
    "onKeydown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TypeaheadModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
}
TypeaheadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                exports: [TypeaheadContainerComponent, TypeaheadDirective],
                entryComponents: [TypeaheadContainerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { latinMap, TypeaheadOptions, TypeaheadMatch, escapeRegexp, getValueFromObject, tokenize, latinize, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10eXBlYWhlYWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL2xhdGluLW1hcC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLW9wdGlvbnMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGxhdGluTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICfDg8KBJzogJ0EnLFxuICAgICfDhMKCJzogJ0EnLFxuICAgICfDocK6wq4nOiAnQScsXG4gICAgJ8OhwrrCtic6ICdBJyxcbiAgICAnw6HCusKwJzogJ0EnLFxuICAgICfDocK6wrInOiAnQScsXG4gICAgJ8OhwrrCtCc6ICdBJyxcbiAgICAnw4fCjSc6ICdBJyxcbiAgICAnw4PCgic6ICdBJyxcbiAgICAnw6HCusKkJzogJ0EnLFxuICAgICfDocK6wqwnOiAnQScsXG4gICAgJ8OhwrrCpic6ICdBJyxcbiAgICAnw6HCusKoJzogJ0EnLFxuICAgICfDocK6wqonOiAnQScsXG4gICAgJ8ODwoQnOiAnQScsXG4gICAgJ8OHwp4nOiAnQScsXG4gICAgJ8OIwqYnOiAnQScsXG4gICAgJ8OHwqAnOiAnQScsXG4gICAgJ8OhwrrCoCc6ICdBJyxcbiAgICAnw4jCgCc6ICdBJyxcbiAgICAnw4PCgCc6ICdBJyxcbiAgICAnw6HCusKiJzogJ0EnLFxuICAgICfDiMKCJzogJ0EnLFxuICAgICfDhMKAJzogJ0EnLFxuICAgICfDhMKEJzogJ0EnLFxuICAgICfDg8KFJzogJ0EnLFxuICAgICfDh8K6JzogJ0EnLFxuICAgICfDocK4woAnOiAnQScsXG4gICAgJ8OIwronOiAnQScsXG4gICAgJ8ODwoMnOiAnQScsXG4gICAgJ8OqwpzCsic6ICdBQScsXG4gICAgJ8ODwoYnOiAnQUUnLFxuICAgICfDh8K8JzogJ0FFJyxcbiAgICAnw4fCoic6ICdBRScsXG4gICAgJ8OqwpzCtCc6ICdBTycsXG4gICAgJ8OqwpzCtic6ICdBVScsXG4gICAgJ8OqwpzCuCc6ICdBVicsXG4gICAgJ8OqwpzCuic6ICdBVicsXG4gICAgJ8OqwpzCvCc6ICdBWScsXG4gICAgJ8OhwrjCgic6ICdCJyxcbiAgICAnw6HCuMKEJzogJ0InLFxuICAgICfDhsKBJzogJ0InLFxuICAgICfDocK4woYnOiAnQicsXG4gICAgJ8OJwoMnOiAnQicsXG4gICAgJ8OGwoInOiAnQicsXG4gICAgJ8OEwoYnOiAnQycsXG4gICAgJ8OEwownOiAnQycsXG4gICAgJ8ODwocnOiAnQycsXG4gICAgJ8OhwrjCiCc6ICdDJyxcbiAgICAnw4TCiCc6ICdDJyxcbiAgICAnw4TCiic6ICdDJyxcbiAgICAnw4bChyc6ICdDJyxcbiAgICAnw4jCuyc6ICdDJyxcbiAgICAnw4TCjic6ICdEJyxcbiAgICAnw6HCuMKQJzogJ0QnLFxuICAgICfDocK4wpInOiAnRCcsXG4gICAgJ8OhwrjCiic6ICdEJyxcbiAgICAnw6HCuMKMJzogJ0QnLFxuICAgICfDhsKKJzogJ0QnLFxuICAgICfDocK4wo4nOiAnRCcsXG4gICAgJ8OHwrInOiAnRCcsXG4gICAgJ8OHwoUnOiAnRCcsXG4gICAgJ8OEwpAnOiAnRCcsXG4gICAgJ8OGwosnOiAnRCcsXG4gICAgJ8OHwrEnOiAnRFonLFxuICAgICfDh8KEJzogJ0RaJyxcbiAgICAnw4PCiSc6ICdFJyxcbiAgICAnw4TClCc6ICdFJyxcbiAgICAnw4TCmic6ICdFJyxcbiAgICAnw4jCqCc6ICdFJyxcbiAgICAnw6HCuMKcJzogJ0UnLFxuICAgICfDg8KKJzogJ0UnLFxuICAgICfDocK6wr4nOiAnRScsXG4gICAgJ8OhwrvChic6ICdFJyxcbiAgICAnw6HCu8KAJzogJ0UnLFxuICAgICfDocK7woInOiAnRScsXG4gICAgJ8OhwrvChCc6ICdFJyxcbiAgICAnw6HCuMKYJzogJ0UnLFxuICAgICfDg8KLJzogJ0UnLFxuICAgICfDhMKWJzogJ0UnLFxuICAgICfDocK6wrgnOiAnRScsXG4gICAgJ8OIwoQnOiAnRScsXG4gICAgJ8ODwognOiAnRScsXG4gICAgJ8OhwrrCuic6ICdFJyxcbiAgICAnw4jChic6ICdFJyxcbiAgICAnw4TCkic6ICdFJyxcbiAgICAnw6HCuMKWJzogJ0UnLFxuICAgICfDocK4wpQnOiAnRScsXG4gICAgJ8OEwpgnOiAnRScsXG4gICAgJ8OJwoYnOiAnRScsXG4gICAgJ8OhwrrCvCc6ICdFJyxcbiAgICAnw6HCuMKaJzogJ0UnLFxuICAgICfDqsKdwqonOiAnRVQnLFxuICAgICfDocK4wp4nOiAnRicsXG4gICAgJ8OGwpEnOiAnRicsXG4gICAgJ8OHwrQnOiAnRycsXG4gICAgJ8OEwp4nOiAnRycsXG4gICAgJ8OHwqYnOiAnRycsXG4gICAgJ8OEwqInOiAnRycsXG4gICAgJ8OEwpwnOiAnRycsXG4gICAgJ8OEwqAnOiAnRycsXG4gICAgJ8OGwpMnOiAnRycsXG4gICAgJ8OhwrjCoCc6ICdHJyxcbiAgICAnw4fCpCc6ICdHJyxcbiAgICAnw6HCuMKqJzogJ0gnLFxuICAgICfDiMKeJzogJ0gnLFxuICAgICfDocK4wqgnOiAnSCcsXG4gICAgJ8OEwqQnOiAnSCcsXG4gICAgJ8OiwrHCpyc6ICdIJyxcbiAgICAnw6HCuMKmJzogJ0gnLFxuICAgICfDocK4wqInOiAnSCcsXG4gICAgJ8OhwrjCpCc6ICdIJyxcbiAgICAnw4TCpic6ICdIJyxcbiAgICAnw4PCjSc6ICdJJyxcbiAgICAnw4TCrCc6ICdJJyxcbiAgICAnw4fCjyc6ICdJJyxcbiAgICAnw4PCjic6ICdJJyxcbiAgICAnw4PCjyc6ICdJJyxcbiAgICAnw6HCuMKuJzogJ0knLFxuICAgICfDhMKwJzogJ0knLFxuICAgICfDocK7woonOiAnSScsXG4gICAgJ8OIwognOiAnSScsXG4gICAgJ8ODwownOiAnSScsXG4gICAgJ8OhwrvCiCc6ICdJJyxcbiAgICAnw4jCiic6ICdJJyxcbiAgICAnw4TCqic6ICdJJyxcbiAgICAnw4TCric6ICdJJyxcbiAgICAnw4bClyc6ICdJJyxcbiAgICAnw4TCqCc6ICdJJyxcbiAgICAnw6HCuMKsJzogJ0knLFxuICAgICfDqsKdwrknOiAnRCcsXG4gICAgJ8Oqwp3Cuyc6ICdGJyxcbiAgICAnw6rCncK9JzogJ0cnLFxuICAgICfDqsKewoInOiAnUicsXG4gICAgJ8Oqwp7ChCc6ICdTJyxcbiAgICAnw6rCnsKGJzogJ1QnLFxuICAgICfDqsKdwqwnOiAnSVMnLFxuICAgICfDhMK0JzogJ0onLFxuICAgICfDicKIJzogJ0onLFxuICAgICfDocK4wrAnOiAnSycsXG4gICAgJ8OHwqgnOiAnSycsXG4gICAgJ8OEwrYnOiAnSycsXG4gICAgJ8OiwrHCqSc6ICdLJyxcbiAgICAnw6rCncKCJzogJ0snLFxuICAgICfDocK4wrInOiAnSycsXG4gICAgJ8OGwpgnOiAnSycsXG4gICAgJ8OhwrjCtCc6ICdLJyxcbiAgICAnw6rCncKAJzogJ0snLFxuICAgICfDqsKdwoQnOiAnSycsXG4gICAgJ8OEwrknOiAnTCcsXG4gICAgJ8OIwr0nOiAnTCcsXG4gICAgJ8OEwr0nOiAnTCcsXG4gICAgJ8OEwrsnOiAnTCcsXG4gICAgJ8OhwrjCvCc6ICdMJyxcbiAgICAnw6HCuMK2JzogJ0wnLFxuICAgICfDocK4wrgnOiAnTCcsXG4gICAgJ8OiwrHCoCc6ICdMJyxcbiAgICAnw6rCncKIJzogJ0wnLFxuICAgICfDocK4wronOiAnTCcsXG4gICAgJ8OEwr8nOiAnTCcsXG4gICAgJ8OiwrHCoic6ICdMJyxcbiAgICAnw4fCiCc6ICdMJyxcbiAgICAnw4XCgSc6ICdMJyxcbiAgICAnw4fChyc6ICdMSicsXG4gICAgJ8OhwrjCvic6ICdNJyxcbiAgICAnw6HCucKAJzogJ00nLFxuICAgICfDocK5woInOiAnTScsXG4gICAgJ8OiwrHCric6ICdNJyxcbiAgICAnw4XCgyc6ICdOJyxcbiAgICAnw4XChyc6ICdOJyxcbiAgICAnw4XChSc6ICdOJyxcbiAgICAnw6HCucKKJzogJ04nLFxuICAgICfDocK5woQnOiAnTicsXG4gICAgJ8OhwrnChic6ICdOJyxcbiAgICAnw4fCuCc6ICdOJyxcbiAgICAnw4bCnSc6ICdOJyxcbiAgICAnw6HCucKIJzogJ04nLFxuICAgICfDiMKgJzogJ04nLFxuICAgICfDh8KLJzogJ04nLFxuICAgICfDg8KRJzogJ04nLFxuICAgICfDh8KKJzogJ05KJyxcbiAgICAnw4PCkyc6ICdPJyxcbiAgICAnw4XCjic6ICdPJyxcbiAgICAnw4fCkSc6ICdPJyxcbiAgICAnw4PClCc6ICdPJyxcbiAgICAnw6HCu8KQJzogJ08nLFxuICAgICfDocK7wpgnOiAnTycsXG4gICAgJ8OhwrvCkic6ICdPJyxcbiAgICAnw6HCu8KUJzogJ08nLFxuICAgICfDocK7wpYnOiAnTycsXG4gICAgJ8ODwpYnOiAnTycsXG4gICAgJ8OIwqonOiAnTycsXG4gICAgJ8OIwq4nOiAnTycsXG4gICAgJ8OIwrAnOiAnTycsXG4gICAgJ8OhwrvCjCc6ICdPJyxcbiAgICAnw4XCkCc6ICdPJyxcbiAgICAnw4jCjCc6ICdPJyxcbiAgICAnw4PCkic6ICdPJyxcbiAgICAnw6HCu8KOJzogJ08nLFxuICAgICfDhsKgJzogJ08nLFxuICAgICfDocK7wponOiAnTycsXG4gICAgJ8OhwrvCoic6ICdPJyxcbiAgICAnw6HCu8KcJzogJ08nLFxuICAgICfDocK7wp4nOiAnTycsXG4gICAgJ8OhwrvCoCc6ICdPJyxcbiAgICAnw4jCjic6ICdPJyxcbiAgICAnw6rCncKKJzogJ08nLFxuICAgICfDqsKdwownOiAnTycsXG4gICAgJ8OFwownOiAnTycsXG4gICAgJ8OhwrnCkic6ICdPJyxcbiAgICAnw6HCucKQJzogJ08nLFxuICAgICfDhsKfJzogJ08nLFxuICAgICfDh8KqJzogJ08nLFxuICAgICfDh8KsJzogJ08nLFxuICAgICfDg8KYJzogJ08nLFxuICAgICfDh8K+JzogJ08nLFxuICAgICfDg8KVJzogJ08nLFxuICAgICfDocK5wownOiAnTycsXG4gICAgJ8OhwrnCjic6ICdPJyxcbiAgICAnw4jCrCc6ICdPJyxcbiAgICAnw4bCoic6ICdPSScsXG4gICAgJ8Oqwp3Cjic6ICdPTycsXG4gICAgJ8OGwpAnOiAnRScsXG4gICAgJ8OGwoYnOiAnTycsXG4gICAgJ8OIwqInOiAnT1UnLFxuICAgICfDocK5wpQnOiAnUCcsXG4gICAgJ8OhwrnClic6ICdQJyxcbiAgICAnw6rCncKSJzogJ1AnLFxuICAgICfDhsKkJzogJ1AnLFxuICAgICfDqsKdwpQnOiAnUCcsXG4gICAgJ8OiwrHCoyc6ICdQJyxcbiAgICAnw6rCncKQJzogJ1AnLFxuICAgICfDqsKdwpgnOiAnUScsXG4gICAgJ8Oqwp3Clic6ICdRJyxcbiAgICAnw4XClCc6ICdSJyxcbiAgICAnw4XCmCc6ICdSJyxcbiAgICAnw4XClic6ICdSJyxcbiAgICAnw6HCucKYJzogJ1InLFxuICAgICfDocK5wponOiAnUicsXG4gICAgJ8OhwrnCnCc6ICdSJyxcbiAgICAnw4jCkCc6ICdSJyxcbiAgICAnw4jCkic6ICdSJyxcbiAgICAnw6HCucKeJzogJ1InLFxuICAgICfDicKMJzogJ1InLFxuICAgICfDosKxwqQnOiAnUicsXG4gICAgJ8OqwpzCvic6ICdDJyxcbiAgICAnw4bCjic6ICdFJyxcbiAgICAnw4XCmic6ICdTJyxcbiAgICAnw6HCucKkJzogJ1MnLFxuICAgICfDhcKgJzogJ1MnLFxuICAgICfDocK5wqYnOiAnUycsXG4gICAgJ8OFwp4nOiAnUycsXG4gICAgJ8OFwpwnOiAnUycsXG4gICAgJ8OIwpgnOiAnUycsXG4gICAgJ8OhwrnCoCc6ICdTJyxcbiAgICAnw6HCucKiJzogJ1MnLFxuICAgICfDocK5wqgnOiAnUycsXG4gICAgJ8OFwqQnOiAnVCcsXG4gICAgJ8OFwqInOiAnVCcsXG4gICAgJ8OhwrnCsCc6ICdUJyxcbiAgICAnw4jCmic6ICdUJyxcbiAgICAnw4jCvic6ICdUJyxcbiAgICAnw6HCucKqJzogJ1QnLFxuICAgICfDocK5wqwnOiAnVCcsXG4gICAgJ8OGwqwnOiAnVCcsXG4gICAgJ8OhwrnCric6ICdUJyxcbiAgICAnw4bCric6ICdUJyxcbiAgICAnw4XCpic6ICdUJyxcbiAgICAnw6LCscKvJzogJ0EnLFxuICAgICfDqsKewoAnOiAnTCcsXG4gICAgJ8OGwpwnOiAnTScsXG4gICAgJ8OJwoUnOiAnVicsXG4gICAgJ8OqwpzCqCc6ICdUWicsXG4gICAgJ8ODwponOiAnVScsXG4gICAgJ8OFwqwnOiAnVScsXG4gICAgJ8OHwpMnOiAnVScsXG4gICAgJ8ODwpsnOiAnVScsXG4gICAgJ8OhwrnCtic6ICdVJyxcbiAgICAnw4PCnCc6ICdVJyxcbiAgICAnw4fClyc6ICdVJyxcbiAgICAnw4fCmSc6ICdVJyxcbiAgICAnw4fCmyc6ICdVJyxcbiAgICAnw4fClSc6ICdVJyxcbiAgICAnw6HCucKyJzogJ1UnLFxuICAgICfDocK7wqQnOiAnVScsXG4gICAgJ8OFwrAnOiAnVScsXG4gICAgJ8OIwpQnOiAnVScsXG4gICAgJ8ODwpknOiAnVScsXG4gICAgJ8OhwrvCpic6ICdVJyxcbiAgICAnw4bCryc6ICdVJyxcbiAgICAnw6HCu8KoJzogJ1UnLFxuICAgICfDocK7wrAnOiAnVScsXG4gICAgJ8OhwrvCqic6ICdVJyxcbiAgICAnw6HCu8KsJzogJ1UnLFxuICAgICfDocK7wq4nOiAnVScsXG4gICAgJ8OIwpYnOiAnVScsXG4gICAgJ8OFwqonOiAnVScsXG4gICAgJ8OhwrnCuic6ICdVJyxcbiAgICAnw4XCsic6ICdVJyxcbiAgICAnw4XCric6ICdVJyxcbiAgICAnw4XCqCc6ICdVJyxcbiAgICAnw6HCucK4JzogJ1UnLFxuICAgICfDocK5wrQnOiAnVScsXG4gICAgJ8Oqwp3Cnic6ICdWJyxcbiAgICAnw6HCucK+JzogJ1YnLFxuICAgICfDhsKyJzogJ1YnLFxuICAgICfDocK5wrwnOiAnVicsXG4gICAgJ8Oqwp3CoCc6ICdWWScsXG4gICAgJ8OhwrrCgic6ICdXJyxcbiAgICAnw4XCtCc6ICdXJyxcbiAgICAnw6HCusKEJzogJ1cnLFxuICAgICfDocK6woYnOiAnVycsXG4gICAgJ8OhwrrCiCc6ICdXJyxcbiAgICAnw6HCusKAJzogJ1cnLFxuICAgICfDosKxwrInOiAnVycsXG4gICAgJ8OhwrrCjCc6ICdYJyxcbiAgICAnw6HCusKKJzogJ1gnLFxuICAgICfDg8KdJzogJ1knLFxuICAgICfDhcK2JzogJ1knLFxuICAgICfDhcK4JzogJ1knLFxuICAgICfDocK6wo4nOiAnWScsXG4gICAgJ8OhwrvCtCc6ICdZJyxcbiAgICAnw6HCu8KyJzogJ1knLFxuICAgICfDhsKzJzogJ1knLFxuICAgICfDocK7wrYnOiAnWScsXG4gICAgJ8OhwrvCvic6ICdZJyxcbiAgICAnw4jCsic6ICdZJyxcbiAgICAnw4nCjic6ICdZJyxcbiAgICAnw6HCu8K4JzogJ1knLFxuICAgICfDhcK5JzogJ1onLFxuICAgICfDhcK9JzogJ1onLFxuICAgICfDocK6wpAnOiAnWicsXG4gICAgJ8OiwrHCqyc6ICdaJyxcbiAgICAnw4XCuyc6ICdaJyxcbiAgICAnw6HCusKSJzogJ1onLFxuICAgICfDiMKkJzogJ1onLFxuICAgICfDocK6wpQnOiAnWicsXG4gICAgJ8OGwrUnOiAnWicsXG4gICAgJ8OEwrInOiAnSUonLFxuICAgICfDhcKSJzogJ09FJyxcbiAgICAnw6HCtMKAJzogJ0EnLFxuICAgICfDocK0woEnOiAnQUUnLFxuICAgICfDisKZJzogJ0InLFxuICAgICfDocK0woMnOiAnQicsXG4gICAgJ8OhwrTChCc6ICdDJyxcbiAgICAnw6HCtMKFJzogJ0QnLFxuICAgICfDocK0wocnOiAnRScsXG4gICAgJ8OqwpzCsCc6ICdGJyxcbiAgICAnw4nCoic6ICdHJyxcbiAgICAnw4rCmyc6ICdHJyxcbiAgICAnw4rCnCc6ICdIJyxcbiAgICAnw4nCqic6ICdJJyxcbiAgICAnw4rCgSc6ICdSJyxcbiAgICAnw6HCtMKKJzogJ0onLFxuICAgICfDocK0wosnOiAnSycsXG4gICAgJ8OKwp8nOiAnTCcsXG4gICAgJ8OhwrTCjCc6ICdMJyxcbiAgICAnw6HCtMKNJzogJ00nLFxuICAgICfDicK0JzogJ04nLFxuICAgICfDocK0wo8nOiAnTycsXG4gICAgJ8OJwrYnOiAnT0UnLFxuICAgICfDocK0wpAnOiAnTycsXG4gICAgJ8OhwrTClSc6ICdPVScsXG4gICAgJ8OhwrTCmCc6ICdQJyxcbiAgICAnw4rCgCc6ICdSJyxcbiAgICAnw6HCtMKOJzogJ04nLFxuICAgICfDocK0wpknOiAnUicsXG4gICAgJ8OqwpzCsSc6ICdTJyxcbiAgICAnw6HCtMKbJzogJ1QnLFxuICAgICfDosKxwrsnOiAnRScsXG4gICAgJ8OhwrTCmic6ICdSJyxcbiAgICAnw6HCtMKcJzogJ1UnLFxuICAgICfDocK0wqAnOiAnVicsXG4gICAgJ8OhwrTCoSc6ICdXJyxcbiAgICAnw4rCjyc6ICdZJyxcbiAgICAnw6HCtMKiJzogJ1onLFxuICAgICfDg8KhJzogJ2EnLFxuICAgICfDhMKDJzogJ2EnLFxuICAgICfDocK6wq8nOiAnYScsXG4gICAgJ8OhwrrCtyc6ICdhJyxcbiAgICAnw6HCusKxJzogJ2EnLFxuICAgICfDocK6wrMnOiAnYScsXG4gICAgJ8OhwrrCtSc6ICdhJyxcbiAgICAnw4fCjic6ICdhJyxcbiAgICAnw4PCoic6ICdhJyxcbiAgICAnw6HCusKlJzogJ2EnLFxuICAgICfDocK6wq0nOiAnYScsXG4gICAgJ8OhwrrCpyc6ICdhJyxcbiAgICAnw6HCusKpJzogJ2EnLFxuICAgICfDocK6wqsnOiAnYScsXG4gICAgJ8ODwqQnOiAnYScsXG4gICAgJ8OHwp8nOiAnYScsXG4gICAgJ8OIwqcnOiAnYScsXG4gICAgJ8OHwqEnOiAnYScsXG4gICAgJ8OhwrrCoSc6ICdhJyxcbiAgICAnw4jCgSc6ICdhJyxcbiAgICAnw4PCoCc6ICdhJyxcbiAgICAnw6HCusKjJzogJ2EnLFxuICAgICfDiMKDJzogJ2EnLFxuICAgICfDhMKBJzogJ2EnLFxuICAgICfDhMKFJzogJ2EnLFxuICAgICfDocK2wo8nOiAnYScsXG4gICAgJ8OhwrrCmic6ICdhJyxcbiAgICAnw4PCpSc6ICdhJyxcbiAgICAnw4fCuyc6ICdhJyxcbiAgICAnw6HCuMKBJzogJ2EnLFxuICAgICfDosKxwqUnOiAnYScsXG4gICAgJ8ODwqMnOiAnYScsXG4gICAgJ8OqwpzCsyc6ICdhYScsXG4gICAgJ8ODwqYnOiAnYWUnLFxuICAgICfDh8K9JzogJ2FlJyxcbiAgICAnw4fCoyc6ICdhZScsXG4gICAgJ8OqwpzCtSc6ICdhbycsXG4gICAgJ8OqwpzCtyc6ICdhdScsXG4gICAgJ8OqwpzCuSc6ICdhdicsXG4gICAgJ8OqwpzCuyc6ICdhdicsXG4gICAgJ8OqwpzCvSc6ICdheScsXG4gICAgJ8OhwrjCgyc6ICdiJyxcbiAgICAnw6HCuMKFJzogJ2InLFxuICAgICfDicKTJzogJ2InLFxuICAgICfDocK4wocnOiAnYicsXG4gICAgJ8OhwrXCrCc6ICdiJyxcbiAgICAnw6HCtsKAJzogJ2InLFxuICAgICfDhsKAJzogJ2InLFxuICAgICfDhsKDJzogJ2InLFxuICAgICfDicK1JzogJ28nLFxuICAgICfDhMKHJzogJ2MnLFxuICAgICfDhMKNJzogJ2MnLFxuICAgICfDg8KnJzogJ2MnLFxuICAgICfDocK4woknOiAnYycsXG4gICAgJ8OEwoknOiAnYycsXG4gICAgJ8OJwpUnOiAnYycsXG4gICAgJ8OEwosnOiAnYycsXG4gICAgJ8OGwognOiAnYycsXG4gICAgJ8OIwrwnOiAnYycsXG4gICAgJ8OEwo8nOiAnZCcsXG4gICAgJ8OhwrjCkSc6ICdkJyxcbiAgICAnw6HCuMKTJzogJ2QnLFxuICAgICfDiMKhJzogJ2QnLFxuICAgICfDocK4wosnOiAnZCcsXG4gICAgJ8OhwrjCjSc6ICdkJyxcbiAgICAnw4nClyc6ICdkJyxcbiAgICAnw6HCtsKRJzogJ2QnLFxuICAgICfDocK4wo8nOiAnZCcsXG4gICAgJ8OhwrXCrSc6ICdkJyxcbiAgICAnw6HCtsKBJzogJ2QnLFxuICAgICfDhMKRJzogJ2QnLFxuICAgICfDicKWJzogJ2QnLFxuICAgICfDhsKMJzogJ2QnLFxuICAgICfDhMKxJzogJ2knLFxuICAgICfDiMK3JzogJ2onLFxuICAgICfDicKfJzogJ2onLFxuICAgICfDisKEJzogJ2onLFxuICAgICfDh8KzJzogJ2R6JyxcbiAgICAnw4fChic6ICdkeicsXG4gICAgJ8ODwqknOiAnZScsXG4gICAgJ8OEwpUnOiAnZScsXG4gICAgJ8OEwpsnOiAnZScsXG4gICAgJ8OIwqknOiAnZScsXG4gICAgJ8OhwrjCnSc6ICdlJyxcbiAgICAnw4PCqic6ICdlJyxcbiAgICAnw6HCusK/JzogJ2UnLFxuICAgICfDocK7wocnOiAnZScsXG4gICAgJ8OhwrvCgSc6ICdlJyxcbiAgICAnw6HCu8KDJzogJ2UnLFxuICAgICfDocK7woUnOiAnZScsXG4gICAgJ8OhwrjCmSc6ICdlJyxcbiAgICAnw4PCqyc6ICdlJyxcbiAgICAnw4TClyc6ICdlJyxcbiAgICAnw6HCusK5JzogJ2UnLFxuICAgICfDiMKFJzogJ2UnLFxuICAgICfDg8KoJzogJ2UnLFxuICAgICfDocK6wrsnOiAnZScsXG4gICAgJ8OIwocnOiAnZScsXG4gICAgJ8OEwpMnOiAnZScsXG4gICAgJ8OhwrjClyc6ICdlJyxcbiAgICAnw6HCuMKVJzogJ2UnLFxuICAgICfDosKxwrgnOiAnZScsXG4gICAgJ8OEwpknOiAnZScsXG4gICAgJ8OhwrbCkic6ICdlJyxcbiAgICAnw4nChyc6ICdlJyxcbiAgICAnw6HCusK9JzogJ2UnLFxuICAgICfDocK4wpsnOiAnZScsXG4gICAgJ8Oqwp3Cqyc6ICdldCcsXG4gICAgJ8OhwrjCnyc6ICdmJyxcbiAgICAnw4bCkic6ICdmJyxcbiAgICAnw6HCtcKuJzogJ2YnLFxuICAgICfDocK2woInOiAnZicsXG4gICAgJ8OHwrUnOiAnZycsXG4gICAgJ8OEwp8nOiAnZycsXG4gICAgJ8OHwqcnOiAnZycsXG4gICAgJ8OEwqMnOiAnZycsXG4gICAgJ8OEwp0nOiAnZycsXG4gICAgJ8OEwqEnOiAnZycsXG4gICAgJ8OJwqAnOiAnZycsXG4gICAgJ8OhwrjCoSc6ICdnJyxcbiAgICAnw6HCtsKDJzogJ2cnLFxuICAgICfDh8KlJzogJ2cnLFxuICAgICfDocK4wqsnOiAnaCcsXG4gICAgJ8OIwp8nOiAnaCcsXG4gICAgJ8OhwrjCqSc6ICdoJyxcbiAgICAnw4TCpSc6ICdoJyxcbiAgICAnw6LCscKoJzogJ2gnLFxuICAgICfDocK4wqcnOiAnaCcsXG4gICAgJ8OhwrjCoyc6ICdoJyxcbiAgICAnw6HCuMKlJzogJ2gnLFxuICAgICfDicKmJzogJ2gnLFxuICAgICfDocK6wpYnOiAnaCcsXG4gICAgJ8OEwqcnOiAnaCcsXG4gICAgJ8OGwpUnOiAnaHYnLFxuICAgICfDg8KtJzogJ2knLFxuICAgICfDhMKtJzogJ2knLFxuICAgICfDh8KQJzogJ2knLFxuICAgICfDg8KuJzogJ2knLFxuICAgICfDg8KvJzogJ2knLFxuICAgICfDocK4wq8nOiAnaScsXG4gICAgJ8OhwrvCiyc6ICdpJyxcbiAgICAnw4jCiSc6ICdpJyxcbiAgICAnw4PCrCc6ICdpJyxcbiAgICAnw6HCu8KJJzogJ2knLFxuICAgICfDiMKLJzogJ2knLFxuICAgICfDhMKrJzogJ2knLFxuICAgICfDhMKvJzogJ2knLFxuICAgICfDocK2wpYnOiAnaScsXG4gICAgJ8OJwqgnOiAnaScsXG4gICAgJ8OEwqknOiAnaScsXG4gICAgJ8OhwrjCrSc6ICdpJyxcbiAgICAnw6rCncK6JzogJ2QnLFxuICAgICfDqsKdwrwnOiAnZicsXG4gICAgJ8OhwrXCuSc6ICdnJyxcbiAgICAnw6rCnsKDJzogJ3InLFxuICAgICfDqsKewoUnOiAncycsXG4gICAgJ8Oqwp7Chyc6ICd0JyxcbiAgICAnw6rCncKtJzogJ2lzJyxcbiAgICAnw4fCsCc6ICdqJyxcbiAgICAnw4TCtSc6ICdqJyxcbiAgICAnw4rCnSc6ICdqJyxcbiAgICAnw4nCiSc6ICdqJyxcbiAgICAnw6HCuMKxJzogJ2snLFxuICAgICfDh8KpJzogJ2snLFxuICAgICfDhMK3JzogJ2snLFxuICAgICfDosKxwqonOiAnaycsXG4gICAgJ8Oqwp3Cgyc6ICdrJyxcbiAgICAnw6HCuMKzJzogJ2snLFxuICAgICfDhsKZJzogJ2snLFxuICAgICfDocK4wrUnOiAnaycsXG4gICAgJ8OhwrbChCc6ICdrJyxcbiAgICAnw6rCncKBJzogJ2snLFxuICAgICfDqsKdwoUnOiAnaycsXG4gICAgJ8OEwronOiAnbCcsXG4gICAgJ8OGwponOiAnbCcsXG4gICAgJ8OJwqwnOiAnbCcsXG4gICAgJ8OEwr4nOiAnbCcsXG4gICAgJ8OEwrwnOiAnbCcsXG4gICAgJ8OhwrjCvSc6ICdsJyxcbiAgICAnw4jCtCc6ICdsJyxcbiAgICAnw6HCuMK3JzogJ2wnLFxuICAgICfDocK4wrknOiAnbCcsXG4gICAgJ8OiwrHCoSc6ICdsJyxcbiAgICAnw6rCncKJJzogJ2wnLFxuICAgICfDocK4wrsnOiAnbCcsXG4gICAgJ8OFwoAnOiAnbCcsXG4gICAgJ8OJwqsnOiAnbCcsXG4gICAgJ8OhwrbChSc6ICdsJyxcbiAgICAnw4nCrSc6ICdsJyxcbiAgICAnw4XCgic6ICdsJyxcbiAgICAnw4fCiSc6ICdsaicsXG4gICAgJ8OFwr8nOiAncycsXG4gICAgJ8OhwrrCnCc6ICdzJyxcbiAgICAnw6HCusKbJzogJ3MnLFxuICAgICfDocK6wp0nOiAncycsXG4gICAgJ8OhwrjCvyc6ICdtJyxcbiAgICAnw6HCucKBJzogJ20nLFxuICAgICfDocK5woMnOiAnbScsXG4gICAgJ8OJwrEnOiAnbScsXG4gICAgJ8OhwrXCryc6ICdtJyxcbiAgICAnw6HCtsKGJzogJ20nLFxuICAgICfDhcKEJzogJ24nLFxuICAgICfDhcKIJzogJ24nLFxuICAgICfDhcKGJzogJ24nLFxuICAgICfDocK5wosnOiAnbicsXG4gICAgJ8OIwrUnOiAnbicsXG4gICAgJ8OhwrnChSc6ICduJyxcbiAgICAnw6HCucKHJzogJ24nLFxuICAgICfDh8K5JzogJ24nLFxuICAgICfDicKyJzogJ24nLFxuICAgICfDocK5woknOiAnbicsXG4gICAgJ8OGwp4nOiAnbicsXG4gICAgJ8OhwrXCsCc6ICduJyxcbiAgICAnw6HCtsKHJzogJ24nLFxuICAgICfDicKzJzogJ24nLFxuICAgICfDg8KxJzogJ24nLFxuICAgICfDh8KMJzogJ25qJyxcbiAgICAnw4PCsyc6ICdvJyxcbiAgICAnw4XCjyc6ICdvJyxcbiAgICAnw4fCkic6ICdvJyxcbiAgICAnw4PCtCc6ICdvJyxcbiAgICAnw6HCu8KRJzogJ28nLFxuICAgICfDocK7wpknOiAnbycsXG4gICAgJ8OhwrvCkyc6ICdvJyxcbiAgICAnw6HCu8KVJzogJ28nLFxuICAgICfDocK7wpcnOiAnbycsXG4gICAgJ8ODwrYnOiAnbycsXG4gICAgJ8OIwqsnOiAnbycsXG4gICAgJ8OIwq8nOiAnbycsXG4gICAgJ8OIwrEnOiAnbycsXG4gICAgJ8OhwrvCjSc6ICdvJyxcbiAgICAnw4XCkSc6ICdvJyxcbiAgICAnw4jCjSc6ICdvJyxcbiAgICAnw4PCsic6ICdvJyxcbiAgICAnw6HCu8KPJzogJ28nLFxuICAgICfDhsKhJzogJ28nLFxuICAgICfDocK7wpsnOiAnbycsXG4gICAgJ8OhwrvCoyc6ICdvJyxcbiAgICAnw6HCu8KdJzogJ28nLFxuICAgICfDocK7wp8nOiAnbycsXG4gICAgJ8OhwrvCoSc6ICdvJyxcbiAgICAnw4jCjyc6ICdvJyxcbiAgICAnw6rCncKLJzogJ28nLFxuICAgICfDqsKdwo0nOiAnbycsXG4gICAgJ8OiwrHCuic6ICdvJyxcbiAgICAnw4XCjSc6ICdvJyxcbiAgICAnw6HCucKTJzogJ28nLFxuICAgICfDocK5wpEnOiAnbycsXG4gICAgJ8OHwqsnOiAnbycsXG4gICAgJ8OHwq0nOiAnbycsXG4gICAgJ8ODwrgnOiAnbycsXG4gICAgJ8OHwr8nOiAnbycsXG4gICAgJ8ODwrUnOiAnbycsXG4gICAgJ8OhwrnCjSc6ICdvJyxcbiAgICAnw6HCucKPJzogJ28nLFxuICAgICfDiMKtJzogJ28nLFxuICAgICfDhsKjJzogJ29pJyxcbiAgICAnw6rCncKPJzogJ29vJyxcbiAgICAnw4nCmyc6ICdlJyxcbiAgICAnw6HCtsKTJzogJ2UnLFxuICAgICfDicKUJzogJ28nLFxuICAgICfDocK2wpcnOiAnbycsXG4gICAgJ8OIwqMnOiAnb3UnLFxuICAgICfDocK5wpUnOiAncCcsXG4gICAgJ8OhwrnClyc6ICdwJyxcbiAgICAnw6rCncKTJzogJ3AnLFxuICAgICfDhsKlJzogJ3AnLFxuICAgICfDocK1wrEnOiAncCcsXG4gICAgJ8OhwrbCiCc6ICdwJyxcbiAgICAnw6rCncKVJzogJ3AnLFxuICAgICfDocK1wr0nOiAncCcsXG4gICAgJ8Oqwp3CkSc6ICdwJyxcbiAgICAnw6rCncKZJzogJ3EnLFxuICAgICfDisKgJzogJ3EnLFxuICAgICfDicKLJzogJ3EnLFxuICAgICfDqsKdwpcnOiAncScsXG4gICAgJ8OFwpUnOiAncicsXG4gICAgJ8OFwpknOiAncicsXG4gICAgJ8OFwpcnOiAncicsXG4gICAgJ8OhwrnCmSc6ICdyJyxcbiAgICAnw6HCucKbJzogJ3InLFxuICAgICfDocK5wp0nOiAncicsXG4gICAgJ8OIwpEnOiAncicsXG4gICAgJ8OJwr4nOiAncicsXG4gICAgJ8OhwrXCsyc6ICdyJyxcbiAgICAnw4jCkyc6ICdyJyxcbiAgICAnw6HCucKfJzogJ3InLFxuICAgICfDicK8JzogJ3InLFxuICAgICfDocK1wrInOiAncicsXG4gICAgJ8OhwrbCiSc6ICdyJyxcbiAgICAnw4nCjSc6ICdyJyxcbiAgICAnw4nCvSc6ICdyJyxcbiAgICAnw6LChsKEJzogJ2MnLFxuICAgICfDqsKcwr8nOiAnYycsXG4gICAgJ8OJwpgnOiAnZScsXG4gICAgJ8OJwr8nOiAncicsXG4gICAgJ8OFwpsnOiAncycsXG4gICAgJ8OhwrnCpSc6ICdzJyxcbiAgICAnw4XCoSc6ICdzJyxcbiAgICAnw6HCucKnJzogJ3MnLFxuICAgICfDhcKfJzogJ3MnLFxuICAgICfDhcKdJzogJ3MnLFxuICAgICfDiMKZJzogJ3MnLFxuICAgICfDocK5wqEnOiAncycsXG4gICAgJ8OhwrnCoyc6ICdzJyxcbiAgICAnw6HCucKpJzogJ3MnLFxuICAgICfDisKCJzogJ3MnLFxuICAgICfDocK1wrQnOiAncycsXG4gICAgJ8OhwrbCiic6ICdzJyxcbiAgICAnw4jCvyc6ICdzJyxcbiAgICAnw4nCoSc6ICdnJyxcbiAgICAnw6HCtMKRJzogJ28nLFxuICAgICfDocK0wpMnOiAnbycsXG4gICAgJ8OhwrTCnSc6ICd1JyxcbiAgICAnw4XCpSc6ICd0JyxcbiAgICAnw4XCoyc6ICd0JyxcbiAgICAnw6HCucKxJzogJ3QnLFxuICAgICfDiMKbJzogJ3QnLFxuICAgICfDiMK2JzogJ3QnLFxuICAgICfDocK6wpcnOiAndCcsXG4gICAgJ8OiwrHCpic6ICd0JyxcbiAgICAnw6HCucKrJzogJ3QnLFxuICAgICfDocK5wq0nOiAndCcsXG4gICAgJ8OGwq0nOiAndCcsXG4gICAgJ8OhwrnCryc6ICd0JyxcbiAgICAnw6HCtcK1JzogJ3QnLFxuICAgICfDhsKrJzogJ3QnLFxuICAgICfDisKIJzogJ3QnLFxuICAgICfDhcKnJzogJ3QnLFxuICAgICfDocK1wronOiAndGgnLFxuICAgICfDicKQJzogJ2EnLFxuICAgICfDocK0woInOiAnYWUnLFxuICAgICfDh8KdJzogJ2UnLFxuICAgICfDocK1wrcnOiAnZycsXG4gICAgJ8OJwqUnOiAnaCcsXG4gICAgJ8OKwq4nOiAnaCcsXG4gICAgJ8OKwq8nOiAnaCcsXG4gICAgJ8OhwrTCiSc6ICdpJyxcbiAgICAnw4rCnic6ICdrJyxcbiAgICAnw6rCnsKBJzogJ2wnLFxuICAgICfDicKvJzogJ20nLFxuICAgICfDicKwJzogJ20nLFxuICAgICfDocK0wpQnOiAnb2UnLFxuICAgICfDicK5JzogJ3InLFxuICAgICfDicK7JzogJ3InLFxuICAgICfDicK6JzogJ3InLFxuICAgICfDosKxwrknOiAncicsXG4gICAgJ8OKwocnOiAndCcsXG4gICAgJ8OKwownOiAndicsXG4gICAgJ8OKwo0nOiAndycsXG4gICAgJ8OKwo4nOiAneScsXG4gICAgJ8OqwpzCqSc6ICd0eicsXG4gICAgJ8ODwronOiAndScsXG4gICAgJ8OFwq0nOiAndScsXG4gICAgJ8OHwpQnOiAndScsXG4gICAgJ8ODwrsnOiAndScsXG4gICAgJ8OhwrnCtyc6ICd1JyxcbiAgICAnw4PCvCc6ICd1JyxcbiAgICAnw4fCmCc6ICd1JyxcbiAgICAnw4fCmic6ICd1JyxcbiAgICAnw4fCnCc6ICd1JyxcbiAgICAnw4fClic6ICd1JyxcbiAgICAnw6HCucKzJzogJ3UnLFxuICAgICfDocK7wqUnOiAndScsXG4gICAgJ8OFwrEnOiAndScsXG4gICAgJ8OIwpUnOiAndScsXG4gICAgJ8ODwrknOiAndScsXG4gICAgJ8OhwrvCpyc6ICd1JyxcbiAgICAnw4bCsCc6ICd1JyxcbiAgICAnw6HCu8KpJzogJ3UnLFxuICAgICfDocK7wrEnOiAndScsXG4gICAgJ8OhwrvCqyc6ICd1JyxcbiAgICAnw6HCu8KtJzogJ3UnLFxuICAgICfDocK7wq8nOiAndScsXG4gICAgJ8OIwpcnOiAndScsXG4gICAgJ8OFwqsnOiAndScsXG4gICAgJ8OhwrnCuyc6ICd1JyxcbiAgICAnw4XCsyc6ICd1JyxcbiAgICAnw6HCtsKZJzogJ3UnLFxuICAgICfDhcKvJzogJ3UnLFxuICAgICfDhcKpJzogJ3UnLFxuICAgICfDocK5wrknOiAndScsXG4gICAgJ8OhwrnCtSc6ICd1JyxcbiAgICAnw6HCtcKrJzogJ3VlJyxcbiAgICAnw6rCncK4JzogJ3VtJyxcbiAgICAnw6LCscK0JzogJ3YnLFxuICAgICfDqsKdwp8nOiAndicsXG4gICAgJ8OhwrnCvyc6ICd2JyxcbiAgICAnw4rCiyc6ICd2JyxcbiAgICAnw6HCtsKMJzogJ3YnLFxuICAgICfDosKxwrEnOiAndicsXG4gICAgJ8OhwrnCvSc6ICd2JyxcbiAgICAnw6rCncKhJzogJ3Z5JyxcbiAgICAnw6HCusKDJzogJ3cnLFxuICAgICfDhcK1JzogJ3cnLFxuICAgICfDocK6woUnOiAndycsXG4gICAgJ8OhwrrChyc6ICd3JyxcbiAgICAnw6HCusKJJzogJ3cnLFxuICAgICfDocK6woEnOiAndycsXG4gICAgJ8OiwrHCsyc6ICd3JyxcbiAgICAnw6HCusKYJzogJ3cnLFxuICAgICfDocK6wo0nOiAneCcsXG4gICAgJ8OhwrrCiyc6ICd4JyxcbiAgICAnw6HCtsKNJzogJ3gnLFxuICAgICfDg8K9JzogJ3knLFxuICAgICfDhcK3JzogJ3knLFxuICAgICfDg8K/JzogJ3knLFxuICAgICfDocK6wo8nOiAneScsXG4gICAgJ8OhwrvCtSc6ICd5JyxcbiAgICAnw6HCu8KzJzogJ3knLFxuICAgICfDhsK0JzogJ3knLFxuICAgICfDocK7wrcnOiAneScsXG4gICAgJ8OhwrvCvyc6ICd5JyxcbiAgICAnw4jCsyc6ICd5JyxcbiAgICAnw6HCusKZJzogJ3knLFxuICAgICfDicKPJzogJ3knLFxuICAgICfDocK7wrknOiAneScsXG4gICAgJ8OFwronOiAneicsXG4gICAgJ8OFwr4nOiAneicsXG4gICAgJ8OhwrrCkSc6ICd6JyxcbiAgICAnw4rCkSc6ICd6JyxcbiAgICAnw6LCscKsJzogJ3onLFxuICAgICfDhcK8JzogJ3onLFxuICAgICfDocK6wpMnOiAneicsXG4gICAgJ8OIwqUnOiAneicsXG4gICAgJ8OhwrrClSc6ICd6JyxcbiAgICAnw6HCtcK2JzogJ3onLFxuICAgICfDocK2wo4nOiAneicsXG4gICAgJ8OKwpAnOiAneicsXG4gICAgJ8OGwrYnOiAneicsXG4gICAgJ8OJwoAnOiAneicsXG4gICAgJ8OvwqzCgCc6ICdmZicsXG4gICAgJ8OvwqzCgyc6ICdmZmknLFxuICAgICfDr8KswoQnOiAnZmZsJyxcbiAgICAnw6/CrMKBJzogJ2ZpJyxcbiAgICAnw6/CrMKCJzogJ2ZsJyxcbiAgICAnw4TCsyc6ICdpaicsXG4gICAgJ8OFwpMnOiAnb2UnLFxuICAgICfDr8KswoYnOiAnc3QnLFxuICAgICfDosKCwpAnOiAnYScsXG4gICAgJ8OiwoLCkSc6ICdlJyxcbiAgICAnw6HCtcKiJzogJ2knLFxuICAgICfDosKxwrwnOiAnaicsXG4gICAgJ8OiwoLCkic6ICdvJyxcbiAgICAnw6HCtcKjJzogJ3InLFxuICAgICfDocK1wqQnOiAndScsXG4gICAgJ8OhwrXCpSc6ICd2JyxcbiAgICAnw6LCgsKTJzogJ3gnXG59O1xuIiwiaW1wb3J0IHsgVHlwZWFoZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE9wdGlvbnMge1xuICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xuICB0eXBlYWhlYWRSZWY6IFR5cGVhaGVhZERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlYWhlYWRPcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE1hdGNoIHtcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZWFkb25seSBpdGVtOiBhbnk7XG4gIHByb3RlY3RlZCBoZWFkZXI6IGJvb2xlYW47XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3RydWN0b3IoaXRlbTogYW55LCB2YWx1ZTogc3RyaW5nID0gaXRlbSwgaGVhZGVyID0gZmFsc2UpIHtcbiAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIGlzSGVhZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhlYWRlcjtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGxhdGluTWFwIH0gZnJvbSAnLi9sYXRpbi1tYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGF0aW5pemUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW15BLVphLXowLTlcXFtcXF0gXS9nLCBmdW5jdGlvbiAoYTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbGF0aW5NYXBbYV0gfHwgYTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gUmVnZXg6IGNhcHR1cmUgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmdcbiAgLy8gdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWF0Y2ggdGhlIHJlc3VsdHMsIGZvciBleGFtcGxlIGlmIHRoZSBjYXB0dXJlIGlzXG4gIC8vICdhJyB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG59XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3RyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgd29yZFJlZ2V4RGVsaW1pdGVycyA9ICcgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBwaHJhc2VSZWdleERlbGltaXRlcnMgPSAnJyk6IEFycmF5PHN0cmluZz4ge1xuICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gIGNvbnN0IHJlZ2V4U3RyID0gYCg/Olske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKShbXiR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rKWAgK1xuICAgIGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSl8KFteJHt3b3JkUmVnZXhEZWxpbWl0ZXJzfV0rKWA7XG4gIGNvbnN0IHByZVRva2VuaXplZDogc3RyaW5nW10gPSBzdHIuc3BsaXQobmV3IFJlZ0V4cChyZWdleFN0ciwgJ2cnKSk7XG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgcHJlVG9rZW5pemVkTGVuZ3RoOiBudW1iZXIgPSBwcmVUb2tlbml6ZWQubGVuZ3RoO1xuICBsZXQgdG9rZW46IHN0cmluZztcbiAgY29uc3QgcmVwbGFjZVBocmFzZURlbGltaXRlcnMgPSBuZXcgUmVnRXhwKGBbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XStgLCAnZycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlVG9rZW5pemVkTGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0b2tlbiA9IHByZVRva2VuaXplZFtpXTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoICYmIHRva2VuICE9PSB3b3JkUmVnZXhEZWxpbWl0ZXJzKSB7XG4gICAgICByZXN1bHQucHVzaCh0b2tlbi5yZXBsYWNlKHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzLCAnJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqZWN0OiBhbnksIG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFvcHRpb24gfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XG4gIH1cblxuICBpZiAob3B0aW9uLmVuZHNXaXRoKCcoKScpKSB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gb3B0aW9uLnNsaWNlKDAsIG9wdGlvbi5sZW5ndGggLSAyKTtcblxuICAgIHJldHVybiBvYmplY3RbZnVuY3Rpb25OYW1lXSgpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBjb25zdCBwcm9wZXJ0aWVzOiBzdHJpbmcgPSBvcHRpb25cbiAgICAucmVwbGFjZSgvXFxbKFxcdyspXFxdL2csICcuJDEnKVxuICAgIC5yZXBsYWNlKC9eXFwuLywgJycpO1xuICBjb25zdCBwcm9wZXJ0aWVzQXJyYXk6IHN0cmluZ1tdID0gcHJvcGVydGllcy5zcGxpdCgnLicpO1xuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydGllc0FycmF5KSB7XG4gICAgaWYgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBvYmplY3QgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICBpZiAoIW9iamVjdCkge3JldHVybiAnJzsgfVxuXG4gIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0JzMywgVXRpbHMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IGxhdGluaXplIH0gZnJvbSAnLi90eXBlYWhlYWQtdXRpbHMnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0eXBlYWhlYWQtY29udGFpbmVyJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZHJvcGRvd24gb3BlbicsXG4gICAgJ1tjbGFzcy5kcm9wZG93bi1tZW51XSc6ICdpc0JzNCcsXG4gICAgJ1tzdHlsZS5vdmVyZmxvdy15XScgOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/ICdzY3JvbGwnOiAndmlzaWJsZSdgLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6IGBpc0JzNCAmJiBuZWVkU2Nyb2xsYmFyID8gZ3VpSGVpZ2h0OiAnYXV0bydgLFxuICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiBgdHlwZWFoZWFkU2Nyb2xsYWJsZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnYCxcbiAgICAnW2NsYXNzLmRyb3B1cF0nOiAnZHJvcHVwJyxcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTtkaXNwbGF5OiBibG9jazsnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgcGFyZW50OiBUeXBlYWhlYWREaXJlY3RpdmU7XG4gIHF1ZXJ5OiBzdHJpbmdbXSB8IHN0cmluZztcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgaXNGb2N1c2VkID0gZmFsc2U7XG4gIHRvcDogc3RyaW5nO1xuICBsZWZ0OiBzdHJpbmc7XG4gIGRpc3BsYXk6IHN0cmluZztcbiAgcGxhY2VtZW50OiBzdHJpbmc7XG4gIGRyb3B1cDogYm9vbGVhbjtcbiAgZ3VpSGVpZ2h0OiBzdHJpbmc7XG4gIG5lZWRTY3JvbGxiYXI6IGJvb2xlYW47XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfYWN0aXZlOiBUeXBlYWhlYWRNYXRjaDtcbiAgcHJvdGVjdGVkIF9tYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdID0gW107XG5cbiAgQFZpZXdDaGlsZCgndWxFbGVtZW50JylcbiAgcHJpdmF0ZSB1bEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZHJlbignbGlFbGVtZW50cycpXG4gIHByaXZhdGUgbGlFbGVtZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXQgYWN0aXZlKCk6IFR5cGVhaGVhZE1hdGNoIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgZ2V0IG1hdGNoZXMoKTogVHlwZWFoZWFkTWF0Y2hbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXM7XG4gIH1cblxuICBzZXQgbWF0Y2hlcyh2YWx1ZTogVHlwZWFoZWFkTWF0Y2hbXSkge1xuICAgIHRoaXMuX21hdGNoZXMgPSB2YWx1ZTtcbiAgICB0aGlzLm5lZWRTY3JvbGxiYXIgPSB0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUgJiYgdGhpcy50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA8IHRoaXMubWF0Y2hlcy5sZW5ndGg7XG4gICAgaWYgKHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsYWJsZU1vZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuX21hdGNoZXNbMF07XG4gICAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcbiAgICAgICAgdGhpcy5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IG9wdGlvbnNMaXN0VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub3B0aW9uc0xpc3RUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCB0eXBlYWhlYWRTY3JvbGxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZFNjcm9sbGFibGUgOiBmYWxzZTtcbiAgfVxuXG5cbiAgZ2V0IHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgOiA1O1xuICB9XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBpdGVtVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudHlwZWFoZWFkSXRlbVRlbXBsYXRlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgc2VsZWN0QWN0aXZlTWF0Y2goKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RNYXRjaCh0aGlzLl9hY3RpdmUpO1xuICB9XG5cbiAgcHJldkFjdGl2ZU1hdGNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5fYWN0aXZlKTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXG4gICAgICBpbmRleCAtIDEgPCAwID8gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFcbiAgICAgIF07XG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICB0aGlzLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbFByZXZpb3VzKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBuZXh0QWN0aXZlTWF0Y2goKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLl9hY3RpdmUpO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMubWF0Y2hlc1tcbiAgICAgIGluZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMVxuICAgICAgXTtcbiAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcbiAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTmV4dChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgfVxuXG4gIGhpZ2hsaWdodChtYXRjaDogVHlwZWFoZWFkTWF0Y2gsIHF1ZXJ5OiBzdHJpbmdbXSB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGl0ZW1TdHI6IHN0cmluZyA9IG1hdGNoLnZhbHVlO1xuICAgIGxldCBpdGVtU3RySGVscGVyOiBzdHJpbmcgPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUoaXRlbVN0cilcbiAgICAgIDogaXRlbVN0cikudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc3RhcnRJZHg6IG51bWJlcjtcbiAgICBsZXQgdG9rZW5MZW46IG51bWJlcjtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgcXVlcnlMZW46IG51bWJlciA9IHF1ZXJ5Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlMZW47IGkgKz0gMSkge1xuICAgICAgICAvLyBxdWVyeVtpXSBpcyBhbHJlYWR5IGxhdGluaXplZCBhbmQgbG93ZXIgY2FzZVxuICAgICAgICBzdGFydElkeCA9IGl0ZW1TdHJIZWxwZXIuaW5kZXhPZihxdWVyeVtpXSk7XG4gICAgICAgIHRva2VuTGVuID0gcXVlcnlbaV0ubGVuZ3RoO1xuICAgICAgICBpZiAoc3RhcnRJZHggPj0gMCAmJiB0b2tlbkxlbiA+IDApIHtcbiAgICAgICAgICBpdGVtU3RyID1cbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX08c3Ryb25nPiR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHgsIHN0YXJ0SWR4ICsgdG9rZW5MZW4pfTwvc3Ryb25nPmAgK1xuICAgICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHggKyB0b2tlbkxlbil9YDtcbiAgICAgICAgICBpdGVtU3RySGVscGVyID1cbiAgICAgICAgICAgIGAke2l0ZW1TdHJIZWxwZXIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX0gICAgICAgICR7JyAnLnJlcGVhdCh0b2tlbkxlbil9ICAgICAgICAgYCArXG4gICAgICAgICAgICBgJHtpdGVtU3RySGVscGVyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChxdWVyeSkge1xuICAgICAgLy8gcXVlcnkgaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcbiAgICAgIHN0YXJ0SWR4ID0gaXRlbVN0ckhlbHBlci5pbmRleE9mKHF1ZXJ5KTtcbiAgICAgIHRva2VuTGVuID0gcXVlcnkubGVuZ3RoO1xuICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XG4gICAgICAgIGl0ZW1TdHIgPVxuICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX08c3Ryb25nPiR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHgsIHN0YXJ0SWR4ICsgdG9rZW5MZW4pfTwvc3Ryb25nPmAgK1xuICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1TdHI7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIGZvY3VzTG9zdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgaXNBY3RpdmUodmFsdWU6IFR5cGVhaGVhZE1hdGNoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZSA9PT0gdmFsdWU7XG4gIH1cblxuICBzZWxlY3RNYXRjaCh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gsIGU6IEV2ZW50ID0gdm9pZCAwKTogYm9vbGVhbiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50LmNoYW5nZU1vZGVsKHZhbHVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucGFyZW50LnR5cGVhaGVhZE9uU2VsZWN0LmVtaXQodmFsdWUpLCAwKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldFNjcm9sbGFibGVNb2RlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy51bEVsZW1lbnQpIHtcbiAgICAgIHRoaXMudWxFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5saUVsZW1lbnRzLmZpcnN0KSB7XG4gICAgICBjb25zdCB1bFN0eWxlcyA9IFV0aWxzLmdldFN0eWxlcyh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IGxpU3R5bGVzID0gVXRpbHMuZ2V0U3R5bGVzKHRoaXMubGlFbGVtZW50cy5maXJzdC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IHVsUGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLWJvdHRvbSddID8gdWxTdHlsZXNbJ3BhZGRpbmctYm90dG9tJ10gOiAnJylcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgIGNvbnN0IHVsUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLXRvcCddID8gdWxTdHlsZXNbJ3BhZGRpbmctdG9wJ10gOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCBvcHRpb25IZWlnaHQgPSBwYXJzZUZsb2F0KChsaVN0eWxlcy5oZWlnaHQgPyBsaVN0eWxlcy5oZWlnaHQgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3ICogb3B0aW9uSGVpZ2h0O1xuICAgICAgdGhpcy5ndWlIZWlnaHQgPSBgJHtoZWlnaHQgKyB1bFBhZGRpbmdUb3AgKyB1bFBhZGRpbmdCb3R0b219cHhgO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIH1cblxuICBzY3JvbGxQcmV2aW91cyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlFbGVtZW50cykge1xuICAgICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5saUVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleCAtIDFdO1xuICAgICAgaWYgKGxpRWxlbWVudCAmJiAhdGhpcy5pc1Njcm9sbGVkSW50b1ZpZXcobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gbGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNjcm9sbE5leHQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGxpRWxlbWVudCA9IHRoaXMubGlFbGVtZW50cy50b0FycmF5KClbaW5kZXggKyAxXTtcbiAgICAgIGlmIChsaUVsZW1lbnQgJiYgIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGxpRWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9XG4gICAgICAgICAgbGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC1cbiAgICAgICAgICBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpICtcbiAgICAgICAgICBOdW1iZXIobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgaXNTY3JvbGxlZEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyVmlld1RvcDogbnVtYmVyID0gdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgY29udGFpbmVyVmlld0JvdHRvbSA9IGNvbnRhaW5lclZpZXdUb3AgKyBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuICAgIGNvbnN0IGVsZW1Ub3AgPSBlbGVtLm9mZnNldFRvcDtcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBjb250YWluZXJWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBjb250YWluZXJWaWV3VG9wKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJy4vdHlwZWFoZWFkLW1hdGNoLmNsYXNzJztcbmltcG9ydCB7IGdldFZhbHVlRnJvbU9iamVjdCwgbGF0aW5pemUsIHRva2VuaXplIH0gZnJvbSAnLi90eXBlYWhlYWQtdXRpbHMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG1lcmdlTWFwLCBzd2l0Y2hNYXAsIHRvQXJyYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3R5cGVhaGVhZF0nLCBleHBvcnRBczogJ2JzLXR5cGVhaGVhZCd9KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIG9wdGlvbnMgc291cmNlLCBjYW4gYmUgQXJyYXkgb2Ygc3RyaW5ncywgb2JqZWN0cyBvclxuICAgKiBhbiBPYnNlcnZhYmxlIGZvciBleHRlcm5hbCBtYXRjaGluZyBwcm9jZXNzXG4gICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgdHlwZWFoZWFkOiBhbnk7XG4gIC8qKiBtaW5pbWFsIG5vIG9mIGNoYXJhY3RlcnMgdGhhdCBuZWVkcyB0byBiZSBlbnRlcmVkIGJlZm9yZVxuICAgKiB0eXBlYWhlYWQga2lja3MtaW4uIFdoZW4gc2V0IHRvIDAsIHR5cGVhaGVhZCBzaG93cyBvbiBmb2N1cyB3aXRoIGZ1bGxcbiAgICogbGlzdCBvZiBvcHRpb25zIChsaW1pdGVkIGFzIG5vcm1hbCBieSB0eXBlYWhlYWRPcHRpb25zTGltaXQpXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRNaW5MZW5ndGg6IG51bWJlciA9IHZvaWQgMDtcbiAgLyoqIG1pbmltYWwgd2FpdCB0aW1lIGFmdGVyIGxhc3QgY2hhcmFjdGVyIHR5cGVkIGJlZm9yZSB0eXBlYWhlYWQga2lja3MtaW4gKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkV2FpdE1zOiBudW1iZXI7XG4gIC8qKiBtYXhpbXVtIGxlbmd0aCBvZiBvcHRpb25zIGl0ZW1zIGxpc3QgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0OiBudW1iZXI7XG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkXG4gICAqIHRoYXQgY29udGFpbnMgdGhlIG9wdGlvbnMgdmFsdWUsIHdlIHVzZSBhcnJheSBpdGVtIGFzIG9wdGlvbiBpbiBjYXNlXG4gICAqIG9mIHRoaXMgZmllbGQgaXMgbWlzc2luZy4gU3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25GaWVsZDogc3RyaW5nO1xuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZCB0aGF0XG4gICAqIGNvbnRhaW5zIHRoZSBncm91cCB2YWx1ZSwgbWF0Y2hlcyBhcmUgZ3JvdXBlZCBieSB0aGlzIGZpZWxkIHdoZW4gc2V0LlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkR3JvdXBGaWVsZDogc3RyaW5nO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIG9mIHR5cGVhaGVhZCBhdHRyaWJ1dGUgaXMgYXJyYXkuXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cbiAgICogdHJ1ZSBtYWtlIHNlbnNlIGlmIG9wdGlvbnMgYXJyYXkgaXMgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYzogYm9vbGVhbiA9IHZvaWQgMDtcbiAgLyoqIG1hdGNoIGxhdGluIHN5bWJvbHMuXG4gICAqIElmIHRydWUgdGhlIHdvcmQgc8ODwrpwZXIgd291bGQgbWF0Y2ggc3VwZXIgYW5kIHZpY2UgdmVyc2EuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRMYXRpbml6ZSA9IHRydWU7XG4gIC8qKiBDYW4gYmUgdXNlIHRvIHNlYXJjaCB3b3JkcyBieSBpbnNlcnRpbmcgYSBzaW5nbGUgd2hpdGUgc3BhY2UgYmV0d2VlbiBlYWNoIGNoYXJhY3RlcnNcbiAgICogIGZvciBleGFtcGxlICdDIGEgbCBpIGYgbyByIG4gaSBhJyB3aWxsIG1hdGNoICdDYWxpZm9ybmlhJy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNpbmdsZVdvcmRzID0gdHJ1ZTtcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICogU2V0cyB0aGUgd29yZCBkZWxpbWl0ZXIgdG8gYnJlYWsgd29yZHMuIERlZmF1bHRzIHRvIHNwYWNlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkV29yZERlbGltaXRlcnMgPSAnICc7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2UgdHlwZWFoZWFkU2luZ2xlV29yZHMgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIG1hdGNoIGV4YWN0IHBocmFzZS5cbiAgICogRGVmYXVsdHMgdG8gc2ltcGxlIGFuZCBkb3VibGUgcXVvdGVzLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVycyA9ICdcXCdcIic7XG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gaXRlbSB0ZW1wbGF0ZS5cbiAgICogVGVtcGxhdGUgdmFyaWFibGVzIGV4cG9zZWQgYXJlIGNhbGxlZCBpdGVtIGFuZCBpbmRleDtcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSB0eXBlYWhlYWRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gb3B0aW9ucyBsaXN0IHRlbXBsYXRlLlxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXM6IG1hdGNoZXMsIGl0ZW1UZW1wbGF0ZSwgcXVlcnlcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBvcHRpb25zTGlzdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogc3BlY2lmaWVzIGlmIHR5cGVhaGVhZCBpcyBzY3JvbGxhYmxlICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTY3JvbGxhYmxlID0gZmFsc2U7XG4gIC8qKiBzcGVjaWZpZXMgbnVtYmVyIG9mIG9wdGlvbnMgdG8gc2hvdyBpbiBzY3JvbGwgdmlldyAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPSA1O1xuICAvKiogZmlyZWQgd2hlbiAnYnVzeScgc3RhdGUgb2YgdGhpcyBjb21wb25lbnQgd2FzIGNoYW5nZWQsXG4gICAqIGZpcmVkIG9uIGFzeW5jIG1vZGUgb25seSwgcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqIGZpcmVkIG9uIGV2ZXJ5IGtleSBldmVudCBhbmQgcmV0dXJucyB0cnVlXG4gICAqIGluIGNhc2Ugb2YgbWF0Y2hlcyBhcmUgbm90IGRldGVjdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkTm9SZXN1bHRzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiogZmlyZWQgd2hlbiBvcHRpb24gd2FzIHNlbGVjdGVkLCByZXR1cm4gb2JqZWN0IHdpdGggZGF0YSBvZiB0aGlzIG9wdGlvbiAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGVhaGVhZE1hdGNoPigpO1xuICAvKiogZmlyZWQgd2hlbiBibHVyIGV2ZW50IG9jY3VycmVzLiByZXR1cm5zIHRoZSBhY3RpdmUgaXRlbSAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQE91dHB1dCgpIHR5cGVhaGVhZE9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHMgKi9cbiAgQElucHV0KCkgZHJvcHVwID0gZmFsc2U7XG5cbiAgLy8gbm90IHlldCBpbXBsZW1lbnRlZFxuICAvKiogaWYgZmFsc2UgcmVzdHJpY3QgbW9kZWwgdmFsdWVzIHRvIHRoZSBvbmVzIHNlbGVjdGVkIGZyb20gdGhlIHBvcHVwIG9ubHkgd2lsbCBiZSBwcm92aWRlZCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRWRpdGFibGU6Ym9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHRoZSBmaXJzdCBtYXRjaCBhdXRvbWF0aWNhbGx5IHdpbGwgbm90IGJlIGZvY3VzZWQgYXMgeW91IHR5cGUgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzRmlyc3Q6Ym9vbGVhbjtcbiAgLyoqIGZvcm1hdCB0aGUgbmctbW9kZWwgcmVzdWx0IGFmdGVyIHNlbGVjdGlvbiAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkSW5wdXRGb3JtYXR0ZXI6YW55O1xuICAvKiogaWYgdHJ1ZSBhdXRvbWF0aWNhbGx5IHNlbGVjdCBhbiBpdGVtIHdoZW4gdGhlcmUgaXMgb25lIG9wdGlvbiB0aGF0IGV4YWN0bHkgbWF0Y2hlcyB0aGUgdXNlciBpbnB1dCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25FeGFjdDpib29sZWFuO1xuICAvKiogIGlmIHRydWUgc2VsZWN0IHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWF0Y2ggb24gYmx1ciAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25CbHVyOmJvb2xlYW47XG4gIC8qKiAgaWYgZmFsc2UgZG9uJ3QgZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBkaXJlY3RpdmUgaXMgYXNzb2NpYXRlZCB3aXRoIG9uIHNlbGVjdGlvbiAqL1xuICAgIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c09uU2VsZWN0OmJvb2xlYW47XG5cbiAgX2NvbnRhaW5lcjogVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50O1xuICBpc1R5cGVhaGVhZE9wdGlvbnNMaXN0QWN0aXZlID0gZmFsc2U7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcm90ZWN0ZWQga2V5VXBFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcm90ZWN0ZWQgX21hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW107XG4gIHByb3RlY3RlZCBwbGFjZW1lbnQgPSAnYm90dG9tLWxlZnQnO1xuICAvLyBwcm90ZWN0ZWQgcG9wdXA6Q29tcG9uZW50UmVmPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSBfdHlwZWFoZWFkOiBDb21wb25lbnRMb2FkZXI8VHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfb3V0c2lkZUNsaWNrTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuX3R5cGVhaGVhZCA9IGNpcy5jcmVhdGVMb2FkZXI8VHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIGVsZW1lbnQsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgcmVuZGVyZXJcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgPSB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCB8fCAyMDtcbiAgICB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9XG4gICAgICB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gdm9pZCAwID8gMSA6IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoO1xuICAgIHRoaXMudHlwZWFoZWFkV2FpdE1zID0gdGhpcy50eXBlYWhlYWRXYWl0TXMgfHwgMDtcblxuICAgIC8vIGFzeW5jIHNob3VsZCBiZSBmYWxzZSBpbiBjYXNlIG9mIGFycmF5XG4gICAgaWYgKFxuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAhKHRoaXMudHlwZWFoZWFkIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSlcbiAgICApIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRBc3luYykge1xuICAgICAgdGhpcy5hc3luY0FjdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zeW5jQWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbklucHV0KGU6IGFueSk6IHZvaWQge1xuICAgIC8vIEZvciBgPGlucHV0PmBzLCB1c2UgdGhlIGB2YWx1ZWAgcHJvcGVydHkuIEZvciBvdGhlcnMgdGhhdCBkb24ndCBoYXZlIGFcbiAgICAvLyBgdmFsdWVgIChzdWNoIGFzIGA8c3BhbiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+YCksIHVzZSBlaXRoZXJcbiAgICAvLyBgdGV4dENvbnRlbnRgIG9yIGBpbm5lclRleHRgIChkZXBlbmRpbmcgb24gd2hpY2ggb25lIGlzIHN1cHBvcnRlZCwgaS5lLlxuICAgIC8vIEZpcmVmb3ggb3IgSUUpLlxuICAgIGNvbnN0IHZhbHVlID1cbiAgICAgIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC52YWx1ZVxuICAgICAgICA6IGUudGFyZ2V0LnRleHRDb250ZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID49IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbkNoYW5nZShlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgLy8gZXNjXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHVwXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIucHJldkFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBkb3duXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIubmV4dEFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBlbnRlciwgdGFiXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KHRoaXMuX2NvbnRhaW5lci5hY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8vIG5vIGNvbnRhaW5lciAtIG5vIHByb2JsZW1zXG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBhbiBpdGVtIGlzIHZpc2libGUgLSBwcmV2ZW50IGZvcm0gc3VibWlzc2lvblxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBhbiBpdGVtIGlzIHZpc2libGUgLSBkb24ndCBjaGFuZ2UgZm9jdXNcbiAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGVsKG1hdGNoOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlU3RyOiBzdHJpbmcgPSBtYXRjaC52YWx1ZTtcbiAgICB0aGlzLm5nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh2YWx1ZVN0cik7XG4gICAgKHRoaXMubmdDb250cm9sLmNvbnRyb2wpLnNldFZhbHVlKHZhbHVlU3RyKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl90eXBlYWhlYWRcbiAgICAgIC5hdHRhY2goVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLy8gdG9kbzogYWRkIGFwcGVuZCB0byBib2R5LCBhZnRlciB1cGRhdGluZyBwb3NpdGlvbmluZyBzZXJ2aWNlXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IGAke3RoaXMuZHJvcHVwID8gJ3RvcCcgOiAnYm90dG9tJ30gbGVmdGB9KVxuICAgICAgLnNob3coe1xuICAgICAgICB0eXBlYWhlYWRSZWY6IHRoaXMsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgIGRyb3B1cDogdGhpcy5kcm9wdXBcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSAwICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdGhpcy5vbk91dHNpZGVDbGljaygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5fdHlwZWFoZWFkLmluc3RhbmNlO1xuICAgIHRoaXMuX2NvbnRhaW5lci5wYXJlbnQgPSB0aGlzO1xuICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICB0aGlzLl9jb250YWluZXIubWF0Y2hlcyA9IHRoaXMuX21hdGNoZXM7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3R5cGVhaGVhZC5pc1Nob3duKSB7XG4gICAgICB0aGlzLl90eXBlYWhlYWQuaGlkZSgpO1xuICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25PdXRzaWRlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY2xlYW4gdXAgc3Vic2NyaXB0aW9uc1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl90eXBlYWhlYWQuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jQWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudHlwZWFoZWFkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3luY0FjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy50eXBlYWhlYWRXYWl0TXMpLFxuICAgICAgICAgIG1lcmdlTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSB0aGlzLm5vcm1hbGl6ZVF1ZXJ5KHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZyb20odGhpcy50eXBlYWhlYWQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigob3B0aW9uOiBUeXBlYWhlYWRNYXRjaCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBvcHRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0TWF0Y2godGhpcy5ub3JtYWxpemVPcHRpb24ob3B0aW9uKSwgbm9ybWFsaXplZFF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0b0FycmF5KClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBub3JtYWxpemVPcHRpb24ob3B0aW9uOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlOiBzdHJpbmcgPSBnZXRWYWx1ZUZyb21PYmplY3QoXG4gICAgICBvcHRpb24sXG4gICAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkXG4gICAgKTtcbiAgICBjb25zdCBub3JtYWxpemVkT3B0aW9uID0gdGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZShvcHRpb25WYWx1ZSlcbiAgICAgIDogb3B0aW9uVmFsdWU7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZE9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZVF1ZXJ5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgLy8gSWYgc2luZ2xlV29yZHMsIGJyZWFrIG1vZGVsIGhlcmUgdG8gbm90IGJlIGRvaW5nIGV4dHJhIHdvcmsgb24gZWFjaFxuICAgIC8vIGl0ZXJhdGlvblxuICAgIGxldCBub3JtYWxpemVkUXVlcnk6IHN0cmluZyB8IHN0cmluZ1tdID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUodmFsdWUpXG4gICAgICA6IHZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcblxuICAgIHJldHVybiBub3JtYWxpemVkUXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVzdE1hdGNoKG1hdGNoOiBzdHJpbmcsIHRlc3Q6IHN0cmluZ1tdIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHNwYWNlTGVuZ3RoOiBudW1iZXI7XG5cbiAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBzcGFjZUxlbmd0aCA9IHRlc3QubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFjZUxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0ZXN0W2ldLmxlbmd0aCA+IDAgJiYgbWF0Y2guaW5kZXhPZih0ZXN0W2ldKSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmluZGV4T2YodGVzdCkgPj0gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdKTogdm9pZCB7XG4gICAgdGhpcy5wcmVwYXJlTWF0Y2hlcyhtYXRjaGVzKTtcblxuICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KCF0aGlzLmhhc01hdGNoZXMoKSk7XG5cbiAgICBpZiAoIXRoaXMuaGFzTWF0Y2hlcygpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIC8vIGZpeDogcmVtb3ZlIHVzYWdlIG9mIG5nQ29udHJvbCBpbnRlcm5hbHNcbiAgICAgIGNvbnN0IF9jb250cm9sVmFsdWUgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgICA/IGxhdGluaXplKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXG4gICAgICAgIDogdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSkgfHwgJyc7XG4gICAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXG4gICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBfY29udHJvbFZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgICBub3JtYWxpemVkUXVlcnksXG4gICAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgICAgKVxuICAgICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHByZXBhcmVNYXRjaGVzKG9wdGlvbnM6IFR5cGVhaGVhZE1hdGNoW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaW1pdGVkOiBUeXBlYWhlYWRNYXRjaFtdID0gb3B0aW9ucy5zbGljZSgwLCB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCk7XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSB7XG4gICAgICBsZXQgbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gICAgICAvLyBleHRyYWN0IGFsbCBncm91cCBuYW1lc1xuICAgICAgY29uc3QgZ3JvdXBzID0gbGltaXRlZFxuICAgICAgICAubWFwKChvcHRpb246IFR5cGVhaGVhZE1hdGNoKSA9PlxuICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZClcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKCh2OiBzdHJpbmcsIGk6IG51bWJlciwgYTogc3RyaW5nW10pID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cbiAgICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cDogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIGFkZCBncm91cCBoZWFkZXIgdG8gYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICBtYXRjaGVzLnB1c2gobmV3IFR5cGVhaGVhZE1hdGNoKGdyb3VwLCBncm91cCwgdHJ1ZSkpO1xuXG4gICAgICAgIC8vIGFkZCBlYWNoIGl0ZW0gb2YgZ3JvdXAgdG8gYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcy5jb25jYXQoXG4gICAgICAgICAgbGltaXRlZFxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSA9PT0gZ3JvdXBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgKG9wdGlvbjogYW55KSA9PlxuICAgICAgICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXRjaGVzID0gbGltaXRlZC5tYXAoXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PlxuICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGQpXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFzTWF0Y2hlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCwgVHlwZWFoZWFkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCwgVHlwZWFoZWFkRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFR5cGVhaGVhZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0NvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1QkFBYSxRQUFRLEdBQThCO0lBQy9DLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEtBQUs7SUFDVixHQUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVB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