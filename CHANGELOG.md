# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.0.3](https://github.com/Neunerlei/sassy/compare/v3.0.2...v3.0.3) (2021-08-20)


### Bug Fixes

* **CssReset:** add address style reset ([b110d8f](https://github.com/Neunerlei/sassy/commit/b110d8f0e312ac208063c2aa0e819d0f049a7ef3))

### [3.0.2](https://github.com/Neunerlei/sassy/compare/v3.0.1...v3.0.2) (2021-05-28)

### [3.0.1](https://github.com/Neunerlei/sassy/compare/v3.0.0...v3.0.1) (2020-08-09)

## [3.0.0](https://github.com/Neunerlei/sassy/compare/v2.0.7...v3.0.0) (2020-07-27)


### ⚠ BREAKING CHANGES

* The fix of the $sassyPadding bug could break existing
projects

* Padding vars not used and cannot be overwritten -> Intended? (#4) ([85c4a1e](https://github.com/Neunerlei/sassy/commit/85c4a1ef12364e663c6c31e5ea5118b4e19e60d1)), closes [#4](https://github.com/Neunerlei/sassy/issues/4)

### [2.0.7](https://github.com/Neunerlei/sassy/compare/v2.0.6...v2.0.7) (2020-07-20)


### Bug Fixes

* update doc dependencies ([bae4b60](https://github.com/Neunerlei/sassy/commit/bae4b608d6cb403de06dc6a80ba00e752550a085))

### [2.0.6](https://github.com/Neunerlei/sassy/compare/v2.0.5...v2.0.6) (2020-06-18)


### Bug Fixes

* update doc dependencies ([5a43c77](https://github.com/Neunerlei/sassy/commit/5a43c7735b1e7008641defa53b5ea3c62132e66b))

### [2.0.5](https://github.com/Neunerlei/sassy/compare/v2.0.4...v2.0.5) (2020-06-18)


### Bug Fixes

* **Grid:** correct flex-basis calculation when using padding ([#2](https://github.com/Neunerlei/sassy/issues/2)) ([fbe2a5c](https://github.com/Neunerlei/sassy/commit/fbe2a5c9791d2f0abdd21a4c17d5d5e2d2a573b4))

### [2.0.4](https://github.com/Neunerlei/sassy/compare/v2.0.3...v2.0.4) (2020-03-16)

### [2.0.3](https://github.com/Neunerlei/sassy/compare/v2.0.2...v2.0.3) (2020-03-16)


### Bug Fixes

* add readme and remove deprecated demo directory ([f705c90](https://github.com/Neunerlei/sassy/commit/f705c9072858c9345358cc64bf72b59db0e0038b))

### [2.0.2](https://github.com/Neunerlei/sassy/compare/v2.0.1...v2.0.2) (2020-03-16)

### [2.0.1](https://github.com/Neunerlei/sassy/compare/v2.0.0...v2.0.1) (2020-03-16)

## [2.0.0](https://github.com/Neunerlei/sassy/compare/v1.1.0...v2.0.0) (2020-03-16)


### ⚠ BREAKING CHANGES

* the grid syntax was changed in comparison with earlier
versions. Therefore this version will break existing projects that use
the grid mixins

### Features

* add some minor new features + fix issue with gird item ordering ([e364cb1](https://github.com/Neunerlei/sassy/commit/e364cb15c4f9411e4dcfe9adbf084dcd4036fc8f))
* consolidation + documentation before publishing the package ([3431eff](https://github.com/Neunerlei/sassy/commit/3431eff5ce41300a3bd3d344ea39f7731db1034f))

# [1.1.0](https://bitbucket.org/labor-digital/labor-sass-sassy/branches/compare/v1.1.0%0Dv1.0.2#diff) (2019-03-27)


### Bug Fixes

* fix proportionalContainer padding-top miscalculation ([9ae88de](https://bitbucket.org/labor-digital/labor-sass-sassy/commits/9ae88de))
* fix that $margin is no longer the half of $sassyMargin ([d25b554](https://bitbucket.org/labor-digital/labor-sass-sassy/commits/d25b554))


### Features

* a, button, input[type=submit] are now inline elements by default ([de3428a](https://bitbucket.org/labor-digital/labor-sass-sassy/commits/de3428a))



## [1.0.2] - 2019-01-11
### Added
- Added fallback when spacers are used out of their configured multiplier bounds
- Added "auto" value for grid gutter definitions
- Added "offset" option to gridItem()

### Changed
- Makes headline elements "display: block" again in the cssReset
- Added p tags to the list of "display: inline-block" elements in the cssReset
- Changed grid container to render a gutter left and right if the width is 100%
- Grid items can now be set to "off" to disable the handling as flex element

### Fixed
- Fixed an issue with the grid item order 
- Makes sure that all grid values will be calculated as pixels to prevent errors

## [1.0.1] - 2019-01-10
### Added
- Added mixins for padding and margin
- Added some misc helpers from bootstrap-addons
- Added flex mixins
- Added spacer mixins

### Changed
- Makes css class for the breakpoint bridge configurable
- Renamed breakpointBridge to BreakpointService

## [1.0.0] - 2018-12-20
Initial commit


The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).
