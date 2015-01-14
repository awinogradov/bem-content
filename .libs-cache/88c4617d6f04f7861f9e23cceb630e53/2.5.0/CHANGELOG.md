# Changelog

## 2.5.0

### Major changes

- bem-core in now published under the [MPL 2.0](https://www.mozilla.org/MPL/2.0/) license ([#443](https://github.com/bem/bem-core/issues/443)).
- An ability to specify error handler was added to `loader_type_js` ([#672](https://github.com/bem/bem-core/issues/672)).
- `BEMContext` class was added to `oninit` export context in `i-bem.bemtree` ([#602](https://github.com/bem/bem-core/issues/602)).
- `reapply` static method was added to BEMContext class of BEMTREE ([#706](https://github.com/bem/bem-core/pull/706)).
- bh templates for block `page` were added to touch level ([#689](https://github.com/bem/bem-core/pull/689)).
- [bem-xjst](https://github.com/bem/bem-xjst) was updated to 0.9.0 ([#709](https://github.com/bem/bem-core/pull/709)).

### Bug fixes

- An issue in `i-bem__dom` was fixed. `findBlocksInside` could return blocks which weren't inited  ([#699](https://github.com/bem/bem-core/issues/699)).
- An issue in `tick` was fixed. Timer was not removed by `Tick#stop()` ([#694](https://github.com/bem/bem-core/issues/694)).
- An issue in `i-bem.bemhtml` was fixed. `i-bem` CSS class was added to elements by mistake ([#633](https://github.com/bem/bem-core/issues/633)).
- `html-from-bemtree` tech was fixed to expose `vow`, `console`, `setTimeout` inside BEMTREE template context  ([#438ebb8](https://github.com/bem/bem-core/commit/438ebb8f828e26977592e26511e8aad15176d7a4)).

### Other changes

- English guide to BEMJSON was added.
- Russian documentation for `querystring` module was added.
- Russian documentation for `i-bem.js` was fixed to satisfy current API.
- Documentation for BEMHML/BEMTREE for both languages was updated.

## 2.4.0

### Major changes

- [bem-xjst](https://github.com/bem/bem-xjst) was updated to 0.8.0; [bemhtml-compat](https://github.com/bem/bemhtml-compat) was updated to 0.0.11.

### Bug fixes

- An issue in `jquery__event_type_pointerpressrelease` was fixed. `pointerpress`/`pointerrelease` events fired for any press/release
  of mouse button ([#607](https://github.com/bem/bem-core/issues/607)).
- An issue in `i-bem__dom.js` was fixed. Base `live` method was not properly called in some edge cases ([#608](https://github.com/bem/bem-core/issues/608)).

### Other changes

- English documentation for JS-syntax of BEMHTML was added.

## 2.3.0

### Major changes

- New implementation of pointer events was added. Based on pointer events polyfills from [Polymer](http://www.polymer-project.org/) ([#567](https://github.com/bem/bem-core/pull/567)).
- Ability to specify additional data for event was added to `bindTo*` methods of `i-bem__dom.js` ([#568](https://github.com/bem/bem-core/issues/568)).

### Other changes

- An issue in `i-bem.bemhtml` was fixed. There was an error when mix was used as an object (not an array) in BEMJSON and BEMHTML simultaneously ([#555](https://github.com/bem/bem-core/issues/555)).
- An issue in `page` was fixed. There was no possibility to apply standard modes to `page` in BEMHTML template and touch template was broken ([516](https://github.com/bem/bem-core/issues/516)).

## 2.2.4

### Bug fixes

- An issue in `i-bem.js` was fixed. Modifier change event has been emitted even if `beforeSetMod` handler
  had prevented change ([#546](https://github.com/bem/bem-core/pull/546)).
- String decoding process of `querystring__uri` module was fixed to return original string
  if decode failed ([#554](https://github.com/bem/bem-core/pull/554)).

## 2.2.3

### Bug fixes

- Destruction process of blocks was fixed to prevent unexpected block reinitialization ([#540](https://github.com/bem/bem-core/issues/540)).
- An issue in `jquery__event_type_pointer` was fixed. Native mouse events were replaced with pointer events
  in unexpected cases ([#534](https://github.com/bem/bem-core/issues/534)).
- `unbindFrom*` methods of `i-bem__dom` now support multiple events to be passed in arguments ([#533](https://github.com/bem/bem-core/issues/533)).
- Lost `functions` dependency in `events` module was restored ([#532](https://github.com/bem/bem-core/issues/532)).

## 2.2.2

### Bug fixes

- An issue with block reinitialization on the DOM node, that has been processed with destructor, was fixed
  in `i-bem__dom` ([#518](https://github.com/bem/bem-core/issues/518)).
- An issue in mod events subscription was fixed in `i-bem`. `false` could be used as `modVal` ([#529](https://github.com/bem/bem-core/issues/529)).
- `jquery` was updated to the latest minor releases 2.1.1 and 1.11.1 ([#515](https://github.com/bem/bem-core/issues/515)).

## 2.2.1

- An issue in `jquery__event_type_pointerpressrelease` was fixed. `pointerpress` event has been triggered twice on each mousedown
  in IE10 ([#505](https://github.com/bem/bem-core/issues/505)).

## 2.2.0

### Major changes

- New `keyboard__codes` module has been added ([#431](https://github.com/bem/bem-core/issues/431)).
- `BEMContext` class was added to oninit's export context in `i-bem.bemhtml` ([#485](https://github.com/bem/bem-core/pull/485)).
- Ability to declare elements with block class has been added ([#481](https://github.com/bem/bem-core/issues/481)).
- Behaviour of `isSimple` method of `BEMContext` was fixed in `i-bem.bemhtml` ([#432](https://github.com/bem/bem-core/pull/432)).
- An issue with `liveUnbindFrom` method of `BEMDOM` was fixed in `i-bem__dom` ([#476](https://github.com/bem/bem-core/pull/476)).
- An issue with `isFocusable` method of `dom` module was fixed for cases where `domElem` is a link with `tabindex` attribute,
  but without `href` ([#501](https://github.com/bem/bem-core/issues/501)).
- Short way of module declaration was fixed for `i-bem__dom_elem-instances` ([#479](https://github.com/bem/bem-core/issues/479)).
- A workaround for rendering performance of blocks initialisation in Chrome-based browsers was added
  to `i-bem__dom_init_auto` ([#486](https://github.com/bem/bem-core/issues/486)).
- `vow.js` module has been moved to `vow.vanilla.js` ([#412](https://github.com/bem/bem-core/issues/412)).

### Other changes

- `vow` module has been updated to 0.4.3 ([#504](https://github.com/bem/bem-core/pull/504)).
- Russian documentation about BEMTREE technology was added ([#500](https://github.com/bem/bem-core/pull/500)).
- Russian documentation for JS-syntax of BEMHTML was updated ([#471](https://github.com/bem/bem-core/pull/471)).
- API references for JS-modules has been added as a separate branch `v2-jsdoc` ([#478](https://github.com/bem/bem-core/pull/478)).

## 2.1.0

### Major changes

- An issue in `i-bem.js` when modifiers change event had been emitted before `onSetMod` handlers have been called was fixed ([#454](https://github.com/bem/bem-core/issues/454)).
- An issue in `i-bem.bemhtml` was fixed. Since now `this.mods` and `this.ctx.mods` use the same object ([#441](https://github.com/bem/bem-core/issues/441)).
- Error in modular declaration of element's modifiers was fixed in `i-bem__dom_elem-instances` ([#447](https://github.com/bem/bem-core/issues/447)).
- [inherit](https://github.com/dfilatov/inherit) module was updated to 2.2.1 ([#466](https://github.com/bem/bem-core/issues/466)).
- An order of tags in `head` section of `page.bemhtml` was fixed ([#465](https://github.com/bem/bem-core/pull/465)).

### Other changes

- `baseMix` field description of `i-bem.js` was added to russian docs ([#461](https://github.com/bem/bem-core/pull/461)).
- CDN host was changed to `yastatic.net` ([#444](https://github.com/bem/bem-core/issues/444)).
  Previous CDN host `yandex.st` is still accessible. Physically they both are the same web servers. DNS records is the only difference.
- BEMHTML template for `bem create` command was added ([#277](https://github.com/bem/bem-core/issues/277)).
- We do not support autobuilding of our tests with Node.js 0.8 in [Travis CI](http://travis-ci.com) any longer ([#455](https://github.com/bem/bem-core/issues/455)).
- Travis's build status badge [was changed to SVG version](http://blog.travis-ci.com/2014-03-20-build-status-badges-support-svg/) :)

## 2.0.0

### Breaking changes

- All deprecated methods have been removed from `i-bem.js` and `i-bem__dom.js` ([#318](https://github.com/bem/bem-core/issues/318)).
  The following methods were removed:

  * `destruct`, use `onSetMod js ''`;
  * `extractParams`, use `elemParams`;
  * `trigger`, use `emit`;
  * `afterCurrentEvent`, use `next-tick` module;
  * `channel`, use `events__channels` module;
  * `changeThis`, use native `Function.prototype.bind`.

- `init` and `destruct` events have been removed from `i-bem.js` in favor of modifiers changes events (see "Major changes" section below).
- `ecma` was moved to [separate repo](http://github.com/bem/es5-shims); ES5-shims should be used
  for IE < 9 ([#230](https://github.com/bem/bem-core/issues/230)).
- `vow` module has been updated to 0.4.1 ([#350](https://github.com/bem/bem-core/issues/350)).
  See [Vow's changelog](https://github.com/dfilatov/vow/blob/0.4.1/CHANGELOG.md) for changes.
- Support for vow@0.4 has been added to `i-bem.bemhtml` ([#385](https://github.com/bem/bem-core/issues/385)).

### Major changes

- Support for defining BEMDOM-blocks as [ym](https://github.com/ymaps/modules) modules has been added ([#382](https://github.com/bem/bem-core/issues/382)).
- Events for modifiers changes have been added to `i-bem.js` ([#357](https://github.com/bem/bem-core/issues/357)).
- Support for passing string values has been added to `BEMDOM.init`
  ([#419](https://github.com/bem/bem-core/issues/419)).
  and `BEMDOM.update` methods ([#420](https://github.com/bem/bem-core/issues/420)).
- DOM helpers from `i-bem__dom.js` `replace`, `append`, `prepend`, `before`, `after` now return new context and `update` returns
  updated context as a jQuery object ([#410](https://github.com/bem/bem-core/issues/410)).
- New `loader_type_bundle` has been added ([#358](https://github.com/bem/bem-core/issues/358)).
- Default jQuery versions were updated to 2.1.0 and to 1.11.0, for IE < 9 ([#356](https://github.com/bem/bem-core/issues/356)).

### Other changes

- `i-bem.bemhtml` now uses strings concatination instead of pushing to buffer in it's internals ([#401](https://github.com/bem/bem-core/issues/401)).
- jQuery no longer removes itself from global scope if it exists ([#349](https://github.com/bem/bem-core/issues/349)).
- `jquery__event_type_pointerclick.js` has been moved from touch level to common ([#393](https://github.com/bem/bem-core/issues/393)).
- Modifiers `i-bem_elem-instances_yes` and `i-bem__dom_elem-instances_yes` were renamed to boolean style ([#352](https://github.com/bem/bem-core/issues/352)).
- Runtime error in `page` template in development mode has been fixed ([#417](https://github.com/bem/bem-core/issues/417)).
- Usage of `Function.prototype.bind` has been droped from `i-bem.js` internals in favor of support
  for Android 2.3 ([#404](https://github.com/bem/bem-core/issues/404)).
- Some bugs in `browser-js+bemhtml` tech have been fixed ([#392](https://github.com/bem/bem-core/issues/392)).
- Up to [ym@0.0.15](https://github.com/ymaps/modules/releases) ([#414](https://github.com/bem/bem-core/issues/414)).

## 1.2.0

### Major changes

- BEM-blocks are emit `destruct` event on destructing ([#370](https://github.com/bem/bem-core/issues/370)).
- Improvements of `pointerevents` polyfills ([#354](https://github.com/bem/bem-core/pull/354)).

### Other changes

- All JSDocs were fixed so [bem-jsd](github.com/bem/bem-jsd) could parse them ([#335](https://github.com/bem/bem-core/issues/335)).
- Russian version of BEMHTML reference was actualized to JavaScript syntax ([#355](https://github.com/bem/bem-core/pull/355)).
- Use [bower](http://bower.io) for dependency management ([#367](https://github.com/bem/bem-core/issues/367)).

## 1.1.0

### Major changes

- `jquery__config` uses jQuery 2.x by default for modern browsers ([#319](https://github.com/bem/bem-core/issues/319)).
- Add ability to use any BEMJSON as value of attributes in BEMHTML templates ([#290](https://github.com/bem/bem-core/issues/290)).
- Fix dependencies in `i-bem__collection` ([#292](https://github.com/bem/bem-core/issues/292)).
- Remove `page` block's touch styles ([#306](https://github.com/bem/bem-core/issues/306)).
- Fix `page` BEMHTML wrapping in production mode ([#309](https://github.com/bem/bem-core/issues/309)).
- Fix possible JavaScript error in script injection in IE<9 in `next-tick` ([#324](https://github.com/bem/bem-core/issues/324)).
- Fix `FastClick` initialisation in `jquery__event_type_pointerclick` of `touch.blocks` ([#332](https://github.com/bem/bem-core/issues/332)).
- Fix `node.js` tech bug on Windows systems ([#274](https://github.com/bem/bem-core/issues/274)).
- Fix `i-bem__dom_elem-instances` bug with `onElemSetMod` ([#340](https://github.com/bem/bem-core/issues/340)).
- Use bemhtml from [bem-xjst](https://github.com/bem/bem-xjst) ([#329](https://github.com/bem/bem-core/issues/329)).

### Other changes

- [ym](https://github.com/ymaps/modules) was updated to 0.0.12 ([#326](https://github.com/bem/bem-core/issues/326)).
- Do not flood `console` with messages if `i-bem__i18n` is not in debug mode ([#285](https://github.com/bem/bem-core/issues/285)).
- Fix jsdoc for `dropElemCache()` method of `i-bem__dom` module ([#296](https://github.com/bem/bem-core/issues/296)).
- Development infrastructure was updated to
  [bem-pr@v0.5.x](https://github.com/narqo/bem-pr/blob/0.5.3/HISTORY.md) ([#323](https://github.com/bem/bem-core/issues/323)).
- Russian documentation for `i-bem.js` was updated.
- [List of supported browsers](https://github.com/bem/bem-core/blob/v1/README.md#supported-browsers)
  was specified in project's README.

## 1.0.0

### Major changes

- Starts using modular system [ym](https://github.com/ymaps/modules).
- Removes all deprecated methods from `i-bem` and `i-bem__dom`.
- `i-bem` now has no dependency on jQuery. `i-bem__dom` still depends on jQuery.
- BEMHTML-template can be written with [JS-syntax](https://gist.github.com/veged/6150760).
- Introduces new tech `bemtree` (based on [bem-xjst](https://github.com/bem/bem-xjst))
  for describing dynamic generation of BEM-tree.
- Introduces new tech `vanilla.js` for JS-implementations that does not depend on particular JS-engine.
- Introduces new techs `browser.js` and `node.js` for JS-implementations targeted corresponding engines.
  For backward compatibility we assume that `.js`-files contains `browser.js` implementation.
- Introduces polyfill (`jquery__event_type_pointer` and `jquery__event_type_pointerclick` as a jQuery-plugins)
  for universalize desktop and touch pointer events.
- Introduces system for unit testing and blocks examples generation.
- Introduces "simple" modifiers (modifiers without value) support in `i-bem` and BEMHTML.

### Other changes

- Gets rid of prefixes in all block names (except `i-bem`).
- Block `i-bem__dom` becomes a module (in terms of [ym](https://github.com/ymaps/modules))
  and all `BEM.DOM`-block must define additions to `i-bem__dom` ([example](https://github.com/bem/bem-core/blob/v1/common.bundles/index/blocks/b-square/b-square.js)).
- Method for blocks declaration (`.decl()`) does not accept object with `name` field as first parameter.
  Required form with `block` field: `BEM.decl({ block: 'b1', modName: 'm', modVal: 'v' }, ...)`.
- Introduces `nextTick` method as replacement for `afterCurrentEvent` method
  for ensure of block existence in callback invocation time.
  `BEM.afterCurrentEvent` is **deprecated**.
- Introduces new `channels` module instead of `BEM.channel`. `BEM.channel` is **deprecated**.
- `changeThis` is **deprecated**. Use native `bind` instead.
- Removes `del` method from `i-bem` block.
- Removes `getWindowSize` method from `i-bem__dom` block. Use `BEMDOM.win.width()` and `BEMDOM.win.height()`.
- Introduces `jquery` module-wrapper for providing jQuery.
  If jQuery already included into the page module-wrapper provides it. Otherwise it loads jQuery (version 1.10.1) on its own.
- `$.observable` becomes `events` module and not longer depends on jQuery.
- `$.inherit` becomes `inherit` module and not longer depends on jQuery.
- `$.identify` becomes `identify` module and not longer depends on jQuery.
- `$.throttle` splits into two modules: `functions__throttle` and `functions__debounce`, they both not longer depend on jQuery.
- `$.decodeURI`, `$.decodeURIComponent` moves to `querystring__uri` module and not longer depends on jQuery.
- `$.cookie` becomes `cookie` module and not longer depends on jQuery.
- Introduces `ua` module instead of `$.browser` (with same interface).
- Use `pointerclick` instead of `leftclick`. It provides by `jquery__event_type_pointerclick` polyfill.
- `i-system` block splits into two modules: `idle` and `tick`.
- Triggers for modifiers changes now splitted into two groups:
  before setting new value (`beforeSetMod` and `beforeElemSetMod`)
  and after the value has been set (`onSetMod` and `onElemSetMod`).
  Cancellation of modifiers change is possible only from `before*`-triggers.
- Using of `{ onSetMod : { js : function() { ... } } }` is **deprecated**, use `onSetMod: { js : { inited : ... } } }`.
- `destruct` method from `i-bem` block is **deprecated**.
  Use supplementary trigger for `_js` modifiers:
  `onSetMod: { js : { inited : ... } } }` — `{ onSetMod : { js : { '' : ... } } }`.
- `exractParams` method from `i-bem__dom` block is **deprecated**.
  Use `elemParams` method for access to elements params.
- `trigger` method from `i-bem` block is **deprecated** in flavor of `emit` method.
- `onFirst` method from `i-bem` block is **deprecated** in flavor of `once` method.
- **Deprecated** field `e.block` that provided block-target of BEM-events was removed. Use `e.target` field instead.
- Field `e.data.domElem` that provided DOM-element of block in DOM-events was removed. Use `$(e.currentTarget)` (provided by jQuery).
- Introduces parameter for `findElem` method that allows to search elements
  of particular block instance (in case of nested blocks with same name).
- Introduces possibility to point particular function in `unbindFrom*` methods.
- Introduces `objects` module for work with JS-objects. It contains methods: `extend`, `isEmpty`, `each`.
- Introduces `functions` module for work with JS-functions. It contains methods: `isFunction`, `noop`.
- Introduces `dom` module for work with DOM-tree.
- Introduces `querystring` module for work with URL-based strings.
- Introduces `loader_type_js` module for JS loading.
- Introduces `vow` module for Promises/A+.
- Introduces `next-tick` module as polyfill for `nextTick`, `setImmediate`, `setTimeout(0, ...` and etc.
- Introduces `strings__escape` module for XML, HTML and attributes escaping.
- `inherit` module now supports mixins.
- Introduces `invokeAsap` parameter for `functions__throttle` module that allows to delay first invocation.
