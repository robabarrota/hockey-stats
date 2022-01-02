(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/top-scorers/top-scorers.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/top-scorers/top-scorers.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-outline-light\"(click)=\"exportToExcel()\">Export</button>\n<button class=\"btn btn-outline-light\" type=\"button\" (click)=\"clearAll()\">Clear</button>\n<button class=\"btn btn-outline-light\" (click)=\"getMaxMinData()\">Load Statistics</button>\n<button class=\"btn btn-outline-light\" (click)=\"todaysPlayers()\">Load Rosters</button>\n<button class=\"btn btn-outline-light\" (click)=\"orderPlayers()\">Order Players</button>\n\n<mat-expansion-panel hideToggle class=\"statistics-panel\">\n  <mat-expansion-panel-header>\n    <mat-panel-title class=\"text-light\">\n      Statistics\n    </mat-panel-title>\n    <mat-panel-description class=\"text-light\">\n      Used for normalization\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <mat-accordion class=\"accordion accordion-flush\" multi>\n    <mat-expansion-panel hideToggle class=\"sub-statistics-panel\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"text-light\">\n          Top Player Stats\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"text-light\">\n        <div>Goals: {{ topPlayerStats.goals }}</div>\n        <div>Games: {{ topPlayerStats.games }}</div>\n        <div>PowerPlay Goals: {{ topPlayerStats.powerPlayGoals }}</div>\n        <div>Goals Per Game: {{ topPlayerStats.goalsPerGame }}</div>\n      </div>\n    </mat-expansion-panel>\n    <mat-expansion-panel hideToggle class=\"sub-statistics-panel\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"text-light\">\n          Worst Player Stats\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"text-light\">\n        <div>Goals: {{ worstPlayerStats.goals }}</div>\n        <div>Games: {{ worstPlayerStats.games }}</div>\n        <div>PowerPlay Goals: {{ worstPlayerStats.powerPlayGoals }}</div>\n        <div>Goals Per Game: {{ worstPlayerStats.goalsPerGame }}</div>\n      </div>\n    </mat-expansion-panel>\n    <mat-expansion-panel hideToggle class=\"sub-statistics-panel\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"text-light\">\n          Top Team Stats\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"text-light\">\n        <div>penaltyKillOpportunities: {{ topTeamStats.penaltyKillFrequency }}</div>\n        <div>penaltyKillPercentage: {{ topTeamStats.penaltyKillPercentage }}</div>\n        <div>goalsAgainstPerGame: {{ topTeamStats.goalsAgainstPerGame }}</div>\n      </div>\n    </mat-expansion-panel>\n    <mat-expansion-panel hideToggle class=\"sub-statistics-panel\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"text-light\">\n          Worst Team Stats\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"text-light\">\n        <div>penaltyKillOpportunities: {{ worstTeamStats.penaltyKillFrequency }}</div>\n        <div>penaltyKillPercentage: {{ worstTeamStats.penaltyKillPercentage }}</div>\n        <div>goalsAgainstPerGame: {{ worstTeamStats.goalsAgainstPerGame }}</div>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</mat-expansion-panel>\n\n<table id=\"prediction-data\">\n  <tr>\n    <th>Overall Ranking</th>\n    <th>Player</th>\n    <th>Team</th>\n    <th>Score</th>\n    <th>PlayerId</th>\n  </tr>\n  <tr *ngFor=\"let player of orderedPlayers; let i = index\">\n    <td>{{ i + 1 }}</td>\n    <td>{{ player.name }}</td>\n    <td>{{ player.playsFor.name }}</td>\n    <td>{{ player.goalLikelihoodRank }}</td>\n    <td>{{ player.id }}</td>\n  </tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Components/top-scorers/top-scorers.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Components/top-scorers/top-scorers.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loaded {\n  background-color: green;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.statistics-panel {\n  width: 30%;\n  background-color: #fb776c;\n}\n\n.sub-statistics-panel {\n  background-color: #fb776c;\n}\n\nth {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2hvY2tleS1zdGF0cy9zcmMvYXBwL0NvbXBvbmVudHMvdG9wLXNjb3JlcnMvdG9wLXNjb3JlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvdG9wLXNjb3JlcnMvdG9wLXNjb3JlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdG9wLXNjb3JlcnMvdG9wLXNjb3JlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG5cbi5zdGF0aXN0aWNzLXBhbmVsIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjc3NmM7XG59XG5cbi5zdWItc3RhdGlzdGljcy1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzc2Yztcbn1cblxudGgge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59IiwiLmxvYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5zdGF0aXN0aWNzLXBhbmVsIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzc2Yztcbn1cblxuLnN1Yi1zdGF0aXN0aWNzLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzc2Yztcbn1cblxudGgge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/top-scorers/top-scorers.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/top-scorers/top-scorers.component.ts ***!
  \*****************************************************************/
/*! exports provided: TopScorersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScorersComponent", function() { return TopScorersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Models_PlayerStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/PlayerStat */ "./src/app/Models/PlayerStat.ts");
/* harmony import */ var src_app_Services_player_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/player/player.service */ "./src/app/Services/player/player.service.ts");
/* harmony import */ var src_app_Services_team_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/team/team.service */ "./src/app/Services/team/team.service.ts");
/* harmony import */ var _assets_weightedStats_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/weightedStats.json */ "./src/assets/weightedStats.json");
var _assets_weightedStats_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/weightedStats.json */ "./src/assets/weightedStats.json", 1);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_Models_TeamStat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/TeamStat */ "./src/app/Models/TeamStat.ts");









let TopScorersComponent = class TopScorersComponent {
    constructor(playerService, teamService) {
        this.playerService = playerService;
        this.teamService = teamService;
        this.loadingStatistics = true;
        this.loadingRosters = true;
        this.orderedPlayers = [];
        this.teams = [];
        this.maxPlayerRank = 750;
        this.maxTeamRank = 31;
        this.minRank = 1;
        this.games = [];
        this.topPlayerStats = new src_app_Models_PlayerStat__WEBPACK_IMPORTED_MODULE_2__["PlayerStat"]();
        this.worstPlayerStats = new src_app_Models_PlayerStat__WEBPACK_IMPORTED_MODULE_2__["PlayerStat"]();
        this.topTeamStats = new src_app_Models_TeamStat__WEBPACK_IMPORTED_MODULE_8__["TeamStat"]();
        this.worstTeamStats = new src_app_Models_TeamStat__WEBPACK_IMPORTED_MODULE_8__["TeamStat"]();
    }
    ngOnInit() {
        this.weightedStats = _assets_weightedStats_json__WEBPACK_IMPORTED_MODULE_5__;
        this.worstTeamStats = {
            penaltyKillFrequency: 0,
            penaltyKillPercentage: 0,
            goalsAgainstPerGame: 0,
            gamesPlayed: 0
        };
        this.topTeamStats = {
            penaltyKillFrequency: 99999,
            penaltyKillPercentage: 99999,
            goalsAgainstPerGame: 99999,
            gamesPlayed: 99999
        };
        this.topPlayerStats = {
            goals: 0,
            games: 0,
            powerPlayGoals: 0,
            goalsPerGame: 0
        };
        this.worstPlayerStats = {
            goals: 99999,
            games: 99999,
            powerPlayGoals: 99999,
            goalsPerGame: 99999
        };
    }
    todaysPlayers() {
        this.getRosters();
    }
    getRosters() {
        this.clearAll();
        var schedule;
        this.teamService.playingTeams().subscribe((scheduleObs) => schedule = scheduleObs, () => { }, () => {
            this.loadTodaysTeams(schedule.dates[0].games);
            this.loadTeamStatsAndRankings();
            this.loadRosters();
        });
    }
    loadTodaysTeams(games) {
        var teams = [];
        games.forEach(game => {
            var homeTeam = {
                id: game.teams.home.team.id,
                name: game.teams.home.team.name,
                rankings: null,
                stats: null
            };
            var awayTeam = {
                id: game.teams.away.team.id,
                name: game.teams.away.team.name,
                rankings: null,
                stats: null
            };
            teams.push(homeTeam);
            teams.push(awayTeam);
            var newGame = {
                homeTeam: homeTeam,
                awayTeam: awayTeam
            };
            this.games.push(newGame);
        });
        this.teams = teams;
    }
    loadRosters() {
        var teamIds = [];
        this.teams.forEach(function (team) {
            teamIds.push(team.id);
        });
        var rostersResponse;
        this.playerService.getRosters(teamIds).subscribe((rostersObs) => rostersResponse = rostersObs, () => { }, () => {
            var rosters = [];
            var teams = rostersResponse.teams;
            teams.forEach(team => {
                var thisGame = this.games.filter((game) => game.homeTeam.id === team.id || game.awayTeam.id === team.id)[0];
                var opposingTeam = thisGame.homeTeam.id === team.id ? thisGame.awayTeam : thisGame.homeTeam;
                var roster = {
                    team: {
                        id: team.id,
                        name: team.name,
                        rankings: null,
                        stats: null
                    },
                    players: []
                };
                var teamRoster = team.roster.roster;
                teamRoster.forEach(rosterSpot => {
                    var playerId = rosterSpot.person.id;
                    var playerName = rosterSpot.person.fullName;
                    var playerSeasonStatsresp, playerPlayoffStatsresp;
                    this.playerService.getPlayerSeasonStats(playerId).subscribe((playerSeasonStatsResponse) => playerSeasonStatsresp = playerSeasonStatsResponse, () => { }, () => {
                        var playerSeasonStat = playerSeasonStatsresp.stats[0].splits.length === 0 ? new src_app_Models_PlayerStat__WEBPACK_IMPORTED_MODULE_2__["PlayerStat"]() : playerSeasonStatsresp.stats[0].splits[0].stat;
                        this.playerService.getPlayerPlayoffStats(playerId).subscribe((playerPlayoffStatsResponse) => playerPlayoffStatsresp = playerPlayoffStatsResponse, () => { }, () => {
                            var playerPlayoffStat = playerPlayoffStatsresp.stats[0].splits.length === 0 ? new src_app_Models_PlayerStat__WEBPACK_IMPORTED_MODULE_2__["PlayerStat"]() : playerPlayoffStatsresp.stats[0].splits[0].stat;
                            var player = {
                                id: playerId,
                                name: playerName,
                                seasonStats: playerSeasonStat,
                                //playoffStats: playerPlayoffStat,
                                goalLikelihoodRank: -1,
                                playingAgainst: opposingTeam,
                                playsFor: team
                            };
                            this.calculateGoalLikelihood(player);
                            roster.players.push(player);
                            this.orderedPlayers.push(player);
                        });
                    });
                });
                rosters.push(roster);
            });
            this.rosters = rosters;
        });
    }
    clearAll() {
        this.teams = [];
        this.rosters = [];
        this.orderedPlayers = [];
    }
    calculateRank() {
        this.orderedPlayers.forEach(player => {
            this.calculateGoalLikelihood(player);
        });
    }
    orderPlayers() {
        //this.orderedPlayers.filter((a) => a.goalLikelihoodRank > 0);
        this.orderedPlayers.sort((a, b) => b.goalLikelihoodRank - a.goalLikelihoodRank);
    }
    getGoalsPerGame(stats) {
        return stats.games === 0 ? 0 : stats.goals / stats.games;
    }
    calculateGoalLikelihood(player) {
        var playerSeasonStatsResp, playerPlayoffStatsResp;
        this.playerService.getPlayerSeasonStats(player.id).subscribe((playerSeasonStatsResponse) => playerSeasonStatsResp = playerSeasonStatsResponse, () => { }, () => {
            this.playerService.getPlayerPlayoffStats(player.id).subscribe((playerPlayoffStatsResponse) => playerPlayoffStatsResp = playerPlayoffStatsResponse, () => { }, () => {
                console.log("here");
                // if (playerSeasonStatsResp.stats[0].splits[0] !== undefined && playerPlayoffStatsResp.stats[0].splits[0] !== undefined) {
                if (playerSeasonStatsResp.stats[0].splits[0] !== undefined) {
                    console.log("there");
                    var playerSeasonStats = playerSeasonStatsResp.stats[0].splits[0].stat;
                    //var playerPlayoffStats = playerPlayoffStatsResp.stats[0].splits[0].stat;
                    // var playerTotalGoals = playerSeasonStats.goals || 0 + playerPlayoffStats.goals || 0 ;
                    // var playerTotalGames = playerSeasonStats.games || 0  + playerPlayoffStats.games || 0 ;
                    // var playerTotalPPG = playerSeasonStats.powerPlayGoals || 0  + playerPlayoffStats.powerPlayGoals || 0 ;
                    var playerTotalGoals = playerSeasonStats.goals || 0;
                    var playerTotalGames = playerSeasonStats.games || 0;
                    var playerTotalPPG = playerSeasonStats.powerPlayGoals || 0;
                    console.log(playerTotalGoals);
                    player.goalLikelihoodRank = this.getGoalsPerGameScore(playerTotalGoals, playerTotalGames)
                        //+ this.getGeneralPlayerRank(playerStats.rankShots) *  this.getGeneralPlayerRank(playerStats.rankShotPct) * this.weightedStats.shotPercentageWeight
                        + this.getOpposingGoalsAgainstScore(this.teams.find(team => team.id === player.playingAgainst.id).stats.goalsAgainstPerGame)
                        + this.getPowerPlayScore(this.teams.find(team => team.id === player.playingAgainst.id).rankings.penaltyKillOpportunities, this.teams.find(team => team.id === player.playingAgainst.id).stats.penaltyKillPercentage, this.teams.find(team => team.id === player.playingAgainst.id).stats.gamesPlayed, playerTotalPPG, playerTotalGames);
                }
                else {
                    player.goalLikelihoodRank = -1;
                }
            });
        });
    }
    rankingStringToNumber(rank) {
        return rank ? Number(rank.slice(0, -2)) : 800;
    }
    getGeneralPlayerRank(rank) {
        var rankValue = this.rankingStringToNumber(rank);
        var normalizedRankScore = this.normalizePlayerRankValue(rankValue);
        return normalizedRankScore;
    }
    getOpposingGoalsAgainstScore(gaa) {
        var normalizedGAAScore = this.normalizeTeamStatValue(gaa, this.topTeamStats.goalsAgainstPerGame, this.worstTeamStats.goalsAgainstPerGame) * this.weightedStats.opposingGAAWeight;
        return normalizedGAAScore;
    }
    normalizePlayerRankValue(rankValue) {
        var normalizedRankScore = (rankValue - this.minRank) / (this.maxPlayerRank - this.minRank);
        return !isNaN(normalizedRankScore) ? normalizedRankScore : 1;
    }
    normalizeTeamRankValue(rankValue) {
        var normalizedRankScore = (rankValue - this.minRank) / (this.maxTeamRank - this.minRank);
        return !isNaN(normalizedRankScore) ? normalizedRankScore : 1;
    }
    normalizePlayerStatValue(playerStat, min, max) {
        var normalizedScore = (playerStat - min) / (max - min);
        return !isNaN(normalizedScore) ? normalizedScore : 1;
    }
    normalizeTeamStatValue(teamStat, min, max) {
        var normalizedScore = (teamStat - min) / (max - min);
        return !isNaN(normalizedScore) ? normalizedScore : 1;
    }
    getGoalsPerGameScore(goals, games) {
        if (goals === undefined || games === 0) {
            return 0;
        }
        var goalsPerGameValue = this.normalizePlayerStatValue(goals / games, this.worstPlayerStats.goalsPerGame, this.topPlayerStats.goalsPerGame);
        var gamesValue = Math.log(games) / Math.log(this.topPlayerStats.games * 100);
        var goalsPerGameScore = (goalsPerGameValue + gamesValue) * this.weightedStats.goalsPerGameWeight;
        // var goalsValue = this.normalizePlayerStatValue(goals, this.worstPlayerStats.goals, this.topPlayerStats.goals);
        // var gamesValue = this.normalizePlayerStatValue(games, this.worstPlayerStats.games, this.topPlayerStats.games) + 1;
        // var gamesMultiplier = 1 + Math.log(games) / Math.log(this.topPlayerStats.games * 1000000);
        // var goalsPerGameScore = (goalsValue * this.weightedStats.numberOfGoalsWeight) / (gamesValue * this.weightedStats.numberOfGamesWeight) + gamesMultiplier;
        return goalsPerGameScore;
    }
    getPowerPlayScore(pkOps, pkPerc, teamGames, ppGoals, playerGames) {
        if (ppGoals === undefined) {
            return 0;
        }
        var opposingPKOpsRankValue = this.normalizeTeamRankValue(this.rankingStringToNumber(pkOps));
        var opposingPKPercStatValue = 1 - this.normalizeTeamStatValue(pkPerc, this.topTeamStats.penaltyKillPercentage, this.worstTeamStats.penaltyKillPercentage);
        var playerPPStatValue = this.normalizePlayerStatValue(ppGoals, this.worstPlayerStats.powerPlayGoals, this.topPlayerStats.powerPlayGoals);
        var teamGamesValue = this.normalizePlayerStatValue(teamGames, this.topTeamStats.gamesPlayed, this.worstTeamStats.gamesPlayed) * this.weightedStats.numberOfGamesWeight + 1;
        var playerGamesValue = this.normalizePlayerStatValue(playerGames, this.worstPlayerStats.games, this.topPlayerStats.games) * this.weightedStats.numberOfGamesWeight + 1;
        var powerPlayOppRank = (playerPPStatValue * opposingPKOpsRankValue * opposingPKPercStatValue * this.weightedStats.powerPlayGoalsWeight) / (teamGamesValue * playerGamesValue * this.weightedStats.numberOfGamesWeight);
        return powerPlayOppRank;
    }
    loadTeamStatsAndRankings() {
        this.teams.forEach(team => {
            var teamStatsResp;
            this.teamService.getTeamStats(team.id).subscribe((teamStatsObs) => teamStatsResp = teamStatsObs, () => { }, () => {
                var teamRankings = teamStatsResp.stats[1].splits[0].stat;
                var teamStats = teamStatsResp.stats[0].splits[0].stat;
                team.rankings = teamRankings;
                team.stats = teamStats;
            });
        });
    }
    //----------------------------------------------------
    loadGames() {
        var schedule;
        this.teamService.playingTeams().subscribe((scheduleObs) => schedule = scheduleObs, () => { }, () => {
            this.loadTodaysTeams(schedule.dates[0].games);
            this.loadRosters();
        });
    }
    exportToExcel() {
        var fileName = "TimsPredictionsExcelSheet" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'dd-MM-yyyy', 'en') + ".xlsx";
        /* table id is passed over here */
        let element = document.getElementById('prediction-data');
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](wb, fileName);
    }
    getMaxMinData() {
        var allTeamsResp;
        this.teamService.getAllTeams().subscribe((allTeamsObs) => allTeamsResp = allTeamsObs, () => { }, () => {
            var allTeamsObjs = allTeamsResp.teams;
            var teamIds = allTeamsObjs.map(team => team.id);
            var rostersResponse;
            this.playerService.getRosters(teamIds).subscribe((rostersObs) => rostersResponse = rostersObs, () => { }, () => {
                var teams = rostersResponse.teams;
                teams.forEach(team => {
                    var teamRoster = team.roster.roster;
                    teamRoster.forEach(rosterSpot => {
                        var playerId = rosterSpot.person.id;
                        var playerSeasonStatsresp, playerPlayoffStatsresp;
                        this.playerService.getPlayerSeasonStats(playerId).subscribe((playerSeasonStatsResponse) => playerSeasonStatsresp = playerSeasonStatsResponse, () => { }, () => {
                            this.playerService.getPlayerPlayoffStats(playerId).subscribe((playerPlayoffStatsResponse) => playerPlayoffStatsresp = playerPlayoffStatsResponse, () => { }, () => {
                                var playerSeasonStat = playerSeasonStatsresp.stats[0].splits.length === 0 ? new src_app_Models_PlayerStat__WEBPACK_IMPORTED_MODULE_2__["PlayerStat"]() : playerSeasonStatsresp.stats[0].splits[0].stat;
                                var playerPlayoffStat = playerPlayoffStatsresp.stats[0].splits.length === 0 ? new src_app_Models_PlayerStat__WEBPACK_IMPORTED_MODULE_2__["PlayerStat"]() : playerPlayoffStatsresp.stats[0].splits[0].stat;
                                // var goals = playerSeasonStat.goals + playerPlayoffStat.games == undefined ? playerPlayoffStat.games : 0;
                                // var games = playerSeasonStat.games + playerPlayoffStat.games ? playerPlayoffStat.games : 0;
                                // var powerPlayGoals = playerSeasonStat.powerPlayGoals + playerPlayoffStat.powerPlayGoals ? playerPlayoffStat.powerPlayGoals : 0;
                                var goals = playerSeasonStat.goals;
                                var games = playerSeasonStat.games;
                                var powerPlayGoals = playerSeasonStat.powerPlayGoals;
                                var goalsPerGame = goals / games;
                                if (goals > this.topPlayerStats.goals) {
                                    this.topPlayerStats.goals = goals;
                                }
                                else if (goals < this.worstPlayerStats.goals) {
                                    this.worstPlayerStats.goals = goals;
                                }
                                if (games > this.topPlayerStats.games) {
                                    this.topPlayerStats.games = games;
                                }
                                else if (games < this.worstPlayerStats.games) {
                                    this.worstPlayerStats.games = games;
                                }
                                if (powerPlayGoals > this.topPlayerStats.powerPlayGoals) {
                                    this.topPlayerStats.powerPlayGoals = powerPlayGoals;
                                }
                                else if (powerPlayGoals < this.worstPlayerStats.powerPlayGoals) {
                                    this.worstPlayerStats.powerPlayGoals = powerPlayGoals;
                                }
                                if (goalsPerGame > this.topPlayerStats.goalsPerGame) {
                                    this.topPlayerStats.goalsPerGame = goalsPerGame;
                                }
                                else if (goalsPerGame < this.worstPlayerStats.goalsPerGame) {
                                    this.worstPlayerStats.goalsPerGame = goalsPerGame;
                                }
                            });
                        });
                    });
                });
            });
            allTeamsObjs.forEach(teamObj => {
                var pkopsRank = teamObj.teamStats[0].splits[1].stat.penaltyKillOpportunities;
                var pkperc = teamObj.teamStats[0].splits[0].stat.penaltyKillPercentage;
                var gaa = teamObj.teamStats[0].splits[0].stat.goalsAgainstPerGame;
                var gamesPlayed = teamObj.teamStats[0].splits[0].stat.gamesPlayed;
                var pkfreq = this.rankingStringToNumber(pkopsRank) / gamesPlayed;
                if (pkfreq < this.topTeamStats.penaltyKillFrequency) {
                    this.topTeamStats.penaltyKillFrequency = pkfreq;
                }
                else if (pkfreq > this.worstTeamStats.penaltyKillFrequency) {
                    this.worstTeamStats.penaltyKillFrequency = pkfreq;
                }
                if (pkperc < this.topTeamStats.penaltyKillPercentage) {
                    this.topTeamStats.penaltyKillPercentage = pkperc;
                }
                else if (pkperc > this.worstTeamStats.penaltyKillPercentage) {
                    this.worstTeamStats.penaltyKillPercentage = pkperc;
                }
                if (gaa < this.topTeamStats.goalsAgainstPerGame) {
                    this.topTeamStats.goalsAgainstPerGame = gaa;
                }
                else if (gaa > this.worstTeamStats.goalsAgainstPerGame) {
                    this.worstTeamStats.goalsAgainstPerGame = gaa;
                }
                if (gamesPlayed < this.topTeamStats.gamesPlayed) {
                    this.topTeamStats.gamesPlayed = gamesPlayed;
                }
                else if (gamesPlayed > this.worstTeamStats.gamesPlayed) {
                    this.worstTeamStats.gamesPlayed = gamesPlayed;
                }
            });
            this.loadingStatistics = false;
        });
    }
};
TopScorersComponent.ctorParameters = () => [
    { type: src_app_Services_player_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"] },
    { type: src_app_Services_team_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"] }
];
TopScorersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-scorers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-scorers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/top-scorers/top-scorers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-scorers.component.scss */ "./src/app/Components/top-scorers/top-scorers.component.scss")).default]
    })
], TopScorersComponent);



/***/ }),

/***/ "./src/app/Models/PlayerStat.ts":
/*!**************************************!*\
  !*** ./src/app/Models/PlayerStat.ts ***!
  \**************************************/
/*! exports provided: PlayerStat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStat", function() { return PlayerStat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PlayerStat {
}


/***/ }),

/***/ "./src/app/Models/TeamStat.ts":
/*!************************************!*\
  !*** ./src/app/Models/TeamStat.ts ***!
  \************************************/
/*! exports provided: TeamStat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamStat", function() { return TeamStat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TeamStat {
}


/***/ }),

/***/ "./src/app/Services/player/player.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/player/player.service.ts ***!
  \***************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/appsettings.json */ "./src/assets/appsettings.json");
var _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/appsettings.json */ "./src/assets/appsettings.json", 1);




let PlayerService = class PlayerService {
    constructor(http) {
        this.http = http;
        this.baseApiUrl = _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_3__.apiBaseUrl;
        this.apiVersion = _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_3__.apiVersion;
    }
    getRosters(teamIds) {
        var requestUrl = this.baseApiUrl + this.apiVersion + "teams/?teamId=" + teamIds.join(",") + "&expand=team.roster";
        var result = this.http.get(requestUrl);
        return result;
    }
    getPlayerSeasonStats(playerId) {
        var requestUrl = this.baseApiUrl + this.apiVersion + "people/" + playerId + "/stats?stats=statsSingleSeason&season=20212022";
        var result = this.http.get(requestUrl);
        return result;
    }
    getPlayerPlayoffStats(playerId) {
        var requestUrl = this.baseApiUrl + this.apiVersion + "people/" + playerId + "/stats?stats=statsSingleSeasonPlayoffs&season=20212022";
        var result = this.http.get(requestUrl);
        return result;
    }
    getPlayerRankings(playerId) {
        var requestUrl = this.baseApiUrl + this.apiVersion + "people/" + playerId + "/stats?stats=regularSeasonStatRankings&season=20212022";
        var result = this.http.get(requestUrl);
        return result;
    }
};
PlayerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PlayerService);



/***/ }),

/***/ "./src/app/Services/team/team.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/team/team.service.ts ***!
  \***********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/appsettings.json */ "./src/assets/appsettings.json");
var _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/appsettings.json */ "./src/assets/appsettings.json", 1);





let TeamService = class TeamService {
    constructor(http) {
        this.http = http;
        this.baseApiUrl = _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_4__.apiBaseUrl;
        this.apiVersion = _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_4__.apiVersion;
    }
    playingTeams() {
        //https://statsapi.web.nhl.com/api/v1/schedule
        var todaysDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        var requestUrl = this.baseApiUrl + this.apiVersion + "schedule?startDate=" + todaysDate + "&endDate=" + todaysDate;
        var result = this.http.get(requestUrl);
        return result;
    }
    getTeamStats(teamId) {
        var requestUrl = this.baseApiUrl + this.apiVersion + "teams/" + teamId + "/stats";
        var result = this.http.get(requestUrl);
        return result;
    }
    getAllTeams() {
        "https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats";
        var requestUrl = this.baseApiUrl + this.apiVersion + "teams?expand=team.stats";
        var result = this.http.get(requestUrl);
        return result;
    }
};
TeamService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], TeamService);



/***/ }),

/***/ "./src/app/app-material/app-material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-material/app-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]]
    })
], AppMaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Components_top_scorers_top_scorers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/top-scorers/top-scorers.component */ "./src/app/Components/top-scorers/top-scorers.component.ts");




const routes = [
    {
        path: 'TopScorers',
        component: _Components_top_scorers_top_scorers_component__WEBPACK_IMPORTED_MODULE_3__["TopScorersComponent"]
    },
    { path: '**',
        redirectTo: 'TopScorers'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                // onSameUrlNavigation: 'ignore',
                onSameUrlNavigation: 'reload'
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'hockey-stats';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_top_scorers_top_scorers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/top-scorers/top-scorers.component */ "./src/app/Components/top-scorers/top-scorers.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _Components_top_scorers_top_scorers_component__WEBPACK_IMPORTED_MODULE_5__["TopScorersComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/assets/appsettings.json":
/*!*************************************!*\
  !*** ./src/assets/appsettings.json ***!
  \*************************************/
/*! exports provided: apiBaseUrl, apiVersion, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiBaseUrl\":\"https://statsapi.web.nhl.com\",\"apiVersion\":\"/api/v1/\"}");

/***/ }),

/***/ "./src/assets/weightedStats.json":
/*!***************************************!*\
  !*** ./src/assets/weightedStats.json ***!
  \***************************************/
/*! exports provided: numberOfGamesWeight, numberOfGoalsWeight, shotPercentageWeight, powerPlayGoalsWeight, goalsPerGameWeight, opposingGAAWeight, opposingPKPercWeight, opposingPKFrequencyWeight, numberOfShotsWeight, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"numberOfGamesWeight\":0.7,\"numberOfGoalsWeight\":1.5,\"shotPercentageWeight\":0.05,\"powerPlayGoalsWeight\":0.3,\"goalsPerGameWeight\":1.2,\"opposingGAAWeight\":0.2,\"opposingPKPercWeight\":0.04,\"opposingPKFrequencyWeight\":0.04,\"numberOfShotsWeight\":0.05}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robabarrota/Desktop/hockey-stats/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map